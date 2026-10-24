# Auditoría de contenido — desdeceroit.com

Fecha: 24/10/2026. Motivo: rechazo de AdSense por "Contenido de poco valor".
Base: los 28 archivos de `src/content/articles/` en `main` (commit `7b01426`),
el build local y el historial de git. Diagnóstico solamente: no se movió ni
fusionó ningún artículo.

## Resumen en diez líneas

1. 28 artículos, entre 296 y 1.259 palabras (mediana ≈ 900). No hay copia entre artículos: la similitud máxima entre pares es baja (ver abajo).
2. El problema no es duplicación, es **aporte propio**: solo 3 artículos tienen experiencia en primera persona; 7 más tienen análisis propio (cálculo, comparación, hallazgo). Los otros 18 reordenan documentación oficial.
3. **Ningún artículo enlaza a sus fuentes oficiales** (1 enlace externo en 28 artículos), aunque 8 dicen "verificado en las páginas oficiales".
4. Plantilla visible: "Lo esencial" con 5 viñetas al inicio y "Qué hacer ahora" al cierre en 22 de 28 artículos.
5. Ritmo de publicación en ráfagas: 8 artículos el 26/09 y 6 el 20/10.
6. 8 artículos tienen `pubDate` anterior a su primer commit (hasta 14 días antes del primer commit del repo).
7. Las descripciones del sitio y de 4 categorías prometen temas que no existen (ITIL, Network+, ITF+, Google IT Support, CySA+, CEH, Google Cloud).
8. Clasificación propuesta: **13 mantener, 10 ampliar, 4 en dos pares de fusión (uno en duda), 0 retirar seguros** y 1 duda temática (mantener o noindex).
9. Sin noindex, sin enlaces internos rotos, sin títulos ni descripciones duplicados, todas las páginas con enlaces entrantes.
10. Lo que ninguna edición resuelve: el sitio tiene ~5 semanas y tráfico mínimo. Google pide "presencia constante en la Web" e "interés genuino de los usuarios", y eso solo se construye con tiempo.

## Tabla por artículo

Palabras: cuerpo sin frontmatter, sin comentarios ni componentes. Fuentes: enlaces a páginas oficiales del proveedor.
Aporte propio: **Exp** = experiencia en primera persona; **Análisis** = cálculo, comparación o hallazgo propio; **No** = reordena documentación oficial.

