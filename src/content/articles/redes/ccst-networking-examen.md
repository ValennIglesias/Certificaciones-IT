---
title: "CCST Networking: examen 100-150, temario y precio"
description: "Cómo es el CCST Networking de Cisco: examen 100-150 de 50 minutos, US$125 y en español. Sus seis dominios, la ruta gratuita de NetAcad y si conviene antes del CCNA."
keyword: "ccst networking"
cluster: "redes"
pubDate: 2026-10-20
updatedDate: 2026-10-24
author: "Valentín"
draft: false
---

El CCST Networking es la certificación de redes de nivel de entrada de Cisco: el escalón anterior al CCNA. Cuesta menos de la mitad, dura menos de la mitad y se puede rendir en español. La pregunta que vale la pena hacerse no es tanto cómo es el examen, sino si te conviene rendirlo o ir directo al CCNA.

El examen, en resumen:

- El examen es el **100-150**: dura **50 minutos**, cuesta **US$125** y está disponible en **español**.
- Cubre **seis dominios**, con foco en soporte técnico: cableado, comandos de diagnóstico, Wireshark y comandos *show* en equipos Cisco.
- La ruta gratuita de NetAcad que lo prepara es **Técnico en Redes**: cuatro cursos, **70 horas**, todos en español.
- **No es requisito para el CCNA**: es un paso opcional, pensado para quien arranca sin base técnica.
- Desde el 15 de julio de 2025, la certificación **vence a los cinco años**.

## Ficha del examen

| Dato | CCST Networking |
| --- | --- |
| Examen | 100-150, de 50 minutos |
| Precio | US$125, ajustado por Cisco según la región |
| Idioma | Se puede rendir en español |
| Preguntas y aprobación | Cisco no publica ni la cantidad de preguntas ni el puntaje mínimo; el resultado es aprobado o desaprobado |
| Reintentos | Sin límite |
| Requisitos previos | No tiene |
| Dónde se rinde | Con supervisión, en un centro de examen o desde tu casa |

Que la cantidad de preguntas no sea fija tiene una explicación: el examen mezcla preguntas clásicas con ítems prácticos que simulan un laboratorio.

Si leíste la guía del [CCST Cybersecurity](/seguridad/ccst-cybersecurity-examen/), las condiciones te van a sonar: los dos exámenes CCST comparten precio, duración y política de reintentos. Tampoco hay descuento directo para estudiantes ni docentes: los precios especiales son para las instituciones educativas.

## Los seis dominios del temario

Cisco no publica el peso de cada dominio. Esto es lo que entra en cada uno, según el documento oficial de objetivos:

| Dominio | Qué entra |
| --- | --- |
| 1. Estándares y conceptos | Modelos TCP/IP y OSI; ancho de banda, throughput y latencia; tipos de red (LAN, WAN, WLAN y otras); nube y servicios locales; TCP, UDP y protocolos comunes como HTTP, DHCP, DNS y NTP |
| 2. Direccionamiento y subredes | Direcciones públicas y privadas, NAT, IPv4 con máscara y notación de barra, y direcciones y prefijos IPv6 |
| 3. Equipos y medios | Cables y conectores; Wi-Fi, red celular y cableada; dispositivos como IoT, teléfonos IP e impresoras; configurar y verificar la conexión en Windows, Linux, macOS, Android e iOS |
| 4. Infraestructura | Luces de estado de un equipo Cisco; conectar cables siguiendo un diagrama; puertos de consola, Ethernet, SFP y PoE; conceptos básicos de enrutamiento, switching y VLAN |
| 5. Diagnóstico de problemas | Metodología de soporte y tickets; captura de paquetes con Wireshark; ping, ipconfig, traceroute y nslookup; acceso remoto por SSH, RDP o consola; comandos *show* en equipos Cisco |
| 6. Seguridad | Cómo filtra un firewall; conceptos básicos como CIA, AAA, MFA y cifrado; amenazas comunes; seguridad wireless en un router hogareño (WPA2 y WPA3) |

## Es un examen de soporte técnico

Leyendo los objetivos, hay un detalle que define el examen. Varios objetivos plantean tareas que hacés siguiendo indicaciones de un ingeniero: identificar las luces de estado de un equipo "cuando un ingeniero te lo indica", o conectar cables "usando un diagrama que te da un ingeniero".

Es decir, el CCST Networking evalúa el trabajo de un técnico de soporte o de mesa de ayuda, no el de un administrador de redes. El documento oficial lo confirma: el candidato es un técnico de redes o de soporte de nivel de entrada, un estudiante o un pasante, con al menos 150 horas de formación y práctica. El diseño de redes, el enrutamiento dinámico y la configuración en serio quedan para el CCNA.

Lo confirmo por experiencia. Cuando trabajé en soporte, un caso típico era un usuario sin acceso a la VPN: lo primero era verificar la conectividad con ping y que los nombres resolvieran por DNS, y con eso documentado en el ticket, si el problema seguía, se derivaba al área que correspondía. Ese circuito está casi literal en el temario: metodología de soporte y tickets (objetivo 5.1), comandos de diagnóstico como ping y nslookup (5.3), acceso remoto y VPN (5.4), y conceptos como AAA, MFA y Active Directory (6.2). Lo mismo con los equipos que no tomaban IP o no tenían internet, otro clásico: revisar la VPN o reiniciar el adaptador de red es exactamente lo que pide el objetivo 3.4, configurar y verificar la conectividad en el sistema operativo.

