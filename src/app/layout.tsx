import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/landing.css";
import {
  italiana,
  cormorant,
  fraunces,
  jost,
  jetbrains,
} from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { SiteEffects } from "@/components/primitives/SiteEffects";
import { ClientOverlays } from "@/components/primitives/ClientOverlays";

export const metadata: Metadata = {
  title: "Grupo Juana Sánchez — Cincuenta años cosiendo memoria",
  description:
    "Un legado. Tres firmas. Cincuenta años fabricando lo único que no caduca. Juana Sánchez · Lolikas · Printellar. Caravaca de la Cruz, Murcia.",
  metadataBase: new URL("https://grupojuanasanchez.com"),
  openGraph: {
    title: "Grupo Juana Sánchez — Cincuenta años cosiendo memoria",
    description:
      "Un legado. Tres firmas. Cincuenta años fabricando lo único que no caduca. Juana Sánchez · Lolikas · Printellar.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4EFE6" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0C09" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${italiana.variable} ${cormorant.variable} ${fraunces.variable} ${jost.variable} ${jetbrains.variable}`}
    >
      <body>
        {/* Sin JS los reveals quedarían invisibles — fallback. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.detail-img img{clip-path:none}`}</style>
        </noscript>
        <SmoothScroll />
        <SiteEffects />
        {children}
        <ClientOverlays />
        <Toaster position="bottom-center" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
