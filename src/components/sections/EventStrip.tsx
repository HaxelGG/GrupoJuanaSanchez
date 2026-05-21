"use client";

// Sección 1 · Franja superior fija.
// Antes del lanzamiento: cuenta atrás al 3 de junio. Tras el lanzamiento:
// "Ya disponible" enlazando a la tienda. El estado se corrige en cliente
// (la página es estática) — por defecto muestra la cuenta atrás.
import { useEffect, useState } from "react";
import { EVENTS, getEventStatus } from "@/lib/events";
import { LAUNCH_LABEL } from "@/lib/site";

export function EventStrip() {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    setLaunched(getEventStatus(EVENTS.launch) !== "upcoming");
  }, []);

  return (
    <div className="event-strip">
      <span className="live-dot" />
      {launched ? (
        <>
          <strong>Nueva colección · Ya disponible</strong>
          <span className="sep">·</span>
          <span className="hide-mob">Tienda online Juana Sánchez</span>
        </>
      ) : (
        <>
          <strong>Nueva colección · {LAUNCH_LABEL.short}</strong>
          <span className="sep">·</span>
          <span className="hide-mob">Cuenta atrás en directo</span>
          <span className="hide-mob sep">·</span>
          <span className="hide-mob">Nueva tienda online</span>
        </>
      )}
    </div>
  );
}
