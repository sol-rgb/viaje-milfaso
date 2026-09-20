"use client";

import Link from "next/link";
import Photo from "./Photo";
import Voto from "./Voto";
import { useSemana } from "./Semana";
import { precio, plata, noches } from "@/lib/precio";
import type { Trip } from "@/lib/types";

/** Una tarjeta por viaje. El nombre siempre; el resto al pasar el mouse. */
export default function TripCard({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const p = precio(t, semana);

  return (
    <article className="tarjeta">
      <Link href={`/viaje/${t.slug}`} className="tarjeta-link">
        <Photo dir={t.heroDir} n={1} alt="" className="tarjeta-img" />
        <span className="tarjeta-scrim" aria-hidden />

        <span className="tarjeta-top">
          <span className="tarjeta-flecha" aria-hidden>
            ↗
          </span>
        </span>

        <span className="tarjeta-pie">
          <span className="tarjeta-nombre">{t.name}</span>
          <span className="tarjeta-dato">
            us$ {plata(p.total)} · {noches(t)} noches
          </span>
        </span>
      </Link>

      <span className="tarjeta-voto">
        <Voto target={`viaje:${t.slug}`} chico />
      </span>
    </article>
  );
}
