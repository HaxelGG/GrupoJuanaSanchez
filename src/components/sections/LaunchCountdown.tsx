// Sección · Lanzamiento — la tienda ya abrió: invita a visitarla.
import Image from "next/image";
import { SHOPS } from "@/lib/site";
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
            Nueva colección · Comunión 2026
          </div>

          <h2 className="launch-title reveal delay-1">
            Una nueva
            <br />
            <em>colección.</em>
            <br />
            Ya está aquí.
          </h2>

          <p className="launch-sub reveal delay-2">
            La nueva tienda online de Juana Sánchez ya está abierta. Descubre la
            colección hecha a mano en España: esparteñas, coronas, tocados y
            conjuntos de ceremonia.
          </p>

          <div className="launch-soon reveal delay-2">
            <span className="launch-soon-eyebrow">
              <span className="pulse-dot" />
              Ya disponible
            </span>
            <span className="launch-soon-big">Tienda online</span>
          </div>

          <div className="launch-cta reveal delay-3">
            <MagneticLink
              className="btn-primary"
              href={SHOPS.juana}
              target="_blank"
              rel="noopener"
              strength={0.4}
            >
              Visitar la tienda
            </MagneticLink>
            <SubscribeDialog />
          </div>

          <div className="launch-meta reveal delay-3">
            <div className="launch-meta-row">
              <span className="lbl">Apertura</span>
              <span className="val">
                <span className="big">Ya disponible</span>
                Hecho a mano · Envíos a toda Europa
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
                  grupojuanasanchez.com
                </a>
                Tienda online
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
            <span>JS · 2026</span>
            <span>EDICIÓN NUEVA</span>
          </div>
          <div className="launch-visual-bottom">
            <div className="left">
              Una temporada se anuncia.
              <br />
              Las piezas, en silencio.
            </div>
            <div className="right">MMXXVI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