| Artículo | Palabras | H2 | Tablas | Fuentes | Aporte propio | pubDate / updatedDate | Keyword | Intención |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| carrera/cuanto-gana-ingeniero-informatica | 1122 | 6 | 4 | 0 | No (cifras de terceros sin enlazar) | 26/09 | sueldo ingeniero informático | precio/sueldo |
| carrera/de-soporte-a-infraestructura | 899 | 6 | 1 | 0 | **Exp**: "En mi caso, la práctica vino antes que la certificación y que la carrera" | 26/09 | soporte → administrador de sistemas | experiencia |
| carrera/estudiar-certificacion-trabajando-full-time | 771 | 5 | 1 | 0 | No: "patrones que se repiten en comunidades" (sin fuente) | 26/09 | estudiar certificación trabajando | ruta de estudio |
| carrera/primer-cv-para-un-puesto-it | 930 | 6 | 1 | 0 | **Exp**: "Mi primer CV para un puesto de IT tenía un solo proyecto propio" | 05/09 · 09/10 | CV IT sin experiencia | experiencia |
| carrera/roadmap-certificaciones-it | 769 | 5 | 4 | 0 | Análisis (hub con diagrama propio) | 26/09 | roadmap certificaciones IT | ruta de estudio |
| cloud/aws-cloud-practitioner-guia-completa | 670 | 7 | 1 | 0 | No | 22/09 | aws cloud practitioner | temario/ruta |
| cloud/aws-o-azure-cual-elegir | 372 | 4 | 1 | 0 | Opinión sin datos: "es el proveedor con más cuota de mercado global" | 08/09 | az 900 vs aws cloud practitioner | comparación |
| cloud/curso-az-900-opciones | 825 | 6 | 2 | 0 | No | 26/09 | curso az-900 | ruta de estudio |
| cloud/examen-az-900-formato-y-preparacion | 869 | 6 | 3 | 0 | No; afirmación sin fuente: "la mayoría de los candidatos termina bastante antes" | 24/09 | examen az-900 | temario/formato |
| entrada/certificacion-comptia-a-plus | 757 | 6 | 1 | 1 | No | 20/09 | comptia a+ | precio/temario |
| entrada/como-empezar-en-it-sin-experiencia | 1172 | 8 | 2 | 0 | **Exp**: "En mi primera entrevista para un puesto de IT no me preguntaron nada técnico" | 15/09 · 05/10 | empezar en IT sin experiencia | experiencia |
| entrada/despues-de-fundamentos-de-analisis-de-datos | 972 | 5 | 2 | 0 | Análisis menor (catálogo comparado) | 20/10 | fundamentos de análisis de datos cisco | ruta de estudio |
| redes/ccna-1-2-3-cursos-netacad | 856 | 6 | 2 | 0 | No | 26/09 · 20/10 | ccna 1 | temario |
| redes/ccna-200-301-temario | 813 | 6 | 3 | 0 | Análisis: "los tres primeros suman el 65% del examen" (reparto de horas) | 26/09 · 20/10 | ccna 200 301 | temario |
| redes/ccna-v2-0-cambios | 1259 | 7 | 4 | 0 | **Análisis**: comparación propia de los PDF v1.1 y v2.0 | 20/10 | ccna v2.0 | temario |
| redes/ccst-networking-examen | 1197 | 7 | 4 | 0 | Análisis: lectura de los objetivos ("es un examen de soporte técnico") | 20/10 | ccst networking | temario/precio |
| redes/certificaciones-cisco-mapa-completo | 907 | 6 | 3 | 0 | No | 26/09 · 20/10 | certificaciones en cisco | ruta |
| redes/cisco-networking-academy-como-entrar | 994 | 6 | 1 | 0 | No | 26/09 · 20/10 | cisco networking academy | ruta/precio |
| redes/cuanto-cuesta-el-ccna | 1213 | 6 | 3 | 0 | **Análisis**: el 50% "es de otro programa"; cuándo no conviene Safeguard | 12/10 · 20/10 | costo examen ccna | precio |
| redes/curso-ccna-como-prepararte | 945 | 7 | 3 | 0 | No | 22/09 · 20/10 | curso ccna | ruta de estudio |
| redes/fundamentos-de-redes-para-certificarte | 463 | 5 | 1 | 0 | No | 12/09 | ccna desde cero | temario |
| redes/networking-essentials-cisco | 971 | 7 | 2 | 0 | **Análisis**: equivalencia módulo por módulo con la ruta gratuita | 20/10 | networking essentials cisco | ruta |
| seguridad/ccst-cybersecurity-examen | 1135 | 7 | 3 | 0 | Análisis menor (120 h de la ruta vs 150 h de Cisco) | 20/10 | ccst cybersecurity | temario/precio |
| seguridad/ciberseguridad-desde-cero | 987 | 6 | 3 | 0 | Análisis: cierre del programa gratuito de ISC2 y roles puente | 22/09 · 20/10 | ciberseguridad desde cero | ruta |
| seguridad/cissp-requisitos-costo-experiencia | 482 | 5 | 2 | 0 | No | 24/09 | cissp requisitos | precio/requisitos |
| seguridad/despues-de-introduccion-a-la-ciberseguridad | 857 | 5 | 2 | 0 | Análisis menor (la ruta suma 120 h) | 20/10 | introducción a la ciberseguridad cisco | ruta |
| seguridad/examen-comptia-security-plus | 921 | 8 | 1 | 0 | No | 25/09 | examen comptia security+ | temario/formato |
| seguridad/security-plus-vale-la-pena | 296 | 5 | 0 | 0 | No | 10/09 | security+ | temario/puestos |

Todos los artículos: autor "Valentín".

## Solapamiento

### Similitud numérica

Método: Jaccard sobre 5-gramas de palabras del cuerpo, y además la "contención" (5-gramas compartidos sobre los del artículo más corto). Umbral de alerta: Jaccard ≥ 0,05 o contención ≥ 0,10.

| Par | Jaccard | Contención | Lectura |
| --- | --- | --- | --- |
| ccst-networking-examen / ccst-cybersecurity-examen | 0,078 | 0,149 | **Único par sobre el umbral.** Comparten la ficha del examen casi literal |
| cisco-networking-academy-como-entrar / cuanto-cuesta-el-ccna | 0,028 | 0,062 | Mismo párrafo del descuento de NetAcad |
| ccst-cybersecurity-examen / despues-de-introduccion-a-la-ciberseguridad | 0,024 | 0,055 | Datos del examen repetidos |
| examen-comptia-security-plus / security-plus-vale-la-pena | 0,016 | 0,065 | Bajo en texto, pero misma intención (ver abajo) |
| curso-az-900-opciones / examen-az-900-formato-y-preparacion | 0,013 | 0,027 | Bajo en texto; intenciones vecinas |

