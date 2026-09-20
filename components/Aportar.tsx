"use client";

import { useState } from "react";
import { useEstado } from "./Estado";
import Voto from "./Voto";
import Hilo from "./Notas";
import { plata } from "@/lib/precio";
import type { TipoAporte } from "@/lib/estado";

const COPY: Record<
  TipoAporte,
  { abrir: string; nombre: string; zona: string; precio: string; url: string }
> = {
  hotel: {
    abrir: "proponer un hotel",
    nombre: "nombre del hotel",
    zona: "barrio o playa",
    precio: "us$ la noche, las habitaciones para los 5",
    url: "link para reservar",
  },
  airbnb: {
    abrir: "proponer un airbnb",
    nombre: "cómo se llama",
    zona: "barrio o playa",
    precio: "us$ la noche, la casa entera",
    url: "link del aviso",
  },
  actividad: {
    abrir: "proponer algo para hacer",
    nombre: "qué es",
    zona: "dónde",
    precio: "us$ por persona",
    url: "link",
  },
  viaje: {
    abrir: "proponer otro viaje",
    nombre: "a dónde",
    zona: "las paradas",
    precio: "us$ por persona, si tenés idea",
    url: "link, si tenés",
  },
};

export default function Aportar({
  tipo,
  viaje = "",
  parada = "",
}: {
  tipo: TipoAporte;
  viaje?: string;
  parada?: string;
}) {
  const { aportar } = useEstado();
  const c = COPY[tipo];

  const [abierto, setAbierto] = useState(false);
  const [nombre, setNombre] = useState("");
  const [zona, setZona] = useState("");
  const [precio, setPrecio] = useState("");
  const [url, setUrl] = useState("");
  const [detalle, setDetalle] = useState("");

  function limpiar() {
    setNombre("");
    setZona("");
    setPrecio("");
    setUrl("");
    setDetalle("");
  }

  async function mandar(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim()) return;
    await aportar({
      tipo,
      viaje,
      parada,
      nombre: nombre.trim(),
      zona: zona.trim(),
      detalle: detalle.trim(),
      url: url.trim(),
      precio: Number(precio) || 0,
    });
    limpiar();
    setAbierto(false);
  }

  if (!abierto) {
    return (
      <button className="hilo-abrir aportar-abrir" onClick={() => setAbierto(true)}>
        <span aria-hidden>+</span> {c.abrir}
      </button>
    );
  }

  return (
    <form className="aportar" onSubmit={mandar}>
      <div className="aportar-campos">
        <Campo label={c.nombre} v={nombre} set={setNombre} ancho autoFocus />
        <Campo label={c.zona} v={zona} set={setZona} />
        <Campo label={c.precio} v={precio} set={setPrecio} numero />
        <Campo label={c.url} v={url} set={setUrl} ancho tipo="url" />
      </div>

      <label className="aportar-campo ancho">
        <span className="label">por qué está bueno</span>
        <textarea
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          rows={2}
          maxLength={600}
        />
      </label>

      <div className="hilo-acciones">
        <button type="submit" className="hilo-ok" disabled={!nombre.trim()}>
          proponer
        </button>
        <button
          type="button"
          className="hilo-cancel"
          onClick={() => {
            limpiar();
            setAbierto(false);
          }}
        >
          cerrar
        </button>
      </div>
    </form>
  );
}

function Campo({
  label,
  v,
  set,
  ancho,
  numero,
  tipo,
  autoFocus,
}: {
  label: string;
  v: string;
  set: (s: string) => void;
  ancho?: boolean;
  numero?: boolean;
  tipo?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className={ancho ? "aportar-campo ancho" : "aportar-campo"}>
      <span className="label">{label}</span>
      <input
        value={v}
        onChange={(e) => set(e.target.value)}
        inputMode={numero ? "numeric" : undefined}
        type={tipo ?? "text"}
        autoFocus={autoFocus}
        spellCheck={false}
        maxLength={numero ? 7 : 500}
      />
    </label>
  );
}

/** Lo que fue proponiendo el grupo, en la misma lista que lo curado. */
export function ListaAportes({
  tipo,
  viaje = "",
  parada = "",
  unidad = "/ p / noche",
}: {
  tipo: TipoAporte;
  viaje?: string;
  parada?: string;
  unidad?: string;
}) {
  const { aportesDe, borrar, quien } = useEstado();
  const lista = aportesDe({ tipo, viaje, parada });
  if (!lista.length) return null;

  return (
    <ul className="filas aportes">
      {lista.map((a, i) => (
        <Item
          key={a.id}
          i={i}
          a={a}
          unidad={unidad}
          mio={a.quien === quien}
          borrar={() => borrar("aporte", a.id)}
        />
      ))}
    </ul>
  );
}

function Item({
  a,
  i,
  unidad,
  mio,
  borrar,
}: {
  a: ReturnType<typeof useEstado>["estado"]["aportes"][number];
  i: number;
  unidad: string;
  mio: boolean;
  borrar: () => void;
}) {
  const [abierto, setAbierto] = useState(false);
  const target = `aporte:${a.id}`;

  return (
    <li className={abierto ? "fila cama aporte on" : "fila cama aporte"}>
      <button className="cama-cab" onClick={() => setAbierto(!abierto)}>
        <span className="idx fila-i">+{String(i + 1).padStart(2, "0")}</span>
        <span className="fila-n">{a.nombre}</span>
        <span className="fila-d label">
          {[a.zona, `propuso ${a.quien}`].filter(Boolean).join(" · ")}
        </span>
        <span className="fila-p">
          {a.precio ? (
            <>
              {plata(a.precio)}
              <em className="por">{unidad}</em>
            </>
          ) : (
            <em className="por">sin precio</em>
          )}
        </span>
        <Voto target={target} chico />
        <span className="fila-mas" aria-hidden>
          {abierto ? "−" : "+"}
        </span>
      </button>

      {abierto && (
        <div className="cama-cuerpo">
          {a.detalle && <p className="body-s">{a.detalle}</p>}
          {a.url && (
            <p className="enlaces">
              <a href={a.url} target="_blank" rel="noopener noreferrer nofollow">
                abrir <em className="ext">↗</em>
              </a>
            </p>
          )}
          <Hilo target={target} etiqueta="anotar algo" />
          {mio && (
            <button className="hilo-cancel borrar-aporte" onClick={borrar}>
              borrar lo que propuse
            </button>
          )}
        </div>
      )}
    </li>
  );
}
