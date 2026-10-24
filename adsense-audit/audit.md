# AdSense Compliance Audit

URL: https://desdeceroit.com/
Fecha: 24/10/2026
Contexto: re-auditoría tras el rechazo de AdSense por **"Contenido de poco valor"** (Low value content). Reemplaza la auditoría anterior (CONDITIONAL PASS, 79/100), que subestimó el peso del aporte propio y de la madurez del sitio.
Evidencia: los 28 artículos del repo (`main`, commit `7b01426`), el build local, el historial de git, el sitio publicado y la guía oficial de Google "Contenido y experiencia de usuario" (support.google.com/adsense/answer/10015918). Detalle por artículo en `docs/auditoria-contenido.md`.

## Executive Summary

Overall Score: **68/100 — Needs Significant Improvements** (promedio simple de las cinco dimensiones).
Approval Probability: **baja (≈15–25%) si se vuelve a enviar ahora**; razonable después de 60–90 días con los cambios de abajo y tráfico orgánico creciente.

El sitio no tiene problemas de políticas de contenido ni de spam en sentido estricto, y la parte técnica está bien. El rechazo es por valor: la mayoría de los artículos reordenan documentación oficial sin enlazarla y sin experiencia propia. Además, el sitio tiene ~5 semanas, publicó en ráfagas y casi no tiene tráfico. Los tres criterios del rechazo (información auténtica de calidad, mantenimiento continuo, interés genuino de los usuarios) apuntan a eso, no a una página puntual.

| Dimensión | Puntaje | Motivo principal |
| --- | --- | --- |
| Content Quality | 55 | 18 de 28 artículos sin aporte propio; 0 fuentes enlazadas; 4 artículos de menos de 500 palabras |
| Policy Compliance | 85 | Sin contenido prohibido ni restringido; riesgo de percepción de contenido a escala por plantilla y ráfagas |
| Trust Signals | 72 | Autor real y bien presentado; fechas anteriores al primer commit; promesas de temas sin contenido |
| UX Quality | 86 | Navegación clara, mobile correcto, sin enlaces rotos; portada sin autor y categorías sin texto propio |
| Monetization Readiness | 42 | Sitio de ~5 semanas, tráfico orgánico mínimo, sin historial |

## Critical Issues

1. **La mayoría del contenido no aporta valor propio sobre la documentación oficial.** *Confirmado.* Solo 3 artículos tienen experiencia en primera persona y 7 análisis propio; 18 reordenan fichas, temarios y precios de Cisco, CompTIA, AWS o Microsoft. Es justo lo que Google describe como contenido que no agrega "valor sustancial" frente a otros sitios. — *AdSense Program Policies — Low value content; Google Spam Policies — Thin content (contenido sin valor añadido).*
2. **Ninguna fuente enlazada.** *Confirmado.* 1 enlace externo en 28 artículos. Ocho artículos dicen "verificado en las páginas oficiales", pero el lector y el revisor no pueden comprobarlo. En un sitio de precios, temarios y sueldos, eso convierte datos correctos en afirmaciones sin respaldo. — *Search Quality Rater Guidelines — E-E-A-T (Trust); AdSense — Low value content.*
3. **Madurez e interés de usuarios insuficientes.** *Confirmado (dato de Search Console y del repo).* Primer commit el 19/09/2026; tráfico orgánico de pocas decenas de clics. El mensaje de rechazo pide "presencia constante en la Web" e "interés genuino": no se arregla editando. — *AdSense — Site eligibility / Low value content.*

## High Priority Issues

4. **Patrón de plantilla visible.** *Confirmado.* "Lo esencial" con 5 viñetas al inicio y "Qué hacer ahora" al cierre en 22 de 28 artículos; secciones calcadas ("Cómo prepararlo", "Vigencia y renovación"). Sumado a las ráfagas, se parece a contenido producido a escala. — *Spam Policies — Scaled content abuse (riesgo de percepción, no violación).*
5. **Publicación en ráfagas.** *Confirmado.* 8 artículos el 26/09 y 6 el 20/10. — *Spam Policies — Scaled content abuse (riesgo potencial).*
6. **Artículos finos.** *Confirmado.* security-plus-vale-la-pena (296 palabras), aws-o-azure-cual-elegir (372), fundamentos-de-redes-para-certificarte (463), cissp-requisitos-costo-experiencia (482). — *Spam Policies — Thin content.*
7. **Dos artículos con la misma intención.** *Confirmado.* security-plus-vale-la-pena repite dominios, formato y precio de examen-comptia-security-plus. — *AdSense Content guidance — "muchas páginas casi idénticas: ampliarlas o combinarlas".*
8. **Fechas de publicación anteriores al sitio.** *Riesgo potencial.* 8 artículos con `pubDate` anterior a su primer commit (hasta el 05/09, con el repo creado el 19/09). Si no hubo una versión previa publicada, es una fecha que no corresponde. — *Search Quality Guidelines — Trust; Google guía de fechas en la Búsqueda.*

