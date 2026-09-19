/** Configuración global del sitio. Un solo lugar para tocar nombre, dominio y clusters. */

export const SITE = {
	name: 'Certificaciones IT',
	/** Título por defecto y sufijo de las páginas internas. */
	titleDefault: 'Certificaciones IT — Guías en español para certificarte y crecer en tecnología',
	titleTemplate: '%s | Certificaciones IT',
	description:
		'Guías en español sobre certificaciones IT (CompTIA, Cisco, AWS, Azure, ITIL) y cómo construir una carrera en tecnología.',
	lang: 'es',
	locale: 'es_ES',
	author: 'Equipo Certificaciones IT',
	/** Imagen Open Graph por defecto, relativa a /public. */
	defaultImage: '/og-default.jpg',
} as const;

export const CLUSTERS = {
	entrada: {
		name: 'Certificaciones de entrada',
		short: 'Entrada',
		description:
			'Las primeras certificaciones de una carrera IT: CompTIA ITF+, A+, Google IT Support y cómo elegir por dónde empezar.',
	},
	redes: {
		name: 'Redes',
		short: 'Redes',
		description:
			'Certificaciones de networking: CompTIA Network+, Cisco CCNA y los fundamentos que piden las vacantes de redes.',
	},
	seguridad: {
		name: 'Seguridad',
		short: 'Seguridad',
		description:
			'Ciberseguridad desde cero hasta nivel profesional: CompTIA Security+, CySA+, CEH, CISSP y rutas de especialización.',
	},
	cloud: {
		name: 'Cloud',
		short: 'Cloud',
		description:
			'Certificaciones de nube: AWS, Microsoft Azure, Google Cloud y qué camino conviene según el perfil que buscás.',
	},
	carrera: {
		name: 'Carrera IT',
		short: 'Carrera',
		description:
			'Sueldos, CV, entrevistas, primer empleo y crecimiento profesional en tecnología. La parte que las certificaciones no cubren.',
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
