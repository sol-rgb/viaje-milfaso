"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  VACIO,
  marcador,
  type Aporte,
  type Estado,
  type Nota,
  type TipoAporte,
  type Voto,
} from "@/lib/estado";

const LOCAL = "milfaso.estado";

type Ctx = {
  quien: string;
  estado: Estado;
  compartido: boolean;
  notasDe: (target: string) => Nota[];
  marcadorDe: (target: string) => { si: number; no: number; mio: 1 | -1 | 0 };
  aportesDe: (filtro: Partial<Pick<Aporte, "tipo" | "viaje" | "parada">>) => Aporte[];
  agregarNota: (target: string, texto: string) => Promise<void>;
  votar: (target: string, v: 1 | -1) => Promise<void>;
  aportar: (a: Omit<Aporte, "id" | "quien" | "ts">) => Promise<void>;
  borrar: (kind: "nota" | "aporte", id: string) => Promise<void>;
};

const C = createContext<Ctx | null>(null);

function leerLocal(): Estado {
  try {
    const raw = localStorage.getItem(LOCAL);
    if (!raw) return VACIO;
    const v = JSON.parse(raw);
    return {
      notas: Array.isArray(v?.notas) ? v.notas : [],
      votos: Array.isArray(v?.votos) ? v.votos : [],
      aportes: Array.isArray(v?.aportes) ? v.aportes : [],
    };
  } catch {
    return VACIO;
  }
}

function guardarLocal(e: Estado) {
  try {
    localStorage.setItem(LOCAL, JSON.stringify(e));
  } catch {
    /* modo privado */
  }
}

function unir<T extends { id: string }>(a: T[], b: T[]): T[] {
  const m = new Map<string, T>();
  for (const x of [...a, ...b]) m.set(x.id, x);
  return [...m.values()];
}

/** El server manda: un voto por persona y por target. */
function normalizarVotos(votos: Voto[]): Voto[] {
  const m = new Map<string, Voto>();
  for (const v of [...votos].sort((a, b) => a.ts - b.ts)) {
    m.set(`${v.target}\u0000${v.quien}`, v);
  }
  return [...m.values()];
}

