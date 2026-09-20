/**
 * Baja algunas fotos buenas de cada lugar desde Wikimedia Commons, para que
 * la galería de arriba tenga con qué seguir después de las nuestras.
 * Van a public/photos-extra y siempre se muestran DESPUÉS de las propias.
 *
 * Corre con: npm run fotos:lugar
 */
import { writeFileSync, existsSync, mkdirSync, statSync, renameSync, readFileSync, readdirSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";

const run = promisify(execFile);
const RAIZ = new URL("../public/photos-extra/", import.meta.url).pathname;
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36";
const POR_LUGAR = 6;

const BUSQUEDAS = {
  lima: ["Barranco Lima", "Miraflores Lima", "Malecón Miraflores", "Centro histórico de Lima", "Huaca Pucllana"],
  mancora: ["Máncora", "Punta Sal Tumbes", "Los Órganos Piura", "Cabo Blanco Peru", "Vichayito"],
  cartagena: ["Cartagena de Indias", "Getsemaní Cartagena", "Castillo San Felipe de Barajas", "Murallas de Cartagena", "Plaza Santo Domingo Cartagena"],
  baru: ["Isla Barú", "Playa Blanca Barú", "Islas del Rosario", "Archipiélago de Nuestra Señora del Rosario"],
  miami: ["Miami Beach", "Wynwood Miami", "Vizcaya Museum and Gardens", "Little Havana Miami", "Ocean Drive Miami"],
  keys: ["Islamorada", "Florida Keys", "Key West", "Bahia Honda State Park", "Seven Mile Bridge"],
  cdmx: ["Colonia Roma Ciudad de México", "Condesa Ciudad de México", "Bosque de Chapultepec", "Coyoacán", "Centro Histórico de la Ciudad de México"],
  "puerto-escondido": ["Puerto Escondido Oaxaca", "Playa Zicatela", "Playa Carrizalillo", "Mazunte", "Punta Cometa"],
};

async function curl(args, timeout = 25000) {
  try {
    const { stdout } = await run("curl", args, { timeout, maxBuffer: 40 * 1024 * 1024, encoding: "buffer" });
    return stdout;
  } catch {
    return null;
  }
}

async function buscar(q) {
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
    `&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=6` +
    "&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1600";
  const out = await curl(["-sL", "--max-time", "18", "-A", UA, api]);
  if (!out) return [];
  try {
    const d = JSON.parse(out.toString("utf8"));
    return Object.values(d?.query?.pages ?? {})
      .map((p) => p?.imageinfo?.[0])
      .filter(Boolean)
      .filter((i) => /^image\/(jpeg|png)$/.test(i.mime ?? ""))
      .filter((i) => (i.width ?? 0) >= 1000)
      .map((i) => i.thumburl || i.url);
  } catch {
    return [];
  }
}

function extension(p) {
  const h = readFileSync(p).subarray(0, 12);
  if (h[0] === 0x89 && h[1] === 0x50) return ".png";
  if (h.subarray(8, 12).toString() === "WEBP") return ".webp";
  if (h[0] === 0xff && h[1] === 0xd8) return ".jpg";
  return null;
}

let total = 0;
for (const [lugar, consultas] of Object.entries(BUSQUEDAS)) {
  const dir = `${RAIZ}${lugar}/`;
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const yaHay = readdirSync(dir).length;
  if (yaHay >= POR_LUGAR) {
    total += yaHay;
    continue;
  }

  const vistos = new Set();
  let n = yaHay;

  for (const q of consultas) {
    if (n >= POR_LUGAR) break;
    for (const src of await buscar(q)) {
      if (n >= POR_LUGAR) break;
      if (vistos.has(src)) continue;
      vistos.add(src);

      const hash = createHash("sha1").update(src).digest("hex").slice(0, 12);
      const tmp = `${dir}${hash}.tmp`;
      const out = await curl(["-sL", "--max-time", "30", "-A", UA, "--write-out", "%{content_type}", "-o", tmp, src]);
      if (!out || !/^image\//i.test(out.toString("utf8").trim())) continue;
      try {
        if (statSync(tmp).size < 40000) continue;
      } catch {
        continue;
      }
      const ext = extension(tmp);
      if (!ext) continue;
      renameSync(tmp, `${dir}${hash}${ext}`);
      n++;
      total++;
      process.stdout.write(".");
    }
  }
  process.stdout.write(`|${lugar}:${n} `);
}

console.log(`\n${total} fotos de lugar en public/photos-extra`);
