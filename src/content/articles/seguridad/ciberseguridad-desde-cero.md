---
title: "Ciberseguridad desde cero: por dónde se entra de verdad"
description: "Por qué casi no existen puestos de ciberseguridad de entrada, cuáles son los roles puente reales y qué cambió en 2026 con el cierre del programa gratuito de ISC2."
keyword: "ciberseguridad desde cero"
cluster: "seguridad"
pubDate: 2026-10-03
updatedDate: 2026-10-24
author: "Valentín"
draft: false
---

La ciberseguridad casi no tiene puestos de entrada. No es una opinión de foro: los documentos de trabajo del NICE, el programa de formación en ciberseguridad del NIST, registran que hay muy pocos puestos claramente definidos como entry level, y que los propios profesionales del sector discuten si esa categoría siquiera existe.

Cómo se entra, en síntesis:

- A ciberseguridad **se entra de costado**, desde un rol de IT, no de forma directa.
- Los puestos puente más transitados son **mesa de ayuda, soporte técnico, operaciones de red y administración de sistemas**.
- Como referencia, el salto desde el primer empleo de IT hasta un rol de seguridad suele llevar **uno o dos años**: es una estimación propia, no un dato oficial.
- El **programa gratuito de certificación de ISC2 cerró el 20 de mayo de 2026**; esa vía ya no está disponible para nuevos participantes.
- Sin fundamentos de redes y sistemas operativos, el contenido de seguridad no se sostiene.

## Por qué "ciberseguridad de entrada" casi no existe

El problema es estructural, no de mercado laboral pasajero. La seguridad consiste en proteger sistemas: difícilmente puedas defender algo que todavía no entendés cómo funciona. Por eso las organizaciones rara vez contratan a alguien sin base técnica para un rol de seguridad, por más certificaciones que tenga.

A eso se suma un desajuste conocido de las búsquedas: muchos avisos etiquetados como "entry level" piden tres a cinco años de experiencia o varias certificaciones avanzadas. Si una vacante de "ingeniero de ciberseguridad" pide cinco años, no es un puesto de entrada por más que el filtro del portal lo clasifique así.

La lectura correcta no es "es imposible entrar", es **"se entra por otra puerta"**.

## Los puestos puente reales

| Rol puente | Qué te da para seguridad |
| --- | --- |
| Mesa de ayuda / soporte técnico | Sistemas operativos, troubleshooting, contacto con incidentes reales |
| Operaciones de red (NOC) | Tráfico, firewalls, segmentación — la base de la seguridad de red |
| Administración de sistemas | Permisos, identidades, endurecimiento de servidores |
| Analista SOC nivel 1 | El más cercano a seguridad, y el más competitivo de conseguir |

El analista SOC de nivel 1 es el único de la lista que ya es un puesto de seguridad, y es también el más disputado. Los otros tres son más accesibles y construyen exactamente lo que después hace falta.

Un ejemplo de mi paso por soporte: cuando alguien reportaba un correo de phishing, extraíamos el mail desde su cuenta y lo enviábamos al equipo de seguridad para que lo analizara. Es una tarea chica, pero es exactamente el contacto con incidentes reales del que hablo: ves cómo llega un ataque, cómo se reporta y quién lo analiza.

Si estás en la etapa anterior a todo esto —conseguir el primer empleo de IT—, la guía de [cómo empezar en IT sin experiencia previa](/entrada/como-empezar-en-it-sin-experiencia/) cubre esa parte del camino.

## Qué cambió en 2026: se cerró la puerta gratuita

Durante varios años hubo una vía gratuita muy buena para dar el primer paso formal: el programa **One Million Certified in Cybersecurity** de ISC2, que regalaba el curso oficial y el examen de su certificación de entrada, la CC.

**ISC2 anunció el 22 de abril de 2026 que el programa concluía, y dejó de aceptar nuevos participantes el 20 de mayo de 2026.** Quienes recibieron un código antes de esa fecha pueden rendir hasta el 31 de diciembre de 2026. Después de eso, la CC pasa a costar como cualquier otro examen de ISC2: **US$199**.

Esto importa porque **mucho contenido que vas a encontrar todavía la promociona como gratuita**, incluso material publicado después del cierre. Si leés una guía que dice que podés certificarte gratis con ISC2, está desactualizada.

Los números finales del programa dicen algo interesante sobre lo difícil que es sostener el aprendizaje, más allá del costo:

