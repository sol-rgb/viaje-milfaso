"use client";

import { useCallback, useEffect, useState } from "react";
import { fotosDe } from "@/lib/fotos";

/**
 * La tira de fotos de arriba. Nunca deja un hueco vacío: junta las fotos de
 * todas las paradas del viaje. Al tocar una se abre grande y se pasa con
 * las flechas.
 */
export default function Galeria({ dirs, alt }: { dirs: string[]; alt: string }) {
  const fotos = fotosDe(dirs);
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
    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = antes;
    };
  }, [abierta, mover]);

  if (!fotos.length) return null;

  const tira = fotos.slice(0, 5);

  return (
    <>
      <div className="galeria">
        {tira.map((f, i) => (
          <button
            key={f.src}
            className="galeria-b"
            onClick={() => setAbierta(i)}
            aria-label={`${alt}, foto ${i + 1} de ${fotos.length}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={f.src} alt="" className="galeria-img" loading="lazy" decoding="async" />
            {i === tira.length - 1 && fotos.length > tira.length && (
              <span className="galeria-mas">+{fotos.length - tira.length}</span>
            )}
          </button>
        ))}
      </div>

      {abierta !== null && (
        <div className="lupa" onClick={() => setAbierta(null)} role="dialog" aria-modal="true">
          <button className="lupa-x" onClick={() => setAbierta(null)} aria-label="cerrar">
            ×
          </button>

          <button
            className="lupa-flecha izq"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            aria-label="anterior"
          >
            ←
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={fotos[abierta].src}
            alt={alt}
            className="lupa-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lupa-flecha der"
            onClick={(e) => {
              e.stopPropagation();
              mover(1);
            }}
            aria-label="siguiente"
          >
            →
          </button>

          <span className="lupa-n">
            {abierta + 1} / {fotos.length}
          </span>
        </div>
      )}
    </>
  );
}
