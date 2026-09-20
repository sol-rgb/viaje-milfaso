"use client";

import { useState } from "react";
import Modal from "./Modal";
import Voto from "./Voto";
import Hilo from "./Notas";
import { useEstado } from "./Estado";
import { plata } from "@/lib/precio";
import { imagenDe, esPropia } from "@/lib/fotos";
import { Salida } from "./Icono";

export type Detalle = {
  titulo: string;
  target: string;
  /** carpetas de fotos del viaje, para cuando no hay foto del lugar exacto */
  dirs?: string[];
  linea?: string;
  precio?: number;
  unidad?: string;
  url?: string;
  extra?: string[];
};

/**
 * Cualquier cosa que se pueda abrir: una actividad, un restaurante, un hotel.
 * Se ve el nombre; al tocarlo sale la tarjeta con el link, los pulgares,
 * el precio y una línea.
 */
export default function Pop({
  d,
  children,
  clase = "chip",
}: {
  d: Detalle;
  children: React.ReactNode;
  clase?: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const { marcadorDe, notasDe } = useEstado();
  const foto = d.dirs ? imagenDe(d.target, d.dirs) : null;
  const propia = esPropia(d.target);
  const { si, no } = marcadorDe(d.target);
  const notas = notasDe(d.target).length;

  return (
    <>
      <button className={clase} onClick={() => setAbierto(true)}>
        <span className="chip-t">{children}</span>
        {(si > 0 || no > 0 || notas > 0) && (
          <span className="chip-marca">
            {si > 0 && <span>+{si}</span>}
            {no > 0 && <span className="chip-no">−{no}</span>}
            {notas > 0 && <span className="chip-nota">{notas}</span>}
          </span>
        )}
      </button>

      <Modal abierto={abierto} cerrar={() => setAbierto(false)} titulo={d.titulo}>
        {foto && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={foto}
            alt=""
            className={propia ? "pop-foto" : "pop-foto pop-foto-suelta"}
            loading="lazy"
          />
        )}

        {d.linea && <p className="pop-linea">{d.linea}</p>}

        <div className="pop-fila">
          <span className="pop-precio">
            {d.precio ? (
              <>
                <span className="pop-cur">us$</span>
                {plata(d.precio)}
                {d.unidad && <em className="por">{d.unidad}</em>}
              </>
            ) : (
              <em className="por">Sin precio</em>
            )}
          </span>
          <Voto target={d.target} />
        </div>

        {d.extra && d.extra.length > 0 && (
          <ul className="pop-datos">
            {d.extra.map((x, i) => (
              <li key={i} className="label">
                {x}
              </li>
            ))}
          </ul>
        )}

        {d.url && (
          <p className="enlaces">
            <a href={d.url} target="_blank" rel="noopener noreferrer nofollow">
              Abrir <Salida size={13} className="ext" />
            </a>
          </p>
        )}

        <Hilo target={d.target} etiqueta="nota" />
      </Modal>
    </>
  );
}
