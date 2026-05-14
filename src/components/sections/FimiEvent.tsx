"use client";

// Sección · FIMI Valencia 2026 — addendum v2 §3.1.
// El status se calcula en cliente (la página es estática): live / upcoming /
// ended. Si terminó, la sección se autodestruye (return null) y el
// LaunchCountdown ocupa su lugar de forma natural.
import { useEffect, useState } from "react";
import {
  EVENTS,
  getEventStatus,
  daysUntil,
  type EventStatus,
} from "@/lib/events";

export function FimiEvent() {
  const ev = EVENTS.fimi;
  // SSR/default: "upcoming" (estado real hoy). El cliente corrige tras mount.
  const [status, setStatus] = useState<EventStatus>("upcoming");
  const [days, setDays] = useState(() => daysUntil(ev.start));

  useEffect(() => {
    setStatus(getEventStatus(ev));
    setDays(daysUntil(ev.start));
  }, [ev]);

  if (status === "ended") return null;

  const isLive = status === "live";

  return (
    <section className="event">
      <div className="event-inner">
        <div className="event-left reveal">
          {isLive ? (
            <div className="live-tag">
              <span className="live-dot" />
              En vivo · Esta semana
            </div>
          ) : (
            <div className="live-tag">
              <span className="dot" />
              Próximo · {days === 1 ? "Mañana" : `En ${days} días`}
            </div>
          )}

          <h2 className="event-title">
            {isLive ? "Estamos en" : "Nos vemos en"}
            <br />
            <em>FIMI Valencia</em>
            <br />
            2026.
          </h2>

          <p className="event-sub reveal delay-1">
            Cuarenta años después de nuestra primera presencia. Mismo oficio,
            piezas nuevas. Pasaos a ver el muestrario completo.
          </p>

          <div className="event-details">
            <div className="event-detail-row reveal delay-2">
              <span className="ed-lbl">Cuándo</span>
              <span className="ed-val">
                <span className="big">15 — 16 mayo</span>MMXXVI
              </span>
            </div>
            <div className="event-detail-row reveal delay-2">
              <span className="ed-lbl">Dónde</span>
              <span className="ed-val">
                <span className="big">Pabellón 8 · Stand C35</span>Feria Valencia
              </span>
            </div>
            <div className="event-detail-row reveal delay-3">
              <span className="ed-lbl">Edición</span>
              <span className="ed-val">
                <span className="big">FIMI 40</span>Moda infantil de autor
              </span>
            </div>
          </div>
        </div>

        <div className="event-right reveal delay-1">
          <div className="er-top">
            <span>FIMI · 2026</span>
            <span>EDICIÓN 40</span>
          </div>
          <div className="er-mid">
            <div className="label">Os esperamos</div>
            <div className="show">
              Pabellón 8
              <br />
              Stand C35
            </div>
            <div className="where">— Feria Valencia —</div>
          </div>
          <div className="er-bottom">
            <span>15 / 05</span>
            <span>16 / 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
