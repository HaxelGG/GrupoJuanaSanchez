// Sección · Capítulo Juana Sánchez — casa madre · ceremonia.
import Image from "next/image";
import { JuanaStory } from "./JuanaStory";

const PRODUCTS: [string, string][] = [
  ["Coronas", "Comunión"],
  ["Tocados", "Madrina"],
  ["Diademas", "Niña · Bebé"],
  ["Velos y tules", "Ceremonia"],
  ["Guantes", "Ceremonia"],
  ["Esparteñas", "Novia · Niña · Niño"],
  ["Limosneras y cestas", "Arras"],
  ["Collares y rosarios", "Niña"],
  ["Bastidor y pañuelos", "Ceremonia"],
  ["Canotier y pamelas", "Niña"],
  ["Agujones y prendidos", "Tocado"],
  ["Pulseras y cruces", "Comunión · Niño"],
  ["Turbantes", "Madrina"],
  ["Cancanes y refajos", "Estructura"],
  ["Conjuntos", "Hermanados"],
  ["Sombreros", "Madrina"],
];

export function ChapterJuana() {
  return (
    <section className="chapter ch-juana" id="juana">
      <div className="chapter-intro">
        <div className="ch-num reveal">
          Capítulo III
          <br />
          Casa madre · Ceremonia
        </div>
        <h2 className="chapter-name reveal delay-1">
          <em>Juana</em>
          <br />
          Sánchez.
        </h2>
      </div>

      <JuanaStory />

      <div className="detail-strip">
        <div className="detail-img reveal">
          <Image
            src="/assets/images/juana-detalle-rosa.jpg"
            alt="Esparteñas de ceremonia Juana Sánchez, detalle artesanal"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 01 — Esparteñas a mano</div>
        </div>
        <div className="detail-img reveal delay-1">
          <Image
            src="/assets/images/juana-detalle-mint.jpg"
            alt="Calzado de ceremonia Juana Sánchez, hecho a mano"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 02 — Calzado de ceremonia</div>
        </div>
      </div>

      <div className="products-wrap">
        <div className="ph reveal">
          Catálogo
          <span className="small">
            Dieciséis familias
            <br />
            de piezas, todas con
            <br />
            la misma escuela.
          </span>
        </div>
        <div className="product-grid reveal delay-1">
          {PRODUCTS.map(([name, tag]) => (
            <div className="product-row" key={name}>
              <span>{name}</span>
              <span className="tag">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
