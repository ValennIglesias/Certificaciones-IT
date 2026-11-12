---
title: "CCNA desde cero: los fundamentos de redes que te va a pedir"
description: "Para preparar el CCNA desde cero: modelo OSI, subredes con un ejemplo resuelto, enrutamiento y servicios, y en qué objetivos oficiales del CCNA y del CCST aparece cada tema."
keyword: "ccna desde cero"
cluster: "redes"
pubDate: 2026-10-03
updatedDate: 2026-10-24
author: "Valentín"
draft: false
---

Si vas a preparar el CCNA desde cero, no arranques por los comandos de Cisco: arrancá por la base que dan por sabida todos los exámenes de redes. El modelo de capas, el direccionamiento IP, las subredes y los servicios básicos aparecen tanto en el CCST Networking, el examen de entrada de Cisco, como en el CCNA. Lo que cambia entre uno y otro es la profundidad.

## Dónde aparece cada tema en los exámenes de Cisco

Esta tabla cruza los fundamentos de esta guía con los objetivos numerados de los documentos oficiales. Sirve para saber qué estás estudiando y para qué examen:

| Tema | CCST Networking (100-150) | CCNA v1.1 (200-301) |
| --- | --- | --- |
| Modelos OSI y TCP/IP | 1.1 | Implícito en todo el dominio 1 |
| TCP frente a UDP | 1.5 | 1.5 |
| Direcciones públicas, privadas y NAT | 2.1 | 1.7 y 4.1 |
| IPv4 y subredes | 2.2 | 1.6 |
| IPv6 | 2.3 | 1.8 y 1.9 |
| VLANs y switching | 4.5 | 1.13, 2.1 y 2.2 |
| Enrutamiento | 4.4 (conceptos básicos) | 3.1 a 3.5 (tabla de rutas, rutas estáticas, OSPFv2) |
| DNS y DHCP | 1.5 | 4.3 y 4.6 |

Dos lecturas útiles. Todo lo que pide el CCST, el CCNA lo vuelve a pedir con más detalle: si arrancás por el CCST, nada de lo que estudies se pierde. Y en el CCNA el salto está en el enrutamiento: el CCST pide entender qué es un gateway por defecto, el CCNA pide configurar y verificar rutas estáticas y OSPF.

## El modelo de capas

| Capa OSI | Qué resuelve |
| --- | --- |
| 7 — Aplicación | Protocolos que usan los programas (HTTP, DNS, SMTP) |
| 6 — Presentación | Formato y cifrado de los datos |
| 5 — Sesión | Apertura y cierre de conexiones |
| 4 — Transporte | Entrega confiable (TCP) o rápida (UDP) |
| 3 — Red | Direccionamiento IP y enrutamiento |
| 2 — Enlace | Direcciones MAC, switches, VLANs |
| 1 — Física | Cables, señales, medios de transmisión |

Cuando algo falla, saber "en qué capa vive el problema" es la habilidad que más rápido separa a quien recién empieza de quien ya tiene experiencia. En soporte técnico lo vas a usar todos los días: un cable desconectado es capa 1, una VLAN mal asignada es capa 2, un gateway mal configurado es capa 3.

## Cómo calcular subredes sin calculadora: un ejemplo resuelto

Una dirección IPv4 tiene 32 bits, agrupados en cuatro octetos (por ejemplo, 192.168.10.70). La notación CIDR (/24, /26) indica cuántos de esos bits son de red, y de ahí sale el tamaño de cada subred.

El método más rápido para calcular a mano es el del salto: restarle a 256 el valor de la máscara en el octeto que se corta. Un ejemplo completo con 192.168.10.70/26:

1. **La máscara.** /26 son 26 bits de red: tres octetos completos (24 bits) y 2 bits más en el cuarto. En el cuarto octeto, esos 2 bits valen 128 + 64 = 192. La máscara es 255.255.255.192.
2. **El salto.** 256 − 192 = 64. Las subredes empiezan cada 64: .0, .64, .128 y .192.
3. **A qué subred pertenece la dirección.** 70 cae entre 64 y 127, así que la red es **192.168.10.64**.
4. **Broadcast y rango útil.** El broadcast es la última dirección antes de la siguiente subred: **192.168.10.127**. Las direcciones que se pueden asignar a equipos van de **.65 a .126**.
5. **Cantidad de equipos.** Quedan 6 bits para equipos: 2⁶ = 64 direcciones, menos la de red y la de broadcast, son **62**.

