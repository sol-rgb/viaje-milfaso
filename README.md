# Viaje Milfaso

Cuatro viajes posibles para marzo 2027, salidos de Buenos Aires, para que el
grupo mire, vote y comente.

## Cómo entrar

Nombre + clave. La clave está en `components/Gate.tsx` (`PASS`). Es una puerta
simbólica, no seguridad real: sirve para que cada comentario tenga un nombre al
lado, no para proteger secretos.

## Las fotos

Cada destino toma hasta 5 fotos:

    public/photos/<lugar>/01.jpg
    public/photos/<lugar>/02.jpg
    ...

Sirven `.jpg`, `.jpeg`, `.png` y `.webp`. Si una foto falta, la página dibuja un
degradado con el color del viaje y sigue andando. Carpetas: `mancora`, `lima`,
`cartagena`, `baru`, `miami`, `bahamas`, `cdmx`, `puerto-escondido`.

## Notas, votos y propuestas

Todo lo que escribe el grupo (notas, pulgares, hoteles y actividades
propuestas) va a `/api/estado`, que guarda un único JSON.

- **Con** `BLOB_READ_WRITE_TOKEN` en el entorno usa Vercel Blob y todos ven lo
  de todos.
- **Sin** el token guarda en memoria del server y el navegador se queda con una
  copia local. Nada se rompe, pero cada uno ve solo lo suyo.

Para enchufarlo: crear un Blob store en el proyecto de Vercel y pegar el token
como variable de entorno `BLOB_READ_WRITE_TOKEN`.

## Los datos

`data/viajes.ts` tiene los cuatro viajes. Salió de la investigación en
`research/`, que guarda el JSON y las notas de trabajo con las fuentes de cada
número. Los precios de 2027 son estimados con base real, marcados con `~` en la
página.

## Correr

    npm install
    npm run dev
