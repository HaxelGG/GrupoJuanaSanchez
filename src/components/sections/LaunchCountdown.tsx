// Sección · Lanzamiento + cuenta atrás. ⚠️ CRÍTICO (brief §8).
// Countdown en vivo + captura de email operativos (Fase 2).
import Image from "next/image";
import { CONTACT, SHOPS } from "@/lib/site";
import { CountdownDigits } from "@/components/primitives/CountdownDigits";
import { SubscribeDialog } from "@/components/sections/SubscribeDialog";
import { MagneticLink } from "@/components/primitives/MagneticLink";
import { AutoplayVideo } from "@/components/primitives/AutoplayVideo";

export function LaunchCountdown() {
  return (
    <section className="launch" id="lanzamiento">
      <div className="launch-bg">
        {/* Fondo estático (al 32% de opacidad tras un degradado oscuro): no
            justifica decodificar un 2.º video — usamos el póster. */}
        <Image
          src="/assets/video/lolikas-poster.jpg"
          alt=""
          fill
          sizes="100vw"
        />
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
            El 3 de junio, 18:00 hora peninsular, se abre la nueva tienda online
            de Juana Sánchez con la colección que llevamos meses cosiendo. Sé de
            las primeras en verla.
          </p>

          <CountdownDigits />

          <div className="launch-cta reveal delay-3">
            <MagneticLink
              className="btn-primary"
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              strength={0.4}
            >
              Sé de las primeras en verla
            </MagneticLink>
            <SubscribeDialog />
          </div>

          <div className="launch-meta reveal delay-3">
            <div className="launch-meta-row">
              <span className="lbl">Fecha</span>
              <span className="val">
                <span className="big">3 junio · 18:00</span>
                Hora peninsular · CEST
              </span>
            </div>
            <div className="launch-meta-row">
              <span className="lbl">Dónde</span>
              <span className="val">
                <a
                  className="big"
                  href={SHOPS.juana}
                  target="_blank"
                  rel="noopener"
                >
                  juanasanchez.es
                </a>
                Nueva tienda online
              </span>
            </div>
          </div>
        </div>

        <div className="launch-visual reveal delay-1">
          <AutoplayVideo
            src="/assets/video/lolikas.mp4"
            poster="/assets/video/lolikas-poster.jpg"
          />
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
            <div className="right">03 / 06</div>
          </div>
        </div>
      </div>
    </section>
  );
}
