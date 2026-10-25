---
title: "PC lenta: qué hacer, paso a paso, como en soporte técnico"
description: "Qué hacer si tu PC está lenta: el orden de revisión que usaba en la mesa de ayuda, con los pasos oficiales de Windows para el Administrador de tareas, el disco, el antivirus y los efectos visuales."
keyword: "pc lenta que hacer"
cluster: "entrada"
pubDate: 2026-10-31
author: "Valentín"
draft: true
---

"La computadora anda lenta" era de los pedidos más comunes en la mesa de ayuda donde trabajé. Casi nunca era una sola cosa, y casi nunca hacía falta cambiar el equipo: con un orden de revisión claro, la mayoría se resolvía en un rato y a distancia.

Este es el orden que usaba, de lo más rápido y seguro a lo más delicado. Los pasos están probados contra la guía oficial de Microsoft para Windows 11; en Windows 10 algunos menús cambian de nombre.

## 1. Mirar qué está consumiendo el equipo

El primer paso es saber qué pasa antes de tocar nada. Abrí el **Administrador de tareas** con **Ctrl + Mayús + Esc** y mirá:

- **Procesos:** qué programas están usando más procesador, memoria o disco. Si hay alguno que no estás usando, clic derecho y cerrarlo.
- **Rendimiento:** si el procesador, la memoria o el disco están al 100% de forma sostenida. Eso te dice dónde buscar.

Muchas veces el problema aparece acá mismo: un programa colgado, un navegador con decenas de pestañas, una sincronización trabada.

## 2. Revisar los programas que arrancan con Windows

Cada programa que se inicia con el equipo suma carga desde el arranque. En el mismo Administrador de tareas, entrá a **Aplicaciones de inicio** en el menú de la izquierda, hacé clic derecho en las que no necesitás que arranquen solas y elegí **Deshabilitar**.

No se desinstalan: siguen ahí, solo que no se abren solas. Es de los cambios con más efecto y menos riesgo.

## 3. Liberar espacio en disco

Un disco casi lleno vuelve lento todo el sistema. Windows trae dos herramientas para limpiarlo:

- **Sensor de almacenamiento:** en **Inicio > Configuración > Sistema > Almacenamiento**, la opción para ejecutarlo libera espacio de archivos temporales y de la papelera.
- **Liberador de espacio en disco:** buscalo escribiendo su nombre en el menú Inicio.

En soporte también sumaba la **limpieza de la caché**, la del navegador incluida: con el tiempo acumula mucho y puede afectar sobre todo la navegación.

## 4. Pasar el antivirus

Un malware puede consumir recursos sin que se note a simple vista. En Windows 11, el análisis está en **Inicio > Configuración > Privacidad y seguridad > Seguridad de Windows**, con la opción **Examen rápido**. En una empresa, este paso suele estar cubierto por el antivirus corporativo, pero conviene confirmarlo antes de seguir.

## 5. Instalar las actualizaciones pendientes

En **Inicio > Configuración > Windows Update > Buscar actualizaciones**. Microsoft recomienda revisar también las **actualizaciones opcionales**, en las opciones avanzadas, porque ahí suelen aparecer las de drivers. Un driver viejo o dañado puede explicar desde lentitud hasta fallas de video o de red; en soporte, reinstalar o actualizar drivers era una tarea de todas las semanas.

## 6. Ajustar los efectos visuales

Este es el paso que más se nota en equipos con pocos recursos. Las animaciones, sombras y transparencias de Windows consumen memoria y procesador. Para desactivarlas:

1. En **Inicio**, escribí **Ajustar la apariencia y el rendimiento de Windows** y abrilo.
2. En la pestaña **Efectos visuales**, elegí **Ajustar para obtener el mejor rendimiento**.

Windows se ve más simple, pero la diferencia de velocidad suele notarse en el momento. Por eso lo consideraba clave: es la forma más directa de que el usuario sienta el cambio.

## 7. Lo que hacía en casos puntuales: el registro

En algunos casos llegué a modificar valores del **registro de Windows** (regedit) para mejorar el rendimiento. No lo recomiendo como paso para cualquiera: un cambio mal hecho en el registro puede dejar el sistema inestable o sin arrancar.

Si alguna vez lo necesitás, la regla que sigue Microsoft es simple: **antes de tocar una clave, exportala como copia de seguridad**, y si es posible creá un punto de restauración. Desde Windows 10, versión 1803, el sistema ya no guarda copias automáticas del registro en la carpeta RegBack, así que el respaldo lo tenés que hacer vos.

## Cuándo no es software

Si después de todo esto el equipo sigue lento, toca revisar el hardware. En la empresa donde trabajé, eso ya no era de la mesa de ayuda: se derivaba al soporte en sitio, que podía revisar el equipo físicamente. Cómo se reparte el trabajo entre esos niveles está en la guía de [qué hace un soporte técnico](/carrera/que-hace-un-soporte-tecnico/).

## Por qué esto aparece en los exámenes

Este orden de revisión no es un invento de la mesa de ayuda: está casi entero en el temario de CompTIA A+. El objetivo 3.1 del Core 2 incluye el rendimiento degradado entre los problemas de Windows que hay que saber resolver, y el 1.4 nombra las herramientas que usé acá: el Administrador de tareas con sus pestañas de procesos, inicio y rendimiento, el Monitor de recursos, el Liberador de espacio en disco y el Editor del Registro. El resto de las tareas típicas de soporte, cruzadas con el temario, están en la guía de [CompTIA A+](/entrada/certificacion-comptia-a-plus/).

## Fuentes

- [Sugerencias para mejorar el rendimiento del equipo en Windows (Microsoft)](https://support.microsoft.com/es-es/windows/sugerencias-para-mejorar-el-rendimiento-del-equipo-en-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96): los pasos oficiales de actualizaciones, antivirus, espacio en disco, aplicaciones de inicio, efectos visuales y uso de recursos.
- [Hacer una copia de seguridad del registro y restaurarlo (Microsoft)](https://support.microsoft.com/es-es/topic/hacer-una-copia-de-seguridad-del-registro-y-restaurarlo-en-windows-855140ad-e318-2a13-2829-d428a2ab0692) y [el registro ya no se respalda en RegBack desde Windows 10, versión 1803 (Microsoft Learn)](https://learn.microsoft.com/es-es/troubleshoot/windows-client/installing-updates-features-roles/system-registry-no-backed-up-regback-folder): cómo respaldar antes de editar.
- [Objetivos oficiales de CompTIA A+ Core 2 (220-1202)](https://lecbyo.files.cmp.optimizely.com/download/cefedfb2b8a511ef809306d06d323538): los objetivos 1.4 y 3.1.

*Pasos verificados en octubre de 2026 en la documentación oficial de Microsoft para Windows 11. El orden de revisión es el que usaba como soporte de nivel 1.*
