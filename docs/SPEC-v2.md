# SPEC v2 — Desde Cero IT

Versión 2 del spec técnico. Objetivo: dejar el sitio listo para
solicitar Google AdSense, con hosting que permita uso comercial,
identidad de autor verificable y las señales de SEO que faltan.

Reemplaza a `SPEC.md` (v1). Los cambios respecto de v1 están marcados
como **[CAMBIO]**; lo que sigue igual no se repite en detalle.

> **Estado: ejecutado el 3 de octubre de 2026.** Este documento queda como
> registro de lo que se implementó, no como lista de pendientes. Donde la
> implementación se apartó del plan original, el texto describe lo que
> realmente se hizo y lo marca como **[IMPLEMENTADO]**. Lo único que queda
> abierto está en el checklist de la sección 10 y depende del dominio o de
> paneles externos (Cloudflare, Search Console, AdSense), no del código.

---

## 0. Contexto y estado actual

- Sitio Astro estático, 20 artículos publicados en cinco clusters
  (entrada, redes, seguridad, cloud, carrera).
- Desplegado en Vercel, plan Hobby, sin dominio propio.
- **No está indexado en Google todavía.** Esto hace que cualquier
  cambio estructural de esta fase tenga costo de SEO cero.
- Banner de consentimiento propio ya implementado, con Google Consent
  Mode v2.
- AdSense preparado a nivel de código pero desactivado
  (`PUBLIC_ADSENSE_ENABLED=false`).

---

## 1. [CAMBIO] Hosting y dominio: consolidar en Cloudflare

### Resumen de la decisión

| Servicio | Proveedor | Costo |
| --- | --- | --- |
| Hosting | Cloudflare Pages, plan gratuito | US$0 |
| Dominio | Cloudflare Registrar | ~US$10,44/año (.com) |
| DNS | Cloudflare | US$0, incluido |

### Por qué Cloudflare Registrar para el dominio

Cloudflare Registrar vende al **precio mayorista del registro más la
tasa de ICANN, sin margen**. Eso tiene dos consecuencias prácticas:

- No hay oferta de primer año seguida de un salto en la renovación,
  que es el modelo habitual del resto de los registradores.
- La privacidad de WHOIS está incluida sin costo.

Sumado a que el hosting ya va a estar en Cloudflare, consolidar
dominio, DNS y hosting en un solo panel simplifica la operación.

### Condiciones y límites a tener presentes

- **Cloudflare Registrar exige usar Cloudflare como proveedor de DNS.**
  No funciona como registrador independiente. En este caso no es
  restricción, porque el hosting también va ahí.
- Soporta más de 390 TLDs, pero no todos. `.com` está cubierto.
- **Plazo de bloqueo de ICANN:** un dominio recién registrado no puede
  transferirse a otro registrador durante 60 días. Por eso conviene
  decidir el registrador ahora y no después: si se registra en otro
  lado, mover el dominio a Cloudflare implica esperar dos meses.

### Riesgo de concentración

Tener dominio, DNS y hosting en un mismo proveedor significa que una
suspensión de cuenta deja el sitio inaccesible y además sin control del
dominio. Es un riesgo real, aunque bajo para un sitio de contenido sin
nada controvertido.

Mitigación mínima, que ya está cubierta: **el repositorio vive en
GitHub**, así que el sitio se puede reconstruir en otro hosting en
minutos. El dominio es la pieza más difícil de recuperar, así que
conviene mantener la cuenta de Cloudflare con verificación en dos pasos
activada y un correo de recuperación al que se tenga acceso seguro.

### Límites del plan gratuito de Pages

| Recurso | Límite |
| --- | --- |
| Ancho de banda | Ilimitado |
| Solicitudes a contenido estático | Ilimitadas |
| Sitios | Ilimitados |
| Builds | 500 por mes |
| Builds concurrentes | 1 |
| Duración máxima de build | 20 minutos |
| Archivos por despliegue | 20.000 |
| Tarjeta de crédito | No requerida |

Para un sitio Astro estático de este tamaño, ninguno de estos límites
es alcanzable. El ancho de banda ilimitado además cubre el escenario
de que un artículo tenga un pico de tráfico, que en Vercel habría
consumido la cuota.

