"use client";

import { useState } from "react";
import Modal from "./Modal";
import Voto from "./Voto";
import Hilo from "./Notas";
import { useEstado } from "./Estado";
import { plata } from "@/lib/precio";

export type Detalle = {
  titulo: string;
  target: string;
  linea?: string;
  precio?: number;
  unidad?: string;
  url?: string;
  extra?: string;
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
              <em className="por">sin precio</em>
            )}
          </span>
          <Voto target={d.target} />
        </div>

        {d.extra && <p className="pop-extra label">{d.extra}</p>}

        {d.url && (
          <p className="enlaces">
            <a href={d.url} target="_blank" rel="noopener noreferrer nofollow">
              abrir <em className="ext">↗</em>
            </a>
          </p>
        )}

        <Hilo target={d.target} etiqueta="nota" />
      </Modal>
    </>
  );
}
