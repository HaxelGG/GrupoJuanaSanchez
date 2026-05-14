// Sección · Hero full-bleed. Imagen optimizada con next/image (priority → LCP).
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/assets/images/girl-hero.jpg"
          alt="Niña con corona artesanal — Grupo Juana Sánchez"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-content">
        <div className="hero-top">
          <div className="meta">Caravaca de la Cruz · Murcia · España</div>
          <div className="meta meta-right">
            Edición Privada · MMXXVI
            <br />
            Cap. 01 — Hero
          </div>
        </div>

        <h1 className="hero-title">
          <span className="line">
            <span>Cincuenta</span>
          </span>
          <span className="line">
            <span>
              años <em>cosiendo</em>
            </span>
          </span>
          <span className="line">
            <span>memoria.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Tres firmas. Una sola mano. Medio siglo aprendiendo a cuidar el
            detalle que convierte un día cualquiera en uno que se recuerda.
          </p>
          <div className="hero-cue">
            <span>Descender</span>
            <div className="line-vert" />
          </div>
        </div>
      </div>
    </section>
  );
}
