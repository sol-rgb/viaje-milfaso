"use client";

import { useState } from "react";
import Galeria from "./Galeria";
import { Derecha, Mas, Menos } from "./Icono";
import Link from "next/link";
import { Prosa } from "./Pop";
import Pop from "./Pop";
import Modal from "./Modal";
import Voto from "./Voto";
import Hilo from "./Notas";
import Aportar, { ListaAportes } from "./Aportar";
import Picker, { useSemana } from "./Semana";
import { precio, plata } from "@/lib/precio";
import { fechaDia } from "@/lib/fechas";
import { linkBusqueda, sitioAerolinea } from "@/lib/vuelos";
import type { Trip, Stop, Day } from "@/lib/types";

export default function Viaje({ t }: { t: Trip }) {
  return (
    <main className="viaje wrap max">
      <Hero t={t} />
      <Vuelos t={t} />
      <Ruta t={t} />
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
        <div className="hero-botones">
          <Link href={`/viaje/${t.slug}/hospedaje`} className="antes lleno">
            Hospedaje <Derecha size={15} />
          </Link>
          <Antes t={t} />
        </div>
      </div>

      <Galeria dirs={t.photoDirs} alt={t.name} />

      <div className="hero-pie">
        <p className="hero-lede">{t.summary}</p>
        <div className="hero-acc">
          <Voto target={`viaje:${t.slug}`} />
          <Hilo target={`viaje:${t.slug}`} etiqueta="Nota" />
        </div>
      </div>
    </header>
  );
}

/** Lo que hay que saber antes de ir. Vive en un botón, no en la página. */
function Antes({ t }: { t: Trip }) {
  const [abierto, setAbierto] = useState(false);

  const items = [
    t.warning && { k: "Ojo con esto", v: t.warning, alerta: true },
    t.verdict && { k: "Por qué acá", v: t.verdict },
    t.seasonality && { k: "Qué semana", v: t.seasonality },
    t.gettingAround && { k: "Cómo moverse", v: t.gettingAround },
    ...t.stops
      .filter((s) => s.weather)
      .map((s) => ({ k: `Clima en ${s.name}`, v: s.weather as string })),
  ].filter(Boolean) as { k: string; v: string; alerta?: boolean }[];

  return (
    <>
      <button className="antes" onClick={() => setAbierto(true)}>
        Antes de ir <Derecha size={15} />
      </button>

      <Modal
        abierto={abierto}
        cerrar={() => setAbierto(false)}
        titulo="Antes de ir"
        ancho="ancho"
      >
        <dl className="chica">
          {items.map((it, i) => (
            <div key={i} className={it.alerta ? "chica-i alerta" : "chica-i"}>
              <dt className="chica-k">{it.k}</dt>
              <dd className="chica-v">
                <Prosa texto={it.v} clase="chica-p" />
              </dd>
            </div>
          ))}
        </dl>
      </Modal>
    </>
  );
}

/* ---------------------------------------------------------- vuelos */