**Advertencia sobre Pages Functions:** cualquier ruta dinámica o
función se factura contra el plan de Workers (100.000 solicitudes por
día en el tier gratuito). El sitio es completamente estático, así que
no aplica — pero conviene no introducir funciones sin evaluarlo.

### Por qué migrar el hosting fuera de Vercel

Las Fair Use Guidelines de Vercel definen como uso comercial "la
inclusión de publicidad, incluyendo pero no limitado a plataformas de
publicidad en línea como Google AdSense", y el plan Hobby está
restringido a uso personal no comercial. Publicar anuncios en Hobby es
una violación de términos, y la vía de aplicación es la pausa del
proyecto.

Las dos salidas son Vercel Pro (US$20/mes) o un hosting cuyo tier
gratuito permita uso comercial. Dado el ingreso proyectado del sitio
—dos dígitos mensuales—, US$20/mes lo dejaría en negativo de forma
permanente. Cloudflare Pages permite uso comercial en su plan
gratuito.

### Pasos: registro del dominio

1. Crear la cuenta de Cloudflare y activar la verificación en dos
   pasos antes de cualquier otra cosa.
2. Buscar y registrar el dominio desde Cloudflare Registrar.
3. Verificar que la privacidad de WHOIS quedó activa.
4. Confirmar que el dominio usa los servidores de nombres de
   Cloudflare (es automático al registrarlo ahí).

Si el dominio elegido no estuviera disponible en Cloudflare
Registrar, la alternativa es registrarlo en Porkbun y transferirlo a
Cloudflare una vez cumplidos los 60 días de bloqueo de ICANN.

### Pasos de migración del hosting

1. Crear un proyecto de Pages en la misma cuenta de Cloudflare.
2. Conectar el repositorio de GitHub. Configuración de build:
   - Comando: `npm run build`
   - Directorio de salida: `dist`
   - Versión de Node: **[IMPLEMENTADO]** la fija el archivo
     `.node-version` del repo (24), que Cloudflare lee solo. No hace falta
     la variable `NODE_VERSION`.
3. Migrar todas las variables de entorno del proyecto de Vercel al
   panel de Cloudflare Pages, incluyendo `SITE_URL`.
4. Verificar que el build pasa y que el sitio funciona en la URL
   `*.pages.dev`.
5. Conectar el dominio propio como dominio personalizado.
6. Revisar que el sitemap, `robots.txt` y las URLs canónicas apunten al
   dominio propio, no a `pages.dev`.
7. Una vez confirmado el funcionamiento, **eliminar el proyecto de
   Vercel** para no dejar una copia pública duplicada del contenido.

### Sobre redirecciones

Como el sitio no está indexado, no hay enlaces entrantes ni posiciones
que preservar: no hacen falta redirecciones 301 desde la URL de Vercel.
Lo importante es eliminar el despliegue viejo para evitar contenido
duplicado.

Si se mantiene por algún motivo, agregar `noindex` en el despliegue de
Vercel.

### [IMPLEMENTADO] Equivalente de `vercel.json` en Cloudflare

Cloudflare Pages ignora `vercel.json`. Lo que hacía ese archivo pasa a dos
archivos de `public/`, que se copian a la raíz de `dist/`:

| Archivo | Contenido |
| --- | --- |
| `public/_headers` | Caché inmutable para `/_astro/*`, cabeceras de seguridad y `X-Robots-Tag: noindex` en `*.pages.dev` |
| `public/_redirects` | `/sitemap.xml` → `/sitemap-index.xml` (301) |

El `noindex` en `*.pages.dev` no estaba en el plan: Cloudflare deja
accesible la copia en `pages.dev` aunque se conecte el dominio propio, y
sin esa cabecera Google podría indexar dos copias del sitio. Se verifica
con el primer deploy.

La barra final de las URLs la resuelve Cloudflare solo, y el comando de
build y el directorio de salida se cargan en el panel. `vercel.json` se
borra cuando se elimine el proyecto de Vercel. `sharp` pasó a ser
dependencia explícita, porque el generador de imágenes OG la usa.

### Verificación de Astro

Astro genera salida estática por defecto; no hace falta adaptador para
Cloudflare Pages en modo estático. Confirmar que `astro.config.mjs` no
tenga un adaptador de Vercel configurado, y quitarlo si lo tiene.

