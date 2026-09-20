/**
 * Busca una foto para cada hotel, airbnb y actividad, la baja y la guarda
 * en public/fotos. Dos fuentes, en este orden:
 *
 *   1. La foto de portada (og:image) de la página que ya linkeamos. Es la
 *      del lugar de verdad, no una parecida.
 *   2. Wikimedia Commons, buscando por nombre y lugar. Sirve para museos,
 *      playas y ruinas; no para hoteles chicos.
 *
 * Deja data/imagenes.json con lo que encontró. Lo que no aparece queda sin
 * foto y la tarjeta se ve igual de bien.
 *
 * Corre con: npm run imagenes
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, renameSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";

const run = promisify(execFile);
const DEST = new URL("../public/fotos/", import.meta.url).pathname;
const MANIFIESTO = new URL("../data/imagenes.json", import.meta.url).pathname;
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";

if (!existsSync(DEST)) mkdirSync(DEST, { recursive: true });

const previo = existsSync(MANIFIESTO) ? JSON.parse(readFileSync(MANIFIESTO, "utf8")) : {};

/* ------------------------------------------------------------ datos */

const ts = readFileSync(new URL("../data/viajes.ts", import.meta.url), "utf8");
const marca = ts.match(/VIAJES[^=]*=\s*/);
const abre = ts.indexOf("[", marca.index + marca[0].length - 1);
const VIAJES = JSON.parse(ts.slice(abre, ts.lastIndexOf("]") + 1));

const objetivos = [];
for (const t of VIAJES) {
  for (const st of t.stops) {
    st.hotels.forEach((h, i) => {
      objetivos.push({
        key: `hotel:${t.slug}:${st.slug}:${i}`,
        nombre: h.name,
        lugar: st.name,
        url: h.site || h.url,
        buscable: false,
      });
    });
    st.rentals.forEach((r, i) => {
      objetivos.push({
        key: `airbnb:${t.slug}:${st.slug}:${i}`,
        nombre: r.name,
        lugar: st.name,
        url: r.isSearch ? "" : r.url,
        buscable: false,
      });
    });
    st.food.forEach((f, i) => {
      objetivos.push({
        key: `comer:${t.slug}:${st.slug}:${i}`,
        nombre: f.name,
        lugar: st.name,
        url: "",
        buscable: true,
      });
    });
  }
  for (const d of t.days) {
    d.acts.forEach((a, i) => {
      objetivos.push({
        key: `acto:${t.slug}:${d.n}:${i}`,
        nombre: a.name,
        lugar: d.place,
        url: a.url,
        buscable: true,
      });
    });
  }
}

/* ------------------------------------------------------------ red */

async function curl(args, timeout = 25000) {
  try {
    const { stdout } = await run("curl", args, {
      timeout,
      maxBuffer: 40 * 1024 * 1024,
      encoding: "buffer",
    });
    return stdout;
  } catch {
    return null;
  }
}

/** La foto de portada que declara la página. */
async function portada(url) {
  if (!url) return null;
  const html = await curl([
    "-sL", "--max-time", "18", "--compressed",
    "-A", UA,
    "-H", "accept-language: es,en;q=0.8",
    url,
  ]);
  if (!html) return null;
  const txt = html.toString("utf8").slice(0, 400000);

  const patrones = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
  ];
  for (const p of patrones) {
    const m = txt.match(p);
    if (m?.[1]) {
      try {
        return new URL(m[1], url).toString();
      } catch {
        /* url rota */
      }
    }
  }
  return null;
}

/**
 * Los nombres vienen como frases: "Nadar con tortugas verdes en el muelle de
 * El Ñuro". Para buscar sirve el nombre propio, no la oración entera.
 */
