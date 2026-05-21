// OG image dinámico — brief §9.1. Foto de la niña + tipografía sobre overlay.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Grupo Juana Sánchez — Cincuenta años cosiendo memoria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/assets/images/girl-hero.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#2A2620",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 18%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(42,38,32,0.78) 0%, rgba(42,38,32,0.30) 50%, rgba(42,38,32,0.12) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(244,239,230,0.85)",
            }}
          >
            Caravaca de la Cruz · Murcia · España
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 92,
                lineHeight: 1.04,
                color: "#F4EFE6",
                fontWeight: 600,
              }}
            >
              Grupo Juana Sánchez
            </div>
            <div
              style={{
                fontSize: 34,
                color: "rgba(244,239,230,0.92)",
                maxWidth: 760,
              }}
            >
              Un legado. Tres firmas. Cincuenta años fabricando lo único que no
              caduca.
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: "#9C7B7F",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