---

## 2. [CAMBIO] Marca: renombrar a "Desde Cero IT"

Reemplazar "Certificaciones IT" por "Desde Cero IT" en:

- Título del sitio y `<title>` por defecto
- Header y footer
- Metadatos por defecto y Open Graph
- Schema.org (`WebSite`, `Organization` si existe)
- Cualquier texto visible que lo mencione
- `package.json` (campo `name`, opcional pero prolijo)

El titular legal en las páginas legales pasa a ser **"Valentín Iglesias
— Desde Cero IT"**, para que sea consistente con la nueva marca.

Al terminar, listar dónde aparecía el nombre viejo para poder
verificar que no quedó nada suelto.

---

## 3. [NUEVO] Página de autor con identidad verificable

### Ruta

`/autor/valentin-iglesias/`

### Contenido

- Foto real
- Nombre completo: Valentín Iglesias
- Bio: experiencia en soporte técnico e infraestructura IT, formación
  en curso en administración de infraestructura de TI
- Certificaciones y formación, si corresponde
- Enlace a LinkedIn
- Listado de los artículos firmados por el autor

### Schema

Marcado `Person` con `sameAs` apuntando al perfil de LinkedIn. El
`author` de cada artículo debe referenciar esta entidad, no ser solo
una cadena de texto.

```json
{
  "@type": "Person",
  "name": "Valentín Iglesias",
  "url": "https://<dominio>/autor/valentin-iglesias/",
  "sameAs": ["https://www.linkedin.com/in/<perfil>"],
  "jobTitle": "...",
  "knowsAbout": ["..."]
}
```

### Caja de autor al final de cada artículo

Componente reutilizable con foto, nombre, una o dos líneas de bio y
enlace a la página de autor. Se inserta automáticamente al final del
layout de artículo, no manualmente por archivo.

### [IMPLEMENTADO] Cómo quedó

- Los datos del autor viven en la tabla `AUTHORS` de `src/consts.ts`,
  indexada por el valor del campo `author` del frontmatter (`"Valentín"`).
  Los artículos no se tocaron; un `author` que no esté en la tabla rompe
  el build.
- La página usa schema `ProfilePage` con la entidad `Person` como
  `mainEntity`. El `author` de cada artículo apunta a la misma entidad por
  su `@id`.
- La formación se muestra separada en "Formación" (certificados de cursos)
  y "En curso", sin presentar cursos como exámenes de certificación.
- La foto es opcional: se toma de `src/assets/autores/<slug>.(jpg|png|webp)`
  si existe. Hasta que se suba, la página y la caja no muestran imagen.

### Nota

Esto vincula la identidad real del autor con el sitio de forma pública.
Es la palanca más directa de E-E-A-T y un criterio que AdSense valora,
pero conviene tenerlo presente como decisión consciente.

---

## 4. [NUEVO] Componente de anuncios AdSense

### Requisitos

- **Altura reservada** mediante contenedor con `min-height` fijo, para
  que el anuncio no desplace contenido al cargar (CLS).
- Si el anuncio no se va a renderizar (variable desactivada o slot sin
  configurar), **el contenedor no se renderiza en absoluto** — nada de
  huecos vacíos.
- Activable por variable de entorno, con validación de fallo cerrado
  (ya implementado en v1, mantener).

### Ubicaciones

| Posición | Regla |
| --- | --- |
| Tras la introducción | **[IMPLEMENTADO]** Antes del primer H2, en todos los artículos. No depende de que exista "Lo esencial", que falta en varios |
| Entre secciones | **[IMPLEMENTADO]** Solo en artículos de 6+ H2 y 1.200+ palabras, antes del H2 del medio. Siempre quedan al menos dos secciones entre anuncios |
| Al final | Antes de los artículos relacionados y de la caja de autor |

### [IMPLEMENTADO] Cómo quedó

- Un plugin de Sätteri (`src/lib/ad-anchors-plugin.mjs`; Sätteri es el
  procesador de Markdown de Astro 7, que también usa MDX) inserta
  marcadores vacíos entre nodos del nivel raíz. Por construcción nunca
  caen dentro de una lista ni de una tabla.
