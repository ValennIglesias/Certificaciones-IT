# Spec: sitio de nicho (certificaciones IT) — para construir con Claude Code

## Qué es esto
Sitio de contenido en español sobre certificaciones IT y carrera en tecnología (CompTIA, Cisco, AWS, Azure, ITIL, etc.), monetizado con Google AdSense. El contenido y las keywords ya están definidos por fuera de este brief — tu trabajo acá es la infraestructura del sitio, no la estrategia de contenido.

## Stack
- **Framework**: Astro (SSG), con integración MDX y Tailwind
- **Contenido**: Astro Content Collections. Cada artículo es un archivo `.md`/`.mdx` con frontmatter:
  - `title`, `description`, `keyword`, `cluster`, `pubDate`, `author`, `draft` (boolean)
- **Hosting objetivo**: Vercel (plan gratuito), conectado a un dominio propio
- **Sin backend/DB**: todo el contenido vive como archivos en el repo

## Qué construir
1. Proyecto Astro nuevo con MDX + Tailwind configurados
2. Content collection `articles` con el schema de arriba (usar `astro:content` con Zod)
3. Layout base: header, footer, y un componente `SEO.astro` que arma `<title>`, meta description y Open Graph dinámicamente desde el frontmatter de cada página
4. Rutas:
   - `/` — home con últimos artículos
   - `/[cluster]/` — listado de artículos por cluster (5 clusters: entrada, redes, seguridad, cloud, carrera)
   - `/[cluster]/[slug]/` — plantilla de artículo individual
5. `sitemap.xml` automático (`@astrojs/sitemap`) y `robots.txt`
6. Schema.org (`Article`, `BreadcrumbList`) inyectado en el layout de artículo
7. Páginas estáticas: `/sobre-nosotros` y `/politica-de-privacidad` (contenido placeholder está bien, se completa después — son requisito de AdSense)
8. Espacio reservado en el layout (comentado o detrás de una env var) para:
   - Script de Google Analytics (GA4)
   - Meta tag de verificación de Search Console
   - Script de Google AdSense (se activa recién cuando la cuenta esté aprobada, no antes)
9. Imágenes con `astro:assets` (optimización automática)
10. Config de deploy a Vercel (archivo `vercel.json` si hace falta, o config por defecto de Astro)

## Fuera de alcance para Claude Code
No decidir: qué keywords usar, en qué orden publicar los clusters, ni el contenido de los artículos. Eso ya está definido aparte.

## Checklist de calidad antes de dar por terminado
- [ ] `astro build` corre sin errores
- [ ] Lighthouse/PageSpeed en verde (performance, SEO)
- [ ] `sitemap.xml` se genera y lista todas las rutas
- [ ] Cada página tiene `<title>` y meta description únicos
- [ ] El sitio funciona sin JS (contenido igual visible — es SSG)
