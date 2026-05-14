// Constantes del sitio — Grupo Juana Sánchez.
// En Fase 5 las que correspondan pasan a variables de entorno (brief §12.3).

/** Lanzamiento tienda Juana Sánchez: 17 may 2026 · 18:00 CEST (16:00 UTC). */
export const LAUNCH_TARGET_UTC = Date.UTC(2026, 4, 17, 16, 0, 0);

export const CONTACT = {
  whatsapp: "https://wa.me/34613775981",
  whatsappPrintellar:
    "https://wa.me/34613775981?text=Hola,%20quiero%20cotizar%20con%20Printellar",
  whatsappDisplay: "+34 613 775 981",
  instagram: "https://instagram.com/grupojuanasanchez",
  instagramHandle: "@grupojuanasanchez",
  email: "juanasalmacen@gmail.com",
} as const;

export const SHOPS = {
  juana: "https://www.juanasanchez.es/",
  lolikas: "https://www.lolikas.com/",
} as const;

/** Ciudades placeholder — pendiente lista real del cliente (brief §14). */
export const BOUTIQUES = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Bilbao",
  "Málaga",
  "San Sebastián",
  "Granada",
  "Zaragoza",
  "Palma",
  "Santander",
  "Salamanca",
] as const;

export const NAV_LINKS = [
  { href: "#legado", label: "Legado" },
  { href: "#juana", label: "Juana Sánchez" },
  { href: "#lolikas", label: "Lolikas" },
  { href: "#printellar", label: "Printellar" },
  { href: "#tiendas", label: "Tiendas" },
] as const;
