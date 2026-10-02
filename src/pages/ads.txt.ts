import type { APIRoute } from 'astro';
import { ADSENSE_CLIENT } from '../lib/analytics';

/**
 * ads.txt generado en el build, igual que robots.txt: declara a Google como
 * vendedor autorizado del inventario del sitio. AdSense lo exige en la raíz
 * del dominio para pagar los anuncios.
 *
 * Sale de PUBLIC_ADSENSE_CLIENT ("ca-pub-..."), aunque AdSense todavía esté
 * apagado: conviene que el archivo exista desde que se carga el id. Sin id,
 * queda solo un comentario.
 */
export const GET: APIRoute = () => {
	// ads.txt usa el id sin el prefijo "ca-": pub-0000000000000000.
	const publisher = ADSENSE_CLIENT.replace(/^ca-/, '');
	const body = publisher.startsWith('pub-')
		? `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`
		: '# AdSense todavía no está configurado (falta PUBLIC_ADSENSE_CLIENT).\n';

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
