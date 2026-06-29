// Sección · Capítulo Juana Sánchez — casa madre · ceremonia.
import Image from "next/image";
import { JuanaStory } from "./JuanaStory";

const PRODUCTS: [string, string][] = [
  ["Esparteñas", "Niña · Madrina · Novia"],
  ["Coronas", "Comunión · Ceremonia"],
  ["Tocados", "Madrina · Ceremonia"],
  ["Diademas", "Niña · Comunión"],
  ["Bolsos", "Capazos · Ceremonia"],
  ["Guantes", "Comunión · Ceremonia"],
  ["Conjuntos completos", "17 sets hermanados"],
];

export function ChapterJuana() {
  return (
    <section className="chapter ch-juana" id="juana">
      <div className="chapter-intro">
        <div className="ch-num reveal">
          Capítulo 3
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
            src="/assets/images/juana-detalle-novia.jpg"
            alt="Esparteñas marfil de novia con flores hechas a mano — Juana Sánchez"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 01 — Marfil novia</div>
        </div>
        <div className="detail-img reveal delay-1">
          <Image
            src="/assets/images/juana-detalle-agua.jpg"
            alt="Esparteñas agua menta con tul y encaje — Juana Sánchez"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 02 — Agua menta</div>
        </div>
      </div>

      <div className="products-wrap">
        <div className="ph reveal">
          Catálogo
          <span className="small">
            Siete familias
            <br />
            de piezas, todas
            <br />
            con la misma escuela.
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
