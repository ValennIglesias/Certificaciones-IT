import type { ImageMetadata } from 'astro';
import { AUTHORS, type AuthorKey } from '../consts';

export type Author = (typeof AUTHORS)[AuthorKey];

export function getAuthor(key: string): Author {
	return AUTHORS[key as AuthorKey];
}

export function authorPath(author: Author): string {
	return `/autor/${author.slug}/`;
}

/**
 * Foto opcional del autor: src/assets/autores/<slug>.(jpg|jpeg|png|webp).
 * Se busca por glob para que el build no falle mientras la foto no exista;
 * sin foto, la página y la caja de autor simplemente no muestran imagen.
 */
const PHOTOS = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/autores/*.{jpg,jpeg,png,webp}',
	{ eager: true },
);

export function authorPhoto(author: Author): ImageMetadata | undefined {
	const match = Object.entries(PHOTOS).find(([file]) =>
		/\/([^/]+)\.[a-z]+$/.exec(file)?.[1] === author.slug,
	);
	return match?.[1].default;
}

/**
 * Entidad Person de Schema.org. El @id es estable (URL de la página de autor),
 * así el author de cada artículo y el mainEntity de la página de autor son la
 * misma entidad para Google.
 */
export function personSchema(author: Author, site: URL | undefined) {
	const url = new URL(authorPath(author), site).toString();
	const photo = authorPhoto(author);
	return {
		'@type': 'Person',
		'@id': `${url}#person`,
		name: author.name,
		url,
		jobTitle: author.jobTitle,
		sameAs: [author.linkedin],
		knowsAbout: [...author.knowsAbout],
		...(photo && { image: new URL(photo.src, site).toString() }),
	};
}
