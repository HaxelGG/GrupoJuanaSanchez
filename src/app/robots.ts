import type { MetadataRoute } from "next";

const SITE = "https://grupojuanasanchez.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
