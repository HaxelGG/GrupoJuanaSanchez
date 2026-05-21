// Sección 11 · Capítulo Printellar — taller técnico · personalización.
// Fondo negro + dorado. La transición de fondo del body llega en Fase 3.

const PRODUCTS: [string, string][] = [
  ["Estampación textil directa", "DTF · DTG"],
  ["Pegatinas y vinilos", "Adhesivo"],
  ["Cuadros sobre lienzo", "Impresión"],
  ["Lonas a medida", "Cualquier tamaño"],
  ["Pósters", "Edición"],
  ["Corte y grabado láser", "Precisión"],
];

const SURFACES = ["Tela.", "Madera.", "Lienzo.", "Metal.", "Papel."];

export function ChapterPrintellar() {
  return (
    <section className="chapter ch-printellar" id="printellar">
      <div className="chapter-intro">
        <div className="ch-num reveal">
          Capítulo 5
          <br />
          Taller técnico · Personalización
        </div>
        <h2 className="chapter-name reveal delay-1">
          <em>Printellar.</em>
        </h2>
      </div>

      <div className="chapter-story">
        <div className="story-text">
          <p className="tagline reveal">
            Artesanía técnica.
            <br />
            <span>Sofisticación</span>
            <br />
            sin compromisos.
          </p>
          <p className="body-prose reveal delay-1">
            La versión técnica y creativa del legado. Estampación directa sobre
            tejidos, impresión sobre lienzo y lonas, corte y grabado a láser de
            precisión. <em>Una herramienta al servicio</em> de quien tiene una
            idea muy concreta de cómo se ve lo suyo.
          </p>
          <p className="body-prose reveal delay-2">
            Aquí lo único se vuelve repetible — sin perder lo único. Desbloquea
            nuevos horizontes para tus diseños con capacidades de impresión y
            corte que respetan el oficio que las inspira.
          </p>
          <div className="story-meta reveal delay-3">
            <div className="story-meta-item">
              <span className="lbl">Especialidad</span>
              <span className="val">Estampación · Corte láser</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Superficies</span>
              <span className="val">Tela · Madera · Lienzo · Metal</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Servicio</span>
              <span className="val">Cotización personalizada</span>
            </div>
          </div>
        </div>
        <div className="taller-composition reveal delay-1">
          <div className="taller-top">
            <span>PR · TALLER</span>
            <span>2026</span>
          </div>
          <div className="taller-bottom">
            <div className="surfaces">
              {SURFACES.map((s) => (
                <div className="surf" key={s}>
                  {s}
                </div>
              ))}
            </div>
            <div className="mark">
              <span>Precisión / 0.1mm</span>
              <span>Murcia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-wrap">
        <div className="ph reveal">
          Capacidades
          <span className="small">
            Seis servicios.
            <br />
            Una sola promesa:
            <br />
            precisión que respeta el oficio.
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
