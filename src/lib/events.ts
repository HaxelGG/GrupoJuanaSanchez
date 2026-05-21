// Event Config Pattern — addendum v2 §2. Fuente única de fechas de eventos.
// Cualquier sección dependiente de un evento (FimiEvent, FimiLiveBubble,
// EventStrip) lee de aquí.

export type EventConfig = {
  id: string;
  label: string;
  shortLabel: string;
  where: string;
  whereShort: string;
  start: Date;
  end: Date;
  mapUrl?: string;
  ctaUrl?: string;
};

export const EVENTS: Record<string, EventConfig> = {
  fimi: {
    id: "fimi",
    label: "FIMI Valencia 2026 — Edición 40",
    shortLabel: "FIMI Valencia 2026",
    where: "Feria Valencia · Pabellón 8 · Stand C35",
    whereShort: "Pab. 8 · Stand C35",
    // Confirmado con el cliente: solo 15-16 mayo (no el 14).
    // Hora de Madrid (CEST = UTC+2 en mayo).
    // 15 mayo 00:00 CEST → 14 mayo 22:00 UTC
    start: new Date(Date.UTC(2026, 4, 14, 22, 0, 0)),
    // 16 mayo 23:59 CEST → 16 mayo 21:59 UTC
    end: new Date(Date.UTC(2026, 4, 16, 21, 59, 0)),
    mapUrl: "https://maps.google.com/?q=Feria+Valencia+Pabellón+8",
    ctaUrl: "https://maps.google.com/?q=Feria+Valencia+Pabellón+8",
  },
  launch: {
    id: "launch",
    label: "Lanzamiento nueva colección Juana Sánchez",
    shortLabel: "Nueva colección",
    where: "juanasanchez.es",
    whereShort: "Tienda online",
    // Aplazado del 17 may al 3 jun. 18:00 CEST → 16:00 UTC.
    start: new Date(Date.UTC(2026, 5, 3, 16, 0, 0)),
    end: new Date(Date.UTC(2026, 5, 10, 16, 0, 0)), // 7 días post-launch
    ctaUrl: "https://www.juanasanchez.es",
  },
};

export type EventStatus = "upcoming" | "live" | "ended";

export function getEventStatus(
  ev: EventConfig,
  now: Date = new Date(),
): EventStatus {
  if (now < ev.start) return "upcoming";
  if (now > ev.end) return "ended";
  return "live";
}

export function msUntil(date: Date, now: Date = new Date()): number {
  return date.getTime() - now.getTime();
}

/** Días enteros que faltan para `date` (mínimo 0). */
export function daysUntil(date: Date, now: Date = new Date()): number {
  return Math.max(0, Math.ceil(msUntil(date, now) / 86_400_000));
}
