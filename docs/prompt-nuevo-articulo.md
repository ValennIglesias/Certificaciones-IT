# Prompt para escribir un artículo nuevo

Pegá esto al pedir un artículo, completando lo de `<...>`. Codifica las
convenciones que ya siguen los artículos publicados del sitio.

---

## El prompt

> Escribí un artículo para Certificaciones IT.
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
> title: "<máx. 120 caracteres, con la keyword adelante si entra natural>"
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
> 3. **Cuerpo en H2 descriptivos** (`## Cuánto sale certificarse`, no
>    `## Costos`). Entre 4 y 6 secciones. Al menos una tabla o lista comparativa
>    con el dato duro del artículo.
> 4. **Cierre accionable**: qué hacer ahora, no un resumen de lo dicho.
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
> **Tablas:** máximo 3 columnas si el texto de las celdas es largo. Con 4
> columnas hay que hacer scroll en mobile, que ya funciona pero se lee peor.
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
> dominio. Si no tenés el dato verificado, escribí el texto sin él o dejalo
> marcado como `<!-- VERIFICAR -->` para completarlo a mano después.
>
> **Extensión:** 800-1.500 palabras. Mejor 900 densas que 2.000 infladas.

---

## Checklist antes de publicar

- [ ] `npm run build` sin errores (el schema valida el frontmatter y **rompe el
      build** si falta un campo o el cluster no es uno de los cinco).
- [ ] La `description` es única: no repetir la de otro artículo.
- [ ] La respuesta a la keyword está arriba, antes de cualquier narrativa.
- [ ] Enlaza al roadmap, y el roadmap o algún otro artículo enlaza a este.
- [ ] Ningún enlace interno roto y todos con barra final.
- [ ] Si hay tabla de 4+ columnas, revisada en mobile.
- [ ] Datos verificados contra la fuente oficial del proveedor.

## Convenciones que ya están resueltas y no hay que tocar

- **Autor:** siempre `"Valentín"`, con tilde. Es el único nombre de autor del
  sitio (`Valen — Certificaciones IT` es el titular legal, cosa distinta).
- **Ubicación del archivo:** `src/content/articles/<cluster>/<slug>.md`. La
  carpeta es convención; la URL sale del frontmatter y del nombre del archivo.
- **Borradores:** `draft: true` se ve en `npm run dev` y queda fuera del build
  de producción y del sitemap.
- **Imagen destacada:** opcional (`heroImage` + `heroAlt`, relativa al `.md`).
  Sin ella, el Open Graph cae al `og-default.jpg`.
