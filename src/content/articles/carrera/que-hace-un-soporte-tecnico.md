---
title: "Qué hace un soporte técnico: un día en la mesa de ayuda"
description: "Qué es el soporte técnico, qué es una mesa de ayuda y qué hace un soporte de nivel 1, contado desde adentro: los tres niveles, cuántos tickets llegan, qué se resuelve y qué se deriva."
keyword: "que hace un soporte tecnico"
cluster: "carrera"
pubDate: 2026-10-24
updatedDate: 2026-11-10
author: "Valentín"
draft: false
---

Trabajé en la mesa de ayuda de una empresa de unas 3.000 personas, como soporte de nivel 1. Desde afuera, el puesto suele resumirse como "el que atiende el teléfono cuando algo no anda". Desde adentro es bastante más: es la puerta de entrada de todos los problemas de tecnología de la empresa, y la mayoría se resuelve ahí mismo.

En pocas palabras:

- Una **mesa de ayuda** es el punto de contacto al que los usuarios de una empresa llevan sus problemas y pedidos de tecnología; cada uno se registra como un **ticket**.
- El soporte se organiza en **niveles**: el nivel 1 resuelve la mayoría y deriva lo que necesita manos en el equipo, permisos especiales o un área especializada.
- En mi caso eran **entre 30 y 50 tickets por día**, por teléfono y por mail, con cobertura las 24 horas.
- Lo técnico se aprende rápido; lo que más pesa es **explicar cosas técnicas de forma simple** y manejar la frustración del otro.

## Qué es el soporte técnico

El soporte técnico, también llamado soporte TI, es el trabajo de resolver los problemas de tecnología de las personas que usan los equipos y sistemas: desde una contraseña bloqueada hasta una notebook que no enciende. Puede ser para clientes de un producto o, como en mi caso, para los empleados de una empresa. Ahí suele organizarse alrededor de una mesa de ayuda.

## Qué es una mesa de ayuda

La mesa de ayuda (help desk o service desk) es el equipo que recibe los pedidos y los problemas de los usuarios de una organización: una contraseña bloqueada, una impresora que no aparece, un programa para instalar, un sistema que no responde. Cada pedido se registra en una herramienta de tickets, con quién lo pidió, en qué equipo, qué pasa, qué categoría y prioridad tiene, y cómo se resolvió.

En la empresa donde trabajé, los pedidos entraban sobre todo por teléfono y por mail, y se cargaban en ServiceDesk Plus, la herramienta de mesa de ayuda de ManageEngine. Dábamos soporte a una nómina de unas 3.000 personas.

## Los tres niveles

| Nivel | Quién | Qué resuelve |
| --- | --- | --- |
| Nivel 1 | Mesa de ayuda (mi puesto) | La mayoría de los casos, a distancia: cuentas y contraseñas, correo, impresoras, instalaciones, conexión a la VPN, configuración de equipos |
| Nivel 2 | Soporte en sitio | Lo que necesita revisar el equipo físicamente: baterías hinchadas que hay que reemplazar, teclados con teclas que fallan, equipos con líquido derramado |
| Áreas especializadas | Infraestructura y desarrollo | Permisos y creación de carpetas compartidas, solicitudes de acceso, casos de VPN ya conocidos, caídas de aplicaciones internas |

La idea del nivel 1 es ser una **primera línea resolutiva**: resolver todo lo que se pueda en el primer contacto. Lo que no se resuelve, se deriva, pero derivar bien también es parte del trabajo. Antes de pasar un caso a infraestructura o a desarrollo, había que juntar toda la información: qué usuario, qué equipo, qué error, qué se probó y desde cuándo pasa. Un ticket bien armado le ahorra al otro equipo volver a preguntar todo.

Las caídas de aplicaciones internas eran un buen ejemplo: no las resolvíamos nosotros, pero éramos los primeros en enterarnos, porque nos llamaba la gente. Se derivaban al equipo de desarrollo junto con infraestructura.

Por los equipos con problemas físicos, el destino casi siempre era el soporte en sitio. Una batería hinchada se reemplaza; un teclado con teclas que no responden, también. Y cuando alguien derramaba líquido sobre la notebook, la mayoría de las veces el equipo no tenía arreglo.

## Cómo es un día

- **Volumen.** En promedio, entre 30 y 50 tickets por día para el equipo.
- **Prioridades.** Se definían por el impacto: lo primero era lo que le impedía a alguien hacer tareas vitales para el negocio.
- **Canales.** Teléfono y mail.
- **Horarios.** Turnos fijos con cobertura 24/7: siempre había al menos un operador. En horario de oficina éramos cuatro, y por la tarde y la noche quedaban dos compañeros.
- **Modalidad.** Mixta. Todo se podía resolver a distancia, porque la mesa de ayuda no tiene contacto físico con el equipo del usuario, pero íbamos a la oficina igual: estar ahí nos acercaba al resto de las áreas y facilitaba compartir y aprender.

