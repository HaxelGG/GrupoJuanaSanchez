/* eslint-disable @next/next/no-img-element */
// Sección 3 · Hero full-bleed. Imagen → next/image en Fase 4.
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/assets/images/girl-hero.jpg" alt="Niña con corona artesanal — Grupo Juana Sánchez" />
      </div>
      <div className="hero-content">
        <div className="hero-top">
          <div className="meta">Madrid · España · Desde MCMLXXV</div>
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
