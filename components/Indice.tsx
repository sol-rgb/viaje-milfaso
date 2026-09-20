"use client";

import Link from "next/link";
import Voto from "./Voto";
import { Contador } from "./Notas";
import { useSemana } from "./Semana";
import { precio, plata, noches } from "@/lib/precio";
import type { Trip } from "@/lib/types";

/** El índice: una línea por viaje. Es la navegación principal. */
export default function Indice({
  viajes,
  foco,
  onFoco,
}: {
  viajes: Trip[];
  foco: string | null;
  onFoco: (slug: string | null) => void;
}) {
  return (
    <nav className="indice" aria-label="viajes">
      {viajes.map((t, i) => (
        <Fila
          key={t.slug}
          t={t}
          i={i}
          activa={foco === t.slug}
          apagada={foco !== null && foco !== t.slug}
          onFoco={onFoco}
        />
      ))}
    </nav>
  );
}

function Fila({
  t,
  i,
  activa,
  apagada,
  onFoco,
}: {
  t: Trip;
  i: number;
  activa: boolean;
  apagada: boolean;
  onFoco: (slug: string | null) => void;
}) {
  const { semana } = useSemana();
  const p = precio(t, semana);

  return (
    <div
      className={[
        "indice-fila",
        activa ? "activa" : "",
        apagada ? "apagada" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => onFoco(t.slug)}
      onMouseLeave={() => onFoco(null)}
    >
      <Link
        href={`/viaje/${t.slug}`}
        className="indice-link"
        onFocus={() => onFoco(t.slug)}
        onBlur={() => onFoco(null)}
      >
        <span className="idx">{String(i + 1).padStart(2, "0")}</span>
        <span className="indice-n">{t.name}</span>
        <span className="label indice-lugar">{t.place}</span>
        <span className="label indice-noches">{noches(t)} noches</span>
        <span className="indice-num">us$ {plata(p.total)}</span>
        <span className="indice-flecha" aria-hidden>
          ↗
        </span>
      </Link>
      <span className="indice-acc">
        <Voto target={`viaje:${t.slug}`} chico />
        <Contador target={`viaje:${t.slug}`} />
      </span>
    </div>
  );
}
