# Certificaciones IT

Sitio de contenido en español sobre certificaciones IT y carrera en tecnología.
Astro en modo estático (SSG), sin backend ni base de datos: cada artículo es un
archivo en el repo.

## Stack

| Pieza | Qué se usa |
| --- | --- |
| Framework | Astro 7 (`output: static`) |
| Contenido | Content Collections + `glob` loader, validado con Zod |
| Markdown | `.md` y `.mdx` (`@astrojs/mdx`) |
| Estilos | Tailwind CSS 4 (plugin de Vite) + `@tailwindcss/typography` |
| Imágenes | `astro:assets` (WebP y `srcset` automáticos) |
| SEO | `@astrojs/sitemap`, `robots.txt` generado, Schema.org |
| Hosting | Vercel (plan gratuito) |

El sitio no envía **ningún** JavaScript al cliente: funciona entero con JS
desactivado.

## Puesta en marcha

```bash
npm install
cp .env.example .env   # y completá SITE_URL
npm run dev            # http://localhost:4321
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo (muestra también los borradores) |
| `npm run build` | `astro check` + build de producción en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el build final |

## Escribir un artículo

Creá un `.md` o `.mdx` en `src/content/articles/<cluster>/<slug>.md`. La carpeta
es una convención de orden; **la URL se arma con el frontmatter**:
`/<cluster>/<nombre-del-archivo>/`.

```yaml
---
title: "Cómo empezar en IT sin experiencia previa"   # máx. 120 caracteres
description: "Qué certificación conviene..."          # máx. 200, única por página
keyword: "como empezar en it sin experiencia"         # keyword principal
cluster: "entrada"                                    # entrada | redes | seguridad | cloud | carrera
pubDate: 2026-09-15
author: "Equipo Certificaciones IT"
draft: false

# Opcionales
updatedDate: 2026-09-20
heroImage: "../../../assets/mi-imagen.jpg"            # relativa al .md
heroAlt: "Texto alternativo de la imagen"
---
```

Reglas que impone el schema (`src/content.config.ts`): si falta un campo
obligatorio o el `cluster` no es uno de los cinco, **el build falla**. Es a
propósito: mejor romper el build que publicar una página sin description.

- `draft: true` → visible en `npm run dev`, excluido del build de producción y
  del sitemap.
- Las imágenes van en `src/assets/` para que `astro:assets` las optimice. Las de
  `public/` se sirven tal cual, sin optimizar.

## Clusters

Los cinco clusters están definidos en [`src/consts.ts`](src/consts.ts) (nombre,
descripción y orden del menú). Para agregar o renombrar uno, se toca ese archivo
y el resto —rutas, menú, footer, sitemap— se actualiza solo.

## Variables de entorno

Todas son opcionales salvo `SITE_URL`. Si una está vacía, la integración
correspondiente no emite absolutamente nada (cero requests). Ver
[`.env.example`](.env.example).

| Variable | Para qué |
| --- | --- |
| `SITE_URL` | Dominio de producción. Alimenta canonical, Open Graph, sitemap y robots.txt |
| `PUBLIC_GA_ID` | Google Analytics 4 (`G-XXXXXXXXXX`) |
| `PUBLIC_GSC_VERIFICATION` | Meta tag de verificación de Search Console |
| `PUBLIC_ADSENSE_CLIENT` | Id de AdSense (`ca-pub-...`) |
| `PUBLIC_ADSENSE_ENABLED` | `"true"` **solo** cuando AdSense apruebe la cuenta |

En Vercel se cargan en *Settings → Environment Variables*. Cambiarlas requiere
un redeploy: son valores de build, no de runtime.

### AdSense

1. Los huecos ya están reservados en el layout (`src/components/AdSlot.astro`),
   con altura mínima para que encender los anuncios no mueva el contenido (CLS).
2. Mientras `PUBLIC_ADSENSE_ENABLED` no sea `"true"`, no se carga el script ni
   se renderiza el `<ins>`.
3. Cuando la cuenta esté aprobada: poné los ids de bloque reales en los
   `adSlot="..."` de `index.astro`, `[cluster]/index.astro` y `ArticleLayout.astro`,
   activá la variable y redeployá.

## Deploy en Vercel

1. Importá el repo en Vercel. Detecta Astro solo; `vercel.json` fija el comando
   de build, el directorio de salida, las cabeceras de caché y el redirect de
   `/sitemap.xml` → `/sitemap-index.xml`.
2. Cargá `SITE_URL` con el dominio final antes del primer deploy de producción.
3. Conectá el dominio propio en *Settings → Domains*.

Las URLs llevan barra final (`/cloud/aws-o-azure-cual-elegir/`); el canonical,
el sitemap y la config de Vercel coinciden en esa forma para no generar
redirecciones ni contenido duplicado.

## Antes de pedir la aprobación de AdSense

- [ ] Completar `/sobre-nosotros` con identidad y correo de contacto reales.
- [ ] Completar `/politica-de-privacidad` (hay TODOs marcados) y hacerla revisar
      según la jurisdicción que corresponda.
- [ ] Reemplazar los artículos de ejemplo por contenido propio.
- [ ] Verificar la propiedad en Search Console y enviar el sitemap.

## Estructura

```
src/
├─ assets/              imágenes optimizadas por astro:assets
├─ components/          SEO, Header, Footer, ArticleCard, Breadcrumbs, AdSlot, Analytics
├─ content/articles/    los artículos, una carpeta por cluster
├─ layouts/             BaseLayout, ArticleLayout, PageLayout
├─ lib/articles.ts      filtrado de borradores, orden, slugs, fechas
├─ pages/
│  ├─ index.astro              /
│  ├─ [cluster]/index.astro    /entrada/, /redes/, ...
│  ├─ [cluster]/[slug].astro   /entrada/mi-articulo/
│  ├─ sobre-nosotros.astro
│  ├─ politica-de-privacidad.astro
│  ├─ 404.astro
│  └─ robots.txt.ts
├─ consts.ts            nombre del sitio, clusters, menú
└─ content.config.ts    schema Zod de la colección
```