- Los marcadores no dependen de variables de entorno, porque el HTML del
  contenido se cachea entre builds. El layout los muestra con la altura
  reservada solo si `PUBLIC_ADSENSE_SLOT_ARTICLE` es válido, y el script de
  consentimiento crea el `<ins>`. Medido: 0 saltos de layout.
- Las tres ubicaciones del artículo usan el mismo bloque,
  `PUBLIC_ADSENSE_SLOT_ARTICLE`.
- `/ads.txt` se genera en el build desde `PUBLIC_ADSENSE_CLIENT`, aunque
  AdSense siga apagado.

### Prohibiciones

- **Nunca dentro de una lista de pasos numerada o de viñetas.** Rompe
  la lectura y viola las políticas de ubicación de AdSense.
- Nunca dentro de una tabla.
- Nunca dos anuncios consecutivos sin contenido sustancial entre ellos.
- Nunca por encima del primer párrafo del artículo.

---

## 5. [CAMBIO] Consentimiento: CMP certificada por Google

### Por qué cambia

Google exige el uso de una **plataforma de gestión de consentimiento
(CMP) certificada por Google** para mostrar anuncios a usuarios del
Espacio Económico Europeo, Reino Unido y Suiza. El banner propio que
implementamos en v1 cumple técnicamente con Consent Mode v2, pero no
está certificado, así que no satisface ese requisito.

### Qué hacer

Reemplazar el banner propio por una CMP certificada. La opción más
simple es la herramienta de **Privacidad y mensajes** que Google
incluye dentro de AdSense sin costo, que ya está certificada y se
integra con Consent Mode v2 automáticamente.

### Requisitos a preservar del banner actual

- Estado `denied` por defecto para `analytics_storage` y `ad_storage`
- Rechazar tan accesible como aceptar
- Posibilidad de cambiar la decisión después (enlace en el footer)
- No cargar scripts de medición ni de publicidad antes del
  consentimiento; la CMP es la excepción necesaria, porque tiene que
  cargar para poder preguntar

### Nota de orden

La CMP de Google se configura desde el panel de AdSense, que requiere
tener la cuenta aprobada. Hasta entonces, mantener el banner propio
funcionando; el cambio se hace cuando AdSense esté activo.

---

## 6. [AMPLIACIÓN] Páginas legales

| Página | Ruta | Estado |
| --- | --- | --- |
| Política de privacidad | `/politica-de-privacidad/` | Existe, revisar |
| Aviso legal | `/aviso-legal/` | Nueva |
| Política de cookies | `/politica-de-cookies/` | Nueva |
| Contacto | `/contacto/` | Nueva |
| Sobre nosotros | `/sobre-nosotros/` | Existe, revisar |

### Datos del titular (usar en todas)

- Titular: Valentín Iglesias — Desde Cero IT
- Domicilio: Buenos Aires, Argentina
- Contacto: contacto@desdeceroit.com

### Notas por página

- **Aviso legal**: identificación del titular, condiciones de uso,
  propiedad intelectual, limitación de responsabilidad, ley aplicable.
- **Política de cookies**: listado de cookies por finalidad (técnicas,
  analíticas, publicitarias), con Google Analytics y Google AdSense
  identificados como terceros, y enlace al gestor de consentimiento.
- **Contacto**: **[IMPLEMENTADO]** solo dirección de correo visible, sin
  formulario: un formulario necesita una función o un servicio externo, y
  el sitio es 100% estático.

Todas deben tener fecha de última actualización visible.

La política de afiliación queda fuera mientras el sitio no tenga enlaces
de afiliado: se agrega recién cuando exista el primero.

---

## 7. [NUEVO] Mejoras de SEO

### 7.1 Tabla de contenidos automática

Generada a partir de los H2 del artículo, sin intervención manual por
archivo. Mostrar solo si el artículo tiene tres o más H2.

Debe ser navegable con anclas (`#slug-del-h2`) y no romper el layout en
móvil.

**[IMPLEMENTADO]** En escritorio va en el riel izquierdo del artículo y
queda fija al hacer scroll; en móvil va plegada arriba del cuerpo. Así
nunca queda pegada al anuncio de antes del primer H2, que va después de la
intro.

### 7.2 Migas de pan (breadcrumbs)

Visibles y con marcado `BreadcrumbList`:

```
Inicio / <Cluster> / <Título del artículo>
```

