// Sección · Shops — tres puertas a las tiendas online.
// Cada botón con magnetic pull (addendum §5.4).
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

export function Shops() {
  return (
    <section className="shops" id="tiendas">
      <div className="shops-head">
        <h3 className="reveal">
          Cuando estés
          <br />
          <em>listo, entra.</em>
        </h3>
        <p className="reveal delay-1">
          Tres puertas. Tres mundos. La misma mano detrás. Envíos a toda Europa.
          Pago seguro con tarjeta, PayPal o transferencia.
        </p>
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
    </section>
  );
}
