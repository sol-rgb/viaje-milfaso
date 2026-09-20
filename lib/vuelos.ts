import { SEMANA_POR_ID } from "@/data/semanas";
import type { Flight, WeekId } from "./types";

/** La página de cada aerolínea, para ir directo a comprar. */
const SITIOS: Record<string, string> = {
  "aerolineas argentinas": "https://www.aerolineas.com.ar",
  aerolineas: "https://www.aerolineas.com.ar",
  latam: "https://www.latamairlines.com",
  jetsmart: "https://jetsmart.com",
  "sky airline": "https://www.skyairline.com",
  sky: "https://www.skyairline.com",
  avianca: "https://www.avianca.com",
  copa: "https://www.copaair.com",
  "copa airlines": "https://www.copaair.com",
  "american airlines": "https://www.aa.com",
  american: "https://www.aa.com",
  aeromexico: "https://www.aeromexico.com",
  "aeroméxico": "https://www.aeromexico.com",
  volaris: "https://www.volaris.com",
  "viva aerobus": "https://www.vivaaerobus.com",
  viva: "https://www.vivaaerobus.com",
  gol: "https://www.voegol.com.br",
  jetblue: "https://www.jetblue.com",
  wingo: "https://www.wingo.com",
  bahamasair: "https://www.bahamasair.com",
};

export function sitioAerolinea(nombre: string): string | undefined {
  const k = nombre.trim().toLowerCase();
  return SITIOS[k] ?? SITIOS[k.split(/\s+/)[0]];
}

/**
 * Google Flights con los filtros puestos: de dónde, a dónde y las fechas
 * de la semana elegida. Abre la búsqueda hecha, no la home.
 */
export function linkBusqueda(f: Flight, semana: WeekId): string {
  const s = SEMANA_POR_ID[semana];
  const ida = s?.out ?? "";
  const vuelta = s?.back ?? "";
  const q = `Flights from ${f.from} to ${f.to} on ${ida} through ${vuelta}`;
  return `https://www.google.com/travel/flights?q=${encodeURIComponent(q)}`;
}
