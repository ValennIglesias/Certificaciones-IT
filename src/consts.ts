/** Configuración global del sitio. Un solo lugar para tocar nombre, dominio y clusters. */

export const SITE = {
	name: 'Desde Cero IT',
	/** Título por defecto y sufijo de las páginas internas. */
	titleDefault: 'Desde Cero IT — Guías en español para certificarte y crecer en tecnología',
	titleTemplate: '%s | Desde Cero IT',
	/** Titular legal del sitio: páginas legales y Schema.org. */
	owner: 'Valentín Iglesias — Desde Cero IT',
	description:
		'Guías en español sobre certificaciones IT (CompTIA, Cisco, AWS, Azure, ITIL) y cómo construir una carrera en tecnología.',
	lang: 'es',
	locale: 'es_ES',
	/** Autor por defecto. Hoy cada artículo declara el suyo en el frontmatter. */
	author: 'Valentín',
	/** Imagen Open Graph por defecto. La genera scripts/generate-og.mjs. */
	defaultImage: '/og/home.jpg',
} as const;

export const CLUSTERS = {
	entrada: {
		name: 'Certificaciones de entrada',
		short: 'Entrada',
		description:
			'Las primeras certificaciones de una carrera IT: CompTIA ITF+, A+, Google IT Support y cómo elegir por dónde empezar.',
		/** Acento del cluster. `accent` es estructura; `accentInk` es texto
		 * sobre claro (>=4.5:1); `accentDark` sirve para ambos sobre oscuro. */
		accent: '#FF4F00',
		accentInk: '#B83A00',
		accentDark: '#FF7A3D',
	},
	redes: {
		name: 'Redes',
		short: 'Redes',
		description:
			'Certificaciones de networking: CompTIA Network+, Cisco CCNA y los fundamentos que piden las vacantes de redes.',
		/** Acento del cluster. `accent` es estructura; `accentInk` es texto
		 * sobre claro (>=4.5:1); `accentDark` sirve para ambos sobre oscuro. */
		accent: '#002FA7',
		accentInk: '#002FA7',
		accentDark: '#8AA5FF',
	},
	seguridad: {
		name: 'Seguridad',
		short: 'Seguridad',
		description:
			'Ciberseguridad desde cero hasta nivel profesional: CompTIA Security+, CySA+, CEH, CISSP y rutas de especialización.',
		/** Acento del cluster. `accent` es estructura; `accentInk` es texto
		 * sobre claro (>=4.5:1); `accentDark` sirve para ambos sobre oscuro. */
		accent: '#E4002B',
		accentInk: '#C10024',
		accentDark: '#FF6B84',
	},
	cloud: {
		name: 'Cloud',
		short: 'Cloud',
		description:
			'Certificaciones de nube: AWS, Microsoft Azure, Google Cloud y qué camino conviene según el perfil que buscás.',
		/** Acento del cluster. `accent` es estructura; `accentInk` es texto
		 * sobre claro (>=4.5:1); `accentDark` sirve para ambos sobre oscuro. */
		accent: '#00707A',
		accentInk: '#00636C',
		accentDark: '#3FC2CE',
	},
	carrera: {
		name: 'Carrera IT',
		short: 'Carrera',
		description:
			'Sueldos, CV, entrevistas, primer empleo y crecimiento profesional en tecnología. La parte que las certificaciones no cubren.',
		/** Acento del cluster. `accent` es estructura; `accentInk` es texto
		 * sobre claro (>=4.5:1); `accentDark` sirve para ambos sobre oscuro. */
		accent: '#5B2C8D',
		accentInk: '#5B2C8D',
		accentDark: '#B48CE8',
	},
} as const;

export type ClusterId = keyof typeof CLUSTERS;

export const CLUSTER_IDS = Object.keys(CLUSTERS) as ClusterId[];

/** Enlaces del header. El orden importa: es el orden de lectura sugerido. */
export const NAV_LINKS: { href: string; label: string }[] = [
	{ href: '/entrada/', label: 'Entrada' },
	{ href: '/redes/', label: 'Redes' },
	{ href: '/seguridad/', label: 'Seguridad' },
	{ href: '/cloud/', label: 'Cloud' },
	{ href: '/carrera/', label: 'Carrera' },
];
