// Sección · Legado + Tiendas (fusionada).
// Declaración editorial (Un legado · Tres firmas · …) que lleva directo a las
// tres tiendas online → mejor conversión. Reemplaza la antigua PullQuote y la
// antigua sección Shops.
import { CONTACT, SHOPS } from "@/lib/site";
import { MagneticLink } from "@/components/primitives/MagneticLink";

type Shop = {
  brand: "js" | "lolikas" | "printellar";
  href: string;
  tag: string;
  mark: string;
  name: React.ReactNode;
  foot: string;
};

const SHOP_LIST: Shop[] = [
  {
    brand: "js",
    href: SHOPS.juana,
    tag: "01 — Ceremonia",
    mark: "JS",
    name: (
      <>
        Juana
        <br />
        Sánchez
      </>
    ),
    foot: "Visitar tienda",
  },
  {
    brand: "lolikas",
    href: SHOPS.lolikas,
    tag: "02 — Moda",
    mark: "LK",
    name: "Lolikas",
    foot: "Visitar tienda",
  },
  {
    brand: "printellar",
    href: CONTACT.whatsappPrintellar,
    tag: "03 — Personalización",
    mark: "PR",
    name: "Printelar",
    foot: "Cotizar por WhatsApp",
  },
];

export function PullQuote() {
  return (
    <section className="legado-tiendas" id="tiendas">
      <div className="lt-statement">
        <span className="lt-mark" aria-hidden>
          &ldquo;
        </span>
        <h2 className="lt-legado reveal">
          Un <em>legado.</em>
        </h2>
        <div className="lt-firmas reveal delay-1">Tres firmas.</div>
        <p className="lt-line reveal delay-2">
          Cincuenta años <em>fabricando</em> lo único que no caduca.
        </p>
      </div>

      <div className="lt-shops-head reveal delay-1">
        <span>Tres puertas. Una sola maestría.</span>
      </div>

      <div className="shops-grid">
        {SHOP_LIST.map((s, i) => (
          <MagneticLink
            key={s.brand}
            href={s.href}
            target="_blank"
            rel="noopener"
            className={`shop-btn reveal${i ? ` delay-${i}` : ""}`}
            data-brand={s.brand}
          >
            <div className="shop-top">
              <span className="shop-meta-tag">{s.tag}</span>
              <span className="shop-mark">{s.mark}</span>
            </div>
            <div className="shop-name">{s.name}</div>
            <div className="shop-foot">
              <span>{s.foot}</span>
              <span className="shop-arrow">→</span>
            </div>
          </MagneticLink>
        ))}
      </div>

      <p className="lt-shops-foot reveal delay-1">
        Envíos a toda Europa · Pago seguro con tarjeta, PayPal o transferencia.
      </p>
      <div className="lt-attr-bottom reveal delay-2">
        Grupo Juana Sánchez · 1975 — 2026
      </div>
    </section>
  );
}
