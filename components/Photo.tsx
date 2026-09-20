"use client";

import { useState } from "react";

const EXT = ["jpg", "jpeg", "png", "webp"];

/**
 * Busca /photos/<dir>/<nn>.<ext> probando extensiones.
 * Si no hay foto todavía, dibuja un degradado con el color del viaje,
 * así la página nunca se rompe mientras faltan imágenes.
 */
export default function Photo({
  dir,
  n,
  tint,
  alt = "",
  className,
  style,
}: {
  dir: string;
  n: number;
  tint: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [i, setI] = useState(0);
  const nn = String(n).padStart(2, "0");
  const dead = i >= EXT.length;

  if (dead) {
    return (
      <div
        className={className}
        aria-hidden
        style={{
          background: `linear-gradient(155deg, ${tint} 0%, rgba(0,0,0,0.13) 120%)`,
          ...style,
        }}
      />
    );
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
