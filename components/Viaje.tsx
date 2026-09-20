"use client";

import { useState } from "react";
import Photo from "./Photo";
import Pop from "./Pop";
import Modal from "./Modal";
import Voto from "./Voto";
import Hilo from "./Notas";
import Aportar, { ListaAportes } from "./Aportar";
import Picker, { useSemana } from "./Semana";
import { precio, plata } from "@/lib/precio";
import { fechaDia } from "@/lib/fechas";
import type { Trip, Stop, Day } from "@/lib/types";

export default function Viaje({ t }: { t: Trip }) {
  return (
    <main className="viaje wrap max">
      <Hero t={t} />
      <Vuelos t={t} />

      <div className="plano">
        <Ruta t={t} />
        <Camas t={t} />
      </div>

      <Plata t={t} />
      <Fuentes t={t} />
    </main>
  );
}

/* ---------------------------------------------------------- hero */

function Hero({ t }: { t: Trip }) {
  return (
    <header className="hero">
      <div className="hero-cab">
        <h1 className="hero-h">{t.name}</h1>
        <Antes t={t} />
      </div>

      <div className="hero-fotos" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <Photo key={n} dir={t.heroDir} n={n} className="hero-foto" />
        ))}
      </div>

      <div className="hero-pie">
        <p className="hero-lede">{t.summary}</p>
        <div className="hero-acc">
          <Voto target={`viaje:${t.slug}`} />
          <Hilo target={`viaje:${t.slug}`} etiqueta="nota" />
        </div>
      </div>
    </header>
  );
}