## Medium Priority Issues

9. **El sitio promete temas que no tiene.** *Confirmado.* La descripción general y las de categorías nombran ITIL, Network+, ITF+, Google IT Support, CySA+, CEH y Google Cloud, sin artículos. Google pide que el sitio entregue lo que promete. — *AdSense Content guidance — navegación y contenido prometido.*
10. **Páginas de categoría sin texto propio.** *Confirmado.* Solo una línea de descripción y el listado. No muestran criterio editorial ("selección y mantenimiento estructural"). — *AdSense — Low value content.*
11. **El autor no aparece en la portada.** *Confirmado.* La autoría solo se ve dentro de cada artículo y en /autor/. — *Search Quality Guidelines — E-E-A-T.*
12. **Texto repetido entre pares.** *Confirmado.* La ficha del examen CCST (2 artículos) y el párrafo del descuento de NetAcad (2 artículos). Volumen bajo, pero es lo único que el análisis de similitud marcó. — *AdSense Content guidance — contenido duplicado entre páginas.*
13. **Cifras de sueldos sin fuente enlazada.** *Confirmado* en cuanto-gana-ingeniero-informatica. — *E-E-A-T (Trust).*
14. **Afirmaciones sin respaldo.** *Confirmado:* "la mayoría de los candidatos termina bastante antes" (AZ-900); "el proveedor con más cuota de mercado global" (AWS vs Azure). — *E-E-A-T (Trust).*

## Low Priority Issues

15. "Sobre nosotros" sin foto ni LinkedIn (sí están en /autor/). — *Trust.*
16. Artículo temáticamente periférico: despues-de-fundamentos-de-analisis-de-datos. — *AdSense Content guidance — texto no relacionado con la temática.* Duda, no violación.

## Content Quality Assessment

28 artículos, mediana ≈ 900 palabras, con tablas útiles y enlazado interno denso. La similitud entre artículos es baja (Jaccard de 5-gramas máximo 0,078): no hay contenido duplicado ni copiado entre páginas. Lo que falla es el aporte: los artículos con experiencia propia (soporte → infraestructura, primer CV, primera entrevista) y los de análisis propio (diferencias v1.1/v2.0 del CCNA, equivalencia Networking Essentials ↔ Técnico en Redes, el descuento de NetAcad) son los que un revisor consideraría de valor. El resto es correcto pero sustituible por la página oficial.

## Publisher Policy Assessment

Sin contenido para adultos, peligroso, violento, de odio, engañoso, ni infracciones de derechos de autor detectadas. Los datos de Cisco y CompTIA están parafraseados, no copiados. **Sin violaciones confirmadas.**

## Publisher Restriction Assessment

Sin alcohol, apuestas, citas, salud ni política. **Sin restricciones aplicables.**

## Invalid Traffic Assessment

Sin incentivos a clics, sin tráfico pagado, sin ubicaciones engañosas: los espacios de anuncios están desactivados (`PUBLIC_ADSENSE_ENABLED=false`) y los anuncios automáticos apagados. **Sin riesgo detectado.**

## Spam Policy Assessment

Sin cloaking, contenido oculto, páginas puerta ni dominios caducados. El único riesgo es de percepción: **contenido a escala** (plantilla repetida + ráfagas de publicación) y **contenido fino** en 4 artículos. *Riesgo potencial, no violación confirmada.*

## Trust & Transparency Assessment

Bien: autor con nombre real, foto, LinkedIn, trayectoria honesta (declara el AZ-900 sin rendir), contacto por correo propio, política de privacidad, cookies y aviso legal, declaración de independencia y de financiamiento. Falta: fuentes enlazadas, autor visible en la portada, fechas coherentes con la historia del sitio y descripciones que no prometan temas inexistentes.

## User Experience Assessment

Navegación por cinco categorías sin solapamiento, breadcrumbs, índice en cada artículo, modo oscuro, tablas legibles en mobile (corregido el 20/10), sin enlaces rotos y sin noindex fuera de la 404. Mejorable: las páginas de categoría no orientan ("por dónde empiezo") y la portada no dice quién escribe.

## Monetization Assessment

Temática con buen valor publicitario (formación y certificaciones IT), audiencia hispanohablante con España como primer país. Pero sin tráfico no hay caso comercial, y Google lo evalúa ("interés que justifique una asociación publicitaria").

## Revenue Optimization Opportunities

Prematuro hasta la aprobación. Después: priorizar los clusters con impresiones (NetAcad/CCNA), y medir con GA4 qué artículos retienen antes de activar espacios.

## Ad Placement Recommendations

Sin cambios: mantener los espacios desactivados durante la revisión. Tras la aprobación, empezar con un anuncio en el cuerpo y otro al final del artículo (marcadores ya implementados), sin anuncios automáticos hasta medir.

## Approval Readiness Verdict

**FAIL** (confirmado por el rechazo). Volver a enviar sin cambios de contenido y sin más historial tiene alta probabilidad de un segundo rechazo.
