---
title: "CCNA v2.0: qué cambia en el examen y cuándo conviene rendir"
description: "El CCNA 200-301 v2.0 se rinde desde el 3 de febrero de 2027. Qué temas salen, cuáles entran (IA agéntica, OSPFv3, DNS) y si te conviene rendir la v1.1 antes."
keyword: "ccna v2.0"
cluster: "redes"
pubDate: 2026-10-20
updatedDate: 2026-10-24
author: "Valentín"
draft: false
---

El 20 de mayo de 2026 Cisco publicó los objetivos de la versión 2.0 del CCNA. La presenta como el primer cambio grande del temario desde 2019, y comparando los PDF oficiales de las dos versiones se entiende por qué: cambian los dominios y sus pesos, salen temas que estaban hace años y entran otros que nunca habían aparecido. Lo que no cambia es el código: sigue siendo el examen 200-301.

Lo esencial:

- La v2.0 se rinde **desde el 3 de febrero de 2027**, y el último día para rendir la v1.1 es el **2 de febrero de 2027**.
- El código sigue siendo **200-301**, con **120 minutos** de duración y un precio de **US$300**.
- Los seis dominios pasan a ser **cinco**, y seguridad deja de tener un dominio propio.
- Salen temas como **QoS, NTP, VRF y la configuración de WLC**, y entran **IA agéntica, OSPFv3, diagnóstico de DNS y Ansible**.
- Si llegás a rendir antes del 2 de febrero, **conviene la v1.1**: es la versión con más de dos años de material y experiencias de otros candidatos.

## Las fechas

| Fecha | Qué pasa |
| --- | --- |
| 20 de mayo de 2026 | Cisco publica los objetivos de la v2.0 |
| 2 de febrero de 2027 | Último día para rendir la v1.1 |
| 3 de febrero de 2027 | Primer día para rendir la v2.0 |

El precio y la duración son los mismos que en la v1.1. Un dato a tener en cuenta: al lanzamiento, la v2.0 se ofrece en inglés y japonés.

## Los dominios, antes y después

La v2.0 reorganiza el temario en cinco dominios. La correspondencia con la v1.1 no es exacta, porque varios temas cambiaron de lugar, pero esta es la equivalencia más cercana:

| Dominio v2.0 | Peso | Lo más parecido en la v1.1 |
| --- | --- | --- |
| 1. Infraestructura y conectividad de red | 25% | Fundamentos de red (20%) |
| 2. Switching y acceso a la red | 25% | Acceso a la red (20%) |
| 3. Enrutamiento IP | 20% | Conectividad IP (25%) |
| 4. Servicios de red y seguridad | 20% | Servicios IP (10%) y Fundamentos de seguridad (15%) |
| 5. IA, operación y gestión de la red | 10% | Automatización y programabilidad (10%) |

Tres lecturas rápidas. Los dos primeros dominios suman la mitad del examen. Enrutamiento baja del 25% al 20%. Y servicios y seguridad, que juntos pesaban el 25%, quedan en un solo dominio del 20%. El detalle de los dominios de la v1.1 está en el [temario del CCNA 200-301](/redes/ccna-200-301-temario/).

## Qué sale del examen

Estos objetivos están en el PDF de la v1.1 y no aparecen en el de la v2.0:

| Área | Qué sale |
| --- | --- |
| Fundamentos | La lista de componentes de red, las arquitecturas de topología (dos capas, tres capas, spine-leaf), la comparación entre TCP y UDP, y los tipos de dirección IPv6 anycast y multicast |
| Switching y wireless | Los conceptos de switching como el aprendizaje de direcciones MAC, BPDU filter, las arquitecturas wireless de Cisco, los modos de AP y la configuración de una WLAN desde la interfaz gráfica del WLC |
| Enrutamiento y servicios | VRF, NTP, el comportamiento por salto de QoS, y TFTP y FTP |
| Seguridad | Los conceptos generales de seguridad, los elementos de un programa de seguridad y las políticas de contraseñas |
| Automatización | APIs REST, JSON, Terraform, y los conceptos de SDN como overlay, underlay, fabric y las APIs northbound y southbound |

Que un tema salga del temario significa que deja de ser un objetivo del examen, no que deje de existir en una red real. NTP, QoS y las WLAN siguen estando en cualquier empresa.

## Qué entra

Y estos son los temas nuevos de la v2.0:

| Área | Qué entra |
| --- | --- |
| Inteligencia artificial | El rol de la IA agéntica en la operación de redes y cómo elegir prompts de IA generativa |
| Enrutamiento | OSPFv3 para IPv6 y el estado operativo de HSRP y VRRP |
| Servicios | Diagnóstico de registros DNS (A, AAAA, CNAME, MX, NS y PTR), NAT y PAT en IOS XE, y SFTP y SCP en lugar de TFTP y FTP |
| Seguridad | AAA como cliente de TACACS+ y RADIUS, storm control y RA guard |
| Acceso a la red | PoE y la configuración de puertos según lo que se conecta (dispositivos IoT, access points, telefonía IP, hosts virtualizados), e hipervisores |
| Operación | Usar Ansible para ejecutar comandos, infraestructura como código, captura de paquetes y lectura de logs |

