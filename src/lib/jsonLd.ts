/**
 * Serializa datos para inyectarlos dentro de <script type="application/ld+json">.
 *
 * `set:html` de Astro inserta el string tal cual, sin escapar nada. Sin este
 * paso, un frontmatter que contenga "</script>" cierra la etiqueta antes de
 * tiempo y todo lo que siga se interpreta como HTML de la página — incluido un
 * <script> ejecutable.
 *
 * Los caracteres < > & solo pueden aparecer dentro de strings JSON (los
 * caracteres estructurales de JSON son { } [ ] : , "), así que reemplazarlos de
 * forma global es seguro: nunca tocan la estructura. Y \u003c dentro de un
 * string JSON se decodifica de vuelta a "<", así que el resultado sigue siendo
 * exactamente el mismo dato para cualquier parser, Google incluido.
 *
 * U+2028 y U+2029 se escapan también: son válidos en JSON pero son terminadores
 * de línea en JavaScript y rompen a los consumidores que evalúan el bloque.
 */
const NEEDS_ESCAPE = /[<>&\u2028\u2029]/g;

export function serializeJsonLd(schema: unknown): string {
	return JSON.stringify(schema).replace(NEEDS_ESCAPE, (character) => {
		return '\\u' + character.charCodeAt(0).toString(16).padStart(4, '0');
	});
}
