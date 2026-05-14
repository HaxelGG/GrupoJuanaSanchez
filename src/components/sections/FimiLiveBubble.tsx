"use client";

// Burbuja flotante FIMI — addendum v2 §3.2.
// Aparece solo cuando FIMI está EN VIVO, 4s tras la carga. Cerrable con X
// o Escape; el descarte persiste 24h en localStorage. Click en el cuerpo
// → abre el mapa. El status se calcula en cliente (la página es estática).
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin } from "lucide-react";
import { EVENTS, getEventStatus, type EventStatus } from "@/lib/events";

const DISMISS_KEY = "js-bubble-fimi-dismissed";
const DISMISS_HOURS = 24;
const SHOW_DELAY_MS = 4000;

export function FimiLiveBubble() {
  const ev = EVENTS.fimi;
  const [status, setStatus] = useState<EventStatus | null>(null);
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setVisible(false);
  }, []);

  useEffect(() => {
    const s = getEventStatus(ev);
    setStatus(s);
    if (s !== "live") return;

    const raw = localStorage.getItem(DISMISS_KEY);
    if (raw) {
      const dismissedAt = parseInt(raw, 10);
      if (Date.now() - dismissedAt < DISMISS_HOURS * 3600 * 1000) return;
    }
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, [ev]);

  // Accesibilidad §8.2 — Escape cierra la burbuja.
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  if (status !== "live") return null;

  const onClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dismiss();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={ev.mapUrl}
          target="_blank"
          rel="noopener"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          data-magnetic
          className="
            group fixed z-[80] cursor-pointer
            bottom-4 left-4 right-4
            md:bottom-6 md:right-6 md:left-auto md:w-[360px]
            border border-gold/30 bg-black/92 backdrop-blur-xl
            p-5 pr-12 text-cream
            shadow-2xl shadow-black/40
          "
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
              En vivo
            </span>
          </div>

          <div className="font-display mb-1 text-2xl leading-tight">
            {ev.shortLabel}
          </div>
          <div className="font-mono mb-4 text-[11px] tracking-[0.15em] text-cream/70 uppercase">
            {ev.whereShort}
          </div>

          <div className="font-mono flex items-center gap-2 text-[10px] tracking-[0.25em] text-gold-soft uppercase transition-transform group-hover:translate-x-1">
            <MapPin className="h-3.5 w-3.5" />
            Cómo llegar →
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 p-2 text-cream/50 transition-colors hover:text-cream"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
