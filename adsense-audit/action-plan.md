# AdSense Action Plan

URL: https://desdeceroit.com/
Fecha: 01/11/2026
Contexto: re-auditoría tras el rechazo por "Contenido de poco valor" (76/100, CONDITIONAL PASS). Detalle en `adsense-audit/audit.md`.

## Immediate Fixes

- [ ] Servir la 404 real: agregar al repo la config del Worker con `assets.not_found_handling: "404-page"` (o activarlo desde el panel de Cloudflare) y verificar que `/esto-no-existe/` muestre la página con navegación. — *Issue 2 · AdSense — Site navigation*
- [ ] **No reenviar todavía.** Fecha objetivo: principios de diciembre de 2026, solo si Search Console muestra impresiones y clics creciendo. — *Issue 1 · AdSense — Low value content / Site eligibility*
- [ ] Compartir los datos de Search Console (indexadas, impresiones y clics de 4 semanas) para completar la evaluación de interés de usuarios. — *Issue 1 · Evidencia faltante*

## 30-Day Fixes

- [ ] Publicar el mensaje GDPR en AdSense → Privacidad y mensajes (el banner propio ya le cede el lugar automáticamente). — *Issue 3 · Google Publisher Policies — EU user consent policy*
- [ ] Publicar a ritmo constante, 1–2 artículos por semana en días distintos; nada de ráfagas. — *Issue 4 · Spam Policies — Scaled content abuse (percepción)*
- [ ] Al revisar artículos, actualizar `updatedDate` solo cuando cambia el contenido, no todos el mismo día. — *Issue 4 · Scaled content abuse (percepción)*
- [ ] Confirmar si los 18 artículos con fecha 19–28/09 se publicaron antes en `*.workers.dev`; si no, alinear `pubDate` con la fecha real de publicación. — *Issue 5 · Trust*
- [ ] Sumar experiencia propia a 3–4 artículos de Redes/Seguridad/Cloud donde exista (cómo estudiás, qué te costó entender, qué viste en el trabajo). — *Issue 6 · Low value content (originalidad)*

## 90-Day Improvements

- [ ] Rendir el AZ-900 y escribir la experiencia real (o actualizar el perfil cuando ocurra). — *Issue 7 · E-E-A-T*
- [ ] Variar la estructura: renombrar o fundir las secciones "Ficha del examen" y "Vigencia y renovación" donde no aporten. — *Issue 8 · Scaled content abuse (percepción)*
- [ ] Enlazar las fuentes externas que cite de-soporte-a-infraestructura, si las hay. — *Issue 9 · E-E-A-T (Trust)*
- [ ] Decidir si despues-de-fundamentos-de-analisis-de-datos se mantiene, se reorienta a infraestructura o pasa a noindex. — *Issue 10 · Coherencia temática*
- [ ] Crear contenido que solo este sitio puede tener: datos propios (vacantes relevadas a mano), costo total del examen por país, más guías de "Soporte técnico en la práctica". — *Low value content (originalidad)*
