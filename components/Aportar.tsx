"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pop from "./Pop";
import { useEstado } from "./Estado";
import { Mas } from "./Icono";
import type { TipoAporte } from "@/lib/estado";

const COPY: Record<
  TipoAporte,
  {
    boton: string;
    titulo: string;
    nombre: string;
    zona: string;
    precio: string;
    url: string;
  }
> = {
  hotel: {
    boton: "Sumar un hotel",
    titulo: "Proponer un hotel",
    nombre: "Cómo se llama",
    zona: "Barrio o playa",
    precio: "Precio de la noche para los cinco, en dólares",
    url: "Link para reservar",
  },
  airbnb: {
    boton: "Sumar un airbnb",
    titulo: "Proponer un airbnb",
    nombre: "Cómo se llama",
    zona: "Barrio o playa",
    precio: "Precio de la casa entera por noche, en dólares",
    url: "Link del aviso",
  },
  actividad: {
    boton: "Sumar algo para hacer",
    titulo: "Proponer algo para hacer",
    nombre: "Qué es",
    zona: "Dónde",
    precio: "Precio por persona, en dólares",
    url: "Link",
  },
  viaje: {
    boton: "Sumar otro viaje",
    titulo: "Proponer otro viaje",
    nombre: "A dónde",
    zona: "Las paradas",
    precio: "Precio por persona, si tenés una idea",
    url: "Link, si tenés",
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

  function cerrar() {
    limpiar();
    setAbierto(false);
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
    cerrar();
  }

  return (
    <>
      <button className="sumar" onClick={() => setAbierto(true)}>
        <Mas size={14} /> {c.boton}
      </button>

      <Modal abierto={abierto} cerrar={cerrar} titulo={c.titulo}>
        <form className="forma" onSubmit={mandar}>
          <Campo label={c.nombre} v={nombre} set={setNombre} autoFocus />
          <Campo label={c.zona} v={zona} set={setZona} />
          <Campo label={c.precio} v={precio} set={setPrecio} numero />
          <Campo label={c.url} v={url} set={setUrl} tipo="url" />

          <label className="campo">
            <span className="campo-l">Por qué</span>
            <textarea
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              rows={3}
              maxLength={600}
            />
          </label>

          <div className="forma-pie">
            <button type="submit" className="boton lleno" disabled={!nombre.trim()}>
              Proponer
            </button>
            <button type="button" className="boton" onClick={cerrar}>
              Cerrar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

function Campo({
  label,
  v,
  set,
  numero,
  tipo,
  autoFocus,
}: {
  label: string;
  v: string;
  set: (s: string) => void;
  numero?: boolean;
  tipo?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="campo">
      <span className="campo-l">{label}</span>
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

/** Lo que fue proponiendo el grupo, con el mismo botón que lo curado. */
export function ListaAportes({
  tipo,
  viaje = "",
  parada = "",
  unidad = "por persona por noche",
}: {
  tipo: TipoAporte;
  viaje?: string;
  parada?: string;
  unidad?: string;
}) {
  const { aportesDe } = useEstado();
  const lista = aportesDe({ tipo, viaje, parada });
  if (!lista.length) return null;

  return (
    <>
      {lista.map((a) => (
        <Pop
          key={a.id}
          clase="chip chip-propuesto"
          d={{
            titulo: a.nombre,
            target: `aporte:${a.id}`,
            linea: a.detalle,
            precio: a.precio,
            unidad,
            url: a.url,
            extra: [a.zona, `Lo propuso ${a.quien}`].filter(Boolean) as string[],
          }}
        >
          {a.nombre}
        </Pop>
      ))}
    </>
  );
}
