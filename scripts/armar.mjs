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
    slug: "peru", n: "01", name: "Lima & Máncora", place: "Perú",
    heroDir: "mancora",
    photoDirs: ["mancora", "lima"],
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
      lima: "Dormimos en Miraflores, que deja Maido y Rafael a pie, y Barranco a diez minutos en taxi.",
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
    slug: "colombia", n: "02", name: "Cartagena & Barú", place: "Colombia",
    heroDir: "cartagena",
    photoDirs: ["cartagena", "baru"],
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
    slug: "usa", n: "03", name: "Miami & los Cayos", place: "Estados Unidos",
    heroDir: "miami",
    photoDirs: ["miami", "keys"],
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
    slug: "mexico", n: "04", name: "Ciudad de México & Puerto Escondido", place: "México",
    heroDir: "puerto-escondido",
    photoDirs: ["puerto-escondido", "cdmx"],
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

/** Elegimos Perú: los otros tres quedan guardados pero no se muestran. */
const DESCARTADOS = ["colombia", "usa", "mexico"];

/** Paradas donde ya tenemos dónde dormir, así que no buscamos nada. */
const YA_TENEMOS = {
  usa: ["miami"],
};

/**
 * Las ocho casas que estamos mirando para Máncora. Precio real leído del
 * panel de reserva de Airbnb para el 8 al 12 de marzo de 2027, cinco
 * personas, cuatro noches. El presupuesto es us$1.800 por las cuatro.
 */
/**
 * Hoteles de Miraflores para las dos noches en Lima. Precio real de
 * Booking para el 27 de febrero al 1 de marzo de 2027, cinco personas en
 * dos habitaciones, total por las dos noches. La distancia a Maido es en
 * línea recta. Todo el detalle está en research/lima-miraflores.md.
 */
const HOTELES_MIRAFLORES = [
  {
    name: "Hotel Antigua Miraflores",
    zona: "Miraflores, Av. Grau 350, a diez cuadras de Maido",
    totalUsd: 227,
    score: "9,3 en Booking, 2.131 opiniones",
    why: "Casona de los años 20 con patio. Doble más colonial triple. La nota alta mejor respaldada de Miraflores.",
    url: "https://www.booking.com/hotel/pe/antigua-miraflores.es-ar.html",
  },
  {
    name: "Humano, a Tribute Portfolio Hotel",
    zona: "Miraflores, Revett 151, a una cuadra del Parque Kennedy",
    totalUsd: 331,
    score: "9,6 en Booking, 65 opiniones",
    why: "Lo abrió Marriott hace poco y es el más de diseño que entra en presupuesto. A cuatro cuadras de Rafael.",
    url: "https://www.booking.com/hotel/pe/humano-lima.es-ar.html",
  },
  {
    name: "Hotel Indigo Lima Miraflores",
    zona: "Miraflores, Alcanfores 1332, cerca de Mayta",
    totalUsd: 458,
    score: "9,3 en Booking, 255 opiniones",
    why: "Terraza con pileta en el último piso. El más cerca de Mayta de los buenos, a 650 m.",
    url: "https://www.booking.com/hotel/pe/indigo-lima-miraflores-by-ihg.es-ar.html",
  },
  {
    name: "Casa Andina Select Miraflores",
    zona: "Miraflores, Schell 452, a cuatro cuadras de Maido",
    totalUsd: 268,
    score: "8,9 en Booking, 1.199 opiniones",
    why: "Cadena peruana sin sorpresas. Doble con dos camas más una triple.",
    url: "https://www.booking.com/hotel/pe/casa-andina-select-miraflores.es-ar.html",
  },
  {
    name: "Nhow Lima",
    zona: "Miraflores, Atahualpa 155, cerca de La Mar y de Cosme",
    totalUsd: 424,
    score: "9,4 en Booking, 523 opiniones",
    why: "El de diseño más marcado. Queda más al norte: más lejos de Maido, más cerca de La Mar y de Cosme.",
    url: "https://www.booking.com/hotel/pe/nhow-lima.es-ar.html",
  },
  {
    name: "Crowne Plaza Lima Miraflores",
    zona: "Miraflores, Av. Benavides 300, a media cuadra de Maido",
    totalUsd: 358,
    score: "8,9 en Booking, 923 opiniones",
    why: "Está a 91 metros de Maido y a 149 de Rafael. No hay nada más cerca.",
    url: "https://www.booking.com/hotel/pe/crowne-plaza-lima.es-ar.html",
  },
  {
    name: "Radisson RED Miraflores",
    zona: "Miraflores, Bolívar 210, a cuatro cuadras de Maido",
    totalUsd: 199,
    score: "8,8 en Booking, 2.512 opiniones",
    why: "El más barato de los que están bien ubicados. Una habitación con cama extragrande y otra con dos dobles.",
    url: "https://www.booking.com/hotel/pe/radisson-red-miraflores.es-ar.html",
  },
  {
    name: "AC Hotel by Marriott Lima Miraflores",
    zona: "Miraflores, Malecón de la Reserva 729, sobre el acantilado",
    totalUsd: 538,
    score: "9,2 en Booking, 396 opiniones",
    why: "Sobre el malecón al lado de Larcomar, con la mejor vista al mar. El más caro de la lista y aun así entra.",
    url: "https://www.booking.com/hotel/pe/ac-lima-miraflores.es-ar.html",
  },
];

