/**
 * Baja varias fotos de cada alojamiento, para que la ficha tenga galería y
 * no una sola imagen. Airbnb abre la galería completa con
 * ?modal=PHOTO_TOUR_SCROLLABLE; los hoteles se resuelven con lo que haya
 * en su propia página.
 *
 * Corre con: npm run fotos:hospedaje
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, renameSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { chromium } from "playwright";

const run = promisify(execFile);
const DEST = new URL("../public/hospedaje/", import.meta.url).pathname;
const MANIFIESTO = new URL("../data/galerias.json", import.meta.url).pathname;
const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";
const POR_CASA = 10;

if (!existsSync(DEST)) mkdirSync(DEST, { recursive: true });
const galerias = existsSync(MANIFIESTO) ? JSON.parse(readFileSync(MANIFIESTO, "utf8")) : {};

const ts = readFileSync(new URL("../data/viajes.ts", import.meta.url), "utf8");
const marca = ts.match(/VIAJES[^=]*=\s*/);
const VIAJES = JSON.parse(ts.slice(ts.indexOf("[", marca.index + marca[0].length - 1), ts.lastIndexOf("]") + 1));

const objetivos = [];
for (const t of VIAJES) {
  if (t.oculto) continue;
  for (const st of t.stops) {
    st.hotels.forEach((h, i) =>
      objetivos.push({ key: `hotel:${t.slug}:${st.slug}:${i}`, url: h.site || h.url, nombre: h.name })
    );
    st.rentals.forEach((r, i) =>
      objetivos.push({ key: `airbnb:${t.slug}:${st.slug}:${i}`, url: r.isSearch ? "" : r.url, nombre: r.name })
    );
  }
}

async function curl(args, timeout = 30000) {
  try {
    const { stdout } = await run("curl", args, { timeout, maxBuffer: 40 * 1024 * 1024, encoding: "buffer" });
    return stdout;
  } catch { return null; }
}

function extension(p) {
  const h = readFileSync(p).subarray(0, 12);
  if (h[0] === 0x89 && h[1] === 0x50) return ".png";
  if (h.subarray(8, 12).toString() === "WEBP") return ".webp";
  if (h[0] === 0xff && h[1] === 0xd8) return ".jpg";
  return null;
}

async function bajar(src, key, n) {
  const hash = createHash("sha1").update(key).digest("hex").slice(0, 12);
  const tmp = `${DEST}${hash}-${n}.tmp`;
  const out = await curl(["-sL", "--max-time", "25", "-A", UA, "--write-out", "%{content_type}", "-o", tmp, src]);
  if (!out || !/^image\//i.test(out.toString("utf8").trim())) return null;
  try { if (statSync(tmp).size < 18000) return null; } catch { return null; }
  const ext = extension(tmp);
  if (!ext) return null;
  const final = `${hash}-${n}${ext}`;
  renameSync(tmp, `${DEST}${final}`);
  return final;
}

const navegador = await chromium.launch({
  executablePath: CHROME,
  args: ["--ignore-certificate-errors", "--disable-blink-features=AutomationControlled"],
});

async function fotosDe(ctx, url) {
  const esAirbnb = /airbnb\./i.test(url);
  const p = await ctx.newPage();
  try {
    const destino = esAirbnb
      ? `${url}${url.includes("?") ? "&" : "?"}modal=PHOTO_TOUR_SCROLLABLE`
      : url;
    await p.goto(destino, { waitUntil: "domcontentloaded", timeout: 40000 });
    await p.waitForTimeout(4500);
    await p.keyboard.press("Escape").catch(() => {});
    // bajar por la galería para que carguen las de más abajo
    for (let i = 0; i < 10; i++) { await p.mouse.wheel(0, 1600); await p.waitForTimeout(700); }

    return await p.evaluate(() => {
      const generica = /og[-_]image|default|placeholder|logo|platform-assets|social[-_]share/i;
      const vistas = new Set();
      const out = [];
      for (const img of document.querySelectorAll("img")) {
        let s = img.currentSrc || img.src || "";
        if (!/^https?:/.test(s) || generica.test(s)) continue;
        const r = img.getBoundingClientRect();
        const nat = (img.naturalWidth || 0) * (img.naturalHeight || 0);
        if (nat < 160000 && r.width * r.height < 40000) continue;
        // la cdn de airbnb deja pedir un tamaño mayor
        s = s.replace(/im_w=\d+/, "im_w=1200");
        const id = s.split("?")[0];
        if (vistas.has(id)) continue;
        vistas.add(id);
        out.push(s);
      }
      return out.slice(0, 24);
    });
  } catch {
    return [];
  } finally {
    await p.close().catch(() => {});
  }
}

let conFotos = 0;
const CARRILES = 3;

async function carril(lista) {
  const ctx = await navegador.newContext({
    userAgent: UA, locale: "es-AR", viewport: { width: 1400, height: 1000 }, ignoreHTTPSErrors: true,
  });
  for (const o of lista) {
    if (galerias[o.key]?.length >= 4 || !o.url) { process.stdout.write("-"); continue; }
    const srcs = await fotosDe(ctx, o.url);
    const bajadas = [];
    for (const [i, src] of srcs.slice(0, POR_CASA).entries()) {
      const f = await bajar(src, o.key, i);
      if (f) bajadas.push(f);
    }
    if (bajadas.length) { galerias[o.key] = bajadas; conFotos++; process.stdout.write(String(bajadas.length)); }
    else process.stdout.write("x");
  }
  await ctx.close();
}

const tandas = Array.from({ length: CARRILES }, (_, i) => objetivos.filter((_, j) => j % CARRILES === i));
await Promise.all(tandas.map(carril));

await navegador.close();
writeFileSync(MANIFIESTO, JSON.stringify(galerias, null, 2) + "\n");
const total = Object.values(galerias).reduce((n, a) => n + a.length, 0);
console.log(`\n${conFotos} alojamientos con galería, ${total} fotos`);
