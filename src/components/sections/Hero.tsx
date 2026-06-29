// Sección · Hero full-bleed. Video de Caravaca (Multimedia IA master 16x9).
import { AutoplayVideo } from "@/components/primitives/AutoplayVideo";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <AutoplayVideo
          src="/assets/video/js-caravaca-hero.mp4"
          poster="/assets/video/js-caravaca-hero-poster.jpg"
        />
      </div>
      <div className="hero-content">
        <div className="hero-top">
          <div className="meta">Caravaca de la Cruz · Murcia · España</div>
        </div>

        <h1 className="hero-title">
          <span className="line">
            <span>Cincuenta</span>
          </span>
          <span className="line">
            <span>
              años <em>creando</em>
            </span>
          </span>
          <span className="line">
            <span>memoria.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-cue">
            <span>Descender</span>
            <div className="line-vert" />
          </div>
          <p className="hero-sub">
            Tres firmas. Una sola mano. Medio siglo aprendiendo a cuidar el
            detalle que convierte un día cualquiera en uno que se recuerda.
          </p>
        </div>
      </div>
    </section>
  );
}
