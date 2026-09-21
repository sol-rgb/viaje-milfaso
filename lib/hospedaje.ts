import GAL from "@/data/galerias.json";
import { imagenDe } from "./fotos";
import type { Trip, Hotel, Rental } from "./types";

const GALERIAS = GAL as Record<string, string[]>;

export type Cama = {
  target: string;
  tipo: "hotel" | "airbnb";
  nombre: string;
  zona: string;
  parada: string;
  paradaSlug: string;
  noches: number;
  ppUsd: number;
  nightUsd: number;
  totalUsd: number;
  casaUsd?: number;
  why: string;
  url: string;
  site?: string;
  score?: string;
  sleeps?: number;
  over?: boolean;
  estimate?: boolean;
  favorita?: boolean;
  fotos: string[];
};

/** Las fotos propias del alojamiento; si no hay, una del viaje. */
export function fotosDe(target: string, dirs: string[]): string[] {
  const propias = GALERIAS[target];
  if (propias?.length) return propias.map((f) => `/hospedaje/${f}`);
  const suelta = imagenDe(target, dirs);
  return suelta ? [suelta] : [];
}

export function tieneGaleria(target: string): boolean {
  return (GALERIAS[target]?.length ?? 0) > 1;
}

/** Todos los alojamientos del viaje, hoteles y airbnb juntos. */
export function camasDe(t: Trip): Cama[] {
  const out: Cama[] = [];

  t.stops.forEach((st) => {
    const base = {
      parada: st.name,
      paradaSlug: st.slug,
      noches: st.nights,
    };

    st.hotels.forEach((h: Hotel, i) => {
      const target = `hotel:${t.slug}:${st.slug}:${i}`;
      out.push({
        ...base,
        target,
        tipo: "hotel",
        nombre: h.name,
        zona: h.area,
        ppUsd: h.ppUsd,
        nightUsd: h.nightUsd,
        totalUsd: h.ppUsd * st.nights,
        why: h.why,
        url: h.url,
        site: h.site,
        score: h.score,
        over: h.over,
        estimate: h.estimate,
        fotos: fotosDe(target, t.photoDirs),
      });
    });

    st.rentals.forEach((r: Rental, i) => {
      if (r.isSearch) return;
      const target = `airbnb:${t.slug}:${st.slug}:${i}`;
      out.push({
        ...base,
        target,
        tipo: "airbnb",
        nombre: r.name,
        zona: r.zona ?? r.area,
        ppUsd: r.ppUsd,
        nightUsd: r.nightUsd,
        totalUsd: r.ppUsd * st.nights,
        casaUsd: r.nightUsd * st.nights,
        why: r.why,
        url: r.url,
        score: r.score,
        sleeps: r.sleeps,
        favorita: r.favorita,
        fotos: fotosDe(target, t.photoDirs),
      });
    });
  });

  return out;
}
