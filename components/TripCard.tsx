"use client";

import Link from "next/link";
import { useState } from "react";
import Photo from "./Photo";
import { Contador } from "./Notas";
import Voto from "./Voto";
import { useSemana } from "./Semana";
import { precio, plata, noches } from "@/lib/precio";
import type { Trip } from "@/lib/types";

export default function TripCard({ t, i }: { t: Trip; i: number }) {
  const { semana } = useSemana();
  const [on, setOn] = useState(false);
  const p = precio(t, semana);

  return (
    <Link
      href={`/viaje/${t.slug}`}
      className={on ? "card on" : "card"}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      onFocus={() => setOn(true)}
      onBlur={() => setOn(false)}
      style={{ ["--tint" as string]: t.tint, ["--accent" as string]: t.accent }}
    >
      <div className="card-photo">
        <Photo dir={t.heroDir} n={1} tint={t.tint} alt="" className="card-img" />
        <span className="card-veil" aria-hidden />
      </div>

      <div className="card-top">
        <span className="idx">n{String(i + 1).padStart(2, "0")}.</span>
        <span className="card-acc">
          <Voto target={`viaje:${t.slug}`} chico />
          <Contador target={`viaje:${t.slug}`} />
        </span>
      </div>

      <div className="card-mid">
        <h2 className="display card-name">{t.name}</h2>
        <span className="card-place label">{t.place}</span>
      </div>

      <div className="card-foot">
        <span className="card-precio">
          <span className="card-cur">us$</span> {plata(p.total)}
        </span>
        <span className="card-meta label">
          {noches(t)} noches · por persona
        </span>
      </div>

      <span className="card-line" aria-hidden />
    </Link>
  );
}
