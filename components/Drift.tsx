"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

type Chip = {
  dir: string;
  n: number;
  tint: string;
  x: number;
  y: number;
  w: number;
  dur: number;
  delay: number;
  depth: number;
  rot: number;
};

const CHIPS: Chip[] = [
  { dir: "mancora",          n: 3, tint: "#c8a882", x: 4,  y: 14, w: 132, dur: 27, delay: 0,   depth: 26, rot: -4 },
  { dir: "cartagena",        n: 2, tint: "#c98f6a", x: 86, y: 9,  w: 104, dur: 33, delay: -6,  depth: 16, rot: 5  },
  { dir: "cdmx",             n: 1, tint: "#b8735a", x: 91, y: 62, w: 148, dur: 30, delay: -12, depth: 32, rot: -3 },
  { dir: "puerto-escondido", n: 2, tint: "#cbb089", x: 8,  y: 70, w: 118, dur: 36, delay: -3,  depth: 20, rot: 6  },
  { dir: "lima",             n: 4, tint: "#a3a893", x: 73, y: 36, w: 86,  dur: 24, delay: -17, depth: 12, rot: -7 },
  { dir: "miami",            n: 1, tint: "#9fb3b8", x: 18, y: 40, w: 78,  dur: 39, delay: -9,  depth: 10, rot: 3  },
];

/** Fotitos que flotan despacio detrás de todo. Puro adorno, sin texto. */
export default function Drift() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  const [quieto, setQuieto] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fino = window.matchMedia("(pointer: fine)");
    setQuieto(mq.matches);
    if (mq.matches || !fino.matches) return;

    let raf = 0;
    function mover(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setP({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      });
    }
    window.addEventListener("mousemove", mover, { passive: true });
    return () => {
      window.removeEventListener("mousemove", mover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="drift" ref={ref} aria-hidden>
      {CHIPS.map((c, i) => (
        <div
          key={i}
          className="drift-chip"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.w,
            transform: `translate3d(${(-p.x * c.depth).toFixed(2)}px, ${(-p.y * c.depth).toFixed(2)}px, 0)`,
          }}
        >
          <div
            className="drift-float"
            style={{
              animationDuration: `${c.dur}s`,
              animationDelay: `${c.delay}s`,
              animationPlayState: quieto ? "paused" : "running",
              ["--rot" as string]: `${c.rot}deg`,
            }}
          >
            <Photo dir={c.dir} n={c.n} tint={c.tint} className="drift-img" />
          </div>
        </div>
      ))}
    </div>
  );
}
