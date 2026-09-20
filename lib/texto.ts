/**
 * Parte un texto en oraciones. Si son varias, se muestran como viñetas:
 * un párrafo largo en una tarjeta chica no lo lee nadie.
 */
export function enOraciones(texto: string): string[] {
  const t = (texto ?? "").trim();
  if (!t) return [];

  return t
    // corta después de . ! o ? seguidos de espacio y mayúscula o número
    .split(/(?<=[.!?])\s+(?=[¿¡"'(]?[A-ZÁÉÍÓÚÑ0-9])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** true cuando conviene mostrarlo como lista. */
export function esLista(texto: string): boolean {
  return enOraciones(texto).length > 1;
}
