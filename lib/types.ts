export type WeekId = "w1" | "w2" | "w3";

export type Week = {
  id: WeekId;
  label: string;
  out: string;
  back: string;
  note?: string;
};

export type Flight = {
  kind: "directo" | "escala";
  airline: string;
  route: string;
  via?: string;
  duration: string;
  priceUsd: number;
  estimate?: boolean;
  note?: string;
};

export type Hop = {
  route: string;
  airline: string;
  duration: string;
  priceUsd: number;
  frequency?: string;
  estimate?: boolean;
  note?: string;
};

export type Transfer = {
  route: string;
  mode: string;
  duration: string;
  costUsd: number;
};

export type Hotel = {
  name: string;
  area: string;
  score?: string;
  nightUsd: number;
  ppUsd: number;
  why: string;
  url: string;
  site?: string;
  over?: boolean;
  estimate?: boolean;
};

export type Rental = {
  name: string;
  area: string;
  sleeps: number;
  nightUsd: number;
  ppUsd: number;
  why: string;
  url: string;
  isSearch?: boolean;
};

export type Act = {
  name: string;
  what: string;
  ppUsd: number;
  duration?: string;
  when?: string;
  url?: string;
};

export type Day = {
  n: number;
  place: string;
  title: string;
  acts: Act[];
};

export type Food = { name: string; what: string; level: string };

export type Stop = {
  slug: string;
  name: string;
  nights: number;
  note?: string;
  hotels: Hotel[];
  rentals: Rental[];
  food: Food[];
  weather?: string;
};

export type Trip = {
  slug: string;
  n: string;
  name: string;
  place: string;
  accent: string;
  tint: string;
  summary: string;
  heroDir: string;
  /** todas las carpetas de fotos del viaje, la principal primero */
  photoDirs: string[];
  stops: Stop[];
  days: Day[];
  flights: Record<WeekId, Flight[]>;
  hops: Hop[];
  transfers: Transfer[];
  verdict?: string;
  warning?: string;
  seasonality?: string;
  gettingAround?: string;
  sources: string[];
};
