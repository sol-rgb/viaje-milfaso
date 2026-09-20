"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fotosDe } from "@/lib/fotos";
import { Izquierda, Derecha, Cruz } from "./Icono";

/**
 * La tira de fotos de arriba. Junta las fotos de las dos paradas,
 * intercaladas, se arrastra de costado y se abre en grande.
 */
export default function Galeria({ dirs, alt }: { dirs: string[]; alt: string }) {
  const fotos = fotosDe(dirs);
  const tira = useRef<HTMLDivElement>(null);
  const [abierta, setAbierta] = useState<number | null>(null);
  const [puede, setPuede] = useState({ izq: false, der: false });

  const medir = useCallback(() => {
    const el = tira.current;
    if (!el) return;
    setPuede({
      izq: el.scrollLeft > 8,
      der: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    medir();
    const el = tira.current;
    if (!el) return;
    el.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      el.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [medir]);

  function correr(paso: number) {
    const el = tira.current;
    if (!el) return;
    el.scrollBy({ left: paso * el.clientWidth * 0.8, behavior: "smooth" });
  }

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

  return (
    <>
      <div className="galeria-marco">
        <div className="galeria" ref={tira}>
          {fotos.map((f, i) => (
            <button
              key={f.src}
              className="galeria-b"
              onClick={() => setAbierta(i)}
              aria-label={`${alt}, foto ${i + 1} de ${fotos.length}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt="" className="galeria-img" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>

        {puede.izq && (
          <button className="galeria-flecha izq" onClick={() => correr(-1)} aria-label="Ver anteriores">
            <Izquierda size={16} />
          </button>
        )}
        {puede.der && (
          <button className="galeria-flecha der" onClick={() => correr(1)} aria-label="Ver siguientes">
            <Derecha size={16} />
          </button>
        )}
      </div>

      {abierta !== null && (
        <div className="lupa" onClick={() => setAbierta(null)} role="dialog" aria-modal="true">
          <button className="lupa-x" onClick={() => setAbierta(null)} aria-label="Cerrar">
            <Cruz size={24} />
          </button>
          <button
            className="lupa-flecha izq"
            onClick={(e) => {
              e.stopPropagation();
              mover(-1);
            }}
            aria-label="Anterior"
          >
            <Izquierda size={22} />
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
            aria-label="Siguiente"
          >
            <Derecha size={22} />
          </button>

          <span className="lupa-n">
            {abierta + 1} / {fotos.length}
          </span>
        </div>
      )}
    </>
  );
}
