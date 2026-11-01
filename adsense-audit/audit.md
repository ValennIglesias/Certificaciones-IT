# AdSense Compliance Audit

URL: https://desdeceroit.com/
Fecha: 01/11/2026
Contexto: re-auditoría después del rechazo por **"Contenido de poco valor"** y de los cambios hechos desde la auditoría del 24/10/2026 (68/100, FAIL de hecho: "no volver a enviar todavía"). Reemplaza esa auditoría.
Evidencia: los 28 artículos publicados del repo (`main`, commit `a35a838`, ya en producción), el sitio en vivo (texto de páginas, cookies antes del consentimiento, `robots.txt`, `ads.txt`, sitemap, 404, vista móvil 375 px) y el registro del dominio (RDAP de Verisign).
**Evidencia que falta:** datos de Search Console (páginas indexadas, impresiones y clics de las últimas 4 semanas) y el estado actual de la solicitud en AdSense. Sin eso, la parte de "interés genuino de los usuarios" se evalúa a ciegas.

## Executive Summary

Overall Score: **76/100 — Mostly Ready** (promedio simple de las cinco dimensiones).
Approval Probability: **media-baja (≈35–45%) si se reenvía hoy**; razonable (≈60–70%) si se reenvía a principios de diciembre de 2026 con Search Console mostrando impresiones crecientes y la página 404 corregida.

El contenido dejó de ser el problema principal. Desde el rechazo, el sitio sumó fuentes oficiales enlazadas en los 28 artículos, experiencia propia en cerca de la mitad, textos de orientación en las categorías, el autor en la portada, ningún artículo por debajo de ~870 palabras y se fusionó el duplicado de Security+. Lo que sigue en contra es la **madurez**: el dominio se registró el **03/10/2026 (29 días)**, el contenido tiene ~6 semanas y no hay evidencia de tráfico. Eso no se arregla editando.

| Dimensión | Puntaje | Antes (24/10) | Motivo principal |
| --- | --- | --- | --- |
| Content Quality | 74 | 55 | Fuentes en 28/28 y análisis propio; la mitad sin experiencia en primera persona; plantilla todavía reconocible |
| Policy Compliance | 88 | 85 | Sin contenido prohibido ni restringido; riesgo de percepción de contenido a escala (ráfagas, actualización masiva) |
| Trust Signals | 85 | 72 | Autor real, legales completos, fuentes; fechas de artículos anteriores al registro del dominio |
| UX Quality | 82 | 86 | Móvil correcto, categorías con criterio editorial; **la 404 devuelve una página vacía** |
| Monetization Readiness | 50 | 42 | Dominio de 29 días, tráfico sin evidencia, CMP para Europa sin publicar |

## Critical Issues

1. **Madurez del sitio e interés de usuarios sin demostrar.** *Confirmado (dominio) / Sin evidencia (tráfico).* Dominio registrado el 03/10/2026; primer artículo con fecha 19/09/2026. El rechazo por poco valor pide "presencia constante" e "interés genuino": un reenvío inmediato se evalúa con el mismo historial que el rechazo. — *AdSense Program Policies — Low value content / Site eligibility.*

## High Priority Issues

2. **La página 404 llega vacía.** *Confirmado.* `/esto-no-existe/` responde 404 con 0 bytes: el revisor (o un enlace roto) ve una pantalla en blanco, sin navegación. El build sí genera `dist/404.html`, pero el Worker de Cloudflare no está configurado para servirlo (no hay `wrangler.json` en el repo; el default es `not_found_handling: "none"`). — *AdSense — Site navigation / Google Publisher Policies — Ad experience (páginas sin contenido).*
3. **El mensaje para Europa está publicado en AdSense pero Google no lo sirve.** *Confirmado.* Ni forzándolo con `?fc=alwaysshow&fctype=gdpr` se carga la CMP de Google (no hay `__tcfapi` ni pedidos a Funding Choices). El sitio cumple lo que pide la ayuda de Google (etiqueta vigente de la misma cuenta, ventana principal, `Referrer-Policy: strict-origin-when-cross-origin`), así que la causa más probable es que el sitio no está en estado "Listo" tras el rechazo. *A confirmar en AdSense → Sitios.* Google exige una CMP certificada para servir anuncios a usuarios del EEE, Reino Unido y Suiza; el banner propio ya está preparado para cederle el lugar cuando aparezca. — *Google Publisher Policies — EU user consent policy.*
4. **Señales de producción en serie todavía visibles.** *Riesgo potencial, no violación.* 9 artículos con fecha 26/09 y 6 con fecha 20/10; 24 de 28 muestran "Actualizado el 24 de octubre de 2026" (varios publicados 4 días antes); la misma estructura (resumen en viñetas → tablas → "Fuentes" → "Datos verificados el…") en casi todos. Ninguno es contenido genérico, pero el conjunto se parece al patrón que Google describe. Un lote inicial al lanzar el sitio es normal; lo que pesa es el ritmo posterior. — *Spam Policies — Scaled content abuse (percepción).*

