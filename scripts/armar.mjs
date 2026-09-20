/**
 * Arma data/viajes.ts a partir de los 8 JSON de research/.
 * Los números salen tal cual de la investigación; los textos cortos,
 * los títulos de cada día y las advertencias están escritos acá.
 */
import { readFileSync, writeFileSync } from "node:fs";

const R = (f) => JSON.parse(readFileSync(new URL(`../research/${f}`, import.meta.url), "utf8"));

/** Diccionario de traducciones. Lo que no está, queda como vino. */
let ES = {};
try {
  ES = JSON.parse(readFileSync(new URL("../data/textos.es.json", import.meta.url), "utf8"));
} catch {
  console.warn("sin data/textos.es.json: los textos quedan en inglés");
}
/** Nada de rayas largas en ningún texto: se cambian por coma o dos puntos. */
const sinRaya = (s) =>
  typeof s === "string"
    ? s.replace(/\s*[—–]\s*/g, (m, i, str) => (/[.:,;]\s*$/.test(str.slice(0, i)) ? " " : ", "))
    : s;

/** Se queda con las primeras n oraciones: en la web no entra un párrafo. */
const corto = (s, n) => {
  if (typeof s !== "string") return "";
  const partes = s.split(/(?<=[.!?])\s+/).filter(Boolean);
  return partes.slice(0, n).join(" ").trim();
};

const t = (s) => sinRaya(typeof s === "string" && ES[s] ? ES[s] : s ?? "");

