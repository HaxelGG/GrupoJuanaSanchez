"use client";

// Contador animado de stats — brief v1 §7.10.
// SSR renderiza el valor final (degrada bien sin JS); al entrar al viewport
// cuenta desde 0 (o año-30 para fechas) hasta el target con easing cubic-out.
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

type StatNumberProps = {
  value: number;
  suffix?: React.ReactNode;
};

export function StatNumber({ value, suffix }: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const from = value >= 1000 ? value - 30 : 0;
    setDisplay(from);
    const controls = animate(from, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="stat-num">
      {display}
      {suffix}
    </span>
  );
}