## Medium Priority Issues

5. **Fechas de artículos anteriores a la publicación del sitio.** *Confirmado.* 18 artículos tienen `pubDate` entre el 19 y el 28/09/2026 (fecha en que se escribieron), pero el sitio salió el 03/10, el día en que se registró el dominio y se creó el Worker. La fecha visible tiene que ser la de publicación de la página, no la de escritura. Los artículos posteriores al 03/10 sí coinciden con su commit. — *Search Quality Guidelines — Trust; Google Search Central — fechas de publicación.*
6. **La mitad de los artículos no tiene experiencia propia.** *Confirmado.* ~13 de 28 (sobre todo Redes, Cloud y Seguridad) son recopilación ordenada y verificada de documentación oficial, con buen análisis pero sin nada que solo el autor pueda contar. Es la diferencia entre "correcto" y "de valor" para un revisor. — *AdSense — Low value content (originalidad).*
7. **El autor escribe sobre certificaciones que no tiene.** *Confirmado, declarado con honestidad.* El perfil dice "AZ-900: temario estudiado, examen todavía sin rendir" y no hay certificaciones de CompTIA, Cisco o ISC2. La transparencia es buena; la autoridad en temas de examen es limitada. — *Search Quality Guidelines — E-E-A-T (Experience/Expertise).*

## Low Priority Issues

8. **Restos de plantilla.** "## Ficha del examen" en 4 artículos y "Vigencia y renovación" en 3. — *Spam Policies — Scaled content abuse (percepción, menor).*
9. **de-soporte-a-infraestructura sin sección de fuentes.** Es un artículo de experiencia, así que es razonable; si cita datos externos, enlazarlos. — *E-E-A-T (Trust).*
10. **despues-de-fundamentos-de-analisis-de-datos**, temáticamente periférico (análisis de datos en un sitio de infraestructura). Pendiente desde la auditoría anterior. — *AdSense Content guidance — coherencia temática.*

## Content Quality Assessment

**¿Es original?** Sí. No hay texto copiado entre páginas ni de las fuentes: los datos oficiales están parafraseados y reorganizados, y varios artículos tienen análisis que no está en ningún otro lado (la equivalencia módulo por módulo entre Networking Essentials y la ruta gratuita Técnico en Redes, las diferencias CCNA v1.1/v2.0, las condiciones reales del descuento de NetAcad, el orden de revisión de una mesa de ayuda en "PC lenta").

**¿Es de valor?** Mayormente sí. 28 artículos de 870 a 1.500 palabras, con tablas, enlaces a la fuente oficial de cada dato, fecha de verificación y enlazado interno con criterio. Los más fuertes son los que combinan experiencia + dato verificado (soporte técnico, primer CV, de soporte a infraestructura, PC lenta, AZ-900 vs AWS). Los más débiles son las fichas de examen que un lector también encuentra en la página del proveedor.

**¿Parece hecho con IA de forma masiva?** Google no penaliza el uso de IA en sí, sino el contenido a escala sin valor. A favor del sitio: anécdotas específicas y verificables (ServiceDesk Plus, ISTEA, el AZ-900 estudiado y no rendido), opiniones propias, límites declarados y fuentes. En contra: ritmo de publicación alto para una sola persona que trabaja y estudia (28 artículos en 6 semanas, en ráfagas), estructura muy pareja y la misma fecha de actualización en 24 páginas. Un revisor humano que lea dos o tres artículos va a ver contenido cuidado; un sistema que mire patrones puede ver producción en serie. **Riesgo medio de percepción, no violación.**