/** Lo que hay que saber antes de ir. Vive en un botón, no en la página. */
function Antes({ t }: { t: Trip }) {
  const [abierto, setAbierto] = useState(false);

  const items = [
    t.warning && { k: "ojo con esto", v: t.warning, alerta: true },
    t.verdict && { k: "por qué esta playa", v: t.verdict },
    t.seasonality && { k: "qué semana conviene", v: t.seasonality },
    t.gettingAround && { k: "cómo moverse", v: t.gettingAround },
    ...t.stops
      .filter((s) => s.weather)
      .map((s) => ({ k: `clima en ${s.name}`, v: s.weather as string })),
  ].filter(Boolean) as { k: string; v: string; alerta?: boolean }[];

  return (
    <>
      <button className="antes" onClick={() => setAbierto(true)}>
        antes de ir <span aria-hidden>→</span>
      </button>

      <Modal
        abierto={abierto}
        cerrar={() => setAbierto(false)}
        titulo="Antes de ir"
        ancho="ancho"
      >
        <div className="chica">
          {items.map((it, i) => (
            <div key={i} className={it.alerta ? "chica-i alerta" : "chica-i"}>
              <span className="label">{it.k}</span>
              <p className="body-s">{it.v}</p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

/* ---------------------------------------------------------- vuelos */

function Vuelos({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const [modo, setModo] = useState<"directo" | "escala">("directo");
  const lista = (t.flights[semana] ?? []).filter((f) => f.kind === modo);

  return (
    <section className="bloque">
      <div className="bloque-cab">
        <h2 className="bloque-t">Vuelos</h2>
        <div className="tabs">
          {(["directo", "escala"] as const).map((m) => (
            <button
              key={m}
              className={modo === m ? "tab on" : "tab"}
              onClick={() => setModo(m)}
            >
              {m === "directo" ? "directo" : "con escala"}
            </button>
          ))}
        </div>
      </div>

      <div className="chips">
        {lista.length === 0 && <p className="vacio">No hay en esta semana.</p>}

        {lista.map((f, i) => (
          <Pop
            key={`${modo}${i}`}
            clase="chip chip-vuelo"
            d={{
              titulo: f.airline,
              target: `vuelo:${t.slug}:${semana}:${modo}:${i}`,
              linea: `${f.route}${f.via ? `, vía ${f.via}` : ""}. ${f.duration}.`,
              precio: f.priceUsd,
              unidad: "ida y vuelta",
              extra: [f.note, f.estimate ? "precio estimado" : ""]
                .filter(Boolean)
                .join(" · "),
            }}
          >
            {f.airline}
            <em className="chip-n">
              {f.estimate ? "~" : ""}
              {plata(f.priceUsd)}
            </em>
          </Pop>
        ))}

        {t.hops.map((h, i) => (
          <Pop
            key={`hop${i}`}
            clase="chip chip-vuelo"
            d={{
              titulo: h.route,
              target: `hop:${t.slug}:${i}`,
              linea: `${h.airline}. ${h.duration}.${h.frequency ? ` ${h.frequency}.` : ""}`,
              precio: h.priceUsd,
              unidad: "ida y vuelta",
              extra: h.estimate ? "precio estimado" : "",
            }}
          >
            {h.route}
            <em className="chip-n">
              {h.estimate ? "~" : ""}
              {plata(h.priceUsd)}
            </em>
          </Pop>
        ))}

        {t.transfers.map((x, i) => (
          <Pop
            key={`tr${i}`}
            clase="chip chip-suave"
            d={{
              titulo: x.route,
              target: `traslado:${t.slug}:${i}`,
              linea: [x.mode, x.duration].filter(Boolean).join(". "),
              precio: x.costUsd,
            }}
          >
            {x.route}
          </Pop>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- ruta */

function Ruta({ t }: { t: Trip }) {
  const { semana } = useSemana();

  return (
    <section className="ruta">
      <div className="bloque-cab">
        <h2 className="bloque-t">Ruta</h2>
        <Picker />
      </div>

      <ol className="linea">
        {t.days.map((d) => (
          <DiaFila key={d.n} d={d} slug={t.slug} fecha={fechaDia(semana, d.n)} />
        ))}
      </ol>
    </section>
  );
}

function DiaFila({ d, slug, fecha }: { d: Day; slug: string; fecha: string }) {
  return (
    <li className="dia">
      <span className="dia-punto" aria-hidden />
      <div className="dia-cab">
        <span className="dia-fecha">{fecha}</span>
        <span className="dia-lugar">{d.place}</span>
      </div>
      <p className="dia-t">{d.title}</p>

      <div className="chips">
        {d.acts.map((a, i) => (
          <Pop
            key={i}
            d={{
              titulo: a.name,
              target: `acto:${slug}:${d.n}:${i}`,
              linea: a.what,
              precio: a.ppUsd,
              unidad: "por persona",
              url: a.url,
              extra: [a.duration, a.when].filter(Boolean).join(" · "),
            }}
          >
            {a.name}
          </Pop>
        ))}
        <Aportar tipo="actividad" viaje={slug} parada={`dia${d.n}`} />
      </div>

      <ListaAportes tipo="actividad" viaje={slug} parada={`dia${d.n}`} unidad="/ p" />
    </li>
  );
}

/* ---------------------------------------------------------- camas */

function Camas({ t }: { t: Trip }) {
  return (
    <section className="camas">
      <div className="bloque-cab">
        <h2 className="bloque-t">Dónde dormir</h2>
      </div>
      {t.stops.map((st) => (
        <Parada key={st.slug} st={st} slug={t.slug} />
      ))}
    </section>
  );
}

function Parada({ st, slug }: { st: Stop; slug: string }) {
  const [modo, setModo] = useState<"hotel" | "airbnb">("hotel");

  return (
    <div className="parada">
      <div className="parada-cab">
        {/* al pasar el mouse por el nombre sale el detalle del lugar */}
        <h3 className="parada-t" data-nota={st.note || undefined}>
          {st.name}
          <span className="label parada-n">{st.nights} noches</span>
        </h3>
        <div className="tabs">
          {(["hotel", "airbnb"] as const).map((m) => (
            <button
              key={m}
              className={modo === m ? "tab on" : "tab"}
              onClick={() => setModo(m)}
            >
              {m === "hotel" ? "hoteles" : "airbnb"}
            </button>
          ))}
        </div>
      </div>

      <div className="chips">
        {modo === "hotel"
          ? st.hotels.map((h, i) => (
              <Pop
                key={h.name}
                clase={h.over ? "chip chip-cama caro" : "chip chip-cama"}
                d={{
                  titulo: h.name,
                  target: `hotel:${slug}:${st.slug}:${i}`,
                  linea: h.why,
                  precio: h.ppUsd,
                  unidad: "por persona por noche",
                  url: h.url || h.site,
                  extra: [
                    `us$${plata(h.nightUsd)} la noche para los cinco`,
                    h.area,
                    h.score,
                    h.over ? "se pasa del presupuesto" : "",
                  ]
                    .filter(Boolean)
                    .join(" · "),
                }}
              >
                {h.name}
                <em className="chip-n">
                  {h.estimate ? "~" : ""}
                  {plata(h.ppUsd)}
                </em>
              </Pop>
            ))
          : st.rentals.map((r, i) => (
              <Pop
                key={r.name}
                clase="chip chip-cama"
                d={{
                  titulo: r.name,
                  target: `airbnb:${slug}:${st.slug}:${i}`,
                  linea: r.why,
                  precio: r.ppUsd,
                  unidad: "por persona por noche",
                  url: r.url,
                  extra: [
                    `us$${plata(r.nightUsd)} la casa entera`,
                    `duerme ${r.sleeps}`,
                    r.area,
                    r.isSearch ? "es una búsqueda, no un aviso" : "",
                  ]
                    .filter(Boolean)
                    .join(" · "),
                }}
              >
                {r.name}
                <em className="chip-n">{plata(r.ppUsd)}</em>
              </Pop>
            ))}

        <Aportar tipo={modo} viaje={slug} parada={st.slug} />
      </div>

      <ListaAportes tipo={modo} viaje={slug} parada={st.slug} />

      {st.food.length > 0 && (
        <>
          <p className="sub-label label">dónde comer</p>
          <div className="chips">
            {st.food.map((f, i) => (
              <Pop
                key={i}
                clase="chip chip-suave"
                d={{
                  titulo: f.name,
                  target: `comer:${slug}:${st.slug}:${i}`,
                  linea: f.what,
                  extra: f.level,
                }}
              >
                {f.name}
              </Pop>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------------------------------------------------- plata */

function Plata({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const p = precio(t, semana);

  const filas: [string, number][] = [
    ["vuelo", p.vuelo],
    ...(p.interno ? ([["vuelos internos", p.interno]] as [string, number][]) : []),
    ["hoteles", p.hotel],
    ["actividades", p.actividades],
  ];

  return (
    <section className="bloque plata-b">
      <div className="bloque-cab">
        <h2 className="bloque-t">Cuánto sale</h2>
        <Hilo target={`plata:${t.slug}`} etiqueta="nota" />
      </div>

      <ul className="plata-lista">
        {filas.map(([k, v]) => (
          <li key={k}>
            <span className="label">{k}</span>
            <span className="plata-n">{plata(v)}</span>
          </li>
        ))}
        <li className="plata-tot">
          <span className="label">total por persona</span>
          <span className="plata-n">
            <span className="plata-cur">us$</span> {plata(p.total)}
          </span>
        </li>
      </ul>

      {p.vueloDirecto > p.vuelo && (
        <p className="plata-alt label">
          con vuelo directo: us$ {plata(p.totalDirecto)}
        </p>
      )}
    </section>
  );
}

function Fuentes({ t }: { t: Trip }) {
  const [abierto, setAbierto] = useState(false);
  if (!t.sources.length) return null;

  return (
    <section className="fuentes">
      <button className="hilo-abrir" onClick={() => setAbierto(!abierto)}>
        <span aria-hidden>{abierto ? "−" : "+"}</span> fuentes
      </button>
      {abierto && (
        <ul className="fuentes-l">
          {t.sources.map((u, i) => (
            <li key={i}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <a href={u} target="_blank" rel="noopener noreferrer">
                {u.replace(/^https?:\/\//, "").slice(0, 88)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
