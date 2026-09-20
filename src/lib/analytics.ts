/**
 * Un solo lugar que lee las variables de entorno de Google.
 * Lo importan Analytics.astro, ConsentBanner.astro, AdSlot.astro y Footer.astro
 * para que no se dupliquen (ni se desincronicen) las condiciones.
 */

const env = (name: string): string => (import.meta.env[name] ?? '').toString().trim();

export const GA_ID = env('PUBLIC_GA_ID');
export const GSC_VERIFICATION = env('PUBLIC_GSC_VERIFICATION');
export const ADSENSE_CLIENT = env('PUBLIC_ADSENSE_CLIENT');

/** AdSense se enciende solo con la cuenta aprobada Y el id cargado. */
export const ADSENSE_ENABLED = env('PUBLIC_ADSENSE_ENABLED') === 'true' && ADSENSE_CLIENT !== '';

/**
 * Si no hay nada que pueda instalar cookies, no hay nada que consentir: no se
 * muestra el banner ni se emite JavaScript. Con GA y AdSense apagados, el sitio
 * sigue siendo 100% HTML estático sin scripts.
 */
export const CONSENT_REQUIRED = GA_ID !== '' || ADSENSE_ENABLED;

/** Clave de localStorage donde se guarda la decisión ('granted' | 'denied'). */
export const CONSENT_STORAGE_KEY = 'cit:consent';

/* --- Bloques de anuncios de AdSense ------------------------------------- */

/**
 * Un id de bloque por ubicación. Los ids salen del panel de AdSense y NO van
 * hardcodeados en el código: cada uno vive en su variable de entorno.
 */
const RAW_SLOTS = {
	article: env('PUBLIC_ADSENSE_SLOT_ARTICLE'),
	category: env('PUBLIC_ADSENSE_SLOT_CATEGORY'),
	home: env('PUBLIC_ADSENSE_SLOT_HOME'),
};

export type AdPlacement = keyof typeof RAW_SLOTS;

/** Para poder nombrar la variable que falta en los mensajes de error. */
export const AD_SLOT_ENV_VAR: Record<AdPlacement, string> = {
	article: 'PUBLIC_ADSENSE_SLOT_ARTICLE',
	category: 'PUBLIC_ADSENSE_SLOT_CATEGORY',
	home: 'PUBLIC_ADSENSE_SLOT_HOME',
};

/**
 * Un id sirve solo si son todos dígitos (formato de AdSense) y tiene al menos
 * un dígito distinto de cero. Eso descarta el vacío, los placeholders tipo
 * "0000000000" y cualquier cosa mal pegada.
 */
function isUsableSlot(value: string): boolean {
	return /^[0-9]+$/.test(value) && /[1-9]/.test(value);
}

/**
 * Devuelve el id del bloque, o null si no se puede mostrar el anuncio.
 *
 * Falla cerrado a propósito: ante la duda no se renderiza nada, en vez de
 * dejar un hueco vacío o un anuncio roto en producción.
 */
export function adSlotFor(placement: AdPlacement): string | null {
	if (!ADSENSE_ENABLED) return null;
	const value = RAW_SLOTS[placement];
	return isUsableSlot(value) ? value : null;
}

/**
 * Si AdSense quedó encendido pero falta algún id, el build lo avisa. Sin esto,
 * fallar cerrado sería silencioso y un slot mal cargado pasaría inadvertido.
 */
if (ADSENSE_ENABLED) {
	const missing = (Object.keys(RAW_SLOTS) as AdPlacement[]).filter(
		(placement) => !isUsableSlot(RAW_SLOTS[placement]),
	);

	if (missing.length > 0) {
		console.warn('[adsense] PUBLIC_ADSENSE_ENABLED="true" pero estos ids faltan o siguen');
		console.warn('          en un valor placeholder:');
		for (const placement of missing) {
			console.warn('            - ' + AD_SLOT_ENV_VAR[placement]);
		}
		console.warn('          Esos bloques de anuncios NO se van a renderizar.');
	}
}