El resto de los pares está por debajo de 0,02. No hay contenido duplicado entre páginas en el sentido de la política.

### Bloques de texto repetido (≥ 20 palabras seguidas)

| Bloque | Artículos | Detalle |
| --- | --- | --- |
| Ficha del examen CCST (cantidad de preguntas, puntaje, intentos, requisitos, modalidad) | 2 | ccst-networking-examen y ccst-cybersecurity-examen |
| "CCNA, CCNA Cybersecurity (CBROPS) y CCNA Automation (DEVASC). En la página de descuentos de NetAcad…" | 2 | cisco-networking-academy-como-entrar y cuanto-cuesta-el-ccna |

Estructuras de sección repetidas: "Qué hacer ahora" en 22 artículos; "Cómo prepararlo" en 4; "Errores comunes" en 3; "Vigencia y renovación" en 3. Casi todos abren con "Lo esencial:" y 5 viñetas. No es texto copiado, pero es la huella de una plantilla.

### Pares que compiten por la misma intención

| Par | Veredicto |
| --- | --- |
| security-plus-vale-la-pena (296 palabras) / examen-comptia-security-plus (921) | **Compiten.** El corto repite dominios, formato y precio del largo. Fusionar |
| curso-az-900-opciones / examen-az-900-formato-y-preparacion | **Duda.** "Qué recursos usar" y "cómo es el examen" son intenciones distintas, pero el público y el momento son los mismos. Fusionar o mantener |
| aws-o-azure-cual-elegir / az-900 y aws-cloud-practitioner | No compiten: comparación es intención propia. El problema es que es fino |
| ccna-200-301-temario / ccna-v2-0-cambios / curso-ccna-como-prepararte / ccna-1-2-3 / cuanto-cuesta | No compiten: temario, versión nueva, cómo estudiar, cursos de NetAcad y precio están separados y se enlazan entre sí |
| fundamentos-de-redes-para-certificarte ("ccna desde cero") / curso-ccna-como-prepararte | Vecinos, no iguales: uno es teoría base, el otro rutas de estudio. El primero es fino |
| ccst-networking / ccst-cybersecurity | Keywords distintas (5.000/mes cada una). Solo comparten la ficha: reescribir, no fusionar |
| Los dos "Qué curso hacer después de…" | No compiten: cursos y catálogos distintos |
| cissp / security+ | No compiten: niveles distintos |

### Temática

- `entrada/despues-de-fundamentos-de-analisis-de-datos`: es análisis de datos, no certificaciones IT. Tiene demanda propia (63 impresiones en GSC al 20/10) y deriva a NetAcad y a la serie CCNA. **Duda**: encaja en "carrera en tecnología", pero es el artículo más lejos del eje del sitio.
- `carrera/cuanto-gana-ingeniero-informatica`: sueldos de ingeniería, no de certificaciones. Encaja en "Carrera IT" según la descripción de la categoría.
- El resto encaja.

## Nivel de sitio

| Punto | Estado |
| --- | --- |
| Página del autor | Nombre, foto (320×320), LinkedIn, trayectoria y formación. Declara honestamente AZ-900 "examen todavía sin rendir" |
| Sobre nosotros | Nombre y trayectoria, sin foto ni LinkedIn; enlaza al autor |
| Autor en la portada | **No aparece.** La portada solo muestra el índice |
| Páginas de categoría | Solo una línea de descripción más el listado: **0 palabras propias** más allá de eso |
| Promesas sin contenido | El sitio y las categorías mencionan ITIL, Network+, ITF+, Google IT Support, CySA+, CEH y Google Cloud: ninguno tiene artículo |
| Enlaces internos rotos | 0 |
| Títulos / descripciones / keywords duplicados | 0 / 0 / 0 |
| Páginas sin enlaces entrantes | 0 |
| noindex | Solo la 404 |
| Fechas | 8 artículos con `pubDate` anterior a su primer commit: primer-cv (05/09), aws-o-azure (08/09), security-plus-vale-la-pena (10/09), fundamentos-de-redes (12/09), como-empezar (15/09), curso-ccna (22/09 vs 25/09), examen-az-900 (24/09 vs 26/09), examen-security-plus (25/09 vs 26/09). El primer commit del repo es del 19/09 |
| Ritmo | 8 artículos el 26/09, 6 el 20/10; el resto, uno cada pocos días |

