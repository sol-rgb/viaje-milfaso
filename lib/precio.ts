import type { Trip, WeekId } from "./types";

export type Desglose = {
  vuelo: number;
  vueloDirecto: number;
  interno: number;
  hotel: number;
  actividades: number;
  total: number;
  totalDirecto: number;
};

const mas = (a: number, b: number) => a + b;

/** El vuelo más barato de la semana, por tipo. */
export function vueloMin(t: Trip, w: WeekId, kind?: "directo" | "escala") {
  const lista = (t.flights[w] ?? []).filter((f) => !kind || f.kind === kind);
  if (!lista.length) return 0;
  return Math.min(...lista.map((f) => f.priceUsd));
}

/** El hotel más barato de cada parada, por persona y por noche. */
export function hotelMin(t: Trip) {
  return t.stops
    .map((s) => {
      const en = s.hotels.filter((h) => !h.over);
      const pool = en.length ? en : s.hotels;
      if (!pool.length) return 0;
      return Math.min(...pool.map((h) => h.ppUsd)) * s.nights;
    })
    .reduce(mas, 0);
}

export function actividadesTotal(t: Trip) {
  return t.days
    .flatMap((d) => d.acts)
    .map((a) => a.ppUsd)
    .reduce(mas, 0);
}

export function precio(t: Trip, w: WeekId): Desglose {
  const escala = vueloMin(t, w, "escala");
  const directo = vueloMin(t, w, "directo");
  const vuelo = Math.min(...[escala, directo].filter((n) => n > 0));
  const interno = t.hops.map((h) => h.priceUsd).reduce(mas, 0);
  const hotel = hotelMin(t);
  const actividades = actividadesTotal(t);

  return {
    vuelo,
    vueloDirecto: directo,
    interno,
    hotel,
    actividades,
    total: vuelo + interno + hotel + actividades,
    totalDirecto: (directo || vuelo) + interno + hotel + actividades,
  };
}

export const usd = (n: number) =>
  n >= 1000
    ? `${Math.round(n / 10) / 100}`.replace(".", ",") + " mil"
    : String(Math.round(n));

/** 1240 -> "1.240" */
export function plata(n: number) {
  return Math.round(n).toLocaleString("es-AR");
}

export const noches = (t: Trip) => t.stops.map((s) => s.nights).reduce(mas, 0);
