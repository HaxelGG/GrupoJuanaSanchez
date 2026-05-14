// Deploy a Vercel vía API REST (el CLI no acepta tokens vck_).
// Uso: VERCEL_TOKEN=xxx node scripts/vercel-deploy.mjs [--prod]
import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, relative, join, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TOKEN = process.env.VERCEL_TOKEN;
const PROD = process.argv.includes("--prod");
const NAME = "grupo-juana-sanchez";
const API = "https://api.vercel.com";

if (!TOKEN) {
  console.error("Falta VERCEL_TOKEN en el entorno.");
  process.exit(1);
}

const IGNORE = new Set([
  "node_modules", ".next", ".git", ".vercel", ".vercel-cfg",
  ".turbo", ".DS_Store", "docs",
]);

// 1) recolectar archivos del proyecto
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.isFile()) acc.push(full);
  }
  return acc;
}

const files = walk(ROOT).map((full) => {
  const buf = readFileSync(full);
  const sha = createHash("sha1").update(buf).digest("hex");
  const rel = relative(ROOT, full).split(sep).join("/");
  return { rel, sha, size: buf.length, buf };
});

const totalKB = (files.reduce((s, f) => s + f.size, 0) / 1024).toFixed(0);
console.log(`\n${files.length} archivos · ${totalKB} KB a subir\n`);

// 2) subir cada archivo a /v2/files (dedupe por sha)
let uploaded = 0;
for (const f of files) {
  const res = await fetch(`${API}/v2/files`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/octet-stream",
      "x-vercel-digest": f.sha,
      "Content-Length": String(f.size),
    },
    body: f.buf,
  });
  if (!res.ok && res.status !== 409) {
    const body = await res.text();
    console.error(`✗ upload ${f.rel} → HTTP ${res.status}: ${body.slice(0, 300)}`);
    process.exit(1);
  }
  uploaded++;
  if (uploaded % 10 === 0 || uploaded === files.length) {
    process.stdout.write(`\r  subidos ${uploaded}/${files.length}`);
  }
}
console.log("\n");

// 3) crear el deployment
const deployBody = {
  name: NAME,
  files: files.map((f) => ({ file: f.rel, sha: f.sha, size: f.size })),
  projectSettings: { framework: "nextjs" },
  target: PROD ? "production" : undefined,
};

const depRes = await fetch(`${API}/v13/deployments?forceNew=1&skipAutoDetectionConfirmation=1`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(deployBody),
});

const dep = await depRes.json();
if (!depRes.ok) {
  console.error(`✗ deployment → HTTP ${depRes.status}:`);
  console.error(JSON.stringify(dep, null, 2).slice(0, 1000));
  process.exit(1);
}

console.log(`Deployment creado: ${dep.id}`);
console.log(`URL: https://${dep.url}`);
console.log(`Target: ${PROD ? "production" : "preview"}\n`);

// 4) poll hasta READY / ERROR
const startedAt = Date.now();
let state = dep.readyState || dep.status;
while (!["READY", "ERROR", "CANCELED"].includes(state)) {
  await new Promise((r) => setTimeout(r, 4000));
  const r = await fetch(`${API}/v13/deployments/${dep.id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const d = await r.json();
  state = d.readyState || d.status;
  const secs = ((Date.now() - startedAt) / 1000).toFixed(0);
  process.stdout.write(`\r  estado: ${state}  (${secs}s)        `);
}
console.log("\n");

if (state === "READY") {
  console.log(`✅ DEPLOY OK → https://${dep.url}`);
  if (dep.alias && dep.alias.length) {
    dep.alias.forEach((a) => console.log(`   alias: https://${a}`));
  }
} else {
  console.error(`✗ Deployment terminó en estado ${state}. Logs de build:`);
  const ev = await fetch(`${API}/v3/deployments/${dep.id}/events?builds=1&limit=100`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const events = await ev.json();
  const lines = Array.isArray(events) ? events : events.events || [];
  for (const e of lines.slice(-40)) {
    if (e.text || (e.payload && e.payload.text)) {
      console.error("   " + (e.text || e.payload.text).trimEnd());
    }
  }
  process.exit(1);
}
