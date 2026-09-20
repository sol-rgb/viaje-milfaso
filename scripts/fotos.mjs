/**
 * Arma data/fotos.json mirando public/photos.
 * Toma cualquier nombre de archivo, así se pueden soltar las fotos tal cual
 * vienen del celular o de Downloads, sin renombrar nada. El orden es
 * alfabético, que para nombres tipo IMG_1234 es el orden en que se sacaron.
 */
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OK = /\.(jpe?g|png|webp|avif)$/i;

/** Lee una raíz de carpetas por lugar y devuelve { lugar: [archivos] }. */
function leer(raiz) {
  const out = {};
  let existe = true;
  try {
    readdirSync(raiz);
  } catch {
    existe = false;
  }
  if (!existe) return out;

  for (const dir of readdirSync(raiz)) {
    const ruta = join(raiz, dir);
    if (!statSync(ruta).isDirectory()) continue;
    const archivos = readdirSync(ruta)
      .filter((f) => OK.test(f))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
    if (archivos.length) out[dir] = archivos;
  }
  return out;
}

const propias = leer(new URL("../public/photos", import.meta.url).pathname);
const extra = leer(new URL("../public/photos-extra", import.meta.url).pathname);

writeFileSync(
  new URL("../data/fotos.json", import.meta.url),
  JSON.stringify({ propias, extra }, null, 2) + "\n"
);

const cuenta = (o) => Object.values(o).reduce((n, a) => n + a.length, 0);
console.log(
  `data/fotos.json: ${cuenta(propias)} nuestras y ${cuenta(extra)} de archivo`
);
