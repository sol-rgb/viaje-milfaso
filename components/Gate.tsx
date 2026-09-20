"use client";

import { useEffect, useState } from "react";

const KEY = "milfaso.quien";
const PASS = "milfaso";

export function useQuien() {
  const [quien, setQuien] = useState<string | null>(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    try {
      setQuien(localStorage.getItem(KEY));
    } catch {
      /* modo privado */
    }
    setListo(true);
  }, []);

  return { quien, setQuien, listo };
}

export default function Gate({ onEntrar }: { onEntrar: (n: string) => void }) {
  const [nombre, setNombre] = useState("");
  const [clave, setClave] = useState("");
  const [mal, setMal] = useState(false);

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    const n = nombre.trim();
    if (!n) return;
    if (clave.trim().toLowerCase() !== PASS) {
      setMal(true);
      return;
    }
    try {
      localStorage.setItem(KEY, n);
    } catch {
      /* modo privado */
    }
    onEntrar(n);
  }

  return (
    <main className="gate">
      <div className="gate-in rise">
        <p className="label" style={{ marginBottom: 28 }}>n00. &nbsp;acceso</p>
        <h1 className="display gate-h">Viaje<br />Milfaso</h1>

        <form onSubmit={entrar} className="gate-form">
          <label className="gate-field">
            <span className="label">tu nombre</span>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
              autoComplete="given-name"
              spellCheck={false}
            />
          </label>

          <label className="gate-field">
            <span className="label">clave</span>
            <input
              value={clave}
              onChange={(e) => {
                setClave(e.target.value);
                setMal(false);
              }}
              type="password"
              autoComplete="off"
            />
          </label>

          <button type="submit" className="gate-go" disabled={!nombre.trim()}>
            entrar <span aria-hidden>→</span>
          </button>
        </form>

        <p className="gate-hint label">
          {mal ? "esa no es." : "la clave es el nombre del grupo, en minúscula."}
        </p>
      </div>
    </main>
  );
}
