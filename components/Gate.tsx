"use client";

import { useEffect, useState } from "react";

const KEY = "milfaso.quien";

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

/**
 * No hay clave: el sitio es abierto. Solo pide el nombre, y es para firmar
 * lo que cada uno vota y comenta.
 */
export default function Gate({ onEntrar }: { onEntrar: (n: string) => void }) {
  const [nombre, setNombre] = useState("");

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    const n = nombre.trim();
    if (!n) return;
    try {
      localStorage.setItem(KEY, n);
    } catch {
      /* modo privado */
    }
    onEntrar(n);
  }

  return (
    <main className="gate">
      <div className="gate-in">
        <h1 className="gate-h">Viaje Milfaso</h1>

        <form onSubmit={entrar} className="gate-form">
          <label className="campo">
            <span className="campo-l">Tu nombre</span>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
              autoComplete="given-name"
              spellCheck={false}
            />
          </label>

          <button type="submit" className="boton lleno" disabled={!nombre.trim()}>
            Entrar
          </button>
        </form>

        <p className="gate-hint">
          Es solo para saber quién vota y quién comenta.
        </p>
      </div>
    </main>
  );
}