function Vuelos({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const [modo, setModo] = useState<"directo" | "escala">("directo");
  const lista = (t.flights[semana] ?? []).filter((f) => f.kind === modo);
  const hayInternos = t.hops.length > 0 || t.transfers.length > 0;

  return (
    <section className="bloque">
      <div className="bloque-cab bloque-cab-apilado">
        <h2 className="bloque-t">Vuelos</h2>
        <div className="tabs">
          {(["directo", "escala"] as const).map((m) => (
            <button
              key={m}
              className={modo === m ? "tab on" : "tab"}
              onClick={() => setModo(m)}
            >
              {m === "directo" ? "Directo" : "Con escala"}
            </button>
          ))}
        </div>
      </div>

      <div className={hayInternos ? "vuelos dos" : "vuelos"}>
        <div className="vuelos-col">
          <p className="sub-label">Desde Buenos Aires</p>
          <div className="chips">
            {lista.length === 0 && <p className="vacio">No hay en esta semana.</p>}
            {lista.map((f, i) => (
              <Pop
                key={`${modo}${i}`}
                clase="chip chip-vuelo"
                d={{
                  titulo: f.airline,
                  target: `vuelo:${t.slug}:${semana}:${modo}:${i}`,
                  filas: [
                    {
                      k: "Ruta",
                      v: `${f.route}${f.via ? `, vía ${f.via}` : ""}`,
                    },
                    {
                      k: "Horario",
                      v:
                        f.dep && f.arr
                          ? `Sale ${f.dep}, llega ${f.arr}. ${f.duration}`
                          : f.duration,
                    },
                    ...(f.flight ? [{ k: "Vuelo", v: f.flight }] : []),
                  ],
                  precio: f.priceUsd,
                  unidad: "ida y vuelta",
                  url: linkBusqueda(f, semana),
                  urlTexto: "Buscar en Google Flights",
                  url2: sitioAerolinea(f.airline),
                  url2Texto: f.airline,
                  extra: f.estimate ? ["Precio estimado"] : [],
                }}
              >
                {f.airline}
                <em className="chip-n">
                  {f.estimate ? "~" : ""}
                  {plata(f.priceUsd)}
                </em>
              </Pop>
            ))}
          </div>
        </div>

        {hayInternos && (
          <div className="vuelos-col">
            <p className="sub-label">Una vez allá</p>
            <div className="chips">
              {t.hops.map((h, i) => (
                <Pop
                  key={`hop${i}`}
                  clase="chip chip-vuelo"
                  d={{
                    titulo: h.route,
                    target: `hop:${t.slug}:${i}`,
                    filas: [
                      { k: "Aerolínea", v: h.airline },
                      { k: "Duración", v: h.duration },
                      ...(h.frequency ? [{ k: "Frecuencia", v: h.frequency }] : []),
                    ],
                    precio: h.priceUsd,
                    unidad: "ida y vuelta",
                    url2: sitioAerolinea(h.airline),
                    url2Texto: h.airline,
                    extra: h.estimate ? ["Precio estimado"] : [],
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
                  <em className="chip-n">{plata(x.costUsd)}</em>
                </Pop>
              ))}
            </div>
          </div>
        )}
      </div>

      <Hilo target={`vuelos:${t.slug}`} etiqueta="Nota" />
    </section>
  );
}

/* ---------------------------------------------------------- ruta */

function Ruta({ t }: { t: Trip }) {
  const { semana } = useSemana();

  return (
    <section className="bloque ruta">
      <div className="bloque-cab">
        <h2 className="bloque-t">Ruta</h2>
        <Picker />
      </div>

      <ol className="linea">
        {t.days.map((d) => (
          <DiaFila
            key={d.n}
            d={d}
            slug={t.slug}
            fecha={fechaDia(semana, d.n)}
            dirs={t.photoDirs}
          />
        ))}
      </ol>
    </section>
  );
}

function DiaFila({
  d,
  slug,
  fecha,
  dirs,
}: {
  d: Day;
  slug: string;
  fecha: string;
  dirs: string[];
}) {
  return (
    <li className="dia">
      <span className="dia-punto" aria-hidden />

      <div className="dia-marca">
        <span className="dia-fecha">{fecha}</span>
        <span className="dia-lugar">{d.place}</span>
      </div>

      <div className="dia-cuerpo">
        <h3 className="dia-t">{d.title}</h3>

        <div className="chips">
        {d.acts.map((a, i) => (
          <Pop
            key={i}
            d={{
              titulo: a.name,
              target: `acto:${slug}:${d.n}:${i}`,
              dirs,
              linea: a.what,
              precio: a.ppUsd,
              unidad: "por persona",
              url: a.url,
              extra: [a.duration, a.when].filter(Boolean) as string[],
            }}
          >
            {a.name}
          </Pop>
        ))}
          <ListaAportes
            tipo="actividad"
            viaje={slug}
            parada={`dia${d.n}`}
            unidad="por persona"
          />
          <Aportar tipo="actividad" viaje={slug} parada={`dia${d.n}`} />
        </div>
      </div>
    </li>
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
        <Hilo target={`plata:${t.slug}`} etiqueta="Nota" />
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
        {abierto ? <Menos size={13} /> : <Mas size={13} />} Fuentes
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
