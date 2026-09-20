import { sanear, VACIO, type Estado } from "./estado";

/**
 * Estado compartido: notas, votos y aportes.
 *
 * Con BLOB_READ_WRITE_TOKEN usa Vercel Blob y todos ven lo de todos.
 * Sin token guarda en memoria del server, que se borra al reiniciar; el
 * cliente igual guarda una copia local, así que nada se ve roto mientras
 * el storage no esté enchufado.
 */

const RUTA = "milfaso/estado.json";
const token = process.env.BLOB_READ_WRITE_TOKEN;

let memoria: Estado = VACIO;

export const compartido = Boolean(token);

export async function leer(): Promise<Estado> {
  if (!token) return memoria;
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: RUTA, token });
    const url = blobs.find((b) => b.pathname === RUTA)?.url;
    if (!url) return VACIO;
    const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return VACIO;
    return sanear(await res.json());
  } catch {
    return VACIO;
  }
}

export async function escribir(e: Estado): Promise<void> {
  if (!token) {
    memoria = e;
    return;
  }
  const { put } = await import("@vercel/blob");
  await put(RUTA, JSON.stringify(e), {
    access: "public",
    token,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
