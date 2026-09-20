/**
 * Achica todas las fotos para que el sitio cargue rápido en el teléfono.
 * Pasa todo a webp: las de la galería a 1400px de ancho, las de las
 * tarjetas a 900px. Pisa los originales y arregla los manifiestos.
 *
 * Corre con: npm run comprimir
 */
import { readdirSync, statSync, unlinkSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const RAICES = [
  { dir: new URL("../public/photos", import.meta.url).pathname, ancho: 1400, anidado: true },
  { dir: new URL("../public/photos-extra", import.meta.url).pathname, ancho: 1400, anidado: true },
  { dir: new URL("../public/fotos", import.meta.url).pathname, ancho: 900, anidado: false },
];

const ES_IMG = /\.(jpe?g|png|webp|avif)$/i;
const renombres = new Map();
let antes = 0;
let despues = 0;

async function pasar(ruta, ancho) {
  const orig = statSync(ruta).size;
  antes += orig;

  const destino = ruta.replace(/\.[^.]+$/, ".webp");
  try {
    const buf = await sharp(ruta)
      .rotate()
      .resize({ width: ancho, withoutEnlargement: true })
      .webp({ quality: 74, effort: 5 })
      .toBuffer();

    // si el webp no mejora y ya era webp, lo dejamos
    if (buf.length >= orig && ruta.endsWith(".webp")) {
      despues += orig;
      return;
    }

    writeFileSync(destino, buf);
    if (destino !== ruta) {
      unlinkSync(ruta);
      renombres.set(ruta.split("/").pop(), destino.split("/").pop());
    }
    despues += buf.length;
  } catch {
    despues += orig;
  }
}

for (const { dir, ancho, anidado } of RAICES) {
  if (!existsSync(dir)) continue;
  const entradas = anidado
    ? readdirSync(dir)
        .filter((d) => statSync(join(dir, d)).isDirectory())
        .flatMap((d) => readdirSync(join(dir, d)).map((f) => join(dir, d, f)))
    : readdirSync(dir).map((f) => join(dir, f));

  for (const ruta of entradas) {
    if (!ES_IMG.test(ruta)) continue;
    await pasar(ruta, ancho);
    process.stdout.write(".");
  }
}

// el manifiesto de imágenes guarda nombres de archivo: hay que actualizarlo
const mf = new URL("../data/imagenes.json", import.meta.url).pathname;
if (existsSync(mf)) {
  const d = JSON.parse(readFileSync(mf, "utf8"));
  let n = 0;
  for (const [k, v] of Object.entries(d)) {
    if (renombres.has(v)) {
      d[k] = renombres.get(v);
      n++;
    }
  }
  writeFileSync(mf, JSON.stringify(d, null, 2) + "\n");
  console.log(`\n${n} entradas del manifiesto actualizadas`);
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`${mb(antes)} MB -> ${mb(despues)} MB`);
