# Prompt para escribir un artículo nuevo

Pegá esto al pedir un artículo, completando lo de `<...>`. Codifica las
convenciones que ya siguen los artículos publicados del sitio.

---

## El prompt

> Escribí un artículo para Desde Cero IT.
>
> **Tema:** `<tema>`
> **Keyword principal:** `<keyword exacta>`
> **Cluster:** `<entrada | redes | seguridad | cloud | carrera>`
> **Slug:** `<slug-en-kebab-case>`
>
> **Frontmatter** (obligatorio, exacto):
>
> ```yaml
> ---
> title: "<máx. 60 caracteres, con la keyword adelante si entra natural>"
> description: "<máx. 200 caracteres, única en todo el sitio, que funcione como snippet de Google>"
> keyword: "<la keyword principal, tal cual>"
> cluster: "<uno de los cinco>"
> pubDate: <AAAA-MM-DD>
> author: "Valentín"
> draft: false
> ---
> ```
>
> **Estructura:**
>
> 1. **Hook de 1-2 frases**, sin encabezado. Que plante la tesis, no que
>    presente el tema.
> 2. **Respuesta corta** inmediatamente después: 3-5 viñetas o un párrafo que
>    respondan la keyword sin rodeos. Quien llega de Google tiene que poder
>    irse satisfecho sin bajar más.
>
>    Las viñetas tienen que ser **todas del mismo tipo**: si la lista se
>    presenta como "lo que mejor funciona", todos los ítems son tácticas. Los
>    punteros a otros artículos van **fuera** de la lista, como línea aparte
>    debajo. Una lista que mezcla tácticas con enlaces se lee floja.
> 3. **Cuerpo en H2 descriptivos** (`## Cuánto sale certificarse`, no
>    `## Costos`). Entre 4 y 6 secciones.
> 4. **Al menos una tabla** con el dato duro del artículo. Si escribiste cifras
>    concretas dentro de un párrafo —precios, plazos, porcentajes, pesos de
>    examen—, sacalas a tabla. Es el contenido más escaneable y el que más se
>    cita; enterrado en prosa se pierde.
> 5. **Cierre accionable**: qué hacer ahora, no un resumen de lo dicho.
>
> **Enlaces internos (importante):**
>
> - Enlazá **siempre** al roadmap: `/carrera/roadmap-certificaciones-it/`. Es el
>   artículo pilar y todo satélite le manda señal de vuelta.
> - Enlazá a los artículos relacionados que ya existen, con texto de ancla
>   descriptivo (`la guía de fundamentos de redes`, nunca `hacé clic acá`).
> - Si mencionás un tema que ya tiene artículo, enlazalo en esa mención misma;
>   no lo dejes en texto plano para el final.
> - Rutas internas siempre **con barra final**: `/redes/mi-articulo/`.
>
> **Tablas:** **máximo 3 columnas.** Con 4 hay que hacer scroll en mobile y la
> última columna se lee mal. Si necesitás una cuarta dimensión, partí la tabla
> en subsecciones con `###` —una por categoría— y dejá 3 columnas en cada una.
> Así se resolvió la tabla del roadmap.
>
> **Tono:**
>
> - Segunda persona, voseo rioplatense (`tenés`, `sacá`, `empezá`).
> - Directo y sin relleno. Nada de "en el mundo actual de la tecnología".
> - Si contás experiencia propia, **primera persona** (`empecé en un help desk`).
>   Es lo único que ningún competidor puede copiar, y es lo que Google premia
>   como experiencia de primera mano.
>
> **Datos:** no inventes precios, porcentajes, códigos de examen ni pesos de
> dominio. Si no tenés el dato verificado, escribí el texto sin él o anotá el
> pendiente en el frontmatter:
>
> ```yaml
> verificar:
>   - "Costo exacto del examen al momento de publicar"
> ```
>
> **No uses `<!-- VERIFICAR -->` en el cuerpo**: los comentarios HTML llegan al
> código fuente de la página publicada. El campo `verificar` no se renderiza
> nunca, y el build lista los pendientes en cada corrida para que no se
> olviden.
>
> **Encabezados honestos:** el H2 no puede prometer más de lo que entrega el
> cuerpo. `## Qué dice la evidencia` obliga a citar fuentes; si lo que tenés son
> patrones vistos en foros y comunidades, el título es
> `## Qué funciona según quienes ya pasaron por esto`. Con AdSense evaluando la
> calidad editorial, prometer de más en un encabezado cuesta caro.
>
> **Extensión:** 800-1.500 palabras. Mejor 900 densas que 2.000 infladas.

---

## Checklist antes de publicar

- [ ] **El archivo está en `src/content/articles/<cluster>/`**, no en la raíz
      del repo. Un `.md` en la raíz se commitea sin error y **no se publica**:
      Astro solo lee la colección. Si la URL no aparece en el build, es esto.
- [ ] `npm run build` sin errores (el schema valida el frontmatter y **rompe el
      build** si falta un campo o el cluster no es uno de los cinco).
- [ ] El `title` tiene **60 caracteres o menos**. El límite aplica al `<title>`
      final renderizado, incluido cualquier sufijo: los artículos hoy no
      llevan sufijo, así que coincide con el campo; las páginas internas
      (clusters, legales, autor) suman ` | Desde Cero IT` (16 caracteres).
      Bing marca como "Title too long" los que se pasan.
- [ ] La `description` es única: no repetir la de otro artículo.
- [ ] La keyword tiene volumen verificado en Keyword Planner y no está ya
      asignada a otro artículo (ver docs/mapa-keywords.md).
- [ ] La respuesta a la keyword está arriba, antes de cualquier narrativa.
- [ ] Enlaza al roadmap, y el roadmap o algún otro artículo enlaza a este.
- [ ] Ningún enlace interno roto y todos con barra final.
- [ ] Ninguna tabla pasa de 3 columnas.
- [ ] Las cifras concretas están en tabla, no sueltas en un párrafo.
- [ ] Las viñetas del resumen son todas del mismo tipo.
- [ ] Ningún H2 promete más de lo que entrega su sección.
- [ ] `pubDate` es la fecha real de publicación (una fecha futura se publica
      igual y encabeza la home).
- [ ] Datos verificados contra la fuente oficial del proveedor.
- [ ] Los pendientes van en el campo `verificar` del frontmatter, no en
      comentarios HTML.
- [ ] Si el artículo cubre una certificación que ya se nombra en otro (por
      ejemplo en el roadmap), actualizar ese enlace para que apunte acá.

## Convenciones que ya están resueltas y no hay que tocar

- **Autor:** siempre `"Valentín"`, con tilde. Es el único nombre de autor del
  sitio (`Valentín Iglesias — Desde Cero IT` es el titular legal, cosa distinta).
- **Ubicación del archivo:** `src/content/articles/<cluster>/<slug>.md`. La
  carpeta es convención; la URL sale del frontmatter y del nombre del archivo.
- **Borradores:** `draft: true` se ve en `npm run dev` y queda fuera del build
  de producción y del sitemap.
- **Imagen destacada:** opcional (`heroImage` + `heroAlt`, relativa al `.md`).
  Sin ella, el Open Graph cae al `og-default.jpg`.
