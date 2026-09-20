"use client";

import { useEstado } from "./Estado";

/** Pulgares. Tocar el mismo dos veces lo saca. */
export default function Voto({
  target,
  chico = false,
}: {
  target: string;
  chico?: boolean;
}) {
  const { marcadorDe, votar } = useEstado();
  const { si, no, mio } = marcadorDe(target);

  return (
    <span className={chico ? "voto voto-c" : "voto"}>
      <button
        className={mio === 1 ? "voto-b si on" : "voto-b si"}
        onClick={() => votar(target, 1)}
        aria-pressed={mio === 1}
        aria-label="me gusta"
        title="me gusta"
      >
        <Pulgar />
        {si > 0 && <span className="voto-n">{si}</span>}
      </button>

      <button
        className={mio === -1 ? "voto-b no on" : "voto-b no"}
        onClick={() => votar(target, -1)}
        aria-pressed={mio === -1}
        aria-label="no me gusta"
        title="no me gusta"
      >
        <Pulgar abajo />
        {no > 0 && <span className="voto-n">{no}</span>}
      </button>
    </span>
  );
}

function Pulgar({ abajo = false }: { abajo?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={abajo ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M7 22H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3" />
      <path d="M7 11l4.2-8.1a1.6 1.6 0 0 1 3 .7V9h4.6a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.3 20H7" />
    </svg>
  );
}

/** Resumen de votos, para la tarjeta del home. */
export function Marcador({ target }: { target: string }) {
  const { marcadorDe } = useEstado();
  const { si, no } = marcadorDe(target);
  if (!si && !no) return null;
  return (
    <span className="marcador label">
      {si > 0 && <span>+{si}</span>}
      {no > 0 && <span className="marcador-no">−{no}</span>}
    </span>
  );
}
