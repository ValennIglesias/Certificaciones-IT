/**
 * Plugin de HAST para Sätteri (el procesador de Markdown de Astro 7) que marca dónde pueden ir los anuncios DENTRO del cuerpo de
 * un artículo (SPEC-v2, sección 4). Corre igual para .md y .mdx.
 *
 * Solo inserta marcadores vacíos `<div data-ad-anchor="...">`: no lee variables
 * de entorno ni sabe si AdSense está activo. Eso es a propósito: el HTML del
 * contenido se cachea entre builds, y si dependiera de PUBLIC_ADSENSE_* un
 * cambio de variable podría no reflejarse. Con los marcadores fijos:
 * - AdSense apagado: el CSS lo deja en display:none; no ocupa lugar ni se anuncia.
 * - AdSense encendido: ArticleLayout agrega la clase `con-anuncios`, el CSS le
 *   reserva la altura (sin salto de layout) y ConsentBanner crea el <ins>.
 *
 * Reglas de ubicación:
 * - "intro": antes del primer H2. Nunca por encima del primer párrafo, porque
 *   todos los artículos abren con texto antes del primer H2.
 * - "medio": solo en artículos largos (6+ H2 y 1.200+ palabras), antes del H2
 *   del medio. Quedan al menos dos secciones entre anuncios.
 * El anuncio final no va acá: lo pone ArticleLayout después del cuerpo.
 *
 * Los marcadores se insertan solo entre nodos del nivel raíz, justo antes de un
 * H2: nunca pueden quedar dentro de una lista ni de una tabla.
 */

const MIN_H2_MEDIO = 6;
const MIN_PALABRAS_MEDIO = 1200;

function contarPalabras(node) {
	if (node.type === 'text') return node.value.split(/\s+/).filter(Boolean).length;
	if (!Array.isArray(node.children)) return 0;
	return node.children.reduce((total, child) => total + contarPalabras(child), 0);
}

function marcador(posicion) {
	return {
		type: 'element',
		tagName: 'div',
		properties: { dataAdAnchor: posicion },
		children: [],
	};
}

export const adAnchorsPlugin = {
	name: 'desde-cero-ad-anchors',
	// `before` corre una vez por documento con la raíz: alcanza con mirar sus
	// hijos directos para encontrar los H2 del nivel superior.
	before(root, ctx) {
		const h2 = root.children.filter((node) => node.type === 'element' && node.tagName === 'h2');
		if (h2.length === 0) return;

		ctx.insertBefore(h2[0], marcador('intro'));

		if (h2.length >= MIN_H2_MEDIO && contarPalabras(root) >= MIN_PALABRAS_MEDIO) {
			ctx.insertBefore(h2[Math.floor(h2.length / 2)], marcador('medio'));
		}
	},
};