## Clasificación propuesta (no ejecutada)

| Artículo | Propuesta | Razón |
| --- | --- | --- |
| carrera/de-soporte-a-infraestructura | Mantener | Experiencia propia, intención única |
| carrera/primer-cv-para-un-puesto-it | Mantener | Experiencia propia |
| entrada/como-empezar-en-it-sin-experiencia | Mantener | Experiencia propia, el más completo |
| redes/ccna-v2-0-cambios | Mantener | Análisis propio de los PDF; intención única |
| redes/networking-essentials-cisco | Mantener | Hallazgo propio verificable |
| redes/cuanto-cuesta-el-ccna | Mantener | Análisis propio del descuento y Safeguard |
| redes/ccna-200-301-temario | Mantener | Profundidad suficiente; sumar fuentes |
| redes/ccna-1-2-3-cursos-netacad | Mantener | La página con más impresiones; sumar fuentes |
| redes/cisco-networking-academy-como-entrar | Mantener | Intención única; reescribir el párrafo repetido |
| redes/certificaciones-cisco-mapa-completo | Mantener | Hub de Cisco; sumar fuentes |
| seguridad/ciberseguridad-desde-cero | Mantener | Análisis propio (ISC2, roles puente) |
| carrera/roadmap-certificaciones-it | Mantener | Hub con diagrama propio |
| seguridad/despues-de-introduccion-a-la-ciberseguridad | Mantener | Intención única; quitar los datos del examen que ya están en el artículo del CCST |
| redes/ccst-networking-examen | Ampliar | Reescribir la ficha que comparte con el de Cybersecurity; sumar fuentes |
| seguridad/ccst-cybersecurity-examen | Ampliar | Ídem |
| carrera/cuanto-gana-ingeniero-informatica | Ampliar | Cifras de terceros sin un solo enlace: agregar las fuentes es obligatorio en un artículo de sueldos |
| carrera/estudiar-certificacion-trabajando-full-time | Ampliar | Sin experiencia propia ni fuentes: necesita cómo lo hizo el autor (lo cursa trabajando) |
| cloud/aws-cloud-practitioner-guia-completa | Ampliar | 670 palabras, sin fuentes ni aporte propio |
| cloud/aws-o-azure-cual-elegir | Ampliar (o retirar) | 372 palabras y una afirmación de cuota de mercado sin fuente. Si no se puede respaldar con datos, retirar |
| entrada/certificacion-comptia-a-plus | Ampliar | Sin aporte propio |
| redes/fundamentos-de-redes-para-certificarte | Ampliar | 463 palabras para "ccna desde cero" |
| redes/curso-ccna-como-prepararte | Ampliar | Sin aporte propio; sumar fuentes |
| seguridad/cissp-requisitos-costo-experiencia | Ampliar | 482 palabras |
| seguridad/security-plus-vale-la-pena | **Fusionar** en examen-comptia-security-plus | Fino (296) y misma intención. Página resultante: `/seguridad/examen-comptia-security-plus/`, con lo de puestos sumado; 301 desde la otra URL |
| seguridad/examen-comptia-security-plus | Recibe la fusión | Pasa a cubrir "qué es + examen + puestos" |
| cloud/curso-az-900-opciones + examen-az-900-formato-y-preparacion | **Duda: fusionar o mantener** | Si se fusionan: una guía AZ-900 en la URL del examen, 301 desde la del curso |
| entrada/despues-de-fundamentos-de-analisis-de-datos | **Duda: mantener o noindex** | Demanda real pero lejos del eje temático |

Conteo: 13 mantener, 10 ampliar (uno con opción de retirar), 4 artículos en dos pares de fusión (el de AZ-900 en duda), 1 duda temática. Total: 28.

## Lo que no se pudo medir

- **Comportamiento real de los usuarios** (tiempo en página, rebote, retorno): no hay acceso a GA4 desde acá.
- **Contenido de sitios competidores**: no comparé contra otros sitios en español, así que "originalidad frente a otros sitios" está evaluada solo por el tipo de aporte, no contra la competencia.
- **Aporte propio**: clasificado leyendo cada artículo y buscando marcadores (primera persona, cálculos). Es criterio, no una métrica.
- **Si las fechas anteriores al primer commit son reales**: puede haber habido una versión previa del sitio fuera de este repo. No lo sé.
- **Fuentes oficiales**: conté enlaces en el texto. Que los datos estén verificados lo dicen las notas al pie, pero el lector no puede comprobarlo.
