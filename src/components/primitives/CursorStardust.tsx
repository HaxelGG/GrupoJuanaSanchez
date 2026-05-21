"use client";

// Rastro de "polvo de estrellas" que sigue al cursor.
// Diseñado para coste mínimo:
//  · Canvas 2D único, pointer-events:none, por debajo del cursor follower.
//  · Sprites pre-renderizados (punto suave + estrella de 4 puntas) → se dibujan
//    con drawImage + globalAlpha. Nada de shadowBlur ni gradientes por frame.
//  · Partículas limitadas (MAX) y spawn regulado por distancia.
//  · El rAF se DETIENE cuando no quedan partículas y se reanuda al mover el
//    ratón → 0 trabajo en reposo.
//  · Desactivado en táctil (hover:none) y prefers-reduced-motion.
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // ms restantes
  max: number; // vida total
  size: number;
  sprite: HTMLCanvasElement;
};

const MAX = 70; // techo de partículas vivas
const SPAWN_DIST = 5; // px mínimos de movimiento entre spawns

// Paleta cálida (dorados + crema) — visible sobre crema y sobre el oscuro de Printellar.
const COLORS = [
  [201, 163, 90], // gold
  [216, 187, 138], // gold-soft
  [244, 239, 230], // cream
];

/** Sprite radial suave (punto de polvo) en un canvas reutilizable. */
function makeDot(rgb: number[]): HTMLCanvasElement {
  const s = 32;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  const [r, gr, b] = rgb;
  grad.addColorStop(0, `rgba(${r},${gr},${b},0.95)`);
  grad.addColorStop(0.4, `rgba(${r},${gr},${b},0.5)`);
  grad.addColorStop(1, `rgba(${r},${gr},${b},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  return c;
}

/** Sprite de estrella de 4 puntas con glow. */
function makeStar(rgb: number[]): HTMLCanvasElement {
  const s = 40;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const [r, gr, b] = rgb;
  // glow
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, `rgba(${r},${gr},${b},0.6)`);
  grad.addColorStop(1, `rgba(${r},${gr},${b},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  // destello de 4 puntas
  g.translate(s / 2, s / 2);
  g.fillStyle = `rgba(${r},${gr},${b},0.95)`;
  g.beginPath();
  const arm = s / 2;
  const w = 1.6;
  for (let i = 0; i < 4; i++) {
    g.rotate(Math.PI / 2);
    g.moveTo(0, 0);
    g.lineTo(w, w);
    g.lineTo(0, arm);
    g.lineTo(-w, w);
    g.closePath();
  }
  g.fill();
  return c;
}

export function CursorStardust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const dots = COLORS.map(makeDot);
    const stars = COLORS.map(makeStar);

    const particles: Particle[] = [];
    let lastX = -999;
    let lastY = -999;
    let last = performance.now();
    let running = false;

    const spawn = (x: number, y: number, speed: number) => {
      const isStar = Math.random() < 0.14;
      const ci = (Math.random() * COLORS.length) | 0;
      const max = 600 + Math.random() * 500;
      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.4 + (Math.random() - 0.5) * speed * 0.06,
        vy: -0.15 - Math.random() * 0.35, // leve flotación hacia arriba
        life: max,
        max,
        size: isStar ? 7 + Math.random() * 5 : 2 + Math.random() * 3,
        sprite: (isStar ? stars : dots)[ci],
      });
      if (particles.length > MAX) particles.shift();
    };

    const loop = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.vx *= 0.96; // fricción
        const t = p.life / p.max; // 1 → 0
        const alpha = t * t; // se apaga suave
        const r = p.size * (0.5 + t * 0.5);
        ctx.globalAlpha = alpha;
        ctx.drawImage(p.sprite, p.x - r, p.y - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;

      if (particles.length > 0) {
        requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist < SPAWN_DIST) return;
      lastX = e.clientX;
      lastY = e.clientY;
      spawn(e.clientX, e.clientY, dist);
      if (dist > 28) spawn(e.clientX, e.clientY, dist); // 2.ª en movimientos rápidos
      if (!running) {
        running = true;
        last = performance.now();
        requestAnimationFrame(loop);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}
