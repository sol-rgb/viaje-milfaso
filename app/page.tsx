"use client";

import { useState } from "react";
import Shell from "@/components/Shell";
import TripCard from "@/components/TripCard";
import Indice from "@/components/Indice";
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
  const [foco, setFoco] = useState<string | null>(null);
  const s = SEMANA_POR_ID[semana];

  return (
    <main className="casa wrap max">
      <h1 className="oculto">Viaje Milfaso: cuatro viajes para marzo 2027</h1>

      <section className="semanas">
        <Picker />
        <div className="semanas-r">
          <p className="body-s semanas-nota">{s.note}</p>
          <Hilo target={`semana:${semana}`} etiqueta="nota" />
        </div>
      </section>

      {VIAJES.length > 0 && (
        <>
          <section className="tira">
            {VIAJES.map((t, i) => (
              <TripCard
                key={t.slug}
                t={t}
                i={i}
                apagada={foco !== null && foco !== t.slug}
                onFoco={setFoco}
              />
            ))}
          </section>

          <Indice viajes={VIAJES} foco={foco} onFoco={setFoco} />
        </>
      )}

      <section className="propuestos">
        <ListaAportes tipo="viaje" unidad="/ p" />
        <Aportar tipo="viaje" />
      </section>

      <footer className="pie">
        <span className="label">Buenos Aires · eze / aep</span>
        <span className="label">por persona, en dólares</span>
      </footer>
    </main>
  );
}