export function EstadoProvider({
  quien,
  children,
}: {
  quien: string;
  children: React.ReactNode;
}) {
  const [estado, setEstado] = useState<Estado>(VACIO);
  const [compartido, setCompartido] = useState(false);

  useEffect(() => {
    setEstado(leerLocal());

    let vivo = true;
    fetch("/api/estado")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!vivo || !d) return;
        setCompartido(Boolean(d.compartido));
        setEstado((prev) => {
          const u: Estado = {
            notas: unir(prev.notas, d.notas ?? []).sort((a, b) => a.ts - b.ts),
            votos: normalizarVotos(unir(prev.votos, d.votos ?? [])),
            aportes: unir(prev.aportes, d.aportes ?? []).sort((a, b) => a.ts - b.ts),
          };
          guardarLocal(u);
          return u;
        });
      })
      .catch(() => {
        /* offline: queda la copia local */
      });

    return () => {
      vivo = false;
    };
  }, []);

  const aplicar = useCallback((f: (e: Estado) => Estado) => {
    setEstado((prev) => {
      const u = f(prev);
      guardarLocal(u);
      return u;
    });
  }, []);

  const mandar = useCallback(async (payload: Record<string, unknown>) => {
    try {
      const r = await fetch("/api/estado", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      return r.ok ? await r.json() : null;
    } catch {
      return null;
    }
  }, []);

  const agregarNota = useCallback(
    async (target: string, texto: string) => {
      const t = texto.trim();
      if (!t) return;
      const tmp: Nota = {
        id: `tmp${Date.now().toString(36)}`,
        target,
        quien,
        texto: t,
        ts: Date.now(),
      };
      aplicar((e) => ({ ...e, notas: [...e.notas, tmp] }));

      const d = await mandar({ kind: "nota", target, quien, texto: t });
      if (d?.nota) {
        aplicar((e) => ({
          ...e,
          notas: e.notas.map((n) => (n.id === tmp.id ? d.nota : n)),
        }));
      }
    },
    [quien, aplicar, mandar]
  );

  const votar = useCallback(
    async (target: string, v: 1 | -1) => {
      const previo = estado.votos.find(
        (x) => x.target === target && x.quien === quien
      );
      const resto = estado.votos.filter(
        (x) => !(x.target === target && x.quien === quien)
      );
      const saca = previo?.v === v;

      aplicar((e) => ({
        ...e,
        votos: saca
          ? resto
          : [
              ...resto,
              {
                id: `tmp${Date.now().toString(36)}`,
                target,
                quien,
                v,
                ts: Date.now(),
              },
            ],
      }));

      const d = await mandar({ kind: "voto", target, quien, v });
      if (d && "voto" in d) {
        aplicar((e) => ({
          ...e,
          votos: d.voto
            ? [
                ...e.votos.filter(
                  (x) => !(x.target === target && x.quien === quien)
                ),
                d.voto,
              ]
            : e.votos.filter((x) => !(x.target === target && x.quien === quien)),
        }));
      }
    },
    [estado.votos, quien, aplicar, mandar]
  );

  const aportar = useCallback(
    async (a: Omit<Aporte, "id" | "quien" | "ts">) => {
      const tmp: Aporte = {
        ...a,
        id: `tmp${Date.now().toString(36)}`,
        quien,
        ts: Date.now(),
      };
      aplicar((e) => ({ ...e, aportes: [...e.aportes, tmp] }));

      const d = await mandar({ kind: "aporte", quien, ...a });
      if (d?.aporte) {
        aplicar((e) => ({
          ...e,
          aportes: e.aportes.map((x) => (x.id === tmp.id ? d.aporte : x)),
        }));
      }
    },
    [quien, aplicar, mandar]
  );

  const borrar = useCallback(
    async (kind: "nota" | "aporte", id: string) => {
      aplicar((e) =>
        kind === "nota"
          ? { ...e, notas: e.notas.filter((n) => n.id !== id) }
          : { ...e, aportes: e.aportes.filter((a) => a.id !== id) }
      );
      try {
        await fetch(
          `/api/estado?kind=${kind}&id=${encodeURIComponent(id)}&quien=${encodeURIComponent(quien)}`,
          { method: "DELETE" }
        );
      } catch {
        /* ya salió de la vista */
      }
    },
    [quien, aplicar]
  );

  const notasDe = useCallback(
    (target: string) => estado.notas.filter((n) => n.target === target),
    [estado.notas]
  );

  const marcadorDe = useCallback(
    (target: string) => marcador(estado.votos, target, quien),
    [estado.votos, quien]
  );

  const aportesDe = useCallback(
    (f: Partial<Pick<Aporte, "tipo" | "viaje" | "parada">>) =>
      estado.aportes.filter(
        (a) =>
          (f.tipo === undefined || a.tipo === f.tipo) &&
          (f.viaje === undefined || a.viaje === f.viaje) &&
          (f.parada === undefined || a.parada === f.parada)
      ),
    [estado.aportes]
  );

  const val = useMemo(
    () => ({
      quien,
      estado,
      compartido,
      notasDe,
      marcadorDe,
      aportesDe,
      agregarNota,
      votar,
      aportar,
      borrar,
    }),
    [
      quien,
      estado,
      compartido,
      notasDe,
      marcadorDe,
      aportesDe,
      agregarNota,
      votar,
      aportar,
      borrar,
    ]
  );

  return <C.Provider value={val}>{children}</C.Provider>;
}

export function useEstado() {
  const c = useContext(C);
  if (!c) throw new Error("useEstado fuera del provider");
  return c;
}

export type { TipoAporte };
