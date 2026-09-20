import { NextResponse } from "next/server";
import { leer, escribir, compartido } from "@/lib/store";
import {
  LIM,
  id,
  limpiar,
  numero,
  urlSegura,
  type Aporte,
  type Nota,
  type TipoAporte,
  type Voto,
} from "@/lib/estado";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TIPOS: TipoAporte[] = ["hotel", "airbnb", "actividad", "viaje"];
const sin = { "cache-control": "no-store" };

export async function GET() {
  const e = await leer();
  return NextResponse.json({ ...e, compartido }, { headers: sin });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "json invalido" }, { status: 400 });
  }

  const quien = limpiar(body.quien, LIM.quien);
  if (!quien) return NextResponse.json({ error: "falta quien" }, { status: 400 });

  const estado = await leer();

  /* ---------------------------------------------------------- nota */
  if (body.kind === "nota") {
    const target = limpiar(body.target, LIM.target);
    const texto = limpiar(body.texto, LIM.texto);
    if (!target || !texto) {
      return NextResponse.json({ error: "faltan campos" }, { status: 400 });
    }
    const nota: Nota = { id: id(), target, quien, texto, ts: Date.now() };
    estado.notas = [...estado.notas, nota].slice(-LIM.total);
    await escribir(estado);
    return NextResponse.json({ nota, compartido }, { status: 201, headers: sin });
  }

  /* ---------------------------------------------------------- voto */
  if (body.kind === "voto") {
    const target = limpiar(body.target, LIM.target);
    const v = body.v === 1 ? 1 : body.v === -1 ? -1 : 0;
    if (!target || !v) {
      return NextResponse.json({ error: "faltan campos" }, { status: 400 });
    }

    const previo = estado.votos.find(
      (x) => x.target === target && x.quien === quien
    );
    // volver a tocar el mismo pulgar lo saca
    const resto = estado.votos.filter(
      (x) => !(x.target === target && x.quien === quien)
    );

    if (previo && previo.v === v) {
      estado.votos = resto;
      await escribir(estado);
      return NextResponse.json({ voto: null, compartido }, { headers: sin });
    }

    const voto: Voto = { id: id(), target, quien, v, ts: Date.now() };
    estado.votos = [...resto, voto].slice(-LIM.total);
    await escribir(estado);
    return NextResponse.json({ voto, compartido }, { status: 201, headers: sin });
  }

  /* ---------------------------------------------------------- aporte */
  if (body.kind === "aporte") {
    const tipo = limpiar(body.tipo, 20) as TipoAporte;
    const nombre = limpiar(body.nombre, LIM.nombre);
    if (!TIPOS.includes(tipo) || !nombre) {
      return NextResponse.json({ error: "faltan campos" }, { status: 400 });
    }

    const aporte: Aporte = {
      id: id(),
      tipo,
      quien,
      ts: Date.now(),
      viaje: limpiar(body.viaje, 60),
      parada: limpiar(body.parada, 60),
      nombre,
      detalle: limpiar(body.detalle, LIM.detalle),
      zona: limpiar(body.zona, LIM.zona),
      url: urlSegura(body.url),
      precio: numero(body.precio),
    };

    estado.aportes = [...estado.aportes, aporte].slice(-LIM.total);
    await escribir(estado);
    return NextResponse.json({ aporte, compartido }, { status: 201, headers: sin });
  }

  return NextResponse.json({ error: "kind desconocido" }, { status: 400 });
}

export async function DELETE(req: Request) {
  const q = new URL(req.url).searchParams;
  const kind = q.get("kind");
  const del = q.get("id");
  const quien = q.get("quien");

  if (!kind || !del || !quien) {
    return NextResponse.json({ error: "faltan campos" }, { status: 400 });
  }

  const estado = await leer();

  // cada uno borra solo lo suyo
  const mio = <T extends { id: string; quien: string }>(xs: T[]) => {
    const x = xs.find((i) => i.id === del);
    if (!x) return { ok: true as const, xs };
    if (x.quien !== quien) return { ok: false as const, xs };
    return { ok: true as const, xs: xs.filter((i) => i.id !== del) };
  };

  if (kind === "nota") {
    const r = mio(estado.notas);
    if (!r.ok) return NextResponse.json({ error: "no es tuya" }, { status: 403 });
    estado.notas = r.xs;
  } else if (kind === "aporte") {
    const r = mio(estado.aportes);
    if (!r.ok) return NextResponse.json({ error: "no es tuyo" }, { status: 403 });
    estado.aportes = r.xs;
  } else {
    return NextResponse.json({ error: "kind desconocido" }, { status: 400 });
  }

  await escribir(estado);
  return NextResponse.json({ ok: true }, { headers: sin });
}