**[IMPLEMENTADO]** Ya existían, visibles y con `BreadcrumbList`.

### 7.3 Artículos relacionados

Bloque al final del artículo, antes de la caja de autor, con tres a
cuatro artículos del mismo cluster.

**Con fallback a otros clusters** si el cluster propio no tiene
suficientes.

**[IMPLEMENTADO]** Tres artículos. Si el fallback suma artículos de otro
cluster, el título pasa a "Seguí leyendo" y cada fila muestra su cluster.

### 7.4 Fecha de actualización visible

Nuevo campo opcional en el frontmatter:

```yaml
updatedDate: 2026-10-15
```

- Si está presente, mostrar "Actualizado el <fecha>" junto a la fecha
  de publicación.
- Emitir `dateModified` en el schema del artículo.
- Si no está presente, el comportamiento actual no cambia.

Este campo es especialmente relevante para los artículos con datos que
envejecen (precios de examen, sueldos, versiones de certificación).

**[IMPLEMENTADO]** Ya existía; solo cambió el texto visible de "Act." a
"Actualizado el". No se puso en ningún artículo todavía: corresponde la
primera vez que se actualice uno (el de sueldos es el primer candidato).

---

## 8. Medición

| Herramienta | Mecanismo |
| --- | --- |
| Google Analytics 4 | Variable `PUBLIC_GA_ID`, ya implementado |
| Search Console | **[IMPLEMENTADO]** Verificación por registro DNS TXT en Cloudflare; `PUBLIC_GSC_VERIFICATION` (meta tag) queda como alternativa |

GA4 respeta el consentimiento: no se carga antes de que el usuario acepte.
La verificación de Search Console no instala cookies, así que no depende
del consentimiento.

La variable de Search Console ya existía como `PUBLIC_GSC_VERIFICATION`;
no se renombró. Con el dominio en Cloudflare, la verificación por DNS no
necesita código y cubre todos los subdominios.

---

## 9. Rendimiento

Metas medidas en móvil, con PageSpeed Insights sobre el dominio real:

| Métrica | Meta |
| --- | --- |
| LCP | menor a 2,5 s |
| CLS | menor a 0,1 |
| INP | menor a 200 ms |

Puntos de atención específicos:

- El contenedor de anuncios es el principal riesgo de CLS: la altura
  reservada es obligatoria.
- La foto de la página de autor y la caja de autor deben usar el
  componente de imagen optimizada de Astro.
- La CMP de Google agrega peso: medir antes y después de activarla.

---

## 10. Checklist de salida

Estado al 3 de octubre de 2026.

**Hecho en el código**

- [x] Marca renombrada en todo el código y metadatos
- [x] Página de autor publicada con schema `Person` y `sameAs`
- [x] Caja de autor al final de cada artículo
- [x] Las cinco páginas legales completas y enlazadas desde el footer
- [x] Componente de anuncios con altura reservada, desactivado
- [x] `/ads.txt` generado desde `PUBLIC_ADSENSE_CLIENT`
- [x] Tabla de contenidos, migas de pan y artículos relacionados
- [x] `updatedDate` soportado en el schema del frontmatter
- [x] `public/_headers` y `public/_redirects` equivalentes a `vercel.json`
- [x] `npm run build` sin errores

**Depende del dominio o de paneles externos**

- [ ] Dominio `desdeceroit.com` registrado en Cloudflare Registrar, con WHOIS privado
- [ ] Verificación en dos pasos activa en la cuenta de Cloudflare
- [ ] Sitio desplegado en Cloudflare Pages con dominio propio, y la variante con o sin `www` redirigiendo con 301
- [ ] `SITE_URL` apuntando al dominio propio
- [ ] `noindex` verificado en la copia de `*.pages.dev`
- [ ] Proyecto de Vercel eliminado y `vercel.json` borrado
- [ ] Search Console verificado por DNS y sitemap enviado
- [ ] `PUBLIC_GA_ID` y `PUBLIC_ADSENSE_CLIENT` cargadas en Cloudflare
- [ ] Foto del autor en `src/assets/autores/valentin-iglesias.jpg`
- [ ] PageSpeed en verde sobre el dominio real, en móvil
- [ ] CMP de Google, después de la aprobación de AdSense (sección 5)