**¿Es de interés para el lector?** El tema tiene demanda real (certificaciones IT en español, con precios y caminos concretos para Latinoamérica) y el enfoque responde preguntas que se buscan. Que haya interés *demostrado* depende del tráfico, del que no hay evidencia.

## Publisher Policy Assessment

Sin contenido para adultos, peligroso, violento, de odio, engañoso ni malware. La única mención sensible es una advertencia contra los "dumps" de exámenes (AZ-900), que es lo correcto. Imágenes: OG propias por artículo y dos fotos de portada locales; no se detectaron materiales de terceros. **Sin violaciones confirmadas.**

## Publisher Restriction Assessment

Ninguna categoría restringida (alcohol, apuestas, citas, salud, política, religión). El artículo de sueldos es información laboral con fuentes. **Sin restricciones aplicables.**

## Invalid Traffic Assessment

Sin incentivos a clics, sin textos que inviten a tocar anuncios, sin anuncios activos todavía (los bloques dependen de `PUBLIC_ADSENSE_ENABLED`). Los huecos reservados en el cuerpo tienen altura fija y no se confunden con contenido. Sin evidencia de fuentes de tráfico artificiales (falta Search Console/Analytics para confirmarlo). **Riesgo bajo.**

## Spam Policy Assessment

Sin contenido oculto, cloaking, doorway pages ni dominio expirado (registro nuevo, sin historial previo). Las redirecciones 301 son legítimas (fusiones de artículos). Único punto: **Scaled content abuse — riesgo de percepción** por ráfagas y plantilla (ver issue 4). **Sin violaciones confirmadas.**

## Trust & Transparency Assessment

Muy bien resuelto: "Sobre nosotros" con responsable, financiamiento por AdSense e independencia de los certificadores; página de autor con formación real y LinkedIn; contacto por email con propósito claro; aviso legal con titular y domicilio (Buenos Aires); políticas de privacidad y de cookies completas y fechadas. **Cookies:** verificado en producción que antes de aceptar no hay cookies propias, Google Analytics no se carga y Consent Mode v2 está en `denied`; `adsbygoogle.js` se carga para la revisión de la cuenta, como recomienda Google. `ads.txt` correcto (`pub-2261714480132826`). Puntos débiles: fechas anteriores al dominio y la CMP europea sin publicar.

## User Experience Assessment

Navegación por 5 categorías, breadcrumbs, fecha de publicación y de actualización, autor y tiempo de lectura visibles. En móvil (375 px) no hay scroll horizontal y las tablas entran. Banner de cookies con "Aceptar" y "Rechazar" del mismo peso. Categorías con texto de orientación propio. `robots.txt` y sitemap correctos. **Falla:** la 404 vacía.

## Monetization Assessment

Nicho IT/educación, con anunciantes de buen CPC (cursos, bootcamps, proveedores cloud) y contenido 100% apto para anunciantes. El volumen (28 artículos) alcanza para la revisión. Limita la madurez: 29 días de dominio, sin tráfico demostrado y sin la CMP europea.

## Revenue Optimization Opportunities

- Priorizar los artículos de intención comercial alta ya existentes (cuánto cuesta el CCNA, Security+, AZ-900 vs AWS, sueldos): son los que atraen anuncios de formación.
- Publicar la CMP europea para monetizar visitas de España, que es parte del público hispanohablante.
- Sumar 1–2 artículos por semana del cluster "Soporte técnico en la práctica" (PC lenta, impresora): búsquedas de volumen alto que traen tráfico nuevo al sitio.

## Ad Placement Recommendations

- Mantener el esquema actual: anuncios dentro del cuerpo en marcadores con altura reservada (sin CLS), uno en categorías y uno en portada.
- No poner anuncios arriba del primer párrafo ni pegados a tablas o a la sección "Fuentes" (riesgo de clics accidentales).
- En artículos de menos de 1.000 palabras, no más de dos bloques en el cuerpo.
- Activar Auto ads solo después de la aprobación y con los formatos de anclaje e intersticiales revisados en móvil.

## Approval Readiness Verdict

**CONDITIONAL PASS**

El contenido y la parte legal/técnica están en condiciones. La condición es de tiempo y evidencia: corregir la 404, no reenviar antes de principios de diciembre de 2026 y hacerlo solo si Search Console muestra impresiones y clics creciendo, mientras se publica a ritmo constante. Reenviar hoy repite el mismo historial que llevó al rechazo.
