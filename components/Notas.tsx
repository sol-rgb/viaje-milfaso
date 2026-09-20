"use client";

import { useState } from "react";
import { useEstado } from "./Estado";

/** Hilo de notas sobre cualquier cosa: un hotel, un día, una fecha. */
export default function Hilo({
  target,
  etiqueta = "Nota",
}: {
  target: string;
  etiqueta?: string;
}) {
  const { notasDe, agregarNota, borrar, quien } = useEstado();
  const notas = notasDe(target);
  const [abierto, setAbierto] = useState(false);
  const [texto, setTexto] = useState("");

  async function mandar(e: React.FormEvent) {
    e.preventDefault();
    if (!texto.trim()) return;
    await agregarNota(target, texto);
    setTexto("");
  }

  return (
    <div className="hilo">
      {notas.length > 0 && (
        <ul className="hilo-lista">
          {notas.map((n) => (
            <li key={n.id} className="hilo-nota">
              <span className="hilo-quien">{n.quien}</span>
              <span className="hilo-texto">{n.texto}</span>
              {n.quien === quien && (
                <button
                  className="hilo-x"
                  onClick={() => borrar("nota", n.id)}
                  aria-label="borrar nota"
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {abierto ? (
        <form onSubmit={mandar} className="hilo-form">
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="…"
            rows={2}
            maxLength={600}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) mandar(e);
            }}
          />
          <div className="hilo-acciones">
            <button type="submit" className="hilo-ok" disabled={!texto.trim()}>
              Guardar
            </button>
            <button
              type="button"
              className="hilo-cancel"
              onClick={() => {
                setAbierto(false);
                setTexto("");
              }}
            >
              Cerrar
            </button>
          </div>
        </form>
      ) : (
        <button className="hilo-abrir" onClick={() => setAbierto(true)}>
          <span aria-hidden>+</span> {notas.length ? "Agregar" : etiqueta}
        </button>
      )}
    </div>
  );
}

/** Solo el contador de notas, para poner al costado de un ítem. */
export function Contador({ target }: { target: string }) {
  const { notasDe } = useEstado();
  const n = notasDe(target).length;
  if (!n) return null;
  return <span className="contador">{n}</span>;
}
