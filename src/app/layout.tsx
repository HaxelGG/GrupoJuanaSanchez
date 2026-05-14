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
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { SiteEffects } from "@/components/primitives/SiteEffects";
import { MagneticCursor } from "@/components/primitives/MagneticCursor";
import { FimiLiveBubble } from "@/components/sections/FimiLiveBubble";

export const metadata: Metadata = {
  title: "Grupo Juana Sánchez — Cincuenta años cosiendo memoria",
  description:
    "Un legado. Tres firmas. Cincuenta años cosiendo lo único que no caduca. Juana Sánchez · Lolikas · Printellar. Madrid, desde 1975.",
  metadataBase: new URL("https://grupojuanasanchez.com"),
  openGraph: {
    title: "Grupo Juana Sánchez — Cincuenta años cosiendo memoria",
    description:
      "Un legado. Tres firmas. Cincuenta años cosiendo lo único que no caduca. Juana Sánchez · Lolikas · Printellar.",
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
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <SmoothScroll />
        <SiteEffects />
        {children}
        <FimiLiveBubble />
        <MagneticCursor />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
