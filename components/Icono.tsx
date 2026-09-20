/**
 * Flechas y cruz dibujadas, no caracteres. Los caracteres tipo ← o ×
 * el teléfono los dibuja como emoji y quedan mal.
 */

type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export function Izquierda({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M19 12H5" />
      <path d="M11 18l-6-6 6-6" />
    </svg>
  );
}

export function Derecha({ size = 16, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

/** La diagonal de "esto abre algo". */
export function Salida({ size = 14, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M8 16L16 8" />
      <path d="M9 8h7v7" />
    </svg>
  );
}

export function Cruz({ size = 18, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function Mas({ size = 14, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Menos({ size = 14, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14" />
    </svg>
  );
}
