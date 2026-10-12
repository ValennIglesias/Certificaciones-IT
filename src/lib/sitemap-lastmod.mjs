/**
 * Fechas de última modificación para el <lastmod> del sitemap.
 *
 * Corre en astro.config.mjs, donde la colección de contenido todavía no está
 * disponible, así que lee el frontmatter de los archivos directamente. Solo
 * hacen falta tres campos simples (cluster, pubDate, updatedDate), y el schema
 * de content.config.ts ya garantiza su formato.
 *
 * Qué fecha lleva cada URL:
 * - Artículo: updatedDate si existe; si no, pubDate.
 * - Home: la del artículo modificado más recientemente.
 * - Página de cluster: la del artículo más reciente de ese cluster.
 * - Página de autor: la del artículo más reciente (lista todos los artículos).
 * - Páginas legales: sin lastmod. Su fecha vive en un texto en español dentro
 *   de cada página; antes que una fecha inventada, mejor ninguna.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const ARTICLES_DIR = './src/content/articles';

function campo(frontmatter, nombre) {
	const match = frontmatter.match(new RegExp(`^${nombre}:\\s*"?([^"\\r\\n]+)"?\\s*$`, 'm'));
	return match ? match[1].trim() : undefined;
}

/** Fecha ISO (AAAA-MM-DD) más reciente de una lista. */
function maxFecha(fechas) {
	return fechas.reduce((max, fecha) => (fecha > max ? fecha : max), '');
}

/**
 * @param {string} site URL del sitio, con o sin barra final.
 * @returns {Map<string, string>} URL absoluta (con barra final) -> AAAA-MM-DD
 */
export function buildLastmod(site) {
	const base = site.replace(/\/$/, '');
	const lastmod = new Map();
	const porCluster = new Map();

	const archivos = readdirSync(ARTICLES_DIR, { recursive: true }).filter((f) =>
		/\.mdx?$/.test(String(f)),
	);

	for (const archivo of archivos) {
		const contenido = readFileSync(path.join(ARTICLES_DIR, String(archivo)), 'utf-8');
		const frontmatter = contenido.split(/^---\s*$/m)[1] ?? '';
		if (campo(frontmatter, 'draft') === 'true') continue;

		const cluster = campo(frontmatter, 'cluster');
		const fecha = campo(frontmatter, 'updatedDate') ?? campo(frontmatter, 'pubDate');
		if (!cluster || !fecha) continue;

		const slug = path.basename(String(archivo)).replace(/\.mdx?$/, '');
		const dia = fecha.slice(0, 10);
		lastmod.set(`${base}/${cluster}/${slug}/`, dia);
		porCluster.set(cluster, maxFecha([porCluster.get(cluster) ?? '', dia]));
	}

	const masReciente = maxFecha([...porCluster.values()]);
	if (masReciente) {
		lastmod.set(`${base}/`, masReciente);
		lastmod.set(`${base}/autor/valentin-iglesias/`, masReciente);
	}
	for (const [cluster, dia] of porCluster) lastmod.set(`${base}/${cluster}/`, dia);

	return lastmod;
}