Hacé este mismo ejercicio con diez direcciones distintas hasta resolverlo en menos de un minuto: es exactamente el tipo de pregunta que aparece en los exámenes, con tiempo limitado.

IPv6 también está en los dos exámenes: el CCST pide identificar direcciones y prefijos, y el CCNA, configurarlos y reconocer sus tipos.

## Enrutamiento y conmutación

- **VLANs**: separan una red física en redes lógicas independientes, aunque compartan el mismo switch.
- **Rutas estáticas**: las configura una persona a mano; funcionan, pero no se adaptan solas a cambios en la red.
- **Enrutamiento dinámico**: la red se adapta sola cuando algo cambia. El protocolo que evalúa el CCNA v1.1 es **OSPFv2 de área única**; la v2.0, que arranca en febrero de 2027, suma OSPFv3 para IPv6.

## Servicios que sostienen toda la red

- **DNS**: traduce nombres de dominio a direcciones IP.
- **DHCP**: asigna direcciones IP automáticamente a los equipos que se conectan.
- **NAT**: traduce direcciones privadas a una dirección pública para salir a internet.

Los tres son también los primeros sospechosos en soporte: "tengo red pero no navego" suele ser DNS, y "no me da IP" suele ser DHCP.

## Cómo practicar sin comprar equipos

Cisco Packet Tracer es gratuito: se descarga desde un curso corto de Cisco Networking Academy, como explica la guía de [cómo descargar Packet Tracer](/redes/packet-tracer-que-es-y-como-descargarlo/), y alcanza para practicar VLANs, rutas estáticas, OSPF, NAT y DHCP sin un solo equipo físico. Es la herramienta que usamos en ISTEA para los trabajos prácticos de redes.

```
PC1 --- SW1 --- R1 --- R2 --- SW2 --- PC2
```

Un primer ejercicio que recomiendo: armar esa topología, asignar subredes distintas a cada lado (por ejemplo, dos /26 calculadas como arriba) y lograr que PC1 le haga ping a PC2 con rutas estáticas en los routers. Cuando funcione, reemplazá las rutas estáticas por OSPF. Ese ejercicio solo recorre buena parte del dominio de conectividad IP del CCNA.

## Por dónde seguir

Si arrancás de cero absoluto, la ruta gratuita Técnico en Redes de NetAcad cubre esta base en 70 horas y prepara para el [CCST Networking](/redes/ccst-networking-examen/). Si ya la tenés, el [temario del CCNA 200-301](/redes/ccna-200-301-temario/) muestra cuánto pesa cada dominio, y el [mapa de certificaciones Cisco](/redes/certificaciones-cisco-mapa-completo/), hacia dónde sigue el recorrido.

Si tu objetivo es el CCNA, la guía de [curso CCNA](/redes/curso-ccna-como-prepararte/) compara las rutas de preparación. Si todavía estás decidiendo si redes es tu camino, el [roadmap de certificaciones IT](/carrera/roadmap-certificaciones-it/) compara las rutas de soporte, redes, seguridad y cloud.

## Fuentes

- [PDF oficial de objetivos del CCNA v1.1](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf) y [del CCNA v2.0](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf): los objetivos numerados de la tabla y el cambio de OSPF.
- [PDF oficial de objetivos del CCST Networking](https://learningcontent.cisco.com/documents/CCST+Networking+Objective+Domain_Cisco_Final_wCiscoLogo.pdf): los objetivos del examen de entrada.
- [Curso gratuito de Cisco Packet Tracer](https://www.netacad.com/courses/getting-started-cisco-packet-tracer): la descarga del simulador.

*Objetivos verificados el 24 de octubre de 2026 en los documentos oficiales de Cisco.*
