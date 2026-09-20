/**
 * Segunda pasada por las fotos que faltan, esta vez con un navegador de
 * verdad. Booking y Airbnb devuelven 403 a curl pero cargan bien en
 * Chromium, así que de ahí sacamos la foto de portada.
 *
 * Para lo que no tiene link (actividades, restaurantes) prueba Openverse,
 * que junta fotos con licencia abierta de Flickr y museos.
 *
 * Corre con: npm run imagenes:browser
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, renameSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { chromium } from "playwright";

const run = promisify(execFile);
const DEST = new URL("../public/fotos/", import.meta.url).pathname;
const MANIFIESTO = new URL("../data/imagenes.json", import.meta.url).pathname;
const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

if (!existsSync(DEST)) mkdirSync(DEST, { recursive: true });
const manifiesto = existsSync(MANIFIESTO) ? JSON.parse(readFileSync(MANIFIESTO, "utf8")) : {};

/* ------------------------------------------------------------ objetivos */

const ts = readFileSync(new URL("../data/viajes.ts", import.meta.url), "utf8");
const marca = ts.match(/VIAJES[^=]*=\s*/);
const VIAJES = JSON.parse(ts.slice(ts.indexOf("[", marca.index + marca[0].length - 1), ts.lastIndexOf("]") + 1));

const objetivos = [];
for (const t of VIAJES) {
  for (const st of t.stops) {
    st.hotels.forEach((h, i) =>
      objetivos.push({ key: `hotel:${t.slug}:${st.slug}:${i}`, nombre: h.name, lugar: st.name, url: h.url || h.site })
    );
    st.rentals.forEach((r, i) =>
      objetivos.push({ key: `airbnb:${t.slug}:${st.slug}:${i}`, nombre: r.name, lugar: st.name, url: r.url })
    );
    st.food.forEach((f, i) =>
      objetivos.push({ key: `comer:${t.slug}:${st.slug}:${i}`, nombre: f.name, lugar: st.name, url: "" })
    );
  }
  for (const d of t.days) {
    d.acts.forEach((a, i) =>
      objetivos.push({ key: `acto:${t.slug}:${d.n}:${i}`, nombre: a.name, lugar: d.place, url: a.url })
    );
  }
}

const faltan = objetivos.filter((o) => !manifiesto[o.key]);
console.log(`faltan ${faltan.length} de ${objetivos.length}`);

/* ------------------------------------------------------------ bajar */

async function curl(args, timeout = 30000) {
  try {
    const { stdout } = await run("curl", args, { timeout, maxBuffer: 40 * 1024 * 1024, encoding: "buffer" });
    return stdout;
  } catch {
    return null;
  }
}

function extension(destino) {
  const head = readFileSync(destino).subarray(0, 12);
  if (head[0] === 0x89 && head[1] === 0x50) return ".png";
  if (head.subarray(8, 12).toString() === "WEBP") return ".webp";
  if (head[0] === 0xff && head[1] === 0xd8) return ".jpg";
  return null;
}

async function bajar(src, key) {
  const hash = createHash("sha1").update(key).digest("hex").slice(0, 16);
  const tmp = `${DEST}${hash}.tmp`;
  const out = await curl(["-sL", "--max-time", "30", "-A", UA, "--write-out", "%{content_type}", "-o", tmp, src]);
  if (!out) return null;
  if (!/^image\//i.test(out.toString("utf8").trim())) return null;
  try {
    if (statSync(tmp).size < 12000) return null;
  } catch {
    return null;
  }
  const ext = extension(tmp);
  if (!ext) return null;
  const final = `${hash}${ext}`;
  renameSync(tmp, `${DEST}${final}`);
  return final;
}

/* ------------------------------------------------------------ openverse */

async function openverse(nombre, lugar) {
  const q = encodeURIComponent(`${nombre} ${lugar}`.replace(/[^\p{L}\p{N}\s]/gu, " ").slice(0, 80));
  const api = `https://api.openverse.org/v1/images/?q=${q}&page_size=4&mature=false`;
  const out = await curl(["-sL", "--max-time", "18", "-A", UA, api]);
  if (!out) return null;
  try {
    const d = JSON.parse(out.toString("utf8"));
    for (const r of d?.results ?? []) {
      const src = r.url || r.thumbnail;
      if (src && !/\.svg/i.test(src)) return src;
    }
  } catch {
    /* json roto */
  }
  return null;
}

/* ------------------------------------------------------------ navegador */

const navegador = await chromium.launch({
  executablePath: CHROME,
  args: ["--ignore-certificate-errors", "--disable-blink-features=AutomationControlled"],
});

async function portadaConNavegador(ctx, url) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 28000 });
    await page.waitForTimeout(3200);
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(1200);

    const src = await page.evaluate(() => {
      // las portadas genéricas del sitio no sirven: son el logo de siempre
      const generica = (u) =>
        /og[-_]image|default|placeholder|logo|airbnb-platform-assets|social[-_]share|bstatic\.com\/static/i.test(u);

      const meta = (sel) => document.querySelector(sel)?.getAttribute("content");

      // la foto más grande que se esté viendo, que suele ser la de la galería
      let mejor = null;
      let area = 0;
      for (const img of document.querySelectorAll("img")) {
        const r = img.getBoundingClientRect();
        const s = img.currentSrc || img.src;
        if (!s || !/^https?:/.test(s) || generica(s)) continue;
        if (r.width < 260 || r.height < 180) continue;
        const a = r.width * r.height;
        if (a > area) {
          area = a;
          mejor = s;
        }
      }
      if (mejor) return mejor;

      const og =
        meta('meta[property="og:image"]') ||
        meta('meta[property="og:image:secure_url"]') ||
        meta('meta[name="twitter:image"]');
      return og && !generica(og) ? og : null;
    });

    if (!src) return null;
    return new URL(src, url).toString();
  } catch {
    return null;
  } finally {
    await page.close().catch(() => {});
  }
}

/* ------------------------------------------------------------ vamos */

let nuevas = 0;
let sinSuerte = 0;
const CARRILES = 3;

async function carril(lista) {
  const ctx = await navegador.newContext({
    userAgent: UA,
    viewport: { width: 1360, height: 900 },
    locale: "es-AR",
    ignoreHTTPSErrors: true,
  });

  for (const o of lista) {
    const esBusqueda = /\/s\/|\?query=|search/i.test(o.url ?? "");
    let src = o.url && !esBusqueda ? await portadaConNavegador(ctx, o.url) : null;
    if (!src) src = await openverse(o.nombre, o.lugar);

    const archivo = src ? await bajar(src, o.key) : null;
    if (archivo) {
      manifiesto[o.key] = archivo;
      nuevas++;
      process.stdout.write(".");
    } else {
      sinSuerte++;
      process.stdout.write("x");
    }
  }

  await ctx.close();
}

const tandas = Array.from({ length: CARRILES }, (_, i) =>
  faltan.filter((_, j) => j % CARRILES === i)
);
await Promise.all(tandas.map(carril));

await navegador.close();
writeFileSync(MANIFIESTO, JSON.stringify(manifiesto, null, 2) + "\n");
console.log(`\n${nuevas} nuevas · ${sinSuerte} siguen sin foto · ${Object.keys(manifiesto).length} en total`);