const CASAS_MANCORA = [
  {
    name: "Las Pocitas, casa de estreno",
    zona: "Las Pocitas, segunda fila",
    sleeps: 12,
    totalUsd: 1820,
    score: "4,96 en Airbnb, 28 opiniones",
    why: "Guardián en la casa, cuatro cuartos, cinco baños, pileta.",
    url: "https://www.airbnb.com/rooms/1321133264832239578",
    favorita: true,
  },
  {
    name: "Casa Sahuaro Norte",
    zona: "Máncora",
    sleeps: 6,
    totalUsd: 1318,
    score: "4,94 en Airbnb, 17 opiniones",
    why: "La más barata de las que quedan cerca del pueblo.",
    url: "https://www.airbnb.com/rooms/936206844235812054",
  },
  {
    name: "ANAHATA",
    zona: "Las Pocitas, primera fila",
    sleeps: 7,
    totalUsd: 1825,
    score: "4,88 en Airbnb, 17 opiniones",
    why: "Frente al mar, pero solo dos cuartos para cinco.",
    url: "https://www.airbnb.com/rooms/47588033",
  },
  {
    name: "Casa Carpe II Eco-Luxury",
    zona: "Vichayito",
    sleeps: 8,
    totalUsd: 1116,
    score: "4,94 en Airbnb, 16 opiniones",
    why: "Cámaras, playa a 100 metros, beach club al lado.",
    url: "https://www.airbnb.com/rooms/1398079145603022656",
  },
  {
    name: "Casa Norte",
    zona: "Máncora",
    sleeps: 10,
    totalUsd: 1978,
    score: "5,0 en Airbnb, solo 2 opiniones",
    why: "Frente al mar y con cocinera, pero casi sin historial.",
    url: "https://www.airbnb.com/rooms/1238373248843447855",
  },
  {
    name: "Frente al mar en Las Pocitas",
    zona: "Las Pocitas, condominio cerrado",
    sleeps: 12,
    totalUsd: 2560,
    score: "5,0 en Airbnb, 10 opiniones",
    why: "Condominio cerrado de cuatro casas, salida directa a la playa.",
    url: "https://www.airbnb.com/rooms/1675507390981901540",
  },
  {
    name: "Casa Palma de Máncora",
    zona: "Las Pocitas, primera fila",
    sleeps: 12,
    totalUsd: 2608,
    score: "5,0 en Airbnb, 9 opiniones",
    why: "Frente al mar, anfitriona superhost, la más cara.",
    url: "https://www.airbnb.com/rooms/681820181339814466",
  },
  {
    name: "La Morada Punta Sal",
    zona: "Punta Sal, Tumbes",
    sleeps: 5,
    totalUsd: 952,
    score: "4,87 en Airbnb, 61 opiniones",
    why: "La más barata, pero Punta Sal está a una hora de Máncora.",
    url: "https://www.airbnb.com/rooms/1280397732957486133",
  },
];

const ARCHIVOS = {
  peru: ["flights-peru.json", "stay-peru.json"],
  colombia: ["flights-colombia.json", "stay-colombia.json"],
  usa: ["flights-usa.json", "stay-usa.json"],
  mexico: ["flights-mexico.json", "stay-mexico.json"],
};

const num = (v) => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : 0);
const http = (u) => (typeof u === "string" && /^https?:\/\//.test(u) ? u : "");

const hora = (v) => {
  const x = String(v ?? "").trim();
  return /^\d{1,2}:\d{2}/.test(x) ? x : "";
};

function vuelo(f, kind) {
  const desde = String(f.from ?? "EZE").trim();
  const hasta = String(f.to ?? "").trim();

  const o = {
    kind,
    airline: sinRaya(f.airline ?? ""),
    route: `${desde} → ${hasta}`,
    from: desde,
    to: hasta,
    duration: f.duration ?? "",
    priceUsd: num(f.rt_price_usd),
  };
  if (f.via) o.via = f.via;
  if (hora(f.dep_time)) o.dep = hora(f.dep_time);
  if (hora(f.arr_time)) o.arr = hora(f.arr_time);
  if (f.flight_no && !/not yet|n\/a/i.test(String(f.flight_no))) {
    o.flight = sinRaya(String(f.flight_no));
  }
  if (f.is_estimate) o.estimate = true;
  return o;
}

/** Los research meten rótulos en el nombre: "Casa X [SPLURGE - OVER BUDGET]". */
const limpioNombre = (n) =>
  sinRaya(String(n ?? "").replace(/\s*\[[^\]]*\]\s*/g, " ").replace(/\s{2,}/g, " ").trim());