function nucleo(nombre) {
  const limpio = nombre.replace(/\(.*?\)/g, " ").replace(/\s{2,}/g, " ").trim();
  // la tira más larga de palabras con mayúscula suele ser el lugar
  const propios = limpio.match(/(?:[A-ZÁÉÍÓÚÑ][\wáéíóúñü'’-]*(?:\s+(?:de|del|la|las|los|el|y)\s+)?){2,}/g);
  if (propios?.length) {
    const mejor = propios.sort((a, b) => b.length - a.length)[0].trim();
    if (mejor.length > 4) return mejor;
  }
  // si no, las primeras palabras sin el verbo del principio
  return limpio.split(/\s+/).slice(0, 5).join(" ");
}

/** Wikipedia: la que mejor pega con museos, playas, ruinas y restaurantes. */
async function wikipedia(consulta, idioma) {
  const q = encodeURIComponent(consulta.slice(0, 90));
  const api =
    `https://${idioma}.wikipedia.org/w/api.php?action=query&format=json&origin=*` +
    `&generator=search&gsrsearch=${q}&gsrlimit=3&prop=pageimages&pithumbsize=1400`;

  const out = await curl(["-sL", "--max-time", "15", "-A", UA, api]);
  if (!out) return null;
  try {
    const d = JSON.parse(out.toString("utf8"));
    const paginas = Object.values(d?.query?.pages ?? {}).sort(
      (a, b) => (a.index ?? 99) - (b.index ?? 99)
    );
    for (const p of paginas) {
      const src = p?.thumbnail?.source;
      if (src && !/\.svg/i.test(src)) return src;
    }
  } catch {
    /* json roto */
  }
  return null;
}

/** Wikimedia Commons: sirve para lugares, no para hoteles. */
async function commons(nombre, lugar) {
  const q = encodeURIComponent(`${nombre} ${lugar}`.replace(/["']/g, "").slice(0, 90));
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
    `&generator=search&gsrsearch=${q}&gsrnamespace=6&gsrlimit=4` +
    "&prop=imageinfo&iiprop=url|mime&iiurlwidth=1400";

  const out = await curl(["-sL", "--max-time", "15", "-A", UA, api]);
  if (!out) return null;
  try {
    const d = JSON.parse(out.toString("utf8"));
    const paginas = Object.values(d?.query?.pages ?? {});
    for (const p of paginas) {
      const info = p?.imageinfo?.[0];
      if (!info) continue;
      if (info.mime && !/^image\/(jpeg|png|webp)$/.test(info.mime)) continue;
      if (/\.svg$/i.test(info.url ?? "")) continue;
      return info.thumburl || info.url;
    }
  } catch {
    /* json roto */
  }
  return null;
}

async function bajar(url, destino) {
  const out = await curl([
    "-sL", "--max-time", "30", "-A", UA,
    "--write-out", "%{content_type}", "-o", destino, url,
  ]);
  if (!out) return false;
  const tipo = out.toString("utf8").trim();
  if (!/^image\/(jpeg|jpg|png|webp|avif)/i.test(tipo)) return false;
  try {
    return statSync(destino).size > 12000;
  } catch {
    return false;
  }
}

/** Le pone la extensión real según los primeros bytes. */
function renombrar(destino, hash) {
  const head = readFileSync(destino).subarray(0, 12);
  let ext = ".jpg";
  if (head[0] === 0x89 && head[1] === 0x50) ext = ".png";
  else if (head.subarray(8, 12).toString() === "WEBP") ext = ".webp";
  const final = `${hash}${ext}`;
  renameSync(destino, `${DEST}${final}`);
  return final;
}

/* ------------------------------------------------------------ vamos */

const manifiesto = { ...previo };
let nuevas = 0, yaEstaban = 0, sinSuerte = 0;

async function procesar(o) {
  if (manifiesto[o.key] && existsSync(`${DEST}${manifiesto[o.key]}`)) {
    yaEstaban++;
    return;
  }

  const hash = createHash("sha1").update(o.key).digest("hex").slice(0, 16);
  const nombreArchivo = `${hash}.img`;
  const destino = `${DEST}${nombreArchivo}`;

  let src = await portada(o.url);

  if (!src && o.buscable) {
    const q = nucleo(o.nombre);
    src =
      (await wikipedia(`${q} ${o.lugar}`, "es")) ||
      (await wikipedia(q, "es")) ||
      (await wikipedia(`${q} ${o.lugar}`, "en")) ||
      (await commons(q, o.lugar));
  }

  if (src && (await bajar(src, destino))) {
    manifiesto[o.key] = renombrar(destino, hash);
    nuevas++;
    process.stdout.write(".");
  } else {
    sinSuerte++;
    process.stdout.write("x");
  }
}

// de a cinco, para no golpear a nadie
const TANDA = 5;
for (let i = 0; i < objetivos.length; i += TANDA) {
  await Promise.all(objetivos.slice(i, i + TANDA).map(procesar));
}

writeFileSync(MANIFIESTO, JSON.stringify(manifiesto, null, 2) + "\n");
console.log(
  `\n${objetivos.length} objetivos · ${nuevas} nuevas · ${yaEstaban} ya estaban · ${sinSuerte} sin foto`
);
