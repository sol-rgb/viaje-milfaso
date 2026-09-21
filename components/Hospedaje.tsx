"use client";

import { useState } from "react";
import Modal from "./Modal";
import Voto from "./Voto";
import Hilo from "./Notas";
import FotosFicha from "./FotosFicha";
import Aportar from "./Aportar";
import { Salida } from "./Icono";
import { camasDe, type Cama } from "@/lib/hospedaje";
import { plata } from "@/lib/precio";
import type { Trip } from "@/lib/types";

export default function Hospedaje({ t }: { t: Trip }) {
  const camas = camasDe(t);
  const [filtro, setFiltro] = useState<"todo" | "hotel" | "airbnb">("todo");
  const [parada, setParada] = useState<string>("todo");

  const lista = camas.filter(
    (c) =>
      (filtro === "todo" || c.tipo === filtro) &&
      (parada === "todo" || c.paradaSlug === parada)
  );

  return (
    <main className="viaje wrap max">
      <header className="hero">
        <div className="hero-cab">
          <h1 className="hero-h">Hospedaje</h1>
        </div>
        <p className="hero-lede">
          {camas.length} lugares para {t.name}. Tocá cualquiera para ver las
          fotos, el precio y el link.
        </p>
      </header>

      <section className="bloque">
        <div className="bloque-cab bloque-cab-apilado">
          <div className="filtros">
            <div className="tabs">
              {(["todo", "airbnb", "hotel"] as const).map((f) => (
                <button
                  key={f}
                  className={filtro === f ? "tab on" : "tab"}
                  onClick={() => setFiltro(f)}
                >
                  {f === "todo" ? "Todo" : f === "hotel" ? "Hoteles" : "Airbnb"}
                </button>
              ))}
            </div>
            <div className="tabs">
              <button
                className={parada === "todo" ? "tab on" : "tab"}
                onClick={() => setParada("todo")}
              >
                Todas las paradas
              </button>
              {t.stops.map((st) => (
                <button
                  key={st.slug}
                  className={parada === st.slug ? "tab on" : "tab"}
                  onClick={() => setParada(st.slug)}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rejilla">
          {lista.map((c) => (
            <Ficha key={c.target} c={c} />
          ))}
        </div>

        {lista.length === 0 && <p className="vacio">Nada con ese filtro.</p>}

        <div className="hospedaje-pie">
          <Aportar tipo="airbnb" viaje={t.slug} parada={t.stops[0]?.slug ?? ""} />
        </div>
      </section>
    </main>
  );
}

function Ficha({ c }: { c: Cama }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <article className={c.favorita ? "cama-card elegida" : "cama-card"}>
        <button className="cama-card-b" onClick={() => setAbierto(true)}>
          <span className="cama-card-foto">
            {c.fotos[0] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.fotos[0]} alt="" loading="lazy" decoding="async" />
            ) : (
              <span className="cama-card-hueco" />
            )}
            {c.fotos.length > 1 && (
              <span className="cama-card-n">{c.fotos.length}</span>
            )}
          </span>

          <span className="cama-card-cuerpo">
            <span className="cama-card-zona label">{c.zona}</span>
            <span className="cama-card-nombre">{c.nombre}</span>
            <span className="cama-card-plata">
              <span className="cama-card-precio">
                us$ {plata(c.totalUsd)}
              </span>
              <span className="label">
                {c.noches} noches
                {c.tipo === "airbnb" && c.sleeps ? `, duerme ${c.sleeps}` : ""}
              </span>
            </span>
          </span>
        </button>

        <span className="cama-card-voto">
          <Voto target={c.target} chico />
        </span>
      </article>

      <Modal abierto={abierto} cerrar={() => setAbierto(false)} titulo={c.nombre}>
        <FotosFicha fotos={c.fotos} alt={c.nombre} />

        {c.why && <p className="pop-linea">{c.why}</p>}

        <dl className="pop-filas">
          <div>
            <dt>Zona</dt>
            <dd>{c.zona}</dd>
          </div>
          <div>
            <dt>Parada</dt>
            <dd>
              {c.parada}, {c.noches} noches
            </dd>
          </div>
          {c.sleeps ? (
            <div>
              <dt>Capacidad</dt>
              <dd>Duerme {c.sleeps}</dd>
            </div>
          ) : null}
          {c.score ? (
            <div>
              <dt>Puntaje</dt>
              <dd>{c.score}</dd>
            </div>
          ) : null}
        </dl>

        <div className="pop-fila">
          <span className="pop-precio">
            <span className="pop-cur">us$</span>
            {plata(c.totalUsd)}
            <em className="por">las {c.noches} noches, por persona</em>
          </span>
          <Voto target={c.target} />
        </div>

        <ul className="pop-datos">
          <li className="label">
            us$ {plata(c.nightUsd)} la noche
            {c.tipo === "hotel" ? ", las habitaciones para los cinco" : ", la casa entera"}
          </li>
          {c.casaUsd ? (
            <li className="label">
              us$ {plata(c.casaUsd)} la casa entera, las {c.noches} noches
            </li>
          ) : null}
          <li className="label">us$ {plata(c.ppUsd)} por persona por noche</li>
          {c.over && <li className="label">Se pasa del presupuesto</li>}
          {c.estimate && <li className="label">Precio estimado</li>}
        </ul>

        {(c.url || c.site) && (
          <p className="enlaces">
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer nofollow">
                {c.tipo === "airbnb" ? "Ver en Airbnb" : "Reservar"}{" "}
                <Salida size={13} className="ext" />
              </a>
            )}
            {c.site && (
              <a href={c.site} target="_blank" rel="noopener noreferrer nofollow">
                Sitio <Salida size={13} className="ext" />
              </a>
            )}
          </p>
        )}

        <Hilo target={c.target} etiqueta="Nota" />
      </Modal>
    </>
  );
}
