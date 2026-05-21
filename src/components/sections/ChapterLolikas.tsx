// Sección · Capítulo Lolikas — la hermana joven · moda. Layout reverse.
import Image from "next/image";
import { AutoplayVideo } from "@/components/primitives/AutoplayVideo";

const PRODUCTS: [string, string][] = [
  ["Bolsos", "Pieza única"],
  ["Tocados", "Edición"],
  ["Cinturones", "Cuero"],
  ["Accesorios para bolsos", "Detalle"],
  ["Monederos", "Hecho a mano"],
  ["Collares", "Edición"],
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
              <span className="val">Pastel · Aguas · Rosas</span>
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
            src="/assets/images/lolikas-corona.jpg"
            alt="Corona artesanal Lolikas con tul"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 03 — Corona artesanal</div>
        </div>
        <div className="detail-img reveal delay-1">
          <Image
            src="/assets/images/lolikas-guante.jpg"
            alt="Guante de encaje hecho a mano Lolikas"
            fill
            sizes="(max-width: 920px) 100vw, 700px"
          />
          <div className="det-meta">Det. 04 — Guante de encaje</div>
        </div>
      </div>

      <div className="products-wrap">
        <div className="ph reveal">
          Familia
          <span className="small">
            Seis líneas
            <br />
            para llevar la marca
            <br />
            fuera de la ceremonia.
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