const PROSA = {
  peru: {
    slug: "peru", n: "01", name: "Máncora", place: "Lima y la costa norte, Perú",
    heroDir: "mancora",
    summary: "Dos días en Lima y cinco en la playa del norte.",
    verdict:
      "Máncora es la única playa peruana con cinco días de sol seguro en marzo. Las Pocitas y Vichayito, al lado del pueblo, tienen los hoteles lindos y las casas enteras.",
    warning:
      "Las ballenas son de julio a octubre, así que en marzo no hay. Second Home tiene ocho habitaciones y se llena: reservar eso primero. Volver el domingo 21 cae en Domingo de Ramos.",
    seasonality:
      "La segunda semana es la más barata: Sky publica us$396 para febrero contra us$220 para marzo en el mismo vuelo. La tercera tiene el mejor mar, unos 25 grados.",
    gettingAround:
      "En Máncora se anda en mototaxi y para cinco hacen falta dos o tres. De Talara al pueblo, hora y cuarto en van.",
    notas: {
      lima: "Barranco: casonas, museos chicos y el mar abajo del acantilado.",
      mancora: "Las Pocitas y Vichayito, al sur del pueblo, es donde están las casas.",
    },
    dias: {
      1: ["Lima", "Barranco a pie"],
      2: ["Lima", "Huacas, mercado y malecón"],
      3: ["Máncora", "Vuelo al norte y primera puesta"],
      4: ["Máncora", "Surf, barro y caballos"],
      5: ["Máncora", "Tortugas en El Ñuro"],
      6: ["Máncora", "Punta Sal y Cabo Blanco"],
      7: ["Máncora", "El último día sin plan"],
    },
  },
  colombia: {
    slug: "colombia", n: "02", name: "Cartagena", place: "Cartagena y el Caribe, Colombia",
    heroDir: "cartagena",
    summary: "Tres días en la ciudad amurallada y cuatro en Barú.",
    verdict:
      "Barú es la única playa a la que se llega por tierra, así que nadie depende de la lancha de las nueve. Durmiendo ahí, Playa Blanca queda vacía al amanecer y al atardecer.",
    warning:
      "Semana Santa arranca el domingo 21 de marzo, justo cuando termina la tercera semana. Ojo con Wingo entre Bogotá y Cartagena: la valija se paga aparte y para cinco se come el ahorro.",
    seasonality:
      "Marzo es temporada alta en el Caribe y los hoteles de adentro de la muralla se van a precio de Nueva York. La segunda semana es la mejor: pasó febrero y todavía falta para Semana Santa.",
    gettingAround:
      "Aerolíneas vuela sin escalas de Aeroparque a Cartagena desde el 1 de enero de 2027, cinco veces por semana. A Barú se va por el puente, una hora en auto.",
    notas: {
      cartagena: "Adentro de la muralla y en Getsemaní, todo a pie.",
      baru: "Se llega por el puente, sin depender de lanchas.",
    },
    dias: {
      1: ["Cartagena", "La ciudad amurallada"],
      2: ["Cartagena", "Bazurto, San Felipe y champeta"],
      3: ["Cartagena", "Getsemaní y la bahía"],
      4: ["Barú", "Cruce a Barú y plancton"],
      5: ["Barú", "Lancha propia a los Rosarios"],
      6: ["Barú", "Aviario y manglares"],
      7: ["Barú", "Snorkel y la última puesta"],
    },
  },
  usa: {
    slug: "usa", n: "03", name: "Miami", place: "Miami y los Cayos, Estados Unidos",
    heroDir: "miami",
    summary: "Tres días en Miami y cuatro en los Cayos.",
    verdict:
      "Bahamas y Aruba se van a tres o cuatro veces el presupuesto en marzo. Los Cayos se manejan desde Miami, sin vuelo extra, y una casa con muelle sale menos que dos habitaciones de hotel.",
    warning:
      "Hace falta visa B1/B2: Argentina no está en el programa de exención y no hay ESTA. Son hasta us$435 por cabeza y conviene sacar los cinco turnos ya. En Buenos Aires la espera es de unos quince días.",
    seasonality:
      "El spring break de la Universidad de Miami es del 6 al 13 de marzo, exactamente la segunda semana. Es la peor para este viaje, unos us$250 más por persona solo en avión. La primera es la mejor.",
    gettingAround:
      "Miami pide auto. Una camioneta para cinco sirve también para bajar a los Cayos: tres horas y media hasta Islamorada.",
    notas: {
      miami: "South Beach y Wynwood. El resort fee se cobra por habitación, ojo.",
      "islamorada-keys": "Islamorada del lado de la bahía, con muelle propio.",
    },
    dias: {
      1: ["Miami", "Wynwood y Coconut Grove"],
      2: ["Miami", "Design District y la Pequeña Habana"],
      3: ["Miami", "Un día de lancha en Biscayne"],
      4: ["Los Cayos", "Manejamos a Islamorada"],
      5: ["Los Cayos", "Sandbar y arrecife"],
      6: ["Los Cayos", "Cayo Hueso, ida y vuelta"],
      7: ["Los Cayos", "Pennekamp y kayak"],
    },
  },
  mexico: {
    slug: "mexico", n: "04", name: "Puerto Escondido", place: "Ciudad de México y Oaxaca, México",
    heroDir: "puerto-escondido",
    summary: "Dos días en el DF y cinco en la costa de Oaxaca.",
    verdict:
      "Puerto Escondido es la única del Pacífico con la arquitectura y la gente que buscamos. Se duerme en La Punta, se nada en Carrizalillo y Zicatela queda para la noche.",
    warning:
      "El vuelo de Buenos Aires llega a la Terminal 2 y Volaris y Viva salen de la 1: cambiar de terminal lleva una hora y no está protegido. Conviene sacar el tramo a la costa con Aeroméxico en el mismo ticket. El 15 de marzo es feriado.",
    seasonality:
      "La primera y la segunda semana están limpias. La tercera termina en Domingo de Ramos y ahí arranca el movimiento a la costa. La luna nueva cae cerca del 8 de marzo, que es cuando mejor se ve la bioluminiscencia.",
    gettingAround:
      "En el DF, metro y Uber. En Puerto Escondido, colectivos y taxis; entre La Punta y Zicatela hay diez minutos.",
    notas: {
      cdmx: "Roma, Condesa y Juárez, todo caminable.",
      "puerto-escondido": "La Punta para dormir, Carrizalillo para nadar, Zicatela de noche.",
    },
    dias: {
      1: ["Ciudad de México", "Roma, Condesa y Barragán"],
      2: ["Ciudad de México", "Chapultepec, Coyoacán y lucha"],
      3: ["Puerto Escondido", "Vuelo a la costa y La Punta"],
      4: ["Puerto Escondido", "Surf y Carrizalillo"],
      5: ["Puerto Escondido", "Bioluminiscencia de noche"],
      6: ["Puerto Escondido", "Mazunte y Punta Cometa"],
      7: ["Puerto Escondido", "Delfines al amanecer"],
    },
  },
};

