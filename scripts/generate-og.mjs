import sharp from 'sharp';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * Genera una imagen Open Graph por artículo, por cluster y para la home.
 *
 * Corre antes del build (ver `prebuild` en package.json), así que cada
 * artículo nuevo tiene su preview sin tocar nada. El diseño es el mismo
 * sistema Swiss del sitio: superficie clara, acento del cluster, tipografía
 * a la izquierda y cifras tabulares.
 *
 * Se generan como SVG y se rasterizan con sharp. No hay fotos: todo el
 * contenido de la imagen sale del frontmatter real del artículo.
 */

const ANCHO = 1200;
const ALTO = 630;
const MARGEN = 84;
const SALIDA = 'public/og';

const CLUSTERS = {
	entrada: { nombre: 'Certificaciones de entrada', corto: 'Entrada', accent: '#B83A00' },
	redes: { nombre: 'Redes', corto: 'Redes', accent: '#002FA7' },
	seguridad: { nombre: 'Seguridad', corto: 'Seguridad', accent: '#C10024' },
	cloud: { nombre: 'Cloud', corto: 'Cloud', accent: '#00636C' },
	carrera: { nombre: 'Carrera IT', corto: 'Carrera IT', accent: '#5B2C8D' },
};

const TINTA = '#111112';
const GRAFITO = '#6B6B70';
const REGLA = '#D8D8DA';
const PAPEL = '#FFFFFF';

const escapar = (s) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Corte de línea greedy. Sin medición real de glifos: se estima el ancho. */
function envolver(texto, tamano, anchoDisponible) {
	const porCaracter = tamano * 0.54;
	const maximo = Math.floor(anchoDisponible / porCaracter);
	const lineas = [];
	let actual = '';

	for (const palabra of texto.split(/\s+/)) {
		const tentativa = actual ? `${actual} ${palabra}` : palabra;
		if (tentativa.length > maximo && actual) {
			lineas.push(actual);
			actual = palabra;
		} else {
			actual = tentativa;
		}
	}
	if (actual) lineas.push(actual);
	return lineas;
}

/** Baja el cuerpo hasta que el título entre en tres líneas. */
function ajustarTitulo(texto, anchoDisponible) {
	for (const tamano of [76, 68, 60, 52, 46]) {
		const lineas = envolver(texto, tamano, anchoDisponible);
		if (lineas.length <= 3) return { tamano, lineas };
	}
	const tamano = 46;
	return { tamano, lineas: envolver(texto, tamano, anchoDisponible).slice(0, 3) };
}

function tarjeta({ rotulo, titulo, pie, accent }) {
	const ancho = ANCHO - MARGEN * 2;
	const { tamano, lineas } = ajustarTitulo(titulo, ancho);
	// Centro óptico entre la regla del rótulo (176) y la del pie (526).
	const CENTRO = 351;
	const baseTitulo = CENTRO + tamano * 0.36 - (lineas.length - 1) * (tamano * 0.56);

	const tspans = lineas
		.map(
			(linea, i) =>
				`<tspan x="${MARGEN}" y="${baseTitulo + i * tamano * 1.12}">${escapar(linea)}</tspan>`,
		)
		.join('');

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}" viewBox="0 0 ${ANCHO} ${ALTO}">
  <rect width="${ANCHO}" height="${ALTO}" fill="${PAPEL}"/>
  <rect width="${ANCHO}" height="10" fill="${accent}"/>

  <text x="${MARGEN}" y="146" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="${accent}">${escapar(rotulo)}</text>
  <line x1="${MARGEN}" y1="176" x2="${ANCHO - MARGEN}" y2="176" stroke="${REGLA}" stroke-width="1"/>

  <text font-family="Helvetica, Arial, sans-serif" font-size="${tamano}" font-weight="700" fill="${TINTA}" letter-spacing="-1.5">${tspans}</text>

  <line x1="${MARGEN}" y1="${ALTO - 104}" x2="${ANCHO - MARGEN}" y2="${ALTO - 104}" stroke="${REGLA}" stroke-width="1"/>
  <text x="${MARGEN}" y="${ALTO - 62}" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="${TINTA}">Certificaciones IT</text>
  <text x="${ANCHO - MARGEN}" y="${ALTO - 62}" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="500" fill="${GRAFITO}">${escapar(pie)}</text>
</svg>`;
}

/** Lee el frontmatter sin dependencias: alcanza para title, cluster y pubDate. */
function frontmatter(texto) {
	const bloque = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!bloque) return null;
	const datos = {};
	for (const linea of bloque[1].split(/\r?\n/)) {
		const m = linea.match(/^(\w+):\s*(.*)$/);
		if (m) datos[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
	}
	return datos;
}

const formatearFecha = (iso) => {
	const [a, m, d] = iso.split('-');
	return `${d}.${m}.${a}`;
};

async function generar(nombre, svg) {
	const destino = path.join(SALIDA, `${nombre}.jpg`);
	await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(destino);
	return destino;
}

async function main() {
	await mkdir(SALIDA, { recursive: true });
	const base = 'src/content/articles';
	let total = 0;

	for (const cluster of await readdir(base)) {
		const dir = path.join(base, cluster);
		if (!existsSync(dir)) continue;
		const meta = CLUSTERS[cluster];
		if (!meta) continue;

		for (const archivo of await readdir(dir)) {
			if (!/\.(md|mdx)$/.test(archivo)) continue;
			const datos = frontmatter(await readFile(path.join(dir, archivo), 'utf8'));
			if (!datos?.title) continue;

			const slug = archivo.replace(/\.(md|mdx)$/, '');
			await generar(
				`${cluster}-${slug}`,
				tarjeta({
					rotulo: meta.corto,
					titulo: datos.title,
					pie: datos.pubDate ? formatearFecha(datos.pubDate) : '',
					accent: meta.accent,
				}),
			);
			total++;
		}

		// Una portada por cluster, para el listado de la sección.
		await generar(
			`cluster-${cluster}`,
			tarjeta({
				rotulo: 'Sección',
				titulo: meta.nombre,
				pie: 'certificaciones',
				accent: meta.accent,
			}),
		);
		total++;
	}

	// La home es acromática, igual que en el sitio.
	await generar(
		'home',
		tarjeta({
			rotulo: 'Guías en español',
			titulo: 'Certificaciones IT explicadas en español, sin humo',
			pie: 'certificaciones-it',
			accent: TINTA,
		}),
	);
	total++;

	console.log(`[og] ${total} imágenes generadas en ${SALIDA}/`);
}

main().catch((error) => {
	console.error('[og] falló la generación:', error);
	process.exit(1);
});
