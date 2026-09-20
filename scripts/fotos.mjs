/**
 * Arma data/fotos.json mirando public/photos.
 * Toma cualquier nombre de archivo, así se pueden soltar las fotos tal cual
 * vienen del celular o de Downloads, sin renombrar nada. El orden es
 * alfabético, que para nombres tipo IMG_1234 es el orden en que se sacaron.
 */
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const RAIZ = new URL("../public/photos", import.meta.url).pathname;
const OK = /\.(jpe?g|png|webp|avif)$/i;

const fotos = {};
for (const dir of readdirSync(RAIZ)) {
  const ruta = join(RAIZ, dir);
  if (!statSync(ruta).isDirectory()) continue;
  const archivos = readdirSync(ruta)
    .filter((f) => OK.test(f))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
  if (archivos.length) fotos[dir] = archivos;
}

writeFileSync(
  new URL("../data/fotos.json", import.meta.url),
  JSON.stringify(fotos, null, 2) + "\n"
);

const total = Object.values(fotos).reduce((n, a) => n + a.length, 0);
console.log(
  total
    ? `data/fotos.json: ${total} fotos en ${Object.keys(fotos).length} carpetas`
    : "data/fotos.json: todavía no hay fotos"
);
