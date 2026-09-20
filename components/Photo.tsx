"use client";

import FOTOS from "@/data/fotos.json";

type Mapa = Record<string, string[]>;
const PROPIAS = (FOTOS as { propias?: Mapa }).propias ?? {};

/**
 * La foto n de un lugar. Los nombres de archivo salen de data/fotos.json,
 * que arma scripts/fotos.mjs antes del build, así se pueden soltar los
 * archivos como vengan. Si falta, el hueco queda vacío y no se rompe nada.
 */
export default function Photo({
  dir,
  n,
  alt = "",
  className,
  style,
}: {
  dir: string;
  n: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const archivo = PROPIAS[dir]?.[n - 1];
  if (!archivo) return <span className={className} style={style} aria-hidden />;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/photos/${dir}/${encodeURIComponent(archivo)}`}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  );
}
