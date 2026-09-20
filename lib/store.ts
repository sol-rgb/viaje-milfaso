import { sanear, VACIO, type Estado } from "./estado";

/**
 * Estado compartido: notas, votos y aportes.
 *
 * Tres modos, en este orden:
 *   1. Supabase, si hay SUPABASE_URL y SUPABASE_KEY.
 *   2. Vercel Blob, si hay BLOB_READ_WRITE_TOKEN.
 *   3. Memoria del server, que se borra al reiniciar. El navegador guarda
 *      una copia local, así nada se ve roto mientras no haya base.
 *
 * Con cualquiera de los dos primeros, todos ven lo de todos.
 */

const RUTA = "milfaso/estado.json";
const TABLA = "milfaso";
const FILA = "estado";

const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
const sbUrl = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const sbKey = process.env.SUPABASE_KEY;

const conSupabase = Boolean(sbUrl && sbKey);
const conBlob = Boolean(blobToken);

export const compartido = conSupabase || conBlob;
export const backend = conSupabase ? "supabase" : conBlob ? "blob" : "memoria";

let memoria: Estado = VACIO;

/* ---------------------------------------------------------- supabase */

const sbHeaders = () => ({
  apikey: sbKey as string,
  authorization: `Bearer ${sbKey}`,
  "content-type": "application/json",
});

async function leerSupabase(): Promise<Estado> {
  const r = await fetch(
    `${sbUrl}/rest/v1/${TABLA}?id=eq.${FILA}&select=estado`,
    { headers: sbHeaders(), cache: "no-store" }
  );
  if (!r.ok) throw new Error(`supabase ${r.status}`);
  const filas = await r.json();
  return sanear(filas?.[0]?.estado);
}

async function escribirSupabase(e: Estado): Promise<void> {
  const r = await fetch(`${sbUrl}/rest/v1/${TABLA}`, {
    method: "POST",
    headers: { ...sbHeaders(), prefer: "resolution=merge-duplicates" },
    body: JSON.stringify([{ id: FILA, estado: e }]),
  });
  if (!r.ok) throw new Error(`supabase ${r.status}: ${await r.text()}`);
}

/* ---------------------------------------------------------- blob */

async function leerBlob(): Promise<Estado> {
  const { list } = await import("@vercel/blob");
  const { blobs } = await list({ prefix: RUTA, token: blobToken });
  const url = blobs.find((b) => b.pathname === RUTA)?.url;
  if (!url) return VACIO;
  const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) return VACIO;
  return sanear(await res.json());
}

async function escribirBlob(e: Estado): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(RUTA, JSON.stringify(e), {
    access: "public",
    token: blobToken,
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

/* ---------------------------------------------------------- api */

export async function leer(): Promise<Estado> {
  try {
    if (conSupabase) return await leerSupabase();
    if (conBlob) return await leerBlob();
  } catch (e) {
    console.error("no se pudo leer el estado:", e);
    return VACIO;
  }
  return memoria;
}

export async function escribir(e: Estado): Promise<void> {
  try {
    if (conSupabase) return await escribirSupabase(e);
    if (conBlob) return await escribirBlob(e);
  } catch (err) {
    console.error("no se pudo guardar el estado:", err);
    return;
  }
  memoria = e;
}
