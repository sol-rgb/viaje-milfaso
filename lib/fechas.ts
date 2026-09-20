import { SEMANA_POR_ID } from "@/data/semanas";
import type { WeekId } from "./types";

const DIA = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MES = [
  "ene", "feb", "mar", "abr", "may", "jun",
  "jul", "ago", "sep", "oct", "nov", "dic",
];

/** El día n del viaje, contando desde la salida de la semana elegida. */
export function fechaDia(semana: WeekId, n: number): string {
  const s = SEMANA_POR_ID[semana];
  if (!s) return "";
  const [a, m, d] = s.out.split("-").map(Number);
  const f = new Date(Date.UTC(a, m - 1, d + (n - 1)));
  return `${DIA[f.getUTCDay()]} ${f.getUTCDate()} ${MES[f.getUTCMonth()]}`;
}
