"use client";

import Link from "next/link";
import Photo from "./Photo";
import { Salida } from "./Icono";
import { useSemana } from "./Semana";
import { precio, plata } from "@/lib/precio";
import type { Trip } from "@/lib/types";

/** Una tarjeta por viaje: la foto, el precio arriba y el nombre abajo. */
export default function TripCard({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const p = precio(t, semana);

  return (
    <Link href={`/viaje/${t.slug}`} className="tarjeta-link">
      <Photo dir={t.heroDir} n={1} alt="" className="tarjeta-img" />
      <span className="tarjeta-scrim" aria-hidden />

      <span className="tarjeta-top">
        <span className="tarjeta-flecha">
          <Salida size={16} />
        </span>
        <span className="tarjeta-precio">
          <span className="tarjeta-cur">us$</span>
          {plata(p.total)}
        </span>
      </span>

      <span className="tarjeta-pie">
        <span className="tarjeta-nombre">{t.name}</span>
      </span>
    </Link>
  );
}
