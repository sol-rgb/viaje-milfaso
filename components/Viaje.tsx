"use client";

import { useState } from "react";
import Photo from "./Photo";
import Hilo, { Contador } from "./Notas";
import Voto from "./Voto";
import Aportar, { ListaAportes } from "./Aportar";
import Picker, { useSemana } from "./Semana";
import { precio, plata } from "@/lib/precio";
import { SEMANA_POR_ID } from "@/data/semanas";
import type { Trip, Hotel, Rental, Day, Stop } from "@/lib/types";

export default function Viaje({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const s = SEMANA_POR_ID[semana];
  const p = precio(t, semana);

  return (
    <main
      className="viaje"
      style={{ ["--tint" as string]: t.tint, ["--accent" as string]: t.accent }}
    >
      <Hero t={t} />

      <Seccion n={1} titulo="cuándo">
        <div className="cuando">
          <div className="cuando-l">
            <Picker compacto />
            <p className="body-s cuando-nota">{s.note}</p>
            <Hilo target={`semana:${semana}`} etiqueta="anotar algo de las fechas" />
          </div>
          <Plata t={t} p={p} />
        </div>
      </Seccion>

      <Seccion n={2} titulo="vuelos">
        <Vuelos t={t} />
      </Seccion>

      <Seccion n={3} titulo="ruta">
        <div className="dias">
          {t.days.map((d) => (
            <Dia key={d.n} d={d} slug={t.slug} />
          ))}
        </div>
      </Seccion>

      <Seccion n={4} titulo="dónde dormir">
        {t.stops.map((st) => (
          <Dormir key={st.slug} st={st} slug={t.slug} />
        ))}
      </Seccion>

      <Seccion n={5} titulo="la letra chica">
        <Chica t={t} />
      </Seccion>

      <Fuentes t={t} />
    </main>
  );
}

/* ---------------------------------------------------------- hero */

function Hero({ t }: { t: Trip }) {
  return (
    <header className="hero wrap max">
      <div className="hero-txt">
        <span className="idx">{t.n}</span>
        <h1 className="display hero-h">{t.name}</h1>
        <p className="lede hero-lede">{t.summary}</p>
        <div className="hero-acc">
          <Voto target={`viaje:${t.slug}`} />
          <Hilo target={`viaje:${t.slug}`} etiqueta="qué te parece" />
        </div>
      </div>

      <div className="hero-fotos" aria-hidden>
        {[1, 2, 3].map((n) => (
          <Photo key={n} dir={t.heroDir} n={n} tint={t.tint} className="hero-foto" />
        ))}
      </div>
    </header>
  );
}

/* ---------------------------------------------------------- sección */

function Seccion({
  n,
  titulo,
  children,
}: {
  n: number;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="sec wrap max">
      <div className="sec-cab">
        <span className="idx">n{String(n).padStart(2, "0")}.</span>
        <h2 className="sec-t">{titulo}</h2>
      </div>
      <div className="sec-cuerpo">{children}</div>
    </section>
  );
}

/* ---------------------------------------------------------- plata */

function Plata({ t, p }: { t: Trip; p: ReturnType<typeof precio> }) {
  const filas: [string, number][] = [
    ["vuelo", p.vuelo],
    ...(p.interno ? ([["vuelos internos", p.interno]] as [string, number][]) : []),
    ["hoteles", p.hotel],
    ["actividades", p.actividades],
  ];

  return (
    <div className="plata">
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
      <Hilo target={`plata:${t.slug}`} etiqueta="anotar algo del presupuesto" />
    </div>
  );
}

/* ---------------------------------------------------------- vuelos */

function Vuelos({ t }: { t: Trip }) {
  const { semana } = useSemana();
  const [modo, setModo] = useState<"directo" | "escala">("directo");
  const lista = (t.flights[semana] ?? []).filter((f) => f.kind === modo);

  return (
    <div className="vuelos">
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

      {lista.length === 0 ? (
        <p className="body-s vacio">No hay en esta semana.</p>
      ) : (
        <ul className="filas">
          {lista.map((f, i) => (
            <li key={i} className="fila">
              <span className="idx fila-i">{String(i + 1).padStart(2, "0")}</span>
              <span className="fila-n">{f.airline}</span>
              <span className="fila-d label">
                {f.route}
                {f.via ? ` · vía ${f.via}` : ""} · {f.duration}
              </span>
              <span className="fila-p">
                {f.estimate && <em className="est" title="estimado">~</em>}
                {plata(f.priceUsd)}
              </span>
              {f.note && <span className="fila-nota body-s">{f.note}</span>}
            </li>
          ))}
        </ul>
      )}

      {t.hops.length > 0 && (
        <>
          <p className="sub-label label">vuelos internos</p>
          <ul className="filas">
            {t.hops.map((h, i) => (
              <li key={i} className="fila">
                <span className="idx fila-i">{String(i + 1).padStart(2, "0")}</span>
                <span className="fila-n">{h.route}</span>
                <span className="fila-d label">
                  {h.airline} · {h.duration}
                  {h.frequency ? ` · ${h.frequency}` : ""}
                </span>
                <span className="fila-p">
                  {h.estimate && <em className="est">~</em>}
                  {plata(h.priceUsd)}
                </span>
                {h.note && <span className="fila-nota body-s">{h.note}</span>}
              </li>
            ))}
          </ul>
        </>
      )}

      {t.transfers.length > 0 && (
        <>
          <p className="sub-label label">traslados</p>
          <ul className="filas">
            {t.transfers.map((x, i) => (
              <li key={i} className="fila">
                <span className="idx fila-i">{String(i + 1).padStart(2, "0")}</span>
                <span className="fila-n">{x.route}</span>
                <span className="fila-d label">
                  {x.mode} · {x.duration}
                </span>
                <span className="fila-p">{x.costUsd ? plata(x.costUsd) : "—"}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <Hilo target={`vuelos:${t.slug}`} etiqueta="anotar algo de los vuelos" />
    </div>
  );
}

/* ---------------------------------------------------------- días */

function Dia({ d, slug }: { d: Day; slug: string }) {
  const [abierto, setAbierto] = useState(false);
  const target = `dia:${slug}:${d.n}`;

  return (
    <article className={abierto ? "dia on" : "dia"}>
      <button className="dia-cab" onClick={() => setAbierto(!abierto)}>
        <span className="idx">n{String(d.n).padStart(2, "0")}.</span>
        <span className="dia-t">{d.title}</span>
        <span className="dia-lugar label">{d.place}</span>
        <span className="dia-r">
          <Contador target={target} />
          <span className="dia-mas" aria-hidden>
            {abierto ? "−" : "+"}
          </span>
        </span>
      </button>

      {abierto && (
        <div className="dia-cuerpo">
          <ul className="actos">
            {d.acts.map((a, i) => (
              <li key={i} className="acto">
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="acto-c">
                  <span className="acto-n">
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noopener noreferrer">
                        {a.name}
                        <em className="ext" aria-hidden>
                          ↗
                        </em>
                      </a>
                    ) : (
                      a.name
                    )}
                  </span>
                  <span className="acto-q body-s">{a.what}</span>
                  <span className="acto-m label">
                    {[a.duration, a.when].filter(Boolean).join(" · ")}
                  </span>
                </div>
                <span className="acto-p">{a.ppUsd ? plata(a.ppUsd) : "libre"}</span>
                <Voto target={`acto:${slug}:${d.n}:${i}`} chico />
              </li>
            ))}
          </ul>

          <ListaAportes
            tipo="actividad"
            viaje={slug}
            parada={`dia${d.n}`}
            unidad="/ p"
          />
          <div className="dia-pie">
            <Aportar tipo="actividad" viaje={slug} parada={`dia${d.n}`} />
            <Hilo target={target} etiqueta="anotar algo del día" />
          </div>
        </div>
      )}
    </article>
  );
}

/* ---------------------------------------------------------- dormir */

function Dormir({ st, slug }: { st: Stop; slug: string }) {
  const [modo, setModo] = useState<"hotel" | "airbnb">("hotel");

  return (
    <div className="parada">
      <div className="parada-cab">
        <div>
          <h3 className="parada-t">{st.name}</h3>
          <span className="label">{st.nights} noches</span>
        </div>
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

      {st.note && <p className="body-s parada-nota">{st.note}</p>}

      <ul className="filas">
        {modo === "hotel"
          ? st.hotels.map((h, i) => (
              <Cama key={h.name} i={i} h={h} target={`hotel:${slug}:${st.slug}:${i}`} />
            ))
          : st.rentals.map((r, i) => (
              <Casa key={r.name} i={i} r={r} target={`airbnb:${slug}:${st.slug}:${i}`} />
            ))}
      </ul>

      <ListaAportes tipo={modo} viaje={slug} parada={st.slug} />
      <Aportar tipo={modo} viaje={slug} parada={st.slug} />

      {st.food.length > 0 && (
        <>
          <p className="sub-label label">dónde comer</p>
          <ul className="comida">
            {st.food.map((f, i) => (
              <li key={i}>
                <span className="comida-n">{f.name}</span>
                <span className="body-s">{f.what}</span>
                <span className="label">{f.level}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Cama({ h, i, target }: { h: Hotel; i: number; target: string }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <li className={abierto ? "fila cama on" : "fila cama"}>
      <button className="cama-cab" onClick={() => setAbierto(!abierto)}>
        <span className="idx fila-i">{String(i + 1).padStart(2, "0")}</span>
        <span className="fila-n">
          {h.name}
          {h.over && <em className="over" title="arriba del presupuesto">·</em>}
        </span>
        <span className="fila-d label">{h.area}</span>
        <span className="fila-p">
          {h.estimate && <em className="est">~</em>}
          {plata(h.ppUsd)}
          <em className="por">/ p / noche</em>
        </span>
        <Voto target={target} chico />
        <span className="fila-mas" aria-hidden>
          {abierto ? "−" : "+"}
        </span>
      </button>

      {abierto && (
        <div className="cama-cuerpo">
          <p className="body-s">{h.why}</p>
          <p className="label">
            habitación doble us$ {plata(h.nightUsd)} la noche
            {h.score ? ` · ${h.score}` : ""}
            {h.over ? " · arriba del presupuesto" : ""}
          </p>
          <p className="enlaces">
            <a href={h.url} target="_blank" rel="noopener noreferrer">
              reservar <em className="ext">↗</em>
            </a>
            {h.site && (
              <a href={h.site} target="_blank" rel="noopener noreferrer">
                sitio <em className="ext">↗</em>
              </a>
            )}
          </p>
          <Hilo target={target} etiqueta="anotar algo" />
        </div>
      )}
      <Contador target={target} />
    </li>
  );
}

function Casa({ r, i, target }: { r: Rental; i: number; target: string }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <li className={abierto ? "fila cama on" : "fila cama"}>
      <button className="cama-cab" onClick={() => setAbierto(!abierto)}>
        <span className="idx fila-i">{String(i + 1).padStart(2, "0")}</span>
        <span className="fila-n">{r.name}</span>
        <span className="fila-d label">
          {r.area} · {r.sleeps} personas
        </span>
        <span className="fila-p">
          {plata(r.ppUsd)}
          <em className="por">/ p / noche</em>
        </span>
        <Voto target={target} chico />
        <span className="fila-mas" aria-hidden>
          {abierto ? "−" : "+"}
        </span>
      </button>

      {abierto && (
        <div className="cama-cuerpo">
          <p className="body-s">{r.why}</p>
          <p className="label">
            la casa entera us$ {plata(r.nightUsd)} la noche
          </p>
          <p className="enlaces">
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.isSearch ? "buscar en airbnb" : "ver"} <em className="ext">↗</em>
            </a>
          </p>
          <Hilo target={target} etiqueta="anotar algo" />
        </div>
      )}
      <Contador target={target} />
    </li>
  );
}

/* ---------------------------------------------------------- letra chica */

function Chica({ t }: { t: Trip }) {
  const items = [
    t.warning && { k: "ojo con esto", v: t.warning, alerta: true },
    t.verdict && { k: "por qué esta playa", v: t.verdict },
    t.seasonality && { k: "la época", v: t.seasonality },
    t.gettingAround && { k: "moverse", v: t.gettingAround },
    ...t.stops
      .filter((s) => s.weather)
      .map((s) => ({ k: `clima en ${s.name}`, v: s.weather as string })),
  ].filter(Boolean) as { k: string; v: string; alerta?: boolean }[];

  return (
    <div className="chica">
      {items.map((it, i) => (
        <div key={i} className={it.alerta ? "chica-i alerta" : "chica-i"}>
          <span className="label">{it.k}</span>
          <p className="body-s">{it.v}</p>
        </div>
      ))}
    </div>
  );
}

function Fuentes({ t }: { t: Trip }) {
  const [abierto, setAbierto] = useState(false);
  if (!t.sources.length) return null;

  return (
    <section className="fuentes wrap max">
      <button className="hilo-abrir" onClick={() => setAbierto(!abierto)}>
        <span aria-hidden>{abierto ? "−" : "+"}</span> de dónde salieron los números
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
