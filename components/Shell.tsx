"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <Barra quien={quien} salir={() => setQuien(null)} />
        {children}
      </SemanaProvider>
    </EstadoProvider>
  );
}

function Barra({ quien, salir }: { quien: string; salir: () => void }) {
  const ruta = usePathname();
  const dentro = ruta !== "/";

  return (
    <header className="barra wrap">
      <div className="barra-l">
        {dentro && (
          <Link href="/" className="volver" aria-label="volver">
            <span aria-hidden>←</span>
          </Link>
        )}
        <Link href="/" className="marca">
          Viaje Milfaso
        </Link>
      </div>
      <div className="barra-r">
        <span className="label">{quien}</span>
        <button
          className="label salir"
          onClick={() => {
            try {
              localStorage.removeItem("milfaso.quien");
            } catch {
              /* modo privado */
            }
            salir();
          }}
        >
          salir
        </button>
      </div>
    </header>
  );
}