| Etapa | Personas |
| --- | --- |
| Se inscribieron al programa | más de 1.000.000 |
| Cursaron el material | más de 570.000 |
| Obtuvieron la certificación | más de 65.000 |
| Siguieron a una certificación superior de ISC2 | cerca de 9.000 |

Menos del 7% de quienes se anotaron llegaron a certificarse, con el curso y el examen totalmente pagados. El obstáculo no era el dinero.

## Qué certificación conviene como primera

| Certificación | Qué valida | Cuándo conviene |
| --- | --- | --- |
| ISC2 CC | Conceptos fundamentales de seguridad | Primer contacto, sin base técnica previa |
| CompTIA Security+ | Base de seguridad reconocida por empleadores | Cuando ya tenés fundamentos de IT |
| CCNA Cybersecurity | Operaciones de seguridad sobre infraestructura Cisco | Si venís del lado de redes |

[Security+](/seguridad/examen-comptia-security-plus/) es la certificación de seguridad de CompTIA, independiente de fabricantes, que CompTIA orienta a puestos de analista de seguridad, ingeniero de seguridad y administrador de sistemas. Rinde más si ya tenés algo de base técnica; la guía cubre cómo es el examen y qué cambia con la V8 de noviembre de 2026.

Si empezaste por el curso gratuito Introducción a la Ciberseguridad de Cisco NetAcad, la ruta oficial que sigue, y la certificación CCST Cybersecurity a la que lleva, están en [qué curso hacer después de Introducción a la Ciberseguridad](/seguridad/despues-de-introduccion-a-la-ciberseguridad/).

Del lado de Cisco, lo que antes se llamaba CyberOps Associate ahora es **CCNA Cybersecurity**, tras la reestructuración de febrero de 2026 — el [mapa completo de certificaciones Cisco](/redes/certificaciones-cisco-mapa-completo/) tiene el detalle de ese cambio.

## La base técnica que no podés saltear

Antes de cualquier certificación de seguridad, esto es lo que el contenido va a dar por sabido:

- **Redes**: direccionamiento IP, subredes, DNS, DHCP, qué hace un firewall y por qué. La guía de [fundamentos de redes](/redes/fundamentos-de-redes-para-certificarte/) cubre este bloque.
- **Sistemas operativos**: Windows y Linux a nivel de administración, no de usuario. Permisos, procesos, registros.
- **Identidades y accesos**: autenticación contra autorización, directorio activo, principio de menor privilegio.

Es la parte que más gente intenta saltear porque no suena a "ciberseguridad", y la que más caro sale omitir: sin eso, el material de seguridad se estudia de memoria en vez de entenderse.

## El paso más corto hacia seguridad

Si todavía no trabajás en IT, el paso más corto hacia seguridad no es una certificación de seguridad: es conseguir un puesto de mesa de ayuda o soporte y usar esos meses para construir la base técnica mientras cobrás por aprenderla.

Si ya estás en IT, la secuencia que más rinde es fundamentos de redes, después Security+, y en paralelo un laboratorio propio donde puedas mostrar algo concreto en una entrevista. El [roadmap de certificaciones](/carrera/roadmap-certificaciones-it/) ordena el resto del recorrido según hacia dónde quieras ir después.

## Fuentes

- [Employer Perspective on Hiring (NICE, NIST)](https://www.nist.gov/system/files/documents/2022/12/14/Employer%20Project%20for%20MTM_508compliant.pdf) y [carta del proyecto sobre puestos de entrada (NICE)](https://www.nist.gov/system/files/documents/2022/08/11/NICE%20Project%20Charter%20-%20MTM%20-%20Cyber%20Career-Entry%20Guidance%20for%20Job%20Seekers%20%26%20Employers.pdf): los pocos puestos definidos como de entrada y la discusión sobre el término.
- [Cierre del programa One Million Certified in Cybersecurity (ISC2)](https://www.isc2.org/Insights/2026/04/one-million-certified-cyber-conclusion): fechas y números finales del programa.
- [Preguntas del programa (ISC2)](https://www.isc2.org/landing/1mcc) y [precios de los exámenes de ISC2](https://www.isc2.org/register-for-exam/isc2-exam-pricing): el plazo para usar los códigos y el precio de la CC.
- [CompTIA Security+](https://www.comptia.org/en-us/certifications/security/): puestos a los que apunta la certificación.
