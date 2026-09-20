/** Junta los textos que lee la gente y los deja listos para traducir. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const R = (f) => JSON.parse(readFileSync(new URL(`../research/${f}`, import.meta.url), "utf8"));
const set = new Set();
const add = (s) => {
  if (typeof s === "string" && s.trim() && /[a-zA-Z]/.test(s)) set.add(s.trim());
};

for (const f of ["stay-peru.json", "stay-colombia.json", "stay-usa.json", "stay-mexico.json"]) {
  const d = R(f);
  for (const st of d.stops) {
    add(st.weather_note);
    for (const h of st.hotels ?? []) { add(h.why); add(h.area); }
    for (const b of st.airbnbs ?? []) { add(b.why); add(b.area); }
    for (const a of st.activities ?? []) {
      if (/^(alternative|only if)\b/i.test(a.name) || /NOT AVAILABLE|ONLY IF/i.test(a.name)) continue;
      add(a.name); add(a.what); add(a.duration); add(a.when);
    }
    for (const x of st.food ?? []) { add(x.name); add(x.what); add(x.price_level); }
  }
}
for (const f of ["flights-peru.json", "flights-colombia.json", "flights-usa.json", "flights-mexico.json"]) {
  const d = R(f);
  for (const h of d.internal_flights ?? []) add(h.duration);
  for (const g of d.ground_transfers ?? []) { add(g.mode); add(g.duration); }
}

const salida = new URL("../data/textos.es.json", import.meta.url);
const previo = existsSync(salida) ? JSON.parse(readFileSync(salida, "utf8")) : {};
const dic = {};
for (const s of [...set].sort()) dic[s] = previo[s] ?? "";

writeFileSync(salida, JSON.stringify(dic, null, 2) + "\n");
const faltan = Object.values(dic).filter((v) => !v).length;
console.log(`${Object.keys(dic).length} textos, faltan traducir ${faltan}`);
