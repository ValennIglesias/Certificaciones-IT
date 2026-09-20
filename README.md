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
| Cookies | Banner propio con Google Consent Mode v2, sin librerías |
| Diseño | Sistema Swiss propio: un acento por cluster, modo oscuro opcional |
| Hosting | Vercel (plan gratuito) |

El sitio envía **0 archivos JavaScript**. Lo único que viaja es ~0,9 kB de
script inline, sin request extra: el conmutador de tema y, si activás GA4 o
AdSense, el banner de consentimiento. El contenido es legible al 100% con
JavaScript desactivado; sin JS el sitio queda en modo claro, que es el
canónico.

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
author: "Valentín"
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
| `PUBLIC_ADSENSE_SLOT_ARTICLE` | Id del bloque dentro del artículo |
| `PUBLIC_ADSENSE_SLOT_CATEGORY` | Id del bloque en los listados por categoría |
| `PUBLIC_ADSENSE_SLOT_HOME` | Id del bloque en la home |

En Vercel se cargan en *Settings → Environment Variables*. Cambiarlas requiere
un redeploy: son valores de build, no de runtime.

### Banner de cookies

Implementado en [`src/components/ConsentBanner.astro`](src/components/ConsentBanner.astro), sin
librerías de terceros. Cómo funciona:

1. [`Analytics.astro`](src/components/Analytics.astro) fija **Consent Mode v2 en `denied`** en el
   `<head>`, antes de que exista cualquier etiqueta de Google (`ad_storage`, `ad_user_data`,
   `ad_personalization` y `analytics_storage`).
2. Los scripts de GA4 y AdSense **no están en el HTML**. Se crean con `createElement` y se insertan
   en el DOM recién cuando el usuario pulsa «Aceptar».
3. La decisión se guarda en `localStorage` (`cit:consent`), así el banner no vuelve a aparecer.
4. «Rechazar» y «Aceptar» son dos botones del mismo tamaño, uno al lado del otro, a un clic.
5. El enlace **«Preferencias de cookies»** del footer reabre el banner. Si se retira un
   consentimiento previo, se borran las cookies `_ga*`/`_gcl*` y se recarga la página para que no
   quede nada cargado.

**El banner solo se renderiza si hay algo que consentir.** Con `PUBLIC_GA_ID` vacío y
`PUBLIC_ADSENSE_ENABLED` en `false`, no se emite ni el banner ni JavaScript alguno.

Para probarlo en local:

```bash
PUBLIC_GA_ID="G-TEST123456" npm run build && npm run preview
```

### AdSense

Los ids de bloque **no están en el código**: cada ubicación los toma de su
variable de entorno. Los componentes reciben una ubicación (`placement`), no un
id:

```astro
<AdSlot placement="article" />    <!-- usa PUBLIC_ADSENSE_SLOT_ARTICLE -->
<AdSlot placement="category" />   <!-- usa PUBLIC_ADSENSE_SLOT_CATEGORY -->
<AdSlot placement="home" />       <!-- usa PUBLIC_ADSENSE_SLOT_HOME -->
```

**Falla cerrado.** Un bloque se renderiza solo si AdSense está activado *y* su id
existe *y* no es un placeholder (un id de solo ceros, o con cualquier carácter
no numérico, se descarta). Si algo falta, no se renderiza nada: ni el anuncio ni
un hueco vacío. La validación es por ubicación, así que un id faltante no afecta
a los demás.

Para que el fallo no sea silencioso, el build imprime un aviso nombrando las
variables que falten:

```
[adsense] PUBLIC_ADSENSE_ENABLED="true" pero estos ids faltan o siguen
          en un valor placeholder:
            - PUBLIC_ADSENSE_SLOT_CATEGORY
          Esos bloques de anuncios NO se van a renderizar.
```

Pasos para encenderlo, una vez aprobada la cuenta: cargá `PUBLIC_ADSENSE_CLIENT`
y los tres ids de bloque, poné `PUBLIC_ADSENSE_ENABLED="true"` y redeployá.

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
├─ components/          SEO, Header, Footer, ArticleRow, Breadcrumbs, AdSlot,
│                      Analytics, ConsentBanner, ThemeToggle, JsonLd
├─ content/articles/    los artículos, una carpeta por cluster
├─ layouts/             BaseLayout, ArticleLayout, PageLayout
├─ lib/
│  ├─ articles.ts       filtrado de borradores, orden, slugs, fechas
│  └─ analytics.ts      lectura central de las env vars de Google
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
