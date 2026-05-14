// Constantes del sitio — Grupo Juana Sánchez.

/** Lanzamiento tienda Juana Sánchez: 17 may 2026 · 18:00 CEST (16:00 UTC). */
export const LAUNCH_TARGET_UTC = Date.UTC(2026, 4, 17, 16, 0, 0);

export const CONTACT = {
  // ⚠️ WhatsApp: el sitio real solo lista un fijo (968...) que no admite
  // WhatsApp. Se mantiene el móvil del brief hasta confirmar el número real.
  whatsapp: "https://wa.me/34613775981",
  whatsappPrintellar:
    "https://wa.me/34613775981?text=Hola,%20quiero%20cotizar%20con%20Printellar",
  whatsappDisplay: "+34 613 775 981",
  phone: "+34 968 70 57 22",
  phoneTel: "+34968705722",
  instagram: "https://instagram.com/grupojuanasanchez",
  instagramHandle: "@grupojuanasanchez",
  email: "info@juanasanchez.es",
} as const;

export const SHOPS = {
  juana: "https://www.juanasanchez.es/",
  lolikas: "https://www.lolikas.com/",
} as const;

export type Boutique = {
  name: string;
  address: string;
  city: string;
};

/** Puntos de venta físicos · datos reales de juanasanchez.es. */
export const BOUTIQUES: Boutique[] = [
  {
    name: "Juana Sánchez C.B.",
    address: "C/ Vicente Aleixandre, 12",
    city: "Caravaca de la Cruz, Murcia",
  },
  { name: "Chivey · El Carmen", address: "Alameda Capuchinos, 3", city: "Murcia" },
  { name: "Chivey Centro", address: "C/ Jara Carrillo, 2", city: "Murcia" },
  {
    name: "Mary Novias",
    address: "Av. Ingeniero José Alegría, 82",
    city: "Murcia",
  },
  { name: "TNC Made in Itali", address: "C/ Acisclo Díaz, 3", city: "Murcia" },
  {
    name: "Ana Martínez",
    address: "C/ General Aznar, 28",
    city: "Totana, Murcia",
  },
  {
    name: "Modas Pepita",
    address: "Av. Santa Eulalia, 4",
    city: "Totana, Murcia",
  },
  { name: "Ángela Roldán", address: "C/ Corredera, 14", city: "Lorca, Murcia" },
  {
    name: "Grecco",
    address: "C/ San Francisco, 55",
    city: "Puerto Lumbreras, Murcia",
  },
  {
    name: "María Jesús Espinosa",
    address: "C/ Aniceto León, 6",
    city: "Torre-Pacheco, Murcia",
  },
  {
    name: "Mª Magdalena Conesa",
    address: "C/ Ribera San Javier",
    city: "Cartagena, Murcia",
  },
  {
    name: "Paloma Torres del Rey",
    address: "C/ Francisco Celdrán, 3",
    city: "Cartagena, Murcia",
  },
  {
    name: "Modas Carbonell",
    address: "C/ Mayor, 25",
    city: "Molina de Segura, Murcia",
  },
  {
    name: "Sizes",
    address: "Rúa Malecón Cadarso, 5",
    city: "Noia, A Coruña",
  },
  {
    name: "Victoria Novias",
    address: "Ctra. Ronda (esq. Reyes Católicos)",
    city: "Baza, Granada",
  },
];

/** Ciudades únicas para el marquee del footer, en orden de aparición. */
export const BOUTIQUE_CITIES: string[] = [
  ...new Set(BOUTIQUES.map((b) => b.city.split(",")[0].trim())),
];

export const NAV_LINKS = [
  { href: "#legado", label: "Legado" },
  { href: "#juana", label: "Juana Sánchez" },
  { href: "#lolikas", label: "Lolikas" },
  { href: "#printellar", label: "Printellar" },
  { href: "#tiendas", label: "Tiendas" },
] as const;