La parte de IA es la que más llama la atención, y la descripción oficial del examen la aterriza: en la v2.0 podés tener que evaluar las respuestas y recomendaciones de agentes de IA y de asistentes digitales de red. No se trata de programar IA, sino de saber si lo que te sugiere una herramienta tiene sentido.

## El cambio de fondo: diagnosticar

Más allá de la lista de temas, cambia el tipo de pregunta. En la v1.1 muchos objetivos piden describir, comparar o identificar. En la v2.0 una gran parte pide resolver problemas y diagnosticar: no alcanza con saber qué es un registro DNS, tenés que darte cuenta de cuál está mal. Cisco lo plantea así en el anuncio, con el diagnóstico y la resolución de problemas como uno de los ejes del examen nuevo, junto con la infraestructura, la seguridad y el rol de la IA.

La consecuencia práctica es que la v2.0 premia más las horas de laboratorio que las de lectura. Configurar, romper y arreglar una red de práctica prepara mejor que memorizar definiciones.

## ¿Rendir la v1.1 o esperar la v2.0?

La certificación que obtenés es la misma: el CCNA, con tres años de vigencia. Lo que cambia es el examen. Según dónde estés hoy:

### Si ya estás estudiando y llegás antes del 2 de febrero

Rendí la v1.1. Hay más de dos años de cursos, libros, simulacros y experiencias de otros candidatos alineados a esa versión, y la v2.0 todavía no la rindió nadie. Eso sí: no dejes el turno para la última semana. Si desaprobás cerca del cierre, el siguiente intento ya va a ser con la v2.0.

### Si recién arrancás o no llegás a esa fecha

Estudiá directo para la v2.0 y usá su PDF de objetivos como índice. El núcleo sigue en pie —subredes, VLANs, Spanning Tree, OSPF, listas de control de acceso, NAT—, así que buena parte del material actual te sirve. Lo que tenés que cubrir aparte son los temas nuevos de la tabla de arriba. Cisco anunció capacitación base gratuita para la v2.0 en Cisco U.

### Si estás cursando la serie CCNA de NetAcad

Los tres cursos cubren la base que comparten las dos versiones. Qué entra en cada uno está en [CCNA 1, 2 y 3](/redes/ccna-1-2-3-cursos-netacad/). Si vas a rendir la v2.0, sumá por tu cuenta los temas nuevos antes de presentarte.

## Qué hacer ahora

Fijate cuánto te falta para estar listo y compará con el 2 de febrero de 2027: esa fecha define qué versión vas a rendir. Después descargá el PDF de objetivos de esa versión desde el sitio de Cisco y usalo para armar tu plan.

Para elegir cómo prepararte, la comparación de [rutas para preparar el CCNA](/redes/curso-ccna-como-prepararte/) cubre las opciones gratuitas, económicas y con acompañamiento. El precio del examen y los costos que se suman están en [cuánto cuesta el CCNA](/redes/cuanto-cuesta-el-ccna/). Y para ver hacia dónde sigue el recorrido después, está el [mapa de certificaciones Cisco](/redes/certificaciones-cisco-mapa-completo/).

## Fuentes

- [CCNA v2.0: temas del examen (Cisco Learning Network)](https://learningnetwork.cisco.com/s/ccna-v2-exam-topics): dominios, pesos y primera fecha para rendir.
- [PDF oficial de objetivos del CCNA v2.0](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf) y [PDF del CCNA v1.1](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf): la comparación de objetivos que sale y entra.
- [200-301 CCNA v1.1 (Cisco Learning Network)](https://learningnetwork.cisco.com/s/ccna-exam-topics): último día para rendir la v1.1, precio, duración e idiomas.
- [Steps to the Future: The Modern CCNA](https://learningnetwork.cisco.com/s/blogs/a0DQO00000616W92AI/steps-to-the-future-the-modern-ccna) y [Built for What's Next (blog de Cisco)](https://blogs.cisco.com/learning/ai-updates-ccna-ccie-automation): el anuncio y el enfoque del examen nuevo.

*Fechas, dominios, pesos y objetivos verificados en octubre de 2026 en las páginas oficiales del examen en Cisco Learning Network, en el anuncio de Cisco del 20 de mayo de 2026 y en los PDF de objetivos de las versiones 1.1 y 2.0. Cisco puede ajustar el temario antes del lanzamiento: confirmá en la fuente antes de rendir.*
