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
          Nuestras piezas se cosen para verse de cerca. Estas son las boutiques
          que las llevan.
        </p>
      </div>

      <div className="puntos-grid reveal delay-1">
        {BOUTIQUES.map((b) => (
          <div className="punto-row" key={b.name}>
            <span className="punto-name">{b.name}</span>
            <span className="punto-address">{b.address}</span>
            <span className="punto-city">{b.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
