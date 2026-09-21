"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Izquierda } from "./Icono";
import Gate, { useQuien } from "./Gate";
import { EstadoProvider } from "./Estado";
import { SemanaProvider } from "./Semana";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { quien, setQuien, listo } = useQuien();

  if (!listo) return <div className="booting" />;
  if (!quien) return <Gate onEntrar={setQuien} />;

  return (
    <EstadoProvider quien={quien}>
      <SemanaProvider>
        <Barra />
        {children}
      </SemanaProvider>
    </EstadoProvider>
  );
}

function Barra() {
  const ruta = usePathname() ?? "/";
  const dentro = ruta !== "/";
  // desde /viaje/peru/hospedaje se vuelve a /viaje/peru, no al home
  const arriba = dentro ? ruta.split("/").slice(0, -1).join("/") || "/" : "/";

  return (
    <header className="barra wrap">
      <div className="barra-l">
        {dentro && (
          <Link href={arriba} className="volver" aria-label="Volver">
            <Izquierda size={17} />
          </Link>
        )}
        <Link href="/" className="marca">
          Viaje Milfaso
        </Link>
      </div>
    </header>
  );
}
