// Sección · Footer — 4 columnas.
import Image from "next/image";
import { CONTACT, SHOPS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="fb-head">
              <Image
                className="fb-logo"
                src="/assets/logos/monograma-js.jpg"
                alt="Monograma Grupo Juana Sánchez"
                width={56}
                height={56}
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
            <div className="fb-since">EST · 1975 · MURCIA</div>
          </div>

          <div className="footer-col">
            <h4>Boutiques</h4>
            <p>
              Nuestras piezas se encuentran en boutiques selectas de Murcia y
              el resto de España.
            </p>
            <a href="#puntos-de-venta">Ver puntos de venta</a>
          </div>

          <div className="footer-col">
            <h4>Tiendas online</h4>
            <a href={SHOPS.juana} target="_blank" rel="noopener">
              grupojuanasanchez.com
            </a>
            <a href={SHOPS.lolikas} target="_blank" rel="noopener">
              lolikas · grupojuanasanchez.com
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener">
              printelar · cotizar
            </a>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone} · Tienda</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener">
              {CONTACT.whatsappDisplay} · WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`mailto:${CONTACT.emailPro}`}>{CONTACT.emailPro} · Pro</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener">
              {CONTACT.instagramHandle}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 1975 — 2026 · Todos los derechos reservados
            <span className="footer-credit">
              {" "}· Imagen Feria Valencia:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Feria_de_Valencia_en_Benimamet_-_Vista_desde_el_Camino_Nuevo_de_Paterna.JPG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googledance
              </a>{" "}
              (CC BY 3.0)
            </span>
          </span>
          <span className="footer-signature">— Hecho a mano, desde España</span>
        </div>
      </div>
    </footer>
  );
}
