---
title: "Fundamentos de redes que toda certificación te va a pedir"
description: "Modelo OSI, direccionamiento IP, subredes y enrutamiento: la base que comparten Network+, CCNA y cualquier examen de redes."
keyword: "fundamentos de redes que todo técnico IT debería saber"
cluster: "redes"
pubDate: 2026-09-12
author: "Equipo Certificaciones IT"
draft: false
---

Todas las certificaciones de redes —Network+, CCNA, y hasta el módulo de redes de Security+— miden el mismo núcleo. Lo que cambia es la profundidad, no el temario base.

## El modelo que hay que dominar de memoria

| Capa OSI | Qué resuelve |
| --- | --- |
| 7 — Aplicación | Protocolos que usan los programas (HTTP, DNS, SMTP) |
| 6 — Presentación | Formato y cifrado de los datos |
| 5 — Sesión | Apertura y cierre de conexiones |
| 4 — Transporte | Entrega confiable (TCP) o rápida (UDP) |
| 3 — Red | Direccionamiento IP y enrutamiento |
| 2 — Enlace | Direcciones MAC, switches, VLANs |
| 1 — Física | Cables, señales, medios de transmisión |

Cuando algo falla, saber "en qué capa vive el problema" es la habilidad que más rápido separa a quien recién empieza de quien ya tiene experiencia.

## Direccionamiento IP sin calculadora

- Una dirección IPv4 tiene 32 bits, agrupados en 4 octetos (ej. 192.168.1.10).
- La notación CIDR (`/24`, `/26`, etc.) indica cuántos bits son de red — de ahí sale el tamaño de la subred.
- Calcular subredes "a mano" con el método del salto (restar la máscara de 256) es exactamente lo que piden las preguntas de examen con tiempo limitado.
- IPv6 ya no es opcional: Network+ y CCNA actuales incluyen preguntas de direccionamiento IPv6 real, no solo teoría.

## Enrutamiento y conmutación

- **VLANs**: separan una red física en redes lógicas independientes, aunque compartan el mismo switch.
- **Rutas estáticas**: las configura una persona a mano; funcionan pero no se adaptan solas a cambios en la red.
- **Protocolos de enrutamiento dinámico** (OSPF, EIGRP): la red se adapta sola cuando algo cambia — es lo que usan las redes medianas y grandes en producción.

## Servicios que sostienen toda la red

- **DNS**: traduce nombres de dominio a direcciones IP.
- **DHCP**: asigna direcciones IP automáticamente a los dispositivos que se conectan.
- **NAT**: traduce direcciones privadas a una dirección pública para salir a internet.

## Cómo practicar sin comprar equipamiento

Un laboratorio virtual (Cisco Packet Tracer, GNS3 o EVE-NG) cubre el 90% del temario de nivel asociado, sin gastar en routers ni switches físicos.

```
PC1 --- SW1 --- R1 --- R2 --- SW2 --- PC2
```

Armar esa topología básica y lograr que los dos extremos se vean (hacer ping de PC1 a PC2 con los routers configurados en el medio) cubre buena parte de lo que evalúan tanto Network+ como CCNA.
