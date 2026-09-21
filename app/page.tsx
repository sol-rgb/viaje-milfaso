"use client";

import Shell from "@/components/Shell";
import TripCard from "@/components/TripCard";
import Picker from "@/components/Semana";
import Aportar from "@/components/Aportar";
import { VIAJES } from "@/data/viajes";

export default function Page() {
  const visibles = VIAJES.filter((t) => !t.oculto);

  return (
    <Shell>
      <main className="casa wrap max">
        <h1 className="oculto">Viaje Milfaso: el viaje de marzo 2027</h1>

        <Picker />

        <section className={visibles.length === 1 ? "tarjetas sola" : "tarjetas"}>
          {visibles.map((t) => (
            <TripCard key={t.slug} t={t} />
          ))}
        </section>

        <footer className="casa-pie">
          <Aportar tipo="viaje" />
        </footer>
      </main>
    </Shell>
  );
}