Para ver los casos nos conectábamos a los equipos con herramientas de escritorio remoto, como AnyDesk o TeamViewer.

## Qué se resuelve en la primera línea

Estos eran los pedidos más comunes:

- Desbloquear cuentas y blanquear contraseñas en Active Directory.
- Restablecer el MFA cuando alguien perdía el acceso a su segundo factor.
- Outlook que no sincroniza: activar o desactivar el modo caché, sumar una cuenta, revisar un buzón compartido, respaldar archivos .pst.
- [Impresoras que no imprimen](/entrada/impresora-no-imprime/) o no aparecen.
- [Equipos lentos](/entrada/pc-lenta-que-hacer/), y drivers para reinstalar o actualizar.
- Equipos sin internet: revisar la VPN o reiniciar el adaptador de red.
- Instalación de programas.
- Altas y bajas de usuarios: pedir las aprobaciones, derivar y asistir en la configuración inicial.
- Correos de phishing reportados, que separábamos de la cuenta del usuario y enviábamos al equipo de seguridad.

Cada uno de estos pedidos aparece en el temario de CompTIA A+. La lista completa, con el objetivo del examen que cubre cada tarea, está en la guía de [CompTIA A+](/entrada/certificacion-comptia-a-plus/).

## Mesa de ayuda y soporte en sitio no son lo mismo

En empresas grandes suelen convivir dos equipos. En la mía, la mesa de ayuda atendía a todos los sitios en general, y además había equipos de soporte en sitio en los edificios, aunque no en todos. La mesa de ayuda resuelve a distancia; el soporte en sitio es el que va al puesto cuando hay que tocar el equipo.

Si estás buscando trabajo, conviene leer bien el aviso: "soporte técnico" puede ser cualquiera de los dos, y el día a día cambia bastante.

## Las habilidades que más pesan

Lo técnico se aprende con los tickets. Lo que hace la diferencia es otra cosa:

- **Paciencia y tranquilidad** para explicar, sobre todo en los días de mucha demanda.
- **Empatía.** Del otro lado hay alguien que no puede trabajar.
- **Manejo de la frustración**, la propia y la del usuario.
- **Explicar cosas técnicas de forma simple.** Es la habilidad que más usé.

Dos situaciones difíciles que se repetían. La primera: un usuario frustrado porque su problema seguía sin resolverse, y había que volver a escalar el caso con el área correspondiente. La segunda: personas con poco manejo de la computadora, a las que había que guiar paso a paso solo para establecer la conexión remota y poder ver qué les pasaba.

No es casual que CompTIA incluya en el temario de A+ un objetivo entero sobre comunicación y profesionalismo, con puntos como no discutir con el usuario, hacer preguntas abiertas para acotar el problema e informar el estado del caso.

## Lo que me gustaba y lo que no

Lo que más me gustaba era poder aplicar todo lo que sabía de computadoras y ver que a la otra persona le servía. Muchas veces eran trucos chicos: por ejemplo, que en Chrome **Ctrl + Mayús + T** vuelve a abrir las pestañas que cerraste, en el orden en que las cerraste. Para quien acaba de cerrar sin querer algo importante, eso es magia.

Lo que menos me gustaba: los días de mucha demanda y los usuarios poco amables. Vienen con el puesto, y aprender a no llevártelos puestos es parte del trabajo.

## Cómo se llega y hacia dónde sigue

La mesa de ayuda es de los pocos puestos de IT que toman gente sin experiencia previa: así empecé yo, y cómo fue esa primera entrevista está en la guía de [cómo empezar en IT sin experiencia](/entrada/como-empezar-en-it-sin-experiencia/). Para ordenar lo técnico antes de entrar, [CompTIA A+](/entrada/certificacion-comptia-a-plus/) y el [CCST Networking](/redes/ccst-networking-examen/) cubren justamente estas tareas.

Y si te preguntás qué viene después: desde la mesa de ayuda se puede crecer hacia infraestructura, redes o seguridad. Cómo fue mi pase está en [de soporte a infraestructura](/carrera/de-soporte-a-infraestructura/).

## Fuentes

- [Objetivos oficiales de CompTIA A+ Core 2 (220-1202)](https://lecbyo.files.cmp.optimizely.com/download/cefedfb2b8a511ef809306d06d323538): sistemas de tickets y niveles de escalamiento (4.1) y comunicación y profesionalismo (4.7).
- [ServiceDesk Plus (ManageEngine)](https://www.manageengine.com/products/service-desk/): la herramienta de tickets que usábamos.
- [Combinaciones de teclas de Chrome (Ayuda de Google)](https://support.google.com/chrome/answer/157179?hl=es): el atajo para volver a abrir pestañas cerradas.

*Basado en mi experiencia como soporte de nivel 1. Cada empresa organiza su mesa de ayuda a su manera: los números y los niveles cambian según el tamaño y el sector.*
