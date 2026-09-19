import type { APIRoute } from 'astro';

/**
 * robots.txt generado en el build para que el Sitemap apunte siempre al dominio
 * configurado en SITE_URL, sin hardcodearlo en /public.
 */
export const GET: APIRoute = ({ site }) => {
	const sitemapUrl = new URL('sitemap-index.xml', site);

	const body = `User-agent: *
Allow: /

# Sin rutas privadas: el sitio es estático y todo el contenido es público.

Sitemap: ${sitemapUrl.href}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
