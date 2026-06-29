// Sección · Capítulo Lolikas — la hermana joven · moda. Layout reverse.
import Image from "next/image";
import { AutoplayVideo } from "@/components/primitives/AutoplayVideo";

const PRODUCTS: [string, string][] = [
  ["Fieltro LKS", "4 modelos · monograma troquelado"],
  ["Capazo de cuerda", "5 modelos · rafia bordada"],
  ["Media luna · Clutch", "5 modelos · flor en raso/fieltro"],
];

type Piece = { src: string; alt: string; name: string; tag: string };
const PIECES: Piece[] = [
  {
    src: "/assets/images/lolikas/capazo-lks-verde.jpg",
    alt: "Capazo LKS de fieltro verde con asas trenzadas",
    name: "Capazo LKS · Verde",
    tag: "Fieltro · Asas trenzadas",
  },
  {
    src: "/assets/images/lolikas/clutch-rafia-oro.jpg",
    alt: "Clutch Lolikas en rafia dorada con monograma",
    name: "Clutch · Rafia dorada",
    tag: "Edición ceremonia",
  },
  {
    src: "/assets/images/lolikas/clutch-negro-perla.jpg",
    alt: "Clutch Lolikas negro con perlas y flor de tul",
    name: "Clutch · Perla & flor",
    tag: "Noche",
  },
];

export function ChapterLolikas() {
  return (
    <section className="chapter ch-lolikas" id="lolikas">
      <div className="chapter-intro">
        <div className="ch-num reveal">
          Capítulo 4
          <br />
          La hermana joven · Moda
        </div>
        <h2 className="chapter-name reveal delay-1">
          <em>Lolikas.</em>
        </h2>
      </div>

      <div className="chapter-story reverse">
        <div className="story-text">
          <p className="tagline reveal">
            La esencia
            <br />
            <strong>refrescante.</strong>
            <br />
            Juventud y sofisticación.
          </p>
          <p className="body-prose reveal delay-1">
            La mirada joven y vibrante del legado. Bolsos y complementos
            diseñados para quienes{" "}
            <em>buscan elegancia con un toque de fresco autor</em>. Cada pieza es
            artesanía con tendencia — para quienes la elegancia ya no es una
            ocasión sino un hábito.
          </p>
          <p className="body-prose reveal delay-2">
            Misma mano, misma escuela, otro lenguaje: un poco más libre, un poco
            más diario. Pieza única, estación larga.
          </p>
          <div className="story-meta reveal delay-3">
            <div className="story-meta-item">
              <span className="lbl">Especialidad</span>
              <span className="val">Bolsos · Complementos</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Paleta</span>
              <span className="val">Pastel · Lilas · Rosas</span>
            </div>
            <div className="story-meta-item">
              <span className="lbl">Lenguaje</span>
              <span className="val">Diario · Editorial</span>
            </div>
          </div>
        </div>
        <div className="story-visual reveal delay-1">
          <AutoplayVideo
            src="/assets/video/lolikas.mp4"
            poster="/assets/video/lolikas-poster.jpg"
          />
          <div className="img-meta">LK · 2026 · EDICIÓN · MOVIMIENTO</div>
        </div>
      </div>

      <div className="detail-strip">
        <div className="detail-img reveal">
          <Image
            src="/assets/images/lolikas/lolikas-collage-espartenas.jpg"
            alt="Esparteñas Lolikas con flores: nueve escenas editoriales"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 03 — Esparteñas · 9 escenas</div>
        </div>
        <div className="detail-img reveal delay-1">
          <Image
            src="/assets/images/lolikas/lolikas-collage-clutch.jpg"
            alt="Clutch LKS de perla y flor en nueve contextos — Lolikas"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 04 — Clutch perla · 9 escenas</div>
        </div>
      </div>

      <div className="pieces-strip">
        <div className="pieces-head reveal">
          <span className="lbl">Piezas</span>
          <span className="title">En la tienda · Selección Lolikas</span>
        </div>
        <div className="pieces-grid">
          {PIECES.map((p, i) => (
            <a
              key={p.src}
              className={`piece-card reveal delay-${i + 1}`}
              href="https://grupojuanasanchez.com/pages/lolikas"
              target="_blank"
              rel="noopener"
            >
              <div className="piece-img">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, 420px"
                />
              </div>
              <div className="piece-meta">
                <span className="piece-name">{p.name}</span>
                <span className="piece-tag">{p.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="products-wrap">
        <div className="ph reveal">
          Catálogo
          <span className="small">
            Tres familias
            <br />
            catorce piezas vivas,
            <br />
            misma escuela libre.
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
