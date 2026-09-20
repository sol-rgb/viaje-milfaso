"use client";

import Shell from "@/components/Shell";
import Drift from "@/components/Drift";
import TripCard from "@/components/TripCard";
import Picker, { useSemana } from "@/components/Semana";
import Hilo from "@/components/Notas";
import Aportar, { ListaAportes } from "@/components/Aportar";
import { VIAJES } from "@/data/viajes";
import { SEMANA_POR_ID } from "@/data/semanas";

export default function Page() {
  return (
    <Shell>
      <Casa />
    </Shell>
  );
}

function Casa() {
  const { semana } = useSemana();
  const s = SEMANA_POR_ID[semana];

  return (
    <main className="casa">
      <Drift />

      <section className="casa-semana wrap max">
        <div className="casa-semana-l">
          <span className="label">semana</span>
          <Picker />
        </div>
        <div className="casa-semana-r">
          <p className="casa-nota body-s">{s.note}</p>
          <Hilo target={`semana:${semana}`} etiqueta="anotar algo de las fechas" />
        </div>
      </section>

      <hr className="rule" />

      <section className="grid wrap max">
        {VIAJES.map((t, i) => (
          <TripCard key={t.slug} t={t} i={i} />
        ))}
      </section>

      <section className="propuestos wrap max">
        <div className="sec-cab">
          <span className="idx">n05.</span>
          <h2 className="sec-t">lo que propusieron ustedes</h2>
        </div>
        <div className="sec-cuerpo">
          <ListaAportes tipo="viaje" unidad="/ p" />
          <Aportar tipo="viaje" />
        </div>
      </section>

      <footer className="pie wrap max">
        <span className="label">salimos de Buenos Aires · eze / aep</span>
        <span className="label">precios por persona, en dólares</span>
      </footer>
    </main>
  );
}