/** Los research listan alternativas; acá va solo el tramo que se usa. */
const TRAMOS = {
  peru: ["LIM-TYL"],
  colombia: [],
  usa: [],
  mexico: ["MEX-PXM"],
};

const ARCHIVOS = {
  peru: ["flights-peru.json", "stay-peru.json"],
  colombia: ["flights-colombia.json", "stay-colombia.json"],
  usa: ["flights-usa.json", "stay-usa.json"],
  mexico: ["flights-mexico.json", "stay-mexico.json"],
};

const num = (v) => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : 0);
const http = (u) => (typeof u === "string" && /^https?:\/\//.test(u) ? u : "");

function vuelo(f, kind) {
  const o = {
    kind,
    airline: sinRaya(f.airline ?? ""),
    route: `${f.from ?? "EZE"} → ${f.to ?? ""}`,
    duration: f.duration ?? "",
    priceUsd: num(f.rt_price_usd),
  };
  if (f.via) o.via = f.via;
  if (f.is_estimate) o.estimate = true;
  if (f.flight_no && kind === "directo") o.note = sinRaya(String(f.flight_no));
  return o;
}

/** Los research meten rótulos en el nombre: "Casa X [SPLURGE - OVER BUDGET]". */
const limpioNombre = (n) =>
  sinRaya(String(n ?? "").replace(/\s*\[[^\]]*\]\s*/g, " ").replace(/\s{2,}/g, " ").trim());

function hotel(h) {
  const grupo = num(h.group_night_usd) || num(h.price_night_usd) * 3;
  const pp = num(h.pp_night_usd) || Math.round(grupo / 5);
  const o = {
    name: limpioNombre(h.name),
    area: t(h.area),
    nightUsd: grupo,
    ppUsd: pp,
    why: t(h.why),
    url: http(h.booking_url) || http(h.site_url),
  };
  if (h.guest_score) o.score = sinRaya(String(h.guest_score));
  if (http(h.site_url)) o.site = http(h.site_url);
  if (pp > 100) o.over = true;
  if (h.is_estimate) o.estimate = true;
  return o;
}

function casa(b) {
  const noche = num(b.price_night_usd) || num(b.headline_night_usd);
  const o = {
    name: limpioNombre(b.name),
    area: t(b.area),
    sleeps: num(b.sleeps) || 5,
    nightUsd: noche,
    ppUsd: num(b.pp_night_usd) || Math.round(noche / 5),
    why: t(b.why),
    url: http(b.url),
  };
  if (b.is_search_url) o.isSearch = true;
  return o;
}

function acto(a) {
  const o = { name: t(a.name), what: t(a.what), ppUsd: num(a.price_pp_usd) };
  if (a.duration) o.duration = t(String(a.duration));
  if (a.when) o.when = t(String(a.when));
  if (http(a.url)) o.url = http(a.url);
  return o;
}

