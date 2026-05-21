// Sección · Puntos de venta — boutiques físicas reales (datos de juanasanchez.es).
// Espacio minimalista: nombre + dirección + ciudad de cada boutique.
import { BOUTIQUES } from "@/lib/site";

export function PuntosDeVenta() {
  return (
    <section className="puntos-venta" id="puntos-de-venta">
      <div className="puntos-head">
        <div className="eyebrow reveal">
          <span className="dot" />
          Puntos de venta
        </div>
        <h2 className="reveal delay-1">
          Dónde encontrarnos,
          <br />
          <em>en persona.</em>
        </h2>
        <p className="serif-prose reveal delay-2">
          Nuestras piezas se fabrican para lucirse de cerca. Estas son las
          boutiques que las llevan.
        </p>
      </div>

      <div className="puntos-grid reveal delay-1">
        {BOUTIQUES.map((b) => {
          const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${b.name}, ${b.address}, ${b.city}`,
          )}`;
          return (
            <a
              className="punto-row"
              key={b.name}
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${b.name} en Google Maps`}
            >
              <span className="punto-name">{b.name}</span>
              <span className="punto-address">{b.address}</span>
              <span className="punto-city">
                {b.city}
                <span className="punto-maps">Cómo llegar →</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
