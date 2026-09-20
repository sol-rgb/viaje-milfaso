"use client";

import { useEffect, useRef } from "react";

/** Tarjeta chica en el medio de la pantalla. Se cierra con Escape o afuera. */
export default function Modal({
  abierto,
  cerrar,
  titulo,
  children,
  ancho,
}: {
  abierto: boolean;
  cerrar: () => void;
  titulo: string;
  children: React.ReactNode;
  ancho?: "ancho";
}) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;

    function tecla(e: KeyboardEvent) {
      if (e.key === "Escape") cerrar();
    }
    document.addEventListener("keydown", tecla);

    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    caja.current?.focus();

    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = antes;
    };
  }, [abierto, cerrar]);

  if (!abierto) return null;

  return (
    <div
      className="modal-fondo"
      onClick={cerrar}
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
    >
      <div
        className={ancho ? "modal modal-ancho" : "modal"}
        ref={caja}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-cab">
          <h2 className="modal-t">{titulo}</h2>
          <button className="modal-x" onClick={cerrar} aria-label="cerrar">
            ×
          </button>
        </div>
        <div className="modal-cuerpo">{children}</div>
      </div>
    </div>
  );
}
