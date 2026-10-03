import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AUTHOR_KEYS, CLUSTER_IDS } from './consts';

const articles = defineCollection({
	// Los artículos viven en src/content/articles/<cluster>/<slug>.md(x).
	// El id queda como "<cluster>/<slug>"; la URL se arma con el frontmatter.
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1).max(60),
			description: z.string().min(1).max(200),
			/** Keyword principal del artículo (definida fuera de este repo). */
			keyword: z.string().min(1),
			cluster: z.enum(CLUSTER_IDS as [string, ...string[]]),
			pubDate: z.coerce.date(),
			/** Clave de AUTHORS en consts.ts: de ahí salen el nombre completo y el schema. */
			author: z.enum(AUTHOR_KEYS as [string, ...string[]]),
			draft: z.boolean().default(false),

			// --- Opcionales ---
			/** Fecha de última revisión; se muestra y se manda en el Schema.org. */
			updatedDate: z.coerce.date().optional(),
			/** Imagen destacada, optimizada por astro:assets. Relativa al .md. */
			heroImage: image().optional(),
			heroAlt: z.string().optional(),
			/**
			 * Datos pendientes de confirmar antes de dar el artículo por cerrado.
			 * Va acá y no en un comentario HTML porque el frontmatter nunca se
			 * renderiza: un `<!-- VERIFICAR -->` queda visible en el código fuente
			 * de la página publicada. Además, el build avisa si queda alguno.
			 */
			verificar: z.array(z.string()).optional(),
		}),
});

export const collections = { articles };
