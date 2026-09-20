import type { Week } from "@/lib/types";

/**
 * Tres ventanas. Siempre salimos un viernes a la noche o sábado temprano
 * y volvemos el sábado o domingo siguiente.
 */
export const SEMANAS: Week[] = [
  {
    id: "w1",
    label: "27 feb a 7 mar",
    out: "2027-02-27",
    back: "2027-03-07",
    note: "Salida viernes 26 a la noche o sábado 27. Vuelta sábado 6 o domingo 7.",
  },
  {
    id: "w2",
    label: "6 a 13 mar",
    out: "2027-03-06",
    back: "2027-03-13",
    note: "Salida viernes 5 a la noche o sábado 6. Vuelta sábado 13.",
  },
  {
    id: "w3",
    label: "13 a 21 mar",
    out: "2027-03-13",
    back: "2027-03-21",
    note: "Salida viernes 12 o sábado 13. Vuelta sábado 20 o domingo 21.",
  },
];

export const SEMANA_POR_ID = Object.fromEntries(
  SEMANAS.map((s) => [s.id, s])
) as Record<Week["id"], Week>;
