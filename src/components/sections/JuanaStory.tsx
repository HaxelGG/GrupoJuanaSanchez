// Capítulo Juana Sánchez · bloque de storytelling con visual sticky.
// Imagen única y estable (antes había un crossfade entre 3 fotos según el
// scroll, pero al detenerse a mitad se veían dos superpuestas → parecía un
// error). Una sola foto limpia es más profesional y más ligero.
import Image from "next/image";
import { SHOPS } from "@/lib/site";

const VISUAL = {
  src: "/assets/images/juana-ceremonia.jpg",
  alt: "Esparteñas y corona de ceremonia Juana Sánchez, hechas a mano",
};
const SIZES = "(max-width: 920px) 100vw, 700px";

export function JuanaStory() {
  return (
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
            <span className="lbl">Venta directa</span>
            <span className="val">
              <a href={SHOPS.juana} target="_blank" rel="noopener">
                grupojuanasanchez.com
              </a>
            </span>
          </div>
          <div className="story-meta-item">
            <span className="lbl">Boutiques</span>
            <span className="val">
              <a href="#puntos-de-venta">Selectas en España</a>
            </span>
          </div>
        </div>
      </div>

      <div className="story-visual reveal delay-1">
        <Image src={VISUAL.src} alt={VISUAL.alt} fill sizes={SIZES} />
        <div className="img-meta">JS · MURCIA · 1975</div>
      </div>
    </div>
  );
}
