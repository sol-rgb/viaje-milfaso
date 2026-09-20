-- Tabla única para todo lo que escribe el grupo: notas, votos y aportes.
-- Correr una sola vez en el SQL editor de Supabase.

create table if not exists milfaso (
  id     text primary key,
  estado jsonb not null default '{}'::jsonb,
  visto  timestamptz not null default now()
);

alter table milfaso enable row level security;

-- La app escribe con la anon key desde el server, nunca desde el navegador.
-- Si preferís pasar la service_role key, podés sacar estas dos policies.
create policy "leer milfaso"     on milfaso for select using (true);
create policy "escribir milfaso" on milfaso for all    using (true) with check (true);