const VIAJES = Object.entries(PROSA).map(([id, p]) => {
  const [ff, sf] = ARCHIVOS[id];
  const F = R(ff);
  const S = R(sf);

  const flights = {};
  for (const w of F.windows) {
    flights[w.id] = [
      ...(w.direct ?? []).slice(0, 3).map((f) => vuelo(f, "directo")),
      ...(w.one_stop ?? []).slice(0, 3).map((f) => vuelo(f, "escala")),
    ];
  }

  const stops = S.stops.map((st) => ({
    slug: st.slug,
    name: st.name.replace(/\s*\(.*\)\s*$/, ""),
    nights: num(st.nights),
    note: p.notas[st.slug] ?? "",
    hotels: (st.hotels ?? []).filter((h) => h.fits_5 !== false).slice(0, 5).map(hotel),
    rentals: (st.airbnbs ?? [])
      .filter((b) => (num(b.sleeps) || 0) >= 5)
      .slice(0, 5)
      .map(casa),
    food: (st.food ?? []).slice(0, 4).map((f) => ({
      name: limpioNombre(f.name),
      what: t(f.what),
      level: t(f.price_level),
    })),
    weather: corto(t(st.weather_note), 2),
  }));

  // los días salen de las actividades; el día 0 es lo que no aplica en marzo
  const porDia = new Map();
  for (const st of S.stops) {
    for (const a of st.activities ?? []) {
      const d = num(a.day);
      if (!d) continue;
      // "Alternative for day 2", "Only if...", "NOT AVAILABLE IN MARCH"
      if (/^(alternative|only if)\b/i.test(a.name) || /NOT AVAILABLE|ONLY IF/i.test(a.name)) continue;
      if (!porDia.has(d)) porDia.set(d, []);
      porDia.get(d).push(acto(a));
    }
  }

  const days = [...porDia.keys()]
    .sort((a, b) => a - b)
    .map((d) => {
      const [place, title] = p.dias[d] ?? [stops[stops.length - 1].name, "Día libre"];
      return { n: d, place, title, acts: porDia.get(d).slice(0, 4) };
    });

  const ultimo = days.length ? days[days.length - 1].n : 0;
  days.push({
    n: ultimo + 1,
    place: "Buenos Aires",
    title: "Vuelta",
    acts: [{ name: "Vuelo de vuelta", what: "Volvemos a Buenos Aires.", ppUsd: 0 }],
  });

  const usados = TRAMOS[id];
  const candidatos = (F.internal_flights ?? [])
    .filter((h) => num(h.rt_price_usd) > 0)
    .filter((h) => usados.some((r) => String(h.route).replace(/\s/g, "").startsWith(r)));

  // varias aerolíneas vuelan la misma ruta: nos quedamos con la más barata
  const porRuta = new Map();
  for (const h of candidatos) {
    const k = String(h.route).replace(/\s/g, "");
    const prev = porRuta.get(k);
    if (!prev || num(h.rt_price_usd) < num(prev.rt_price_usd)) porRuta.set(k, h);
  }

  const hops = [...porRuta.values()].map((h) => {
    const o = {
      route: sinRaya(h.route),
      airline: h.airline ?? "",
      duration: t(h.duration),
      priceUsd: num(h.rt_price_usd),
    };
    if (h.frequency) o.frequency = String(h.frequency);
    if (h.is_estimate) o.estimate = true;
    return o;
  });

  const transfers = (F.ground_transfers ?? []).slice(0, 5).map((g) => ({
    route: sinRaya(g.route),
    mode: t(g.mode),
    duration: t(g.duration),
    costUsd: num(g.cost_usd),
  }));

  const sources = [...new Set([...(F.sources ?? []), ...(S.sources ?? [])])]
    .filter(http)
    .slice(0, 9);

  return {
    slug: p.slug,
    n: p.n,
    name: p.name,
    place: p.place,
    accent: "#0f0f0e",
    tint: "#e9e7e0",
    summary: p.summary,
    heroDir: p.heroDir,
    stops,
    days,
    flights,
    hops,
    transfers,
    verdict: p.verdict,
    warning: p.warning,
    seasonality: p.seasonality,
    gettingAround: p.gettingAround,
    sources,
  };
});

const out =
  `import type { Trip } from "@/lib/types";\n\n` +
  `/**\n * Sale de research/, armado con scripts/armar.mjs.\n` +
  ` * Los precios de 2027 son estimados con base real: los marcados con ~\n` +
  ` * no son una cotización en firme.\n */\n` +
  `export const VIAJES: Trip[] = ${JSON.stringify(VIAJES, null, 2)};\n`;

writeFileSync(new URL("../data/viajes.ts", import.meta.url), out);
console.log(`data/viajes.ts: ${VIAJES.length} viajes, ${out.split("\n").length} líneas`);
