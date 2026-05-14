"use client";

// Sección 1 · Franja superior fija — addendum v2 §3.3.
// Cuando FIMI está EN VIVO, FIMI va primero; si no, el lanzamiento primero.
import { useEffect, useState } from "react";
import { EVENTS, getEventStatus } from "@/lib/events";

export function EventStrip() {
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(getEventStatus(EVENTS.fimi) === "live");
  }, []);

  return (
    <div className="event-strip">
      <span className="live-dot" />
      {live ? (
        <>
          <strong>EN VIVO · FIMI Valencia · Pab. 8 Stand C35</strong>
          <span className="sep">·</span>
          <span className="hide-mob">Nueva colección · 17 Mayo · 18:00</span>
        </>
      ) : (
        <>
          <strong>Nueva colección · 17 Mayo · 18:00</strong>
          <span className="sep">·</span>
          <span className="hide-mob">Cuenta atrás en directo</span>
          <span className="hide-mob sep">·</span>
          <span className="hide-mob">FIMI Valencia · Pab. 8 · Stand C35</span>
        </>
      )}
    </div>
  );
}
