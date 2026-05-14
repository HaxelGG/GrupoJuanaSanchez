"use client";

// Overlays globales cargados en diferido — el cursor y la burbuja FIMI no son
// críticos para el primer render (la burbuja además aparece a los 4s), así que
// su código sale del bundle inicial vía next/dynamic.
import dynamic from "next/dynamic";

const MagneticCursor = dynamic(
  () =>
    import("@/components/primitives/MagneticCursor").then(
      (m) => m.MagneticCursor,
    ),
  { ssr: false },
);

const FimiLiveBubble = dynamic(
  () =>
    import("@/components/sections/FimiLiveBubble").then((m) => m.FimiLiveBubble),
  { ssr: false },
);

export function ClientOverlays() {
  return (
    <>
      <MagneticCursor />
      <FimiLiveBubble />
    </>
  );
}
