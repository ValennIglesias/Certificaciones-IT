/** Configuración global del sitio. Un solo lugar para tocar nombre, dominio y clusters. */

export const SITE = {
	name: 'Desde Cero IT',
	/**
	 * Título de la home y sufijo de las páginas internas (clusters, legales,
	 * autor). Los artículos NO llevan sufijo. Todo <title> final: máx. 60 caracteres.
	 */
	titleDefault: 'Desde Cero IT — Guías de certificaciones IT en español',
	titleTemplate: '%s | Desde Cero IT',
	/** Titular legal del sitio: páginas legales y Schema.org. */
	owner: 'Valentín Iglesias — Desde Cero IT',
	ownerLocation: 'Buenos Aires, Argentina',
	/** Correo de contacto visible en las páginas legales y de contacto. */
	contactEmail: 'contacto@desdeceroit.com',
	description:
		'Guías en español sobre certificaciones IT (CompTIA, Cisco, AWS, Microsoft Azure, ISC2) y cómo construir una carrera en tecnología.',
	lang: 'es',
	locale: 'es_ES',
	/** Autor por defecto. Hoy cada artículo declara el suyo en el frontmatter. */
	author: 'Valentín',
	/** Imagen Open Graph por defecto. La genera scripts/generate-og.mjs. */
	defaultImage: '/og/home.jpg',
} as const;

/**
 * Autores del sitio. La clave es el valor del campo `author` del frontmatter
 * ("Valentín"), así los artículos no repiten los datos: el layout arma la
 * entidad Person completa a partir de acá. Un `author` que no esté en esta
 * tabla rompe el build (ver content.config.ts).
 */
export const AUTHORS = {
	Valentín: {
		slug: 'valentin-iglesias',
		name: 'Valentín Iglesias',
		jobTitle: 'Líder de proyectos de experiencia de usuario (UX)',
		/** Una o dos líneas para la caja de autor al pie de cada artículo. */
		shortBio:
			'Trabajó en soporte técnico e infraestructura IT y hoy lidera proyectos de experiencia de usuario en aplicaciones. Escribe y revisa las guías de Desde Cero IT.',
		linkedin: 'https://www.linkedin.com/in/valentin-iglesias1/',
		knowsAbout: [
			'Soporte técnico',
			'Infraestructura IT',
			'Administración de sistemas',
			'Certificaciones IT',
			'Experiencia de usuario (UX)',
			'Microsoft 365',
			'Microsoft Azure',
		],
		/** Certificados de cursos obtenidos. No son exámenes de certificación. */
		formacion: [
			{ nombre: 'Administración de sistemas y servicios de infraestructura de TI', emisor: 'Google (Coursera)' },
			{ nombre: 'Fundamentos de la carrera en administración de sistemas', emisor: 'Microsoft y LinkedIn Learning' },
			{ nombre: 'Microsoft 365 esencial: Administración', emisor: 'LinkedIn Learning' },
			{ nombre: 'Microsoft Exchange Online: Administración', emisor: 'LinkedIn Learning' },
			{ nombre: 'Introducción a AWS: Conceptos de la nube', emisor: 'LinkedIn Learning' },
			{ nombre: 'Desarrollo Frontend', emisor: 'Coderhouse' },
		],
		enCurso: [
			{ nombre: 'Administración de infraestructura de TI', emisor: 'ISTEA', estado: '' },
			{ nombre: 'Generative AI Leader', emisor: 'Google Cloud', estado: '' },
			{ nombre: 'Microsoft Azure Fundamentals (AZ-900)', emisor: 'Microsoft', estado: 'Temario estudiado, examen todavía sin rendir' },
		],
	},
} as const;

export type AuthorKey = keyof typeof AUTHORS;

export const AUTHOR_KEYS = Object.keys(AUTHORS) as AuthorKey[];

export const CLUSTERS = {
	entrada: {
		name: 'Certificaciones de entrada',
		short: 'Entrada',
		description:
			'Las primeras certificaciones de una carrera IT: CompTIA A+, los cursos de entrada de Cisco NetAcad y cómo empezar sin experiencia.',
		/** Texto propio de la página de categoría: por dónde empezar. Admite enlaces. */
		intro:
			'Si todavía no trabajás en IT, empezá por <a href="/entrada/como-empezar-en-it-sin-experiencia/">cómo empezar sin experiencia</a>: qué puestos toman gente sin experiencia y qué pesa en la primera entrevista. Con eso claro, <a href="/entrada/certificacion-comptia-a-plus/">CompTIA A+</a> es la certificación de entrada clásica para soporte técnico.',
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
			'Certificaciones de redes de Cisco: CCST, CCNA, los cursos de Networking Academy y los fundamentos que piden las vacantes de redes.',
		intro:
			'El camino de Cisco tiene un orden. Si arrancás de cero, el primer paso es la ruta gratuita de NetAcad o el <a href="/redes/ccst-networking-examen/">CCST Networking</a>; después viene el CCNA. Para el CCNA, leé primero el <a href="/redes/ccna-200-301-temario/">temario</a> y <a href="/redes/ccna-v2-0-cambios/">qué cambia en la v2.0</a>, porque la versión que rindas depende de la fecha, y recién ahí elegí <a href="/redes/curso-ccna-como-prepararte/">cómo prepararlo</a>.',
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
			'Ciberseguridad desde cero hasta nivel profesional: CCST Cybersecurity, CompTIA Security+, CISSP y las rutas para entrar al área.',
		intro:
			'Casi nadie entra a ciberseguridad de forma directa: <a href="/seguridad/ciberseguridad-desde-cero/">ciberseguridad desde cero</a> explica los puestos puente por los que se suele llegar. Las certificaciones van de menor a mayor: <a href="/seguridad/ccst-cybersecurity-examen/">CCST Cybersecurity</a> como primer paso, <a href="/seguridad/examen-comptia-security-plus/">Security+</a> como certificación de entrada sin atarte a un fabricante y <a href="/seguridad/cissp-requisitos-costo-experiencia/">CISSP</a> recién con años de experiencia.',
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
			'Certificaciones de nube de entrada: AWS Cloud Practitioner, Microsoft AZ-900 y cuál conviene según el mercado en el que buscás trabajo.',
		intro:
			'Las dos certificaciones de entrada son <a href="/cloud/aws-cloud-practitioner-guia-completa/">AWS Cloud Practitioner</a> y el <a href="/cloud/examen-az-900-formato-y-preparacion/">AZ-900</a> de Microsoft. Si no sabés cuál elegir, <a href="/cloud/aws-o-azure-cual-elegir/">la comparación</a> propone mirar primero qué nube usan las empresas donde buscás trabajo.',
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
		intro:
			'Dos de estas guías salen de la experiencia del autor: <a href="/carrera/primer-cv-para-un-puesto-it/">cómo armar el primer CV</a> y <a href="/carrera/de-soporte-a-infraestructura/">cómo pasar de soporte a infraestructura</a>. Para ver todas las certificaciones en orden, según el rol al que apuntes, está el <a href="/carrera/roadmap-certificaciones-it/">roadmap de certificaciones</a>.',
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
