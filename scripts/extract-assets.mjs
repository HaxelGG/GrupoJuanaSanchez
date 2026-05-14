// Extrae los assets embebidos en base64 del HTML spec a public/assets/.
// Uso: node scripts/extract-assets.mjs [--write]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML = resolve(__dirname, "../docs/spec-landing.html");
const OUT = resolve(__dirname, "../public/assets");
const WRITE = process.argv.includes("--write");

const html = readFileSync(HTML, "utf8");

// 1) data: URIs en atributos src
const dataUriRe = /data:(image|video)\/([a-z0-9.+-]+);base64,([A-Za-z0-9+/=]+)/gi;
const found = [];
let m;
while ((m = dataUriRe.exec(html)) !== null) {
  const [, kind, subtype, b64] = m;
  // contexto: ~140 chars antes del match para identificar la sección
  const ctx = html.slice(Math.max(0, m.index - 160), m.index).replace(/\s+/g, " ").trim();
  found.push({ kind, subtype, b64, ctx });
}

// 2) <script id="vidB64"> ... </script>  (video compartido)
const vidScriptRe = /<script[^>]*id=["']vidB64["'][^>]*>([\s\S]*?)<\/script>/i;
const vs = html.match(vidScriptRe);
if (vs) {
  found.push({ kind: "video", subtype: "mp4", b64: vs[1].trim(), ctx: "<script id=vidB64> (video compartido embebido)" });
}

const ext = { jpeg: "jpg", jpg: "jpg", png: "png", webp: "webp", gif: "gif", "svg+xml": "svg", mp4: "mp4", webm: "webm" };

console.log(`\n${found.length} assets embebidos encontrados en index.html:\n`);
found.forEach((f, i) => {
  const bytes = Buffer.from(f.b64, "base64").length;
  const kb = (bytes / 1024).toFixed(1);
  console.log(`  [${i}] ${f.kind}/${f.subtype}  ${kb} KB`);
  console.log(`      contexto: …${f.ctx.slice(-130)}`);
});

// Mapa índice → ruta destino (derivado del contexto de cada asset).
const NAME_MAP = {
  0: "images/girl-hero.jpg",          // hero-bg · niña con corona
  1: "images/girl-juana.jpg",         // ch-juana story-visual
  2: "images/detail-corona.jpg",      // Det. 01 — Corona artesanal
  3: "images/detail-encaje.jpg",      // Det. 02 — Encaje hecho a mano
  4: "images/lolikas-paleta-nude.jpg",// Det. 03 — Paleta nude
  5: "images/lolikas-pieza-unica.jpg",// Det. 04 — Pieza única
  6: "logos/monograma-js.jpg",        // footer · monograma JS dorado
  7: "video/lolikas.mp4",             // video compartido (1 MB, embebido)
};

if (WRITE) {
  mkdirSync(resolve(OUT, "images"), { recursive: true });
  mkdirSync(resolve(OUT, "video"), { recursive: true });
  mkdirSync(resolve(OUT, "logos"), { recursive: true });
  console.log("");
  found.forEach((f, i) => {
    const e = ext[f.subtype] || f.subtype;
    const rel = NAME_MAP[i] ?? `images/raw-${String(i).padStart(2, "0")}.${e}`;
    const dest = resolve(OUT, rel);
    writeFileSync(dest, Buffer.from(f.b64, "base64"));
    console.log(`  → escrito assets/${rel}`);
  });
}
