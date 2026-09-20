# Shared state: votes, comments, submissions

One JSON document, one route handler, three interchangeable backends. The
point of the shape is that the feature is never visibly broken, even before
a database exists.

## The document

```ts
type Estado = {
  notas:   { id, target, quien, texto, ts }[];
  votos:   { id, target, quien, v: 1 | -1, ts }[];
  aportes: { id, tipo, quien, ts, viaje, parada,
             nombre, detalle, zona, url, precio }[];
};
```

`target` is a stable string built from what is being discussed:
`hotel:peru:lima:0`, `acto:mexico:4:1`, `semana:w2`. Anything on the page
can be voted on or commented on without a schema change.

## The backends, in order

```ts
const conSupabase = Boolean(SUPABASE_URL && SUPABASE_KEY);
const conBlob     = Boolean(BLOB_READ_WRITE_TOKEN);
export const compartido = conSupabase || conBlob;
```

1. **Supabase**, a single row: `create table milfaso (id text primary key,
   estado jsonb not null default '{}'::jsonb)`. Write with
   `prefer: resolution=merge-duplicates`. Ship the SQL in the repo.
2. **Vercel Blob**, one `estado.json` with `addRandomSuffix: false` and
   `allowOverwrite: true`.
3. **Server memory**, so local development works with no setup.

Read-modify-write on every mutation. For a group of five people this is
fine; do not build locking.

## The client half, which is what saves you

The provider holds the state, mirrors it to `localStorage`, and merges the
server copy in on load by id. Every mutation applies optimistically first
and reconciles with the server response. If the fetch fails, the local copy
stands.

This means that while the database is still being provisioned, votes and
comments visibly work for each person on their own device. Nobody sees a
dead button, and the moment the token lands everything becomes shared with
no code change.

Do not add a banner explaining that storage is not connected yet. That got
deleted.

## Rules worth keeping

- One vote per person per target; tapping the same thumb again removes it.
- Only the author can delete their own note or submission, checked on the
  server, not just hidden in the UI.
- Validate and cap every field on the server, and accept only `http:` and
  `https:` URLs from submissions.
- User submissions render in the same component as curated items, marked
  with a dashed border. Making them look second class defeats the point of
  asking people to contribute.

## Provisioning notes

Both of these can be blocked by account limits rather than by anything you
can fix in code. Vercel Blob creation returns 403 without the right plan or
scope, and Supabase caps free projects per user, not per organisation, so
creating another organisation does not help. When you hit that, say exactly
what the error was and give the one action that unblocks it, rather than
retrying.
