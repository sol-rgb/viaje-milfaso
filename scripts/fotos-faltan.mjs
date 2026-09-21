/**
 * Segunda pasada: los alojamientos que quedaron sin galería. Resuelve los
 * links de búsqueda de Booking a la página real de la propiedad y vuelve a
 * intentar los que fallaron por tiempo.
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

if (!existsSync(DEST)) mkdirSync(DEST, { recursive: true });
const galerias = JSON.parse(readFileSync(MANIFIESTO, "utf8"));

// key -> búsqueda en Booking o link directo
const PENDIENTES = [
  { key: "hotel:peru:lima:1", url: "https://www.booking.com/hotel/pe/casa-republica-barranco.es.html" },
  { key: "hotel:peru:lima:2", buscar: "Casa Caceres Barranco Lima" },
  { key: "hotel:peru:lima:3", url: "https://www.booking.com/hotel/pe/villa-barranco.es.html" },
  { key: "hotel:peru:mancora:0", buscar: "DCO Suites Lounge Spa Mancora" },
  { key: "hotel:peru:mancora:2", buscar: "El Samay Hotel Boutique Canoas de Punta Sal" },
  { key: "hotel:peru:mancora:3", buscar: "Arennas Mancora" },
  { key: "airbnb:peru:mancora:12", url: "https://www.airbnb.com/rooms/53462358" },
];

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
const ctx = await navegador.newContext({
  userAgent: UA, locale: "es-AR", viewport: { width: 1400, height: 1000 }, ignoreHTTPSErrors: true,
});

async function resolver(texto) {
  const p = await ctx.newPage();
  try {
    const q = `https://www.booking.com/searchresults.es.html?ss=${encodeURIComponent(texto)}&checkin=2027-03-08&checkout=2027-03-12&group_adults=5&no_rooms=2`;
    await p.goto(q, { waitUntil: "domcontentloaded", timeout: 45000 });
    await p.waitForTimeout(5000);
    const href = await p.evaluate(() => {
      const a = document.querySelector('a[href*="/hotel/"]');
      return a ? a.href.split("?")[0] : "";
    });
    return href;
  } catch { return ""; } finally { await p.close().catch(() => {}); }
}

async function fotosDe(url) {
  const esAirbnb = /airbnb\./i.test(url);
  const p = await ctx.newPage();
  try {
    const destino = esAirbnb ? `${url}${url.includes("?") ? "&" : "?"}modal=PHOTO_TOUR_SCROLLABLE` : url;
    await p.goto(destino, { waitUntil: "domcontentloaded", timeout: 50000 });
    await p.waitForTimeout(6000);
    await p.keyboard.press("Escape").catch(() => {});
    if (!esAirbnb) {
      // abrir la galería de Booking
      const g = await p.$('[data-testid="property-gallery"] a, .bh-photo-grid-item a, a[data-photo-index]');
      if (g) { await g.click().catch(() => {}); await p.waitForTimeout(4000); }
    }
    for (let i = 0; i < 12; i++) { await p.mouse.wheel(0, 1500); await p.waitForTimeout(700); }
    return await p.evaluate(() => {
      const generica = /og[-_]image|default|placeholder|logo|platform-assets|social[-_]share|flag|avatar|\/static\//i;
      const vistas = new Set(); const out = [];
      for (const img of document.querySelectorAll("img")) {
        let s = img.currentSrc || img.src || "";
        if (!/^https?:/.test(s) || generica.test(s)) continue;
        const r = img.getBoundingClientRect();
        const nat = (img.naturalWidth || 0) * (img.naturalHeight || 0);
        if (nat < 160000 && r.width * r.height < 40000) continue;
        s = s.replace(/im_w=\d+/, "im_w=1200").replace(/\/square\d+\//, "/max1280x900/").replace(/\/max\d+x\d+\//, "/max1280x900/");
        const id = s.split("?")[0];
        if (vistas.has(id)) continue;
        vistas.add(id); out.push(s);
      }
      return out.slice(0, 24);
    });
  } catch { return []; } finally { await p.close().catch(() => {}); }
}

const links = {};
for (const o of PENDIENTES) {
  let url = o.url;
  if (!url && o.buscar) { url = await resolver(o.buscar); console.log(o.key, "->", url || "sin resultado"); }
  if (!url) continue;
  links[o.key] = url;
  const srcs = await fotosDe(url);
  const bajadas = [];
  for (const [i, src] of srcs.slice(0, 10).entries()) {
    const f = await bajar(src, o.key, i);
    if (f) bajadas.push(f);
  }
  if (bajadas.length >= 2) { galerias[o.key] = bajadas; console.log(o.key, bajadas.length, "fotos"); }
  else console.log(o.key, "sin fotos");
}

await navegador.close();
writeFileSync(MANIFIESTO, JSON.stringify(galerias, null, 2) + "\n");
writeFileSync(new URL("../data/links-hospedaje.json", import.meta.url).pathname, JSON.stringify(links, null, 2) + "\n");
console.log("listo");
