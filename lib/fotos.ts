import FOTOS from "@/data/fotos.json";

const MAPA = FOTOS as Record<string, string[]>;

export type Foto = { dir: string; n: number; src: string };

/**
 * Todas las fotos del viaje, intercaladas entre las paradas, así los dos
 * destinos aparecen desde el principio y no primero uno y después el otro.
 */
export function fotosDe(dirs: string[]): Foto[] {
  const pilas = dirs.map((dir) =>
    (MAPA[dir] ?? []).map((archivo, i) => ({
      dir,
      n: i + 1,
      src: `/photos/${dir}/${encodeURIComponent(archivo)}`,
    }))
  );

  const out: Foto[] = [];
  const largo = Math.max(0, ...pilas.map((p) => p.length));
  for (let i = 0; i < largo; i++) {
    for (const pila of pilas) {
      if (pila[i]) out.push(pila[i]);
    }
  }
  return out;
}

export function cuantas(dir: string): number {
  return (MAPA[dir] ?? []).length;
}

import IMGS from "@/data/imagenes.json";

const IMAGENES = IMGS as Record<string, string>;

/**
 * La foto de una actividad, un hotel o un restaurante.
 * Si no conseguimos la del lugar exacto, cae en una foto del viaje, así
 * ninguna tarjeta queda vacía. Siempre la misma para el mismo ítem.
 */
export function imagenDe(target: string, dirs: string[]): string | null {
  const propia = IMAGENES[target];
  if (propia) return `/fotos/${propia}`;

  const pool = fotosDe(dirs);
  if (!pool.length) return null;

  let h = 0;
  for (let i = 0; i < target.length; i++) h = (h * 31 + target.charCodeAt(i)) >>> 0;
  return pool[h % pool.length].src;
}

/** true cuando la foto es del lugar exacto y no del viaje en general. */
export function esPropia(target: string): boolean {
  return Boolean(IMAGENES[target]);
}
