"use client";

// Cuenta atrás en vivo al lanzamiento (brief §8 · ⚠️ crítico).
// Arranca con placeholders "--" para no romper la hidratación; el
// useEffect monta el intervalo y empieza a tickear tras el mount.
// El cambio de `key` en cada dígito reejecuta la animación CSS .tick.
// La animación premium con AnimatePresence/popLayout llega en Fase 3.
import { useEffect, useState } from "react";
import { computeCountdown, pad, type Countdown } from "@/lib/countdown";
import { LAUNCH_TARGET_UTC } from "@/lib/site";

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "mins", label: "Minutos" },
  { key: "secs", label: "Segundos" },
] as const;

export function CountdownDigits() {
  const [cd, setCd] = useState<Countdown | null>(null);

  useEffect(() => {
    const tick = () => setCd(computeCountdown(LAUNCH_TARGET_UTC));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown reveal delay-2" id="countdown">
      {UNITS.map((u) => {
        const value = cd ? pad(cd[u.key]) : "--";
        return (
          <div className="cd-unit" key={u.key}>
            <div className="cd-box">
              {/* key cambia con el valor → remonta → re-dispara .tick */}
              <span className="cd-value tick" key={`${u.key}-${value}`}>
                {value}
              </span>
            </div>
            <span className="cd-label">{u.label}</span>
          </div>
        );
      })}
    </div>
  );
}