## Cómo prepararlo

La ruta oficial es **Técnico en Redes** de Cisco Networking Academy. Es gratuita, suma 70 horas y sus cuatro cursos están en español:

| Orden y curso | Duración |
| --- | --- |
| 1. Conceptos básicos de redes | 22 h |
| 2. Dispositivos de red y configuración inicial | 22 h |
| 3. Direccionamiento de red y solución de problemas básicos | 14 h |
| 4. Soporte y seguridad de red | 12 h |

Si en el catálogo te cruzaste con el curso Networking Essentials, que solo se cursa con instructor: tiene los mismos módulos que esta ruta, como explica la guía de [Networking Essentials](/redes/networking-essentials-cisco/).

NetAcad recomienda, sin que sea obligatorio, tener nociones de hardware y sistemas operativos antes de empezar. Para eso tiene dos cursos aparte: Conceptos básicos de hardware informático y Conceptos básicos de sistemas operativos.

Un dato útil: los dos primeros cursos de esta ruta también forman parte de la ruta de ciberseguridad. Si ya hiciste la ruta [que sigue a Introducción a la Ciberseguridad](/seguridad/despues-de-introduccion-a-la-ciberseguridad/), tenés 44 de las 70 horas hechas.

Para estudiar, usá el PDF de objetivos como checklist y practicá con las herramientas que nombra: Wireshark, ping, traceroute, nslookup y los comandos *show*. Los fundamentos que el examen da por sabidos, como el modelo OSI y las subredes, están en la guía de [fundamentos de redes](/redes/fundamentos-de-redes-para-certificarte/).

## ¿CCST Networking o directo al CCNA?

| Dato | CCST Networking | CCNA |
| --- | --- | --- |
| Examen | 100-150 | 200-301 |
| Precio | US$125 | US$300 |
| Duración | 50 minutos | 120 minutos |
| Nivel | Técnico de soporte | Administración de redes |

### Rendí el CCST si...

Arrancás de cero, sin ninguna base técnica, y querés una primera certificación en poco tiempo, en español y con poco riesgo económico. También si apuntás a un primer puesto de mesa de ayuda o soporte, que es justo el perfil que describe el examen.

### Andá directo al CCNA si...

Ya tenés base de redes o experiencia en soporte. El CCST no es requisito para el CCNA, y Cisco no exige ninguna certificación previa para rendirlo. En ese caso los US$125 y las semanas de preparación rinden más invertidos en el CCNA. Cómo se prepara está en las [rutas para preparar el CCNA](/redes/curso-ccna-como-prepararte/), y cuánto cuesta en total, en [cuánto cuesta el CCNA](/redes/cuanto-cuesta-el-ccna/).

Si vas por el CCNA, tené en cuenta la fecha: la versión actual se rinde hasta el 2 de febrero de 2027, y desde el día siguiente rige la [v2.0, con cambios importantes en el temario](/redes/ccna-v2-0-cambios/).

## Vigencia y renovación

Si obtuviste el CCST antes del 15 de julio de 2025, es de por vida. Desde esa fecha, dura cinco años: Cisco atribuye el cambio a una ley estatal de Estados Unidos. Para renovarlo hay que aprobar otro examen de Cisco, ya sea un CCST o uno de nivel asociado o superior. Aprobar el CCNA, entonces, también lo renueva.

## Por dónde empezar

Si arrancás de cero, inscribite en Conceptos básicos de redes en NetAcad: es el primer curso de la ruta, es gratis y en 22 horas te muestra si las redes te interesan. Al terminar la ruta, decidí entre el CCST y el CCNA con lo que sepas para entonces.

Si ya tenés base, descargá el PDF de objetivos del CCST y fijate cuánto dominás. Si te resulta fácil, es la señal para ir directo al CCNA. Todos los niveles del programa de Cisco están en el [mapa de certificaciones Cisco](/redes/certificaciones-cisco-mapa-completo/).

## Fuentes

- [Examen CCST Networking (Cisco)](https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html): código, duración, precio e idiomas.
- [Temas del examen (Cisco Learning Network)](https://learningnetwork.cisco.com/s/ccst-networking-exam-topics) y [PDF oficial de objetivos](https://learningcontent.cisco.com/documents/CCST+Networking+Objective+Domain_Cisco_Final_wCiscoLogo.pdf): los seis dominios y el perfil del candidato.
- [Preguntas frecuentes de las certificaciones CCST](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/support-technician/faq.html): intentos, descuentos, vigencia y renovación.
- [Ruta Técnico en Redes (Cisco Networking Academy)](https://www.netacad.com/career-paths/network-technician): cursos, duración e idiomas.

*Datos del examen, temario y vigencia verificados en octubre de 2026 en las páginas oficiales de Cisco, la FAQ de las certificaciones CCST, Cisco Learning Network y el PDF oficial de objetivos del examen. Cursos y duraciones verificados en el catálogo de Cisco Networking Academy. Cisco puede cambiar precios y condiciones: confirmá en la fuente antes de pagar.*
