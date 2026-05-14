// Sección · Capítulo Juana Sánchez — casa madre · ceremonia.
import Image from "next/image";

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

      <div className="chapter-story">
        <div className="story-text">
          <p className="tagline reveal">
            El primer día
            <br />
            <span
              style={{
                color: "var(--mauve-deep)",
                fontWeight: 500,
                fontStyle: "normal",
              }}
            >
              que recordarás
            </span>
            <br />
            siempre.
          </p>
          <p className="body-prose reveal delay-1">
            Especialistas en complementos y calzados únicos para los días que se
            cuentan en la familia: novias, madrinas, comunión, arras. Cada pieza
            nace en nuestro taller, una a una, sin prisa.{" "}
            <em>Diseñada con corazón y personalidad</em> para que tú o tu hijo os
            sintáis muy especiales.
          </p>
          <p className="body-prose reveal delay-2">
            Cincuenta años después del primer encargo, el método sigue siendo el
            mismo: hilo, paciencia, mirada. Las máquinas cortan. Las manos
            deciden.
          </p>
          <div className="story-meta reveal delay-3">
            <div className="story-meta-item">
              <span className="lbl">Especialidad</span>
              <span className="val">Comunión · Arras · Novia</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Producción</span>
              <span className="val">Hecho a mano · Bajo pedido</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Distribución</span>
              <span className="val">Boutiques selectas en España</span>
            </div>
          </div>
        </div>
        <div className="story-visual reveal delay-1">
          <Image
            src="/assets/images/juana-ceremonia.jpg"
            alt="Esparteñas y corona de ceremonia Juana Sánchez, hechas a mano"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="img-meta">JS · MADRID · 1975</div>
        </div>
      </div>

      <div className="detail-strip">
        <div className="detail-img reveal">
          <Image
            src="/assets/images/juana-corona.jpg"
            alt="Corona artesanal Juana Sánchez con tul"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 01 — Corona artesanal</div>
        </div>
        <div className="detail-img reveal delay-1">
          <Image
            src="/assets/images/juana-encaje.jpg"
            alt="Guante de encaje hecho a mano Juana Sánchez"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 02 — Encaje hecho a mano</div>
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
