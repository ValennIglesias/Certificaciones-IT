import { getCollection, type CollectionEntry } from 'astro:content';
import type { ClusterId } from '../consts';

export type Article = CollectionEntry<'articles'>;

/**
 * El slug de la URL es el nombre del archivo, sin la carpeta del cluster.
 * El cluster de la URL sale del frontmatter, no de la carpeta: la carpeta es
 * solo una convención de orden.
 */
export function articleSlug(entry: Article): string {
	return entry.id.split('/').pop()!;
}

export function articlePath(entry: Article): string {
	return `/${entry.data.cluster}/${articleSlug(entry)}/`;
}

/** Más nuevo primero. */
function byDateDesc(a: Article, b: Article) {
	return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/**
 * Artículos publicados, ordenados por fecha descendente.
 * Los borradores se ven en `astro dev` pero nunca en el build de producción.
 */
export async function getArticles(cluster?: ClusterId): Promise<Article[]> {
	const entries = await getCollection('articles', ({ data }) => {
		if (import.meta.env.PROD && data.draft) return false;
		return cluster ? data.cluster === cluster : true;
	});
	return entries.sort(byDateDesc);
}

/** Otros artículos del mismo cluster, para el bloque de "seguí leyendo". */
export async function getRelatedArticles(entry: Article, limit = 3): Promise<Article[]> {
	const siblings = await getArticles(entry.data.cluster as ClusterId);
	return siblings.filter((a) => a.id !== entry.id).slice(0, limit);
}

// timeZone UTC a propósito: "pubDate: 2026-09-10" se parsea como medianoche UTC,
// así que formatear en la zona local adelantaría o atrasaría la fecha un día
// según dónde corra el build. Con UTC, lo que se muestra es siempre lo que dice
// el frontmatter.
const DATE_FORMATTER = new Intl.DateTimeFormat('es', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	timeZone: 'UTC',
});

export function formatDate(date: Date): string {
	return DATE_FORMATTER.format(date);
}

/** Estimación de lectura: 200 palabras por minuto, mínimo 1. */
export function readingTime(body: string | undefined): number {
	if (!body) return 1;
	const words = body.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 200));
}
