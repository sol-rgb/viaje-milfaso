"use client";

import { useCallback, useEffect, useState } from "react";
import { Izquierda, Derecha, Cruz } from "./Icono";

/** La galería de un alojamiento, adentro de su ficha. */
export default function FotosFicha({ fotos, alt }: { fotos: string[]; alt: string }) {
  const [abierta, setAbierta] = useState<number | null>(null);

  const mover = useCallback(
    (paso: number) =>
      setAbierta((i) => (i === null ? null : (i + paso + fotos.length) % fotos.length)),
    [fotos.length]
  );

  useEffect(() => {
    if (abierta === null) return;
    function tecla(e: KeyboardEvent) {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    }
    document.addEventListener("keydown", tecla);
    return () => document.removeEventListener("keydown", tecla);
  }, [abierta, mover]);

  if (!fotos.length) return null;

  if (fotos.length === 1) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={fotos[0]} alt="" className="pop-foto" loading="lazy" />;
  }

  return (
    <>
      <div className="ficha-tira">
        {fotos.map((f, i) => (
          <button key={f} className="ficha-tira-b" onClick={() => setAbierta(i)} aria-label={`${alt}, foto ${i + 1}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={f} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {abierta !== null && (
        <div className="lupa" onClick={() => setAbierta(null)} role="dialog" aria-modal="true">
          <button className="lupa-x" onClick={() => setAbierta(null)} aria-label="Cerrar">
            <Cruz size={24} />
          </button>
          <button
            className="lupa-flecha izq"
            onClick={(e) => { e.stopPropagation(); mover(-1); }}
            aria-label="Anterior"
          >
            <Izquierda size={22} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fotos[abierta]} alt={alt} className="lupa-img" onClick={(e) => e.stopPropagation()} />
          <button
            className="lupa-flecha der"
            onClick={(e) => { e.stopPropagation(); mover(1); }}
            aria-label="Siguiente"
          >
            <Derecha size={22} />
          </button>
          <span className="lupa-n">{abierta + 1} / {fotos.length}</span>
        </div>
      )}
    </>
  );
}