/**
 * Los puntajes vienen en inglés y con ruido: "9.0/10 Booking.com (381
 * verified reviews)". Acá quedan cortos y en castellano.
 */
function puntaje(v) {
  let x = sinRaya(String(v ?? "").trim());
  if (!x) return "";

  if (/not verified|no re-verified|score not re-verified/i.test(x)) return "";

  x = x
    .replace(/\bBooking\.com\b/gi, "Booking")
    .replace(/\bTripadvisor\b/gi, "Tripadvisor")
    .replace(/\((\d[\d.,]*)\+?\s*(?:verified\s+)?reviews?\)/gi, "($1 opiniones)")
    .replace(/(\d[\d.,]*)\+?\s*(?:verified\s+)?reviews?/gi, "$1 opiniones")
    .replace(/\bverified\b/gi, "")
    .replace(/\bthe highest\b.*/i, "el más alto del viaje")
    .replace(/\bRebranded from\b/i, "Antes se llamaba")
    .replace(/\bread only post-rebrand\b.*/i, "")
    .replace(/\blisting live with\b/i, "con")
    .replace(/\bscore\b/gi, "puntaje")
    .replace(/\bon\b\s+(Booking|Tripadvisor)/gi, "en $1")
    .replace(/\bVery good\b/gi, "muy bueno")
    .replace(/\bWonderful\b/gi, "excelente")
    .replace(/\bExcellent\b/gi, "excelente")
    .replace(/\bGood\b/gi, "bueno")
    .replace(/\bSuperb\b/gi, "muy bueno")
    .replace(/\bFabulous\b/gi, "excelente")
    .replace(/\branked\s*#?(\d+)\s*of\s*([\d.,]+)\s*(?:in|of)?\s*/gi, "puesto $1 de $2 en ")
    .replace(/^#?(\d+)\s*of\s*([\d.,]+)\s*/i, "puesto $1 de $2 en ")
    .replace(/\bBest Hotels in\b/gi, "mejores hoteles de")
    .replace(/\bper U\.?S\.? News[^,]*/gi, "según U.S. News")
    .replace(/\bhotels?\b/gi, "hoteles")
    .replace(/\blocation scored\b/gi, "ubicación")
    .replace(/\bapprox\.?\b/gi, "unas")
    .replace(/\bbut only\b/gi, "pero solo")
    .replace(/\s*;\s*/g, ", ")
    .replace(/\s{2,}/g, " ")
    .replace(/[,\s]+$/, "")
    .trim();

  // "9.0/10 Booking (381 opiniones)" -> "9,0 en Booking, 381 opiniones"
  x = x.replace(
    /^([\d]+)[.,]([\d]+)\/10\s+(\w+)\s*\(([\d.,]+) opiniones\)$/,
    "$1,$2 en $3, $4 opiniones"
  );
  x = x.replace(/^([\d]+)[.,]([\d]+)\/10/, "$1,$2");

  return x;
}

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
  const pts = puntaje(h.guest_score);
  if (pts) o.score = pts;
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

  const propias = YA_TENEMOS[id] ?? [];
  const stops = S.stops.map((st) => ({
    slug: st.slug,
    name: st.name.replace(/\s*\(.*\)\s*$/, ""),
    nights: num(st.nights),
    note: p.notas[st.slug] ?? "",
    ...(propias.includes(st.slug) ? { propio: true } : {}),
    hotels: propias.includes(st.slug)
      ? []
      : [
          // los de Miraflores que investigamos van primero
          ...(id === "peru" && st.slug === "lima"
            ? HOTELES_MIRAFLORES.map((h) => ({
                name: h.name,
                area: h.zona,
                nightUsd: Math.round(h.totalUsd / 2),
                ppUsd: Math.round(h.totalUsd / 2 / 5),
                why: h.why,
                url: h.url,
                score: h.score,
              }))
            : []),
          ...(st.hotels ?? []).filter((h) => h.fits_5 !== false).slice(0, 5).map(hotel),
        ],
    rentals: propias.includes(st.slug)
      ? []
      : [
          // las que mandó Sol van primero
          ...(id === "peru" && st.slug === "mancora"
            ? CASAS_MANCORA.map((c) => ({
                name: c.name,
                zona: c.zona,
                area: c.zona,
                sleeps: c.sleeps,
                nightUsd: Math.round(c.totalUsd / 4),
                ppUsd: Math.round(c.totalUsd / 4 / 5),
                totalUsd: c.totalUsd,
                score: c.score,
                why: c.why,
                url: c.url,
                ...(c.favorita ? { favorita: true } : {}),
              }))
            : []),
          ...(st.airbnbs ?? [])
            .filter((b) => (num(b.sleeps) || 0) >= 5)
            .slice(0, 5)
            .map(casa),
        ],
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
    ...(DESCARTADOS.includes(p.slug) ? { oculto: true } : {}),
    n: p.n,
    name: p.name,
    place: p.place,
    accent: "#0f0f0e",
    tint: "#e9e7e0",
    summary: p.summary,
    heroDir: p.heroDir,
    photoDirs: p.photoDirs,
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
