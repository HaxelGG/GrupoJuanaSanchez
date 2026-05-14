// Sección · Lanzamiento + cuenta atrás. ⚠️ CRÍTICO (brief §8).
// Countdown en vivo + captura de email operativos (Fase 2).
import { CONTACT } from "@/lib/site";
import { CountdownDigits } from "@/components/primitives/CountdownDigits";
import { SubscribeDialog } from "@/components/sections/SubscribeDialog";

export function LaunchCountdown() {
  return (
    <section className="launch" id="lanzamiento">
      <div className="launch-bg">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/assets/video/lolikas.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="launch-inner">
        <div className="launch-left">
          <div className="launch-tag reveal">
            <span className="pulse-dot" />
            Próximo lanzamiento · Cuenta atrás
          </div>

          <h2 className="launch-title reveal delay-1">
            Una nueva
            <br />
            <em>colección.</em>
            <br />
            Llega muy pronto.
          </h2>

          <p className="launch-sub reveal delay-2">
            El 17 de mayo, 18:00 hora de Madrid, se abre la nueva tienda online
            de Juana Sánchez con la colección que llevamos meses cosiendo. Sé de
            las primeras en verla.
          </p>

          <CountdownDigits />

          <div className="launch-cta reveal delay-3">
            <a
              className="btn-primary"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
            >
              Sé de las primeras en verla
            </a>
            <SubscribeDialog />
          </div>

          <div className="launch-meta reveal delay-3">
            <div className="launch-meta-row">
              <span className="lbl">Fecha</span>
              <span className="val">
                <span className="big">17 mayo · 18:00</span>
                Hora de Madrid · CET
              </span>
            </div>
            <div className="launch-meta-row">
              <span className="lbl">Dónde</span>
              <span className="val">
                <span className="big">juanasanchez.es</span>
                Nueva tienda online
              </span>
            </div>
          </div>
        </div>

        <div className="launch-visual reveal delay-1">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/assets/video/lolikas.mp4" type="video/mp4" />
          </video>
          <div className="launch-visual-top">
            <span>JS · MMXXVI</span>
            <span>EDICIÓN NUEVA</span>
          </div>
          <div className="launch-visual-bottom">
            <div className="left">
              Una temporada se anuncia.
              <br />
              Las piezas, en silencio.
            </div>
            <div className="right">17 / 05</div>
          </div>
        </div>
      </div>
    </section>
  );
}
