"use client";

// Efectos de scroll globales — brief v1 §7.
// · Reveal on scroll: IntersectionObserver añade .in a los .reveal (reactiva
//   las clases que se neutralizaron en Fase 1).
// · Scroll progress: barra superior que se llena con malva al scrollear (§7.9).
// · Body bg: transición crema → negro cuando Printellar domina el viewport (§7.5).
import { useEffect, useRef } from "react";

export function SiteEffects() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // ── Reveal on scroll ──────────────────────────────────────────────
    const revealEls = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-mask",
    );
    if (reduced) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          }
        },
        // threshold bajo + rootMargin inferior positivo → revela un poco antes
        // de que el elemento entre del todo (las imágenes aparecen más rápido).
        { threshold: 0.05, rootMargin: "0px 0px 140px 0px" },
      );
      revealEls.forEach((el) => io.observe(el));
    }

    // ── Scroll progress + body bg ─────────────────────────────────────
    const printellar = document.querySelector<HTMLElement>(".ch-printellar");
    let rafQueued = false;

    const onScroll = () => {
      if (rafQueued) return;
      rafQueued = true;
      requestAnimationFrame(() => {
        rafQueued = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
        if (printellar) {
          const r = printellar.getBoundingClientRect();
          const vh = window.innerHeight;
          const dark = r.top < vh * 0.5 && r.bottom > vh * 0.5;
          document.body.classList.toggle("is-dark-section", dark);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.body.classList.remove("is-dark-section");
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden />;
}
