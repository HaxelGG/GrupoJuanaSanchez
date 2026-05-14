// Helpers de cuenta atrás — brief §4 (lib/countdown.ts).

export type Countdown = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  done: boolean;
};

/** Descompone el tiempo restante hasta `targetUtc` (epoch ms). */
export function computeCountdown(
  targetUtc: number,
  now: number = Date.now(),
): Countdown {
  const diff = targetUtc - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  }
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
    done: false,
  };
}

/** Entero a dos dígitos: 7 → "07". */
export function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, "0");
}
