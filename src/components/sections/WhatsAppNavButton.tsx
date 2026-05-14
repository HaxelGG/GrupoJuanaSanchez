"use client";

// Botón WhatsApp del Nav — addendum v2 §4.
// NO usa el verde clásico de WhatsApp: icono outline minimalista, crema/malva
// sobre claro, dorado sobre secciones oscuras. Mensaje preformateado.
// Magnetic pull vía useMagnetic (§5.4).
import { motion } from "motion/react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

const WA_URL =
  "https://wa.me/34613775981?text=" +
  encodeURIComponent("Hola, vengo de la landing page Grupo Juana Sánchez");

export function WhatsAppNavButton() {
  const { ref, x, y } = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <motion.a
      ref={ref}
      href={WA_URL}
      target="_blank"
      rel="noopener"
      style={{ x, y }}
      data-magnetic
      aria-label="Contactar por WhatsApp"
      className="
        group inline-flex items-center gap-2 rounded-full
        border border-ink/15 px-3 py-2 md:px-4
        font-mono text-[10px] tracking-[0.25em] uppercase
        text-ink/70 transition-colors duration-300
        hover:border-mauve/40 hover:bg-mauve/5 hover:text-mauve-deep
        [.on-dark_&]:border-gold/30 [.on-dark_&]:text-cream/70
        [.on-dark_&]:hover:border-gold/60 [.on-dark_&]:hover:text-gold-soft
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-3.5 w-3.5"
        aria-hidden
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path
          d="M9 10a.5 .5 0 0 0 1 0V9a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
          strokeLinecap="round"
        />
      </svg>
      <span className="hidden md:inline">Hablar con la casa</span>
    </motion.a>
  );
}
