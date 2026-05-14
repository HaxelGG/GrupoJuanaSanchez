import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grupo Juana Sánchez",
    short_name: "Juana Sánchez",
    description:
      "Un legado. Tres firmas. Cincuenta años cosiendo lo único que no caduca.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE6",
    theme_color: "#F4EFE6",
    icons: [
      {
        src: "/assets/logos/monograma-js.jpg",
        sizes: "400x400",
        type: "image/jpeg",
      },
    ],
  };
}
