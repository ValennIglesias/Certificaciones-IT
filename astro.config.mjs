// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// El dominio final se define en la variable de entorno SITE_URL (ver .env.example).
// Es obligatorio para que el sitemap, los canonical y las Open Graph absolutas salgan bien.
const FALLBACK_SITE = 'https://www.tu-dominio.com';
const site = process.env.SITE_URL ?? FALLBACK_SITE;

if (site === FALLBACK_SITE) {
	console.warn(
		'\n[config] SITE_URL no está definida: se usa el placeholder ' +
			FALLBACK_SITE +
			'.\n         Definila antes de publicar o el sitemap y los canonical van a apuntar al dominio equivocado.\n',
	);
}

export default defineConfig({
	site,
	// La spec define las URLs con barra final. Con 'always' el canonical, el
	// sitemap y el redirect de Vercel coinciden todos en la misma forma de URL.
	trailingSlash: 'always',
	build: {
		// /cluster/slug/index.html -> URLs con barra final, como pide la spec
		format: 'directory',
	},
	integrations: [
		mdx(),
		sitemap({
			// Los borradores no se publican, así que tampoco entran al sitemap.
			filter: (page) => !page.includes('/404'),
		}),
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
