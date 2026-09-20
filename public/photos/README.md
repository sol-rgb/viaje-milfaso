# Fotos

Una carpeta por lugar. Soltá las fotos adentro **como vengan**: no hace falta
renombrar nada. Sirven `.jpg`, `.jpeg`, `.png`, `.webp` y `.avif`.

    public/photos/mancora/IMG_4821.jpg
    public/photos/mancora/IMG_4822.jpg
    ...

`scripts/fotos.mjs` corre solo antes de cada build, mira las carpetas y arma
`data/fotos.json`. Las ordena alfabéticamente, que para nombres tipo IMG_1234
es el orden en que se sacaron. La primera de cada carpeta es la que va en la
tarjeta del home; las cinco primeras salen en la tira de la página del viaje.

Si falta una foto el hueco queda vacío y la página sigue entera.

Carpetas: `mancora`, `lima`, `cartagena`, `baru`, `miami`, `keys`,
`islamorada`, `cdmx`, `puerto-escondido`.

## Subirlas desde el navegador

En GitHub, entrá a la carpeta, `Add file`, `Upload files`, arrastrá y
`Commit changes`. Por ejemplo, para Máncora:

https://github.com/sol-rgb/viaje-milfaso/upload/claude/trip-planning-app-u22dgt/public/photos/mancora
