# Desde Cero IT

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
| Hosting | Cloudflare Pages (plan gratuito, permite uso comercial) |

El código del sitio envía **0 archivos JavaScript**. Lo único que viaja es
~0,9 kB de script inline, sin request extra: el conmutador de tema y, si activás
GA4 o AdSense, el banner de consentimiento. Aparte, Cloudflare inyecta su script
de Web Analytics (`beacon.min.js`, sin cookies), declarado en las políticas de
privacidad y de cookies. El contenido es legible al 100% con
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
| `PUBLIC_ADSENSE_SLOT_ARTICLE` | Id del bloque de los artículos: antes del primer H2, en el medio de los largos y al final |
| `PUBLIC_ADSENSE_SLOT_CATEGORY` | Id del bloque en los listados por categoría |
| `PUBLIC_ADSENSE_SLOT_HOME` | Id del bloque en la home |

En Cloudflare Pages se cargan en *Settings → Variables and Secrets*. Cambiarlas
requiere un redeploy: son valores de build, no de runtime.

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

## Deploy en Cloudflare

El plan Hobby de Vercel no permite uso comercial (publicidad incluida), así que
el sitio se publica en Cloudflare (ver `docs/SPEC-v2.md`, sección 1). El
proyecto `certificaciones-it` es un **Worker con assets estáticos**, importado
desde GitHub: cada push a `main` lo vuelve a compilar y publicar.

- **Build:** comando `npm run build`, salida `dist`. La versión de Node sale de
  `.node-version`.
- **Variables:** van en *Settings → Build → Variables and secrets*, que son las
  que ve el build. Las de *Settings → Variables and Secrets* son de ejecución y
  este sitio estático no las lee: `SITE_URL` cargada ahí no tiene efecto.
  Cambiar una variable requiere volver a desplegar.
- **Dominio:** `desdeceroit.com` conectado al Worker. `www` redirige con 301
  por una Redirect Rule, y *SSL/TLS → Edge Certificates → Always Use HTTPS*
  está activado (sin eso, `http://www` daba error 522).
- **`workers.dev`:** conviene desactivarlo en *Settings → Domains & Routes*
  para que la única copia pública sea el dominio propio.

Dos archivos de `public/` se copian a la raíz de `dist/` y Cloudflare los
aplica:

- `_headers`: caché inmutable para `/_astro/*` y cabeceras de seguridad.
- `_redirects`: `/sitemap.xml` → `/sitemap-index.xml`.

Las URLs llevan barra final (`/cloud/aws-o-azure-cual-elegir/`); el canonical,
el sitemap y los enlaces internos coinciden en esa forma. Una URL sin barra
redirige a la versión con barra.

## Antes de pedir la aprobación de AdSense

El checklist completo está en `docs/SPEC-v2.md`, sección 10. Lo que queda del
lado del código está hecho; falta lo que depende del dominio y de los paneles:

- [ ] Sitio en Cloudflare Pages con el dominio propio y `SITE_URL` cargada.
- [ ] Search Console verificado por registro DNS TXT en Cloudflare, y el
      sitemap enviado.
- [ ] `PUBLIC_GA_ID` y `PUBLIC_ADSENSE_CLIENT` cargadas como variables de build
      (esta última publica el script de AdSense y el meta tag de verificación;
      `/ads.txt` es un archivo fijo en `public/`).
- [ ] Textos legales revisados por un profesional.
- [ ] PageSpeed en verde sobre el dominio real, en móvil.

## Estructura

```
src/
├─ assets/              imágenes optimizadas por astro:assets
├─ components/          SEO, Header, Footer, ArticleRow, Breadcrumbs, AdSlot,
│                      Analytics, ConsentBanner, ThemeToggle, JsonLd,
│                      AuthorBox, TableOfContents
├─ content/articles/    los artículos, una carpeta por cluster
├─ layouts/             BaseLayout, ArticleLayout, PageLayout
├─ lib/
│  ├─ articles.ts       filtrado de borradores, orden, slugs, fechas, relacionados
│  ├─ authors.ts        autor: página, foto opcional y schema Person
│  ├─ analytics.ts      lectura central de las env vars de Google
│  └─ ad-anchors-plugin.mjs  marcadores de anuncios dentro del cuerpo
├─ pages/
│  ├─ index.astro              /
│  ├─ [cluster]/index.astro    /entrada/, /redes/, ...
│  ├─ [cluster]/[slug].astro   /entrada/mi-articulo/
│  ├─ autor/[slug].astro       /autor/valentin-iglesias/
│  ├─ sobre-nosotros.astro, contacto.astro, aviso-legal.astro
│  ├─ politica-de-privacidad.astro, politica-de-cookies.astro
│  ├─ 404.astro
│  ├─ robots.txt.ts
├─ consts.ts            nombre del sitio, titular, autores, clusters, menú
└─ content.config.ts    schema Zod de la colección
```
