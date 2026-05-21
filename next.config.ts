import type { NextConfig } from "next";

// Headers de seguridad de bajo riesgo (no rompen scripts/estilos inline).
// El Content-Security-Policy se deja aparte: requiere pruebas para no bloquear
// los scripts inline de Next, Motion ni Vercel Analytics.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // AVIF primero (más ligero), WebP de respaldo.
    formats: ["image/avif", "image/webp"],
    // Cachea las imágenes optimizadas más tiempo (antes revalidaban siempre).
    minimumCacheTTL: 2_678_400, // 31 días
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
