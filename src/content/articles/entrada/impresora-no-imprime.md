---
title: "Impresora no imprime: qué revisar, paso a paso"
description: "Qué hacer si la impresora no imprime en Windows: el orden de revisión que usaba en la mesa de ayuda, de la cola de impresión trabada al servidor de impresión, con los pasos oficiales de Microsoft."
keyword: "impresora no imprime"
cluster: "entrada"
pubDate: 2026-11-07
author: "Valentín"
draft: true
---

"No puedo imprimir" era de los pedidos más repetidos en la mesa de ayuda donde trabajé. El reporte casi nunca decía más que eso, así que el trabajo empezaba por indagar qué pasaba. Y lo más común era que la impresión no salía porque había quedado colgada en la cola de impresión.

Este es el orden que seguía, de lo más rápido a lo más delicado. Los pasos de Windows están contrastados con la guía oficial de Microsoft para Windows 11; en Windows 10 algunos menús cambian de nombre.

El orden, en corto:

- Confirmar que la impresora esté **encendida, conectada y sin errores**.
- Verificar que esté **instalada en el equipo**.
- Entrar a la **página de la impresora desde el navegador** para ver su estado.
- **Vaciar la cola de impresión** si hay trabajos trabados.
- **Volver a agregarla**, desde el servidor o a mano con su driver.

## 1. Lo obvio, pero primero

Antes de tocar la computadora, mirá la impresora: que esté encendida, que no tenga un error en pantalla y que el cable USB o la conexión de red estén en su lugar. Microsoft recomienda empezar por un reinicio completo: apagarla, desenchufarla, esperar 30 segundos y volver a encenderla.

Si es una impresora inalámbrica, confirmá además que esté conectada a la misma red que la computadora.

## 2. Verificar que esté instalada en el equipo

Una impresora puede funcionar para todos los demás y no aparecer en tu computadora. Entrá a **Inicio > Configuración > Bluetooth y dispositivos > Impresoras y escáneres** y fijate si figura en la lista.

Si no está, hay que agregarla (paso 5). Si está, abrila y revisá su estado: si figura **sin conexión**, el problema está en la comunicación con la impresora, no en el documento.

## 3. Mirar el estado desde el navegador

Las impresoras de red suelen tener una página propia de administración: escribís su dirección IP en el navegador y ves su estado. La IP suele figurar en el panel de la impresora o en una hoja de configuración que se imprime desde el propio equipo.

Era lo primero que revisaba cuando la impresora estaba bien instalada y aun así no imprimía, porque daba más detalle que cualquier mensaje de Windows. Ahí aparecían casos como estos:

- La impresora estaba en **modo de hibernación o suspendida**.
- Tenía **poca tinta o tóner**.
- Había **papel atascado**.

Si la página no abre, podés probar con un `ping` a la IP desde la línea de comandos (`ping 192.168.1.50`, con la IP de tu impresora). Si tampoco responde, el problema no es tu computadora: es la red o la impresora misma, y probablemente le pase a más de un usuario.

## 4. Vaciar la cola de impresión

Esta era la solución más frecuente. Cuando un trabajo queda trabado, los que vienen detrás no salen. Lo primero es abrir la impresora en **Impresoras y escáneres** y cancelar los trabajos pendientes.

Si no se borran, Microsoft indica reiniciar el servicio que maneja la cola:

1. Buscá **Servicios** en el menú Inicio y abrilo.
2. Hacé doble clic en **Administrador de trabajos de impresión** y elegí **Detener**.
3. Borrá los archivos de la carpeta `%WINDIR%\system32\spool\PRINTERS`.
4. Volvé al servicio, confirmá que el tipo de inicio sea **Automático** e inicialo de nuevo.

Para esto hacen falta permisos de administrador. En una empresa, además, la cola suele estar en el **servidor de impresión**, no en tu computadora: cuando tuve permisos en los servidores, limpiarla ahí era algo que algunas semanas hacía dos o tres veces y otras ninguna, y solía alcanzar para destrabar la impresora. Si no alcanzaba, el siguiente paso era un reinicio.

## 5. Volver a agregar la impresora

En el peor de los casos, toca reconfigurarla en el equipo:

- **Quitarla:** en **Impresoras y escáneres**, seleccionala y elegí **Quitar**.
- **Volver a agregarla desde el servidor,** si la empresa tiene uno: con **Agregar dispositivo** o, si no aparece sola, con **Agregar manualmente** e indicando su ruta (por ejemplo, `\servidor\impresora`). Es la opción que usaba siempre que podía, porque el servidor ya tiene el driver correcto.
- **Agregarla a mano con su IP y su driver,** cuando desde el servidor no se podía. El driver más reciente sale de Windows Update o de la página del fabricante.

## Cuándo no es la computadora

Si el problema es físico, ya no se resuelve desde Windows. En la empresa donde trabajé, esos casos se escalaban siempre al soporte en sitio: si era papel atascado o un cambio de tóner, lo resolvían ellos, y si había una falla más específica, intervenía el proveedor de las impresoras. Cómo se reparte el trabajo entre esos niveles está en la guía de [qué hace un soporte técnico](/carrera/que-hace-un-soporte-tecnico/).

## Por qué esto aparece en los exámenes

Igual que con una [PC lenta](/entrada/pc-lenta-que-hacer/), este orden de revisión está en el temario de CompTIA A+. En el Core 2, el objetivo 1.6 incluye la sección Dispositivos e impresoras del Panel de control, el 1.7 cubre las impresoras compartidas en un dominio y el 1.5 incluye `ping` entre los comandos de red. El resto de las tareas típicas de soporte, cruzadas con el temario, están en la guía de [CompTIA A+](/entrada/certificacion-comptia-a-plus/).

## Fuentes

- [Solucionar problemas de conexión con la impresora e impresión en Windows (Microsoft)](https://support.microsoft.com/es-es/windows/solucionar-problemas-de-conexi%C3%B3n-e-impresi%C3%B3n-de-impresoras-en-windows-fb830bff-7702-6349-33cd-9443fe987f73): el reinicio de la impresora, la conexión, quitarla y volver a agregarla, el driver y cómo vaciar la cola de impresión.
- [Objetivos oficiales de CompTIA A+ Core 2 (220-1202)](https://lecbyo.files.cmp.optimizely.com/download/cefedfb2b8a511ef809306d06d323538): los objetivos 1.5, 1.6 y 1.7.

*Pasos verificados en octubre de 2026 en la documentación oficial de Microsoft para Windows 11. El orden de revisión es el que usaba como soporte de nivel 1.*
