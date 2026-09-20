"use client";

import { useEstado } from "./Estado";

/** Avisa si el storage compartido no está enchufado todavía. */
export default function Aviso() {
  const { compartido } = useEstado();
  if (compartido) return null;
  return (
    <p className="aviso label">
      las notas y los votos quedan guardados solo en este navegador hasta que se
      conecte el storage compartido
    </p>
  );
}
