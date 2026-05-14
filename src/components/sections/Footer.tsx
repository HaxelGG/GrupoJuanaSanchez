/* eslint-disable @next/next/no-img-element */
// Sección 15 · Footer — marquee de boutiques (CSS-only) + 4 columnas.
import { BOUTIQUES, CONTACT, SHOPS } from "@/lib/site";

export function Footer() {
  // Doble pasada de ciudades para el loop sin costura del marquee.
  const cities = [...BOUTIQUES, ...BOUTIQUES];

  return (
    <footer className="site-footer">
      <div className="boutiques-strip">
        <div className="marquee-track">
          {cities.map((city, i) => (
            <span className="boutique" key={`${city}-${i}`}>
              {i === 0 && <span className="num">01</span>}
              {city}
              <span className="sep" />
            </span>
          ))}
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="fb-head">
              <img
                className="fb-logo"
                src="/assets/logos/monograma-js.jpg"
                alt="Monograma Grupo Juana Sánchez"
              />
              <div className="fb-name">
                Grupo
                <br />
                Juana Sánchez
              </div>
            </div>
            <p className="fb-tag">
              Tradición artesanal con visión contemporánea. Una sofisticación
              que trasciende generaciones.
            </p>
            <div className="fb-since">EST · MCMLXXV · MADRID</div>
          </div>

          <div className="footer-col">
            <h4>Boutiques</h4>
            <p>
              Nuestras piezas se encuentran en boutiques selectas en toda
              España.
            </p>
            <a href="#tiendas">Ver puntos de venta</a>
          </div>

          <div className="footer-col">
            <h4>Tiendas online</h4>
            <a href={SHOPS.juana} target="_blank" rel="noopener">
              juanasanchez.es
            </a>
            <a href={SHOPS.lolikas} target="_blank" rel="noopener">
              lolikas.com
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener">
              printellar · cotizar
            </a>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener">
              {CONTACT.whatsappDisplay} · WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener">
              {CONTACT.instagramHandle}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© MCMLXXV — MMXXVI · Todos los derechos reservados</span>
          <span className="footer-signature">— Hecho a mano, desde España</span>
        </div>
      </div>
    </footer>
  );
}
