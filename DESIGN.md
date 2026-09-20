# Sistema de diseño

Sale de las cinco referencias: catálogo de muebles japonés, spread de revista,
skincare coreano, joyería, y el sitio de SANSO. Todas comparten lo mismo:
papel cálido, una serif grande, etiquetas mono chiquitas con número, reglas de
un pixel, y mucho aire.

## Color

    --paper      #efeae1   fondo, papel cálido
    --card       #f5f2ec   formularios
    --ink        #17150f   texto
    --ink-soft   #4a453a   texto secundario
    --ink-faint  #938b7c   etiquetas
    --ink-ghost  #bdb4a3   números de índice
    --rule       #d8d0c0   líneas

Cada viaje agrega dos colores propios, `accent` y `tint`. El `tint` es el
degradado que aparece cuando falta una foto; el `accent` es la línea que se
dibuja abajo de la tarjeta al pasar el mouse.

## Tipografía

    Instrument Serif   títulos, precios, nombres
    Newsreader         texto corrido
    IBM Plex Mono      etiquetas, números, índices

Ninguna en mayúsculas. Las referencias usan versalitas para las etiquetas;
acá van en minúscula con letter-spacing, que da la misma textura sin gritar.

## Reglas

1. **Poco texto.** Nombre y precio a la vista. Todo lo demás aparece al abrir.
   Nada de subtítulos.
2. **Numerar todo.** `n01.`, `01.`, `+01`. Es lo que hace que se lea como
   catálogo y no como landing.
3. **Una sola línea de un pixel** para separar. Nada de sombras, nada de
   bordes redondeados.
4. **Casi ningún relleno de color.** Solo el estado activo y el hover de las
   tarjetas. El papel hace el trabajo.
5. **Movimiento lento.** Las transiciones van de 600 a 900ms. Las fotos que
   flotan tardan entre 24 y 39 segundos en cruzar. Nada rebota.
6. **`prefers-reduced-motion` frena todo**, incluidas las fotos que flotan.

## Movimiento

- Seis fotos flotan despacio detrás del home, con paralaje suave según el
  mouse. Se apagan en mobile.
- La tarjeta del viaje tiene la foto chica abajo a la derecha; al pasar el
  mouse crece hasta ocupar toda la tarjeta, el texto se pone claro y una línea
  del color del viaje se dibuja de izquierda a derecha.
- Las filas de hoteles, días y actividades se abren en el lugar.

## Fotos

`public/photos/<lugar>/01..05` con extensión `.jpg`, `.jpeg`, `.png` o
`.webp`. Si falta una, sale el degradado del `tint`. Van en blanco y negro
suave y recuperan el color al pasar el mouse.
