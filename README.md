# Grupo Juana Sánchez — Landing

Landing page editorial para **Grupo Juana Sánchez** — un legado, tres firmas:
Juana Sánchez (ceremonia) · Lolikas (moda) · Printellar (taller técnico).
Pieza de branding, no de venta: la conversión sucede en las tiendas externas.

**En vivo:** proyecto Vercel `grupo-juana-sanchez` → dominio final `grupojuanasanchez.com`.

## Stack

- **Next.js 15** (App Router, RSC) · TypeScript estricto
- **Tailwind CSS 4** + variables OKLCH · **shadcn/ui** (base-nova)
- **Motion** (animaciones) · **Lenis** (smooth scroll)
- **react-hook-form + zod** (formularios) · **Resend** (captura de leads)
- Deploy en **Vercel** (Git integration: push a `main` → deploy)

## Desarrollo

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de producción
pnpm exec tsc --noEmit
```

## Estructura

```
src/
  app/            layout, page, globals.css
  components/
    sections/     los 15 componentes de sección de la landing
    ui/           componentes shadcn
  lib/            fonts, site (constantes), utils
  styles/         landing.css — CSS de la spec portado
public/assets/    images · video · logos
docs/             brief del proyecto + spec visual (no se deploya)
scripts/          extract-assets · vercel-deploy (fallback REST)
```

## Deploy

El proyecto está conectado a Vercel por Git: cada push a `main` dispara un
deploy de producción; cada rama/PR genera un preview.

Fallback manual (si el CLI de Vercel falla con el token):
```bash
VERCEL_TOKEN=xxx node scripts/vercel-deploy.mjs [--prod]
```

## Plan de fases

Ver `docs/CLAUDE-CODE-BRIEF.md` §13 y `docs/CLAUDE-CODE-BRIEF-v2-ADDENDUM.md`.

- **Fase 0** — Setup (Next + shadcn + deps + assets) ✅
- **Fase 1** — Estructura: 15 secciones, maqueta estática ✅
- **Fase 2** — Countdown en vivo + formulario de captura de email
- **Fase 3** — Animaciones premium + cambios del addendum v2
  (reorden de secciones, FimiLiveBubble, WhatsApp en nav, cursor magnético)
- **Fase 4** — SEO + performance (OG image, schema.org, next/image)
- **Fase 5** — Deploy producción + dominio `grupojuanasanchez.com`
