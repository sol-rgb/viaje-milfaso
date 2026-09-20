export type Nota = {
  id: string;
  target: string;
  quien: string;
  texto: string;
  ts: number;
};

export type Voto = {
  id: string;
  target: string;
  quien: string;
  v: 1 | -1;
  ts: number;
};

export type TipoAporte = "hotel" | "airbnb" | "actividad" | "viaje";

export type Aporte = {
  id: string;
  tipo: TipoAporte;
  quien: string;
  ts: number;
  /** slug del viaje; vacío si es un viaje nuevo */
  viaje: string;
  /** slug de la parada, para hotel y airbnb */
  parada: string;
  nombre: string;
  detalle: string;
  zona: string;
  url: string;
  precio: number;
};

export type Estado = {
  notas: Nota[];
  votos: Voto[];
  aportes: Aporte[];
};

export const VACIO: Estado = { notas: [], votos: [], aportes: [] };

export const LIM = {
  texto: 600,
  nombre: 120,
  detalle: 600,
  zona: 80,
  url: 500,
  quien: 40,
  target: 140,
  total: 4000,
};

export function limpiar(s: unknown, max: number): string {
  return typeof s === "string" ? s.trim().slice(0, max) : "";
}

export function numero(n: unknown, max = 100000): number {
  const v = typeof n === "number" ? n : Number(n);
  return Number.isFinite(v) && v >= 0 ? Math.round(Math.min(v, max)) : 0;
}

/** Solo http(s). Evita javascript: y demás. */
export function urlSegura(s: unknown): string {
  const raw = limpiar(s, LIM.url);
  if (!raw) return "";
  try {
    const u = new URL(raw);
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : "";
  } catch {
    return "";
  }
}

export function id() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function sanear(e: unknown): Estado {
  const o = (e ?? {}) as Partial<Estado>;
  return {
    notas: Array.isArray(o.notas) ? o.notas : [],
    votos: Array.isArray(o.votos) ? o.votos : [],
    aportes: Array.isArray(o.aportes) ? o.aportes : [],
  };
}

/** Conteo de pulgares para un target. */
export function marcador(votos: Voto[], target: string, quien?: string) {
  let si = 0;
  let no = 0;
  let mio: 1 | -1 | 0 = 0;
  for (const v of votos) {
    if (v.target !== target) continue;
    if (v.v === 1) si++;
    else no++;
    if (quien && v.quien === quien) mio = v.v;
  }
  return { si, no, mio };
}
