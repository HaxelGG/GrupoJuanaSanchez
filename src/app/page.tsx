import { EventStrip } from "@/components/sections/EventStrip";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Declaration } from "@/components/sections/Declaration";
import { PullQuote } from "@/components/sections/PullQuote";
import { Timeline } from "@/components/sections/Timeline";
import { TrioIntro } from "@/components/sections/TrioIntro";
import { LaunchCountdown } from "@/components/sections/LaunchCountdown";
import { ChapterJuana } from "@/components/sections/ChapterJuana";
import { ChapterLolikas } from "@/components/sections/ChapterLolikas";
import { ChapterPrintellar } from "@/components/sections/ChapterPrintellar";
import { Manifesto } from "@/components/sections/Manifesto";
import { PuntosDeVenta } from "@/components/sections/PuntosDeVenta";
import { Footer } from "@/components/sections/Footer";

// Schema.org — brief §9.2.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Grupo Juana Sánchez",
      url: "https://grupojuanasanchez.com",
      foundingDate: "1975",
      founder: { "@type": "Person", name: "Juana Sánchez" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "C/ Vicente Aleixandre, 12",
        addressLocality: "Caravaca de la Cruz",
        addressRegion: "Murcia",
        postalCode: "30400",
        addressCountry: "ES",
      },
      sameAs: [
        "https://grupojuanasanchez.com",
        "https://instagram.com/grupojuanasanchez",
      ],
    },
    {
      "@type": "Brand",
      name: "Juana Sánchez",
      slogan:
        "La casa marida tradición artesanal con visión contemporánea, definida por una sofisticación que trasciende generaciones.",
    },
    {
      "@type": "Brand",
      name: "Lolikas",
      slogan:
        "La esencia refrescante. Juventud y sofisticación. La mirada joven y vibrante del legado Juana Sánchez.",
    },
    {
      "@type": "Brand",
      name: "Printelar",
      slogan:
        "Artesanía técnica con sofisticación sin compromisos. La versión técnica y creativa del legado Juana Sánchez.",
    },
    {
      "@type": "Event",
      name: "FIMI Valencia 2026 — Edición 40",
      startDate: "2026-05-15",
      endDate: "2026-05-16",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Feria Valencia · Pabellón 8 · Stand C35",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valencia",
          addressCountry: "ES",
        },
      },
      organizer: { "@type": "Organization", name: "FIMI" },
      performer: { "@type": "Organization", name: "Grupo Juana Sánchez" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventStrip />
      <Nav />
      {/* FIMI 2026 (15-16 may) ya pasó: queda como último hito en el Timeline.
          El lanzamiento (3 jun) lidera ahora el flujo tras el Hero. */}
      <main>
        <Hero />
        <LaunchCountdown />
        <Declaration />
        <PullQuote />
        <Timeline />
        <TrioIntro />
        <ChapterJuana />
        <ChapterLolikas />
        <ChapterPrintellar />
        <Manifesto />
        <PuntosDeVenta />
      </main>
      <Footer />
    </>
  );
}
