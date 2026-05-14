"use client";

// Cursor follower minimalista global — addendum v2 §5.2.
// Círculo de 8px que sigue al cursor con leve delay; crece a 32px (anillo)
// sobre elementos clickeables. Oculto en touch y prefers-reduced-motion.
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 24, mass: 0.4 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || reducedMotion) {
      if (ref.current) ref.current.style.display = "none";
      return;
    }

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest(
        'a, button, [data-magnetic], [role="button"], input, textarea',
      );
      ref.current?.classList.toggle("is-active", Boolean(interactive));
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x: springX, y: springY }}
      className="
        fixed top-0 left-0 z-[9999] pointer-events-none
        w-2 h-2 -ml-1 -mt-1
        rounded-full bg-ink/70
        mix-blend-difference
        transition-[width,height,margin,background,border] duration-300 ease-out
        [&.is-active]:w-8 [&.is-active]:h-8
        [&.is-active]:-ml-4 [&.is-active]:-mt-4
        [&.is-active]:bg-ink/0
        [&.is-active]:border [&.is-active]:border-ink/50
      "
    />
  );
}
