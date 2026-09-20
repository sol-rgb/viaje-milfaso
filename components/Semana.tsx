"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { WeekId } from "@/lib/types";
import { SEMANAS } from "@/data/semanas";

const KEY = "milfaso.semana";

type Ctx = { semana: WeekId; setSemana: (w: WeekId) => void };
const SemanaCtx = createContext<Ctx | null>(null);

export function SemanaProvider({ children }: { children: React.ReactNode }) {
  const [semana, set] = useState<WeekId>("w1");

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as WeekId | null;
      if (v && SEMANAS.some((s) => s.id === v)) set(v);
    } catch {
      /* modo privado */
    }
  }, []);

  function setSemana(w: WeekId) {
    set(w);
    try {
      localStorage.setItem(KEY, w);
    } catch {
      /* modo privado */
    }
  }

  const val = useMemo(() => ({ semana, setSemana }), [semana]);
  return <SemanaCtx.Provider value={val}>{children}</SemanaCtx.Provider>;
}

export function useSemana() {
  const c = useContext(SemanaCtx);
  if (!c) throw new Error("useSemana fuera del provider");
  return c;
}

export default function Picker() {
  const { semana, setSemana } = useSemana();

  return (
    <div className="fechas">
      <div className="fechas-b" role="group" aria-label="semana">
        {SEMANAS.map((s) => {
          const on = s.id === semana;
          return (
            <button
              key={s.id}
              className={on ? "fecha on" : "fecha"}
              onClick={() => setSemana(s.id)}
              aria-pressed={on}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
