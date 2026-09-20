"use client";

import Link from "next/link";
import Photo from "./Photo";
import { useSemana } from "./Semana";
import { precio, plata } from "@/lib/precio";
import type { Trip } from "@/lib/types";

/** Una ficha de la tira: nombre, foto, precio. */
export default function TripCard({
  t,
  i,
  apagada,
  onFoco,
}: {
  t: Trip;
  i: number;
  apagada: boolean;
  onFoco: (slug: string | null) => void;
}) {
  const { semana } = useSemana();
  const p = precio(t, semana);

  return (
    <Link
      href={`/viaje/${t.slug}`}
      className={apagada ? "ficha apagada" : "ficha"}
      onMouseEnter={() => onFoco(t.slug)}
      onMouseLeave={() => onFoco(null)}
      onFocus={() => onFoco(t.slug)}
      onBlur={() => onFoco(null)}
    >
      <span className="ficha-cab">
        <span className="idx">{String(i + 1).padStart(2, "0")}</span>
        <span className="ficha-n">{t.name}</span>
      </span>

      <span className="ficha-marco">
        <Photo dir={t.heroDir} n={1} alt="" className="ficha-img" />
      </span>

      <span className="ficha-pie">
        <span className="ficha-precio">
          <span className="ficha-cur">us$</span>
          {plata(p.total)}
        </span>
      </span>
    </Link>
  );
}
