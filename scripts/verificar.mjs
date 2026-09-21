/**
 * Chequea data/viajes.ts contra las reglas del viaje:
 * cinco personas, us$100 por persona por noche, links reales, días completos.
 * Corre con:  node --experimental-strip-types scripts/verificar.mjs
 * o después del build:  npm run verificar
 */
import { existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const src = readFileSync(new URL("../data/viajes.ts", import.meta.url), "utf8");

// import dinámico via data: url, transpilando el type-only import
const js = src
  .replace(/^import type .*$/gm, "")
  .replace(/:\s*Trip\[\]/g, "");
const mod = await import(
  `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`
);
const VIAJES = mod.VIAJES;

const problemas = [];
const avisos = [];
const P = (s) => problemas.push(s);
const A = (s) => avisos.push(s);

const SEMANAS = ["w1", "w2", "w3"];
const ok = (u) => typeof u === "string" && /^https?:\/\//.test(u);

if (VIAJES.length !== 4) P(`esperaba 4 viajes, hay ${VIAJES.length}`);

for (const t of VIAJES) {
  const id = t.slug ?? "?";

  for (const k of ["slug", "n", "name", "place", "accent", "tint", "summary", "heroDir"]) {
    if (!t[k]) P(`${id}: falta ${k}`);
  }

  const pal = (t.summary ?? "").split(/\s+/).length;
  if (pal > 16) A(`${id}: el resumen tiene ${pal} palabras, apuntábamos a 14`);

  // vuelos
  for (const w of SEMANAS) {
    const fs = t.flights?.[w];
    if (!Array.isArray(fs) || fs.length === 0) {
      P(`${id}/${w}: sin vuelos`);
      continue;
    }
    const d = fs.filter((f) => f.kind === "directo").length;
    const e = fs.filter((f) => f.kind === "escala").length;
    if (d === 0) A(`${id}/${w}: ningún vuelo directo`);
    if (e === 0) A(`${id}/${w}: ningún vuelo con escala`);
    for (const f of fs) {
      if (!(f.priceUsd > 0)) P(`${id}/${w}: ${f.airline} sin precio`);
      if (!f.route?.includes("→")) A(`${id}/${w}: ruta rara "${f.route}"`);
    }
  }

  // paradas, camas y presupuesto
  if (!t.stops?.length) P(`${id}: sin paradas`);
  for (const s of t.stops ?? []) {
    if (!(s.nights > 0)) P(`${id}/${s.slug}: sin noches`);

    const enPresupuesto = (s.hotels ?? []).filter((h) => !h.over);
    if (!s.propio && enPresupuesto.length === 0) {
      A(`${id}/${s.slug}: ningún hotel dentro de us$100 por persona`);
    }

    for (const h of s.hotels ?? []) {
      if (!ok(h.url)) P(`${id}/${s.slug}: "${h.name}" con link inválido`);
      if (!(h.nightUsd > 0) || !(h.ppUsd > 0)) P(`${id}/${s.slug}: "${h.name}" sin precio`);
      const esperado = Math.round(h.nightUsd / 5);
      if (Math.abs(esperado - h.ppUsd) > 2) {
        P(`${id}/${s.slug}: "${h.name}" ppUsd ${h.ppUsd} no es nightUsd/5 (${esperado})`);
      }
      if (h.ppUsd > 100 && !h.over) {
        P(`${id}/${s.slug}: "${h.name}" a ${h.ppUsd} por persona y sin marcar over`);
      }
      const p = (h.why ?? "").split(/\s+/).length;
      if (p > 16) A(`${id}/${s.slug}: el porqué de "${h.name}" tiene ${p} palabras`);
    }

    for (const r of s.rentals ?? []) {
      if (!ok(r.url)) P(`${id}/${s.slug}: "${r.name}" con link inválido`);
      if (!(r.sleeps >= 5)) P(`${id}/${s.slug}: "${r.name}" duerme ${r.sleeps}, somos 5`);
      const esperado = Math.round(r.nightUsd / 5);
      if (Math.abs(esperado - r.ppUsd) > 2) {
        P(`${id}/${s.slug}: "${r.name}" ppUsd ${r.ppUsd} no es nightUsd/5 (${esperado})`);
      }
    }
  }

  // días
  const dias = t.days ?? [];
  if (dias.length < 7) A(`${id}: solo ${dias.length} días`);
  dias.forEach((d, i) => {
    if (d.n !== i + 1) P(`${id}: el día ${i + 1} está numerado ${d.n}`);
    if (!d.acts?.length) P(`${id}: el día ${d.n} no tiene nada`);
    for (const a of d.acts ?? []) {
      if (a.url && !ok(a.url)) P(`${id}: "${a.name}" con link inválido`);
      if (typeof a.ppUsd !== "number") P(`${id}: "${a.name}" sin precio`);
    }
  });

  const noches = (t.stops ?? []).reduce((n, s) => n + s.nights, 0);
  if (noches < 6 || noches > 9) A(`${id}: ${noches} noches en total`);

  if (!t.warning) A(`${id}: sin warning`);
  if (!t.seasonality) A(`${id}: sin nota de temporada`);
  if ((t.sources ?? []).length < 5) A(`${id}: solo ${t.sources?.length ?? 0} fuentes`);
  for (const u of t.sources ?? []) {
    if (!ok(u)) P(`${id}: fuente inválida "${u}"`);
  }
}

console.log(`\n${VIAJES.length} viajes: ${VIAJES.map((t) => t.slug).join(", ")}\n`);
for (const t of VIAJES) {
  const noches = t.stops.reduce((n, s) => n + s.nights, 0);
  const min = Math.min(...t.flights.w2.map((f) => f.priceUsd));
  const cama = t.stops.reduce((n, s) => {
    const pool = s.hotels.filter((h) => !h.over);
    const lista = pool.length ? pool : s.hotels;
    // una parada donde ya tenemos dónde parar no suma nada
    if (!lista.length) return n;
    return n + Math.min(...lista.map((h) => h.ppUsd)) * s.nights;
  }, 0);
  const act = t.days.flatMap((d) => d.acts).reduce((n, a) => n + a.ppUsd, 0);
  const hops = t.hops.reduce((n, h) => n + h.priceUsd, 0);
  console.log(
    `  ${t.slug.padEnd(9)} ${noches} noches · vuelo ${min} · internos ${hops} · camas ${cama} · cosas ${act} · total w2 ${min + hops + cama + act}`
  );
}

// El nombre de cada foto lleva el hash de la clave del alojamiento. Si se
// corren los índices y no se renombran los archivos, dos alojamientos
// terminan apuntando al mismo archivo y uno pisa las fotos del otro.
const manifiesto = new URL("../data/galerias.json", import.meta.url).pathname;
if (existsSync(manifiesto)) {
  const galerias = JSON.parse(readFileSync(manifiesto, "utf8"));
  const duenos = new Map();
  for (const [clave, fotos] of Object.entries(galerias)) {
    const esperado = createHash("sha1").update(clave).digest("hex").slice(0, 12);
    for (const foto of fotos) {
      if (!foto.startsWith(esperado)) {
        problemas.push(`galerias.json: ${clave} apunta a ${foto}, que no es su hash (${esperado})`);
      }
      const otro = duenos.get(foto);
      if (otro) problemas.push(`galerias.json: ${foto} está en ${otro} y en ${clave}`);
      else duenos.set(foto, clave);
    }
  }
}

if (avisos.length) {
  console.log(`\navisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  · ${a}`);
}
if (problemas.length) {
  console.log(`\nproblemas (${problemas.length}):`);
  for (const p of problemas) console.log(`  ✗ ${p}`);
  process.exit(1);
}
console.log("\ntodo bien\n");
