"use client";

import { useState } from "react";

const EXT = ["jpg", "jpeg", "png", "webp"];

/**
 * Busca /photos/<dir>/<nn>.<ext> probando extensiones.
 * Si todavía no hay foto, deja el hueco gris y la página sigue entera.
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
  const [i, setI] = useState(0);
  const nn = String(n).padStart(2, "0");

  if (i >= EXT.length) {
    return <span className={className} style={style} aria-hidden />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/photos/${dir}/${nn}.${EXT[i]}`}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
      onError={() => setI(i + 1)}
    />
  );
}
