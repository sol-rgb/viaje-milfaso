import type { Trip } from "@/lib/types";

/**
 * Sale de research/, armado con scripts/armar.mjs.
 * Los precios de 2027 son estimados con base real: los marcados con ~
 * no son una cotización en firme.
 */
export const VIAJES: Trip[] = [
  {
    "slug": "peru",
    "n": "01",
    "name": "Lima & Máncora",
    "place": "Perú",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Dos días en Lima y cinco en la playa del norte.",
    "heroDir": "mancora",
    "photoDirs": [
      "mancora",
      "lima"
    ],
    "stops": [
      {
        "slug": "lima",
        "name": "Lima",
        "nights": 2,
        "note": "Barranco: casonas, museos chicos y el mar abajo del acantilado.",
        "hotels": [
          {
            "name": "Second Home Peru",
            "area": "Barranco, Domeyer 366, sobre el acantilado arriba de Playa Los Pavos",
            "nightUsd": 390,
            "ppUsd": 78,
            "why": "La casa del escultor Victor Delfin sobre el acantilado: arte por todos lados, pileta, vista al Pacífico.",
            "url": "https://www.booking.com/hotel/pe/secondhomeperu.html",
            "score": "9,3 en Booking, 865 opiniones",
            "site": "https://www.secondhomeperu.com/",
            "estimate": true
          },
          {
            "name": "Casa Republica Barranco Boutique Hotel",
            "area": "Barranco, Av. Sáenz Peña 208, a una cuadra del bulevar",
            "nightUsd": 490,
            "ppUsd": 98,
            "why": "Casona republicana de los años 20, terraza en la azotea, bicis gratis, todo a pie.",
            "url": "https://www.booking.com/hotel/pe/casa-republica-barranco.html",
            "score": "9,0 en Booking, 381 opiniones",
            "site": "https://casarepublica.com/",
            "estimate": true
          },
          {
            "name": "Casa Caceres",
            "area": "Barranco, calle residencial tranquila, solo adultos",
            "nightUsd": 309,
            "ppUsd": 62,
            "why": "Solo adultos, jardín y terraza, calle tranquila, muy buen precio en Barranco.",
            "url": "https://www.booking.com/searchresults.html?ss=Casa%20Caceres%20Barranco%20Lima",
            "score": "9,3 Booking",
            "estimate": true
          },
          {
            "name": "Villa Barranco by Ananay Hotels",
            "area": "Barranco, casona de los años 20 restaurada cerca de Playa Barranquito, a 1,2 mi de la playa",
            "nightUsd": 777,
            "ppUsd": 155,
            "why": "La casa mediana mejor diseñada de Barranco; la restauración de Ananay es realmente buena.",
            "url": "https://www.booking.com/hotel/pe/villa-barranco.html",
            "score": "4/5 Tripadvisor, puesto 45 de 298 en Lima hoteles",
            "site": "https://villabarranco.ananayhotels.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Hotel B",
            "area": "Barranco, Av. Sáenz Peña 204, al lado del MATE",
            "nightUsd": 1068,
            "ppUsd": 214,
            "why": "Mansión belle époque funcionando como galería viva de arte contemporáneo; el hotel más lindo de Lima.",
            "url": "https://www.booking.com/hotel/pe/arts-boutique-b.html",
            "score": "9,1 Booking, 9.6/10 Expedia (210 opiniones)",
            "site": "https://www.relaischateaux.com/us/hotel/hotel-b/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "House in Barranco (artist host Giselle) - entire 3BR home",
            "area": "Barranco, a cinco cuadras del mar, entre las galerías",
            "sleeps": 5,
            "nightUsd": 140,
            "ppUsd": 28,
            "why": "Duerme exactamente cinco en tres dormitorios reales; de un artista, tres baños.",
            "url": "https://www.airbnb.com/rooms/27774691"
          },
          {
            "name": "Hoomie | Fusion House _4BR (entire house)",
            "area": "Barranco",
            "sleeps": 8,
            "nightUsd": 200,
            "ppUsd": 40,
            "why": "Cuatro cuartos, administración profesional, más espacio del que necesitan cinco.",
            "url": "https://www.airbnb.com/rooms/1010972266330542335"
          },
          {
            "name": "Classic Barranco Vintage House - Boulevard & Park",
            "area": "Barranco, al lado del bulevar y el Parque Municipal",
            "sleeps": 6,
            "nightUsd": 150,
            "ppUsd": 30,
            "why": "Casa antigua de Barranco a pasos del bulevar, pero solo dos dormitorios.",
            "url": "https://www.airbnb.com/rooms/1094863601762208605"
          },
          {
            "name": "Casa Barranco - apartment with terrace near the esplanade",
            "area": "Barranco, cerca del malecón",
            "sleeps": 5,
            "nightUsd": 120,
            "ppUsd": 24,
            "why": "Departamento nuevo con terraza privada en pleno Barranco.",
            "url": "https://www.airbnb.com/rooms/1464740181450363931"
          },
          {
            "name": "Barranco entire-home search (filter: 5 guests, entire place, 3+ bedrooms)",
            "area": "Barranco, Lima",
            "sleeps": 5,
            "nightUsd": 160,
            "ppUsd": 32,
            "why": "Búsqueda de respaldo si lo de arriba está ocupado en marzo.",
            "url": "https://www.airbnb.com/barranco-peru/stays/houses",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Kjolle (Barranco)",
            "what": "El menú de degustación de Pia Leon en el edificio de Central: la comida de nivel mundial con mejor relación precio valor de Lima.",
            "level": "$$$$ - S/988 (~us$264) por persona, ~us$1.320 los cinco. Menú vegetal S/456. Verificado en kjolle.com."
          },
          {
            "name": "Isolina (Barranco)",
            "what": "Taberna de la Lima vieja; platos enormes para compartir de tacu tacu, cau cau, seco de asado: hecho para un grupo de cinco.",
            "level": "$$ - us$25 a 50 por persona"
          },
          {
            "name": "Merito (Barranco)",
            "what": "Restaurante chico de barra venezolano peruano, fuego a leña, vino natural, el de moda.",
            "level": "$$ - us$30 a 50 por persona"
          },
          {
            "name": "Canta Rana (Barranco)",
            "what": "Cevichería de barrio destartalada, solo almuerzo, ceviche de pescado unos S/45.",
            "level": "$ - us$7 a 15 por persona"
          }
        ],
        "weather": "Principios de marzo es el final del verano limeño y el mejor clima del año: máximas de 26 a 28C, noches de 19 a 20C, humedad alta (70 a 85%), UV fuerte y prácticamente nada de lluvia: Lima es un desierto costero y la garúa gris es cosa de mayo a octubre, no de marzo. El mar está en su punto más cálido del año pero la corriente de Humboldt lo mantiene fresco, de 20 a 22C: las playas del malecón se nadan pero frías, nada tropical."
      },
      {
        "slug": "mancora",
        "name": "Mancora",
        "nights": 5,
        "note": "Las Pocitas y Vichayito, al sur del pueblo, es donde están las casas.",
        "hotels": [
          {
            "name": "DCO Suites, Lounge & Spa",
            "area": "Playa Las Pocitas, Máncora: directo sobre la arena",
            "nightUsd": 468,
            "ppUsd": 94,
            "why": "El cuarto mejor diseñado en la arena de Pocitas dentro del presupuesto; spa, playa privada.",
            "url": "https://www.booking.com/searchresults.html?ss=DCO%20Suites%20Lounge%20%26%20Spa%20Mancora",
            "score": "9,6 Booking",
            "estimate": true
          },
          {
            "name": "Makani Vichayito",
            "area": "Playa Vichayito Norte, km 1155 Panamericana Norte, 5 min al norte de Los Organos",
            "nightUsd": 327,
            "ppUsd": 65,
            "why": "Bungalows frente al mar en la arena más vacía de la zona; la opción conveniente.",
            "url": "https://www.booking.com/city/pe/vichayito.html",
            "score": "9,2 Booking",
            "site": "https://www.makanivichayito.com/",
            "estimate": true
          },
          {
            "name": "El Samay Hotel Boutique",
            "area": "Canoas de Punta Sal, Tumbes, cerca de la playa Punta Sal Grande, 25 a 45 min al norte de Máncora",
            "nightUsd": 300,
            "ppUsd": 60,
            "why": "El mejor puntuado de la costa norte, playa privada, la mitad del precio de Pocitas.",
            "url": "https://www.booking.com/city/pe/canoas-de-punta-sal.html",
            "score": "9,8 Booking (~220 opiniones) - el más alto del viaje",
            "estimate": true
          },
          {
            "name": "Arennas Mancora",
            "area": "Playa Las Pocitas, Máncora: sobre la playa, ~25 min a pie del centro de Pocitas",
            "nightUsd": 660,
            "ppUsd": 132,
            "why": "El pulido: villas con pileta sobre la playa, dos piletas, el resort más lindo de Pocitas.",
            "url": "https://www.booking.com/design/city/pe/mancora.html",
            "score": "9,2 en Booking, 229 opiniones",
            "site": "https://www.arennasmancora.com/en/home/",
            "over": true,
            "estimate": true
          },
          {
            "name": "KiChic",
            "area": "Las Pocitas / sur de Máncora, ~3km del pueblo, sobre la playa",
            "nightUsd": 780,
            "ppUsd": 156,
            "why": "Nueve habitaciones solo adultos, duchas al aire libre, cocina orgánica; el lujo de diseño.",
            "url": "https://www.booking.com/hotel/pe/kichic.html",
            "score": "9,5 Booking",
            "site": "https://www.kichic.pe/en/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Casa Claro de Luna - Las Pocitas (entire 5-bedroom beach house)",
            "area": "Playa Las Pocitas, Máncora",
            "sleeps": 10,
            "nightUsd": 400,
            "ppUsd": 80,
            "why": "Cinco cuartos en la arena de Pocitas: cada uno tiene su cuarto y una casa de playa.",
            "url": "https://www.airbnb.com/rooms/657930837608148100"
          },
          {
            "name": "House with Private Pool for 8 people - Vichayito",
            "area": "Vichayito",
            "sleeps": 8,
            "nightUsd": 280,
            "ppUsd": 56,
            "why": "Cuatro cuartos y pileta privada en Vichayito con puntaje perfecto de 5,0.",
            "url": "https://www.airbnb.com/rooms/1109685935939049308"
          },
          {
            "name": "Las Pocitas, brand new house with swimming pool (entire 4BR)",
            "area": "Playa Las Pocitas, Máncora",
            "sleeps": 12,
            "nightUsd": 350,
            "ppUsd": 70,
            "why": "Casa nueva de cuatro dormitorios con pileta, en el buen tramo de Pocitas.",
            "url": "https://www.airbnb.com/rooms/1321133264832239578"
          },
          {
            "name": "Paradise en Vichayito II (entire beachfront house)",
            "area": "Vichayito, sobre la playa",
            "sleeps": 6,
            "nightUsd": 180,
            "ppUsd": 36,
            "why": "Casa frente al mar en Vichayito con 245 reseñas de 4,87: el alquiler más probado de acá.",
            "url": "https://www.airbnb.com/rooms/41271186"
          },
          {
            "name": "Beachfront Casa DIEM Eco-Luxury Vichayito",
            "area": "Vichayito, sobre la playa",
            "sleeps": 6,
            "nightUsd": 300,
            "ppUsd": 60,
            "why": "La construcción ecológica de diseño sobre la arena de Vichayito; la elección arquitectónica entre los alquileres.",
            "url": "https://www.airbnb.com/rooms/53462358"
          }
        ],
        "food": [
          {
            "name": "La Sirena d'Juan (Mancora, main strip)",
            "what": "El restaurante fino de siempre del pueblo; mariscos peruano japoneses, chiquito, así que reservá mesa para cinco con tiempo.",
            "level": "$$$ - unos us$30 a 50 por persona"
          },
          {
            "name": "At(e)lier (Mancora)",
            "what": "Luz baja, platos chicos con onda y coctelería de autor; cosas inventivas como ñoquis de banana, opciones veganas.",
            "level": "$$$ - caro para Máncora, unos us$25 a 45 por persona"
          },
          {
            "name": "Tokuyo (Mancora)",
            "what": "El sushi y nikkei de Máncora; makis veganos y poke bowls además del pescado crudo.",
            "level": "$$ - unos us$15 a 30 por persona"
          },
          {
            "name": "La Biodega / Blacksheep Cafe (Mancora)",
            "what": "Cafés de día para café, chai, brunch y wifi que anda; Blacksheep tiene aire y murales.",
            "level": "$ - unos us$6 a 14 por persona"
          }
        ],
        "weather": "Marzo es el mes más caluroso de Máncora y el mejor para nadar del año: máximas de 30-31C (el servicio meteorológico nacional da 30.8C de máxima promedio en marzo), noches de 23-24C, mar en torno a 25C, lo más cálido que se pone, y unas 10.6 horas de sol por día. De diciembre a abril es temporada alta de playa, así que a principios de marzo hace calor, hay sol y está lleno, con tarifas de temporada alta y casas reservadas con meses de anticipación."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Lima",
        "title": "Barranco a pie",
        "acts": [
          {
            "name": "Caminata de arte callejero y arquitectura por Barranco",
            "what": "Caminata guiada de dos horas: Parque Municipal, murales de la Bajada de Baños, Puente de los Suspiros, malecón.",
            "ppUsd": 25,
            "duration": "2 horas",
            "when": "Mañana, arranque 10:00",
            "url": "https://www.getyourguide.com/lima-l39/colorful-barranco-tour-and-street-art-t853560/"
          },
          {
            "name": "MATE, Museo Mario Testino",
            "what": "La fotografía de moda y los retratos andinos de Testino en una casona de Barranco del siglo XIX restaurada.",
            "ppUsd": 8,
            "duration": "1 a 1,5 horas",
            "when": "Primera hora de la tarde (abre ~10:00-19:00)",
            "url": "https://mate.pe/"
          },
          {
            "name": "Museo Pedro de Osma",
            "what": "Mansión belle époque a 200m del MATE con pintura colonial, platería andina y arte amazónico.",
            "ppUsd": 10,
            "duration": "1 hora",
            "when": "Al caer la tarde",
            "url": "https://museopedrodeosma.org/"
          },
          {
            "name": "Cena en Isolina y después pisco en Lady Bee",
            "what": "Platos enormes para compartir en una taberna de la Lima vieja, después un bar de agave y pisco en Barranco.",
            "ppUsd": 55,
            "duration": "3 o 4 horas",
            "when": "De noche, desde las 20:00",
            "url": "https://www.isolina.pe/"
          }
        ]
      },
      {
        "n": 2,
        "place": "Lima",
        "title": "Huacas, mercado y malecón",
        "acts": [
          {
            "name": "Visita guiada a Huaca Pucllana",
            "what": "Pirámide preinca de adobe en pleno Miraflores residencial; recorrido guiado por las terrazas.",
            "ppUsd": 5,
            "duration": "1 hora",
            "when": "Mañana, 09:00-10:00 antes del calor",
            "url": "https://huacapucllanamiraflores.pe/"
          },
          {
            "name": "Recorrida por el mercado de Surquillo y clase de cocina de ceviche",
            "what": "Comprar ajíes, limones y pescado en el Mercado No.1 de Surquillo y cocinar ceviche, causa y un pisco sour.",
            "ppUsd": 75,
            "duration": "4 horas",
            "when": "Mañana, arranque 09:30 (el mercado está más fresco temprano)",
            "url": "https://www.getyourguide.com/lima-l39/cooking-classes-tc43/"
          },
          {
            "name": "Paseo en bici por el malecón, de Barranco a Miraflores",
            "what": "La ciclovía de 10km sobre el acantilado, pasando el Parque del Amor y Larcomar hasta Chorrillos y vuelta.",
            "ppUsd": 15,
            "duration": "2 o 3 horas",
            "when": "Al caer la tarde, 16:00-18:30 para el atardecer",
            "url": "https://www.getyourguide.com/lima-l39/bike-tours-tc180/"
          },
          {
            "name": "Parapente en tándem desde los acantilados de Miraflores",
            "what": "Vuelo en tándem de diez minutos desde el Parque Raimondi sobre el malecón y Larcomar.",
            "ppUsd": 100,
            "duration": "vuelo de 10 a 15 min, calculá 1 a 2 horas para cinco",
            "when": "Tarde, 12:00-17:00 cuando entra la brisa",
            "url": "https://www.getyourguide.com/lima-l39/air-activities-tc2/"
          }
        ]
      },
      {
        "n": 3,
        "place": "Máncora",
        "title": "Vuelo al norte y primera puesta",
        "acts": [
          {
            "name": "Llegada: atardecer en las pozas de Pocitas, ceviche y una Cusqueña fría",
            "what": "Caminar Las Pocitas con la marea baja, meterse en las pozas naturales de roca, comer en la arena.",
            "ppUsd": 15,
            "duration": "2 o 3 horas",
            "when": "16:30 al atardecer (~18:30 en marzo)",
            "url": "https://www.vivamancora.com/Peru/en/vichayito-beach/"
          }
        ]
      },
      {
        "n": 4,
        "place": "Máncora",
        "title": "Surf, barro y caballos",
        "acts": [
          {
            "name": "Clase de surf en el point break de Máncora",
            "what": "Izquierda larga y suave de arrecife; la sección de adentro es una de las mejores olas para principiantes de Sudamérica.",
            "ppUsd": 25,
            "duration": "1,5 a 2 horas",
            "when": "Temprano a la mañana, 07:00-09:00, antes del viento de la tarde",
            "url": "https://www.mancorakiteclub.com/solo-surf"
          },
          {
            "name": "Baños de barro de la Poza de Barro y el Mirador de Máncora",
            "what": "Poza termal de barro sulfuroso en el valle de Fernandez, 11km tierra adentro, se llega en mototaxi.",
            "ppUsd": 30,
            "duration": "2,5 horas",
            "when": "Fin de la mañana o media tarde",
            "url": "https://www.getyourguide.com/mancora-l219469/mancora-poza-de-barro-hot-springs-and-mirador-de-mancora-t948558/"
          },
          {
            "name": "Cabalgata por la playa de Vichayito al atardecer",
            "what": "Varios kilómetros de arena vacía entre Máncora y Vichayito en la hora dorada.",
            "ppUsd": 15,
            "duration": "1 a 1,5 horas",
            "when": "17:00-18:30, termina al atardecer",
            "url": "https://travitour.pe/en/products/paseo-costero-en-caballo"
          }
        ]
      },
      {
        "n": 5,
        "place": "Máncora",
        "title": "Tortugas en El Ñuro",
        "acts": [
          {
            "name": "Nadar con tortugas verdes en el muelle de El Nuro",
            "what": "Tortugas verdes silvestres se juntan bajo el muelle pesquero por los restos; se hace snorkel entre ellas desde una lancha chica.",
            "ppUsd": 10,
            "duration": "2 o 3 horas con el traslado",
            "when": "Mañana, 08:00-11:00 (el muelle abre 08:00-17:00, más calmo y claro temprano)",
            "url": "https://www.getyourguide.com/mancora-l219469/desde-mancora-nado-con-tortugas-paseo-en-catamaran-y-avistamiento-de-aves-t953477/"
          },
          {
            "name": "Almuerzo en Los Organos y la izquierda de La Vuelta",
            "what": "Almuerzo de pueblo pesquero y mirar o surfear La Vuelta, izquierda de arrecife potente y tubular.",
            "ppUsd": 15,
            "duration": "3 o 4 horas",
            "when": "Del mediodía a la caída de la tarde",
            "url": "https://www.vivamancora.com/Peru/en/surf-and-kitesurf/"
          }
        ]
      },
      {
        "n": 6,
        "place": "Máncora",
        "title": "Punta Sal y Cabo Blanco",
        "acts": [
          {
            "name": "Excursión de un día al norte, a Punta Sal / Canoas",
            "what": "La playa más ancha, calma y vacía del tramo, 25 a 45 min al norte, en la región de Tumbes.",
            "ppUsd": 20,
            "duration": "Todo el día",
            "when": "Salida 09:00, vuelta para el atardecer",
            "url": "https://www.booking.com/city/pe/canoas-de-punta-sal.html"
          },
          {
            "name": "Cabo Blanco: el club de pesca de Hemingway y el tubo",
            "what": "Cuarenta minutos al sur; el club de pesca mayor de los años 50 y una izquierda tubera famosa.",
            "ppUsd": 25,
            "duration": "Medio día",
            "when": "Mañana, al amanecer por la ola",
            "url": "https://en.wikipedia.org/wiki/Cabo_Blanco,_Peru"
          }
        ]
      },
      {
        "n": 7,
        "place": "Máncora",
        "title": "El último día sin plan",
        "acts": [
          {
            "name": "Último día tranqui: SUP o snorkel y tragos al atardecer en Máncora",
            "what": "Paddle en el agua planchada de Vichayito a la mañana y los bares de playa de Máncora al atardecer.",
            "ppUsd": 25,
            "duration": "Medio día más la noche",
            "when": "SUP 08:00-10:00 (agua más planchada); bares desde 18:00",
            "url": "https://www.makanivichayito.com/"
          }
        ]
      },
      {
        "n": 8,
        "place": "Buenos Aires",
        "title": "Vuelta",
        "acts": [
          {
            "name": "Vuelo de vuelta",
            "what": "Volvemos a Buenos Aires.",
            "ppUsd": 0
          }
        ]
      }
    ],
    "flights": {
      "w1": [
        {
          "kind": "directo",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 335,
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 370,
          "dep": "05:00",
          "arr": "08:00",
          "flight": "H2 5800",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 455,
          "dep": "03:55",
          "arr": "06:45",
          "flight": "LA 2376",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h30m-10h30m (2h15 + 2h-4h layover + 3h45)",
          "priceUsd": 300,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h45m-11h",
          "priceUsd": 320,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
          "from": "AEP",
          "to": "LIM",
          "duration": "8h30m-11h",
          "priceUsd": 310,
          "via": "SCL",
          "estimate": true
        }
      ],
      "w2": [
        {
          "kind": "directo",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 270,
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 290,
          "dep": "05:00",
          "arr": "08:00",
          "flight": "H2 5800",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 385,
          "dep": "03:55 / 07:35",
          "arr": "06:45 / 10:25",
          "flight": "LA 2376 / LA 2946",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h30m-10h30m",
          "priceUsd": 245,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h45m-11h",
          "priceUsd": 260,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
          "from": "AEP",
          "to": "LIM",
          "duration": "8h30m-11h",
          "priceUsd": 255,
          "via": "SCL",
          "estimate": true
        }
      ],
      "w3": [
        {
          "kind": "directo",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 285,
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 305,
          "dep": "05:00",
          "arr": "08:00",
          "flight": "H2 5800",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "4h50m",
          "priceUsd": 400,
          "dep": "03:55 / 07:35",
          "arr": "06:45 / 10:25",
          "flight": "LA 2376 / LA 2946",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h30m-10h30m",
          "priceUsd": 255,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "from": "EZE",
          "to": "LIM",
          "duration": "8h45m-11h",
          "priceUsd": 275,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
          "from": "AEP",
          "to": "LIM",
          "duration": "8h30m-11h",
          "priceUsd": 265,
          "via": "SCL",
          "estimate": true
        }
      ]
    },
    "hops": [
      {
        "route": "LIM-TYL",
        "airline": "LATAM Peru; Sky Airline Peru",
        "duration": "1h50m sin escalas",
        "priceUsd": 150,
        "frequency": "~27-30 weekly, 3-5 departures/day; departures spread 05:35-19:05",
        "estimate": true
      }
    ],
    "transfers": [
      {
        "route": "Talara airport (TYL) - Mancora",
        "mode": "transfer privado / taxi (auto o van, reservado antes)",
        "duration": "1h15m-1h30m (~78 km)",
        "costUsd": 55
      },
      {
        "route": "Talara airport (TYL) - Mancora",
        "mode": "colectivo / combi (compartido)",
        "duration": "1h30m-2h30m",
        "costUsd": 4
      },
      {
        "route": "Tumbes airport (TBP) - Mancora",
        "mode": "transfer privado / taxi",
        "duration": "1h30m-1h50m (~110 km)",
        "costUsd": 70
      },
      {
        "route": "Piura airport (PIU) - Mancora",
        "mode": "van privada / micro",
        "duration": "2h25m-3h00m (~185 km)",
        "costUsd": 90
      },
      {
        "route": "Lima (LIM airport or Miraflores) - Paracas",
        "mode": "Bus Cruz del Sur (Ejecutivo / Cruzero)",
        "duration": "3h15m-3h45m (~245 km por la Panamericana Sur)",
        "costUsd": 25
      }
    ],
    "verdict": "Máncora es la única playa peruana con cinco días de sol seguro en marzo. Las Pocitas y Vichayito, al lado del pueblo, tienen los hoteles lindos y las casas enteras.",
    "warning": "Las ballenas son de julio a octubre, así que en marzo no hay. Second Home tiene ocho habitaciones y se llena: reservar eso primero. Volver el domingo 21 cae en Domingo de Ramos.",
    "seasonality": "La segunda semana es la más barata: Sky publica us$396 para febrero contra us$220 para marzo en el mismo vuelo. La tercera tiene el mejor mar, unos 25 grados.",
    "gettingAround": "En Máncora se anda en mototaxi y para cinco hacen falta dos o tres. De Talara al pueblo, hora y cuarto en van.",
    "sources": [
      "https://www.flightconnections.com/flights-from-eze-to-lim",
      "https://www.flightconnections.com/flights-from-lim-to-eze",
      "https://www.flightconnections.com/flights-from-aep-to-lim",
      "https://www.flightconnections.com/flights-from-lim-to-aep",
      "https://www.flightconnections.com/flights-from-eze-to-scl",
      "https://www.flightconnections.com/flights-from-scl-to-lim",
      "https://www.aeroroutes.com/eng/260818-janw26eze",
      "https://info.flightmapper.net/flight/Aerolineas_Argentinas_AR_1364",
      "https://www.infoviajera.com/2026/03/relato-de-vuelo-desde-el-nuevo-aeropuerto-de-lima-peru-hacia-buenos-aires-con-aerolineas-argentinas/"
    ]
  },
  {
    "slug": "colombia",
    "n": "02",
    "name": "Cartagena & Barú",
    "place": "Colombia",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Tres días en la ciudad amurallada y cuatro en Barú.",
    "heroDir": "cartagena",
    "photoDirs": [
      "cartagena",
      "baru"
    ],
    "stops": [
      {
        "slug": "cartagena",
        "name": "Cartagena de Indias",
        "nights": 3,
        "note": "Adentro de la muralla y en Getsemaní, todo a pie.",
        "hotels": [
          {
            "name": "Townhouse Boutique Hotel",
            "area": "San Diego, Calle Segunda de Badillo 36-88, dentro de las murallas",
            "nightUsd": 447,
            "ppUsd": 89,
            "why": "La elección de diseño: interiores de hotel de arte, la mejor terraza de la ciudad amurallada, solo hacen falta dos habitaciones.",
            "url": "https://www.booking.com/hotel/co/townhouse-boutique.en.html",
            "score": "8,9 muy bueno (169 opiniones, Kayak)",
            "site": "https://www.townhousecartagena.com/",
            "estimate": true
          },
          {
            "name": "Hotel Kartaxa",
            "area": "San Diego, dentro de la ciudad amurallada",
            "nightUsd": 487,
            "ppUsd": 97,
            "why": "El mejor puntuado en presupuesto dentro de las murallas; pileta, desayuno, la calma de San Diego, 25 habitaciones.",
            "url": "https://www.booking.com/hotel/co/hotel-kartaxa.en.html",
            "score": "9,4 excelente (913 opiniones, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Boutique Casa del Coliseo",
            "area": "El Centro, Calle del Coliseo 35-23, a pasos de la Catedral",
            "nightUsd": 448,
            "ppUsd": 90,
            "why": "Doce habitaciones, murales, pileta en la terraza, dirección top del Centro por noventa por cabeza.",
            "url": "https://www.booking.com/hotel/co/casa-del-coliseo.en.html",
            "score": "9,2 excelente (936 opiniones, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Casa Pizarro",
            "area": "Getsemaní, Calle del Pozo 25-56",
            "nightUsd": 420,
            "ppUsd": 84,
            "why": "El más barato por cabeza entre los buenos; pileta en el patio, spa, azotea, 1.900 reseñas.",
            "url": "https://www.booking.com/hotel/co/casa-pizarro-boutique.en.html",
            "score": "8,9 muy bueno (1,933 opiniones, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Capellán de Getsemaní",
            "area": "Getsemaní, Carrera 9 No. 29-52, al lado del Parque Centenario",
            "nightUsd": 540,
            "ppUsd": 108,
            "why": "El hotel más lindo al alcance: pileta en la azotea con jacuzzi, spa, suites de dos cuartos.",
            "url": "https://www.booking.com/hotel/co/capellan-de-getsemani.en.html",
            "score": "9,3 excelente (836 opiniones, Kayak)",
            "site": "https://hotelcapellandegetsemani.com/en/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Old City Sanctuary - luxury colonial villa with private pool",
            "area": "Ciudad amurallada, El Centro",
            "sleeps": 10,
            "nightUsd": 600,
            "ppUsd": 120,
            "why": "La opción más linda de este archivo: arcos coloniales originales, techos altos, pileta privada.",
            "url": "https://www.airbnb.com/rooms/713364"
          },
          {
            "name": "Casa Salvatore - 4BR colonial house with private pool",
            "area": "Getsemaní, a pocas cuadras de la Torre del Reloj",
            "sleeps": 9,
            "nightUsd": 500,
            "ppUsd": 100,
            "why": "Cinco camas reales justas para cinco; casa colonial, pileta privada, limpieza diaria.",
            "url": "https://www.airbnb.com/rooms/1111144595599803777"
          },
          {
            "name": "3-bedroom colonial house in the Walled City, pool + rooftop jacuzzi",
            "area": "El Centro, casco histórico (dirección exacta después de reservar)",
            "sleeps": 12,
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "Pileta abajo más jacuzzi en la azotea, cuartos con baño propio, mayordomo; la casa buena más barata.",
            "url": "https://www.airbnb.com/rooms/856462808151932857"
          },
          {
            "name": "5-bedroom colonial villa with rooftop pool, San Diego",
            "area": "San Diego, a pasos de la Plaza de San Diego, dentro de las murallas",
            "sleeps": 16,
            "nightUsd": 525,
            "ppUsd": 105,
            "why": "Casona colonial restaurada, pileta privada en la terraza, cama king en cada habitación, desayuno incluido.",
            "url": "https://www.airbnb.com/rooms/51493412"
          },
          {
            "name": "FILTERED SEARCH - whole homes with pools, Getsemaní and the walled city",
            "area": "Getsemaní / El Centro / San Diego",
            "sleeps": 6,
            "nightUsd": 400,
            "ppUsd": 80,
            "why": "Dónde buscar una casona de 3 dormitorios del tamaño justo en vez de pagar una mansión de dieciséis camas.",
            "url": "https://www.airbnb.com/getsemani-cartagena-colombia/stays/pools",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Celele",
            "what": "Caribe colombiano, No.5 del Latin America's 50 Best, Getsemaní. Principales $16 a 23, degustación unos $78. Reservá con 1 o 2 semanas; piden tarjeta y consumo mínimo, y una mesa de cinco necesita más.",
            "level": "$$$$"
          },
          {
            "name": "Carmen",
            "what": "Ingredientes caribeños, técnica europea, El Centro. Principales $18 a 27, degustación $68 a 83. El otro pilar de alta cocina junto a Celele.",
            "level": "$$$$"
          },
          {
            "name": "Marea by Rausch",
            "what": "Mariscos y risotto frente al agua en Getsemaní, de los hermanos Rausch. $22 a 34 por persona. Lo mejor del escalón elegante sin menú de degustación, y más fácil de sentar a cinco que Celele.",
            "level": "$$$"
          },
          {
            "name": "La Cevichería",
            "what": "La cevichería de Bourdain, Calle Stuart cerca de la Plaza San Diego, El Centro. $13 a 23. Andá temprano, se hace cola.",
            "level": "$$$"
          }
        ],
        "weather": "Principios de marzo es temporada seca y casi lo mejor que da esta costa: mínimas de 24 a 25C, máximas de 30 a 32C, mar a 28 o 29C, unas 11,6 horas de sol y muy poca lluvia. El problema es el viento."
      },
      {
        "slug": "baru",
        "name": "Isla Barú",
        "nights": 4,
        "note": "Se llega por el puente, sin depender de lanchas.",
        "hotels": [
          {
            "name": "Thani Ecobeach Barú",
            "area": "La punta tranquila de Playa Blanca, norte de Barú (Pendales)",
            "nightUsd": 420,
            "ppUsd": 84,
            "why": "El mejor hotel de playa en presupuesto en Barú; kayak y paddle gratis, cuartos familiares con vista al mar.",
            "url": "https://www.booking.com/hotel/co/thani-ecobeach-baru.html",
            "score": "Strong, 234 Booking reviews",
            "estimate": true
          },
          {
            "name": "Aura Hotel Barú",
            "area": "Oeste de Barú, frente a Isla Cholón",
            "nightUsd": 437,
            "ppUsd": 87,
            "why": "Entra en presupuesto para cinco, playa privada y calma, a quince minutos en lancha de los Rosarios.",
            "url": "https://www.booking.com/region/co/baru.html",
            "score": "Mixed-positive en Tripadvisor, praised for beach and service",
            "estimate": true
          },
          {
            "name": "Playa Manglares Isla Barú",
            "area": "Norte de Barú, lado manglar y playa",
            "nightUsd": 571,
            "ppUsd": 114,
            "why": "Al que se va por la comida; entorno de manglar, mucho más tranquilo que Playa Blanca.",
            "url": "https://www.booking.com/region/co/baru.html",
            "over": true,
            "estimate": true
          },
          {
            "name": "Sabai Beach Hotel",
            "area": "Punta suroeste de Barú, dentro del Parque Natural Corales del Rosario",
            "nightUsd": 784,
            "ppUsd": 157,
            "why": "200 metros de arena blanca privada, de verdad aislada; la mejor playa de la lista.",
            "url": "https://www.booking.com/region/co/baru.html",
            "score": "9,0 excelente (582 opiniones, Kayak)",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Private house facing the Caribbean, Barú Island (4BR, private beach + pool)",
            "area": "Isla Barú, frente al mar",
            "sleeps": 12,
            "nightUsd": 500,
            "ppUsd": 100,
            "why": "Playa privada y pileta privada a cien por cabeza; la respuesta correcta para Barú.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Spectacular home in Barú with private beach, marina and pool",
            "area": "Barú, playa privada con marina propia",
            "sleeps": 8,
            "nightUsd": 600,
            "ppUsd": 120,
            "why": "Marina propia: la lancha te busca en la casa, no en un muelle público.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Ojalá - private villa with its own dock, Cholón",
            "area": "Cholón, oeste de Barú",
            "sleeps": 12,
            "nightUsd": 900,
            "ppUsd": 180,
            "why": "Mayordomo y cocinero incluidos, muelle privado sobre Cholón; el lujo del grupo.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Waterfront apartment, Calablanca Residences",
            "area": "Norte de Barú, Calablanca (al lado del Sofitel)",
            "sleeps": 8,
            "nightUsd": 350,
            "ppUsd": 70,
            "why": "La casa entera creíble más barata de la isla, sobre el agua buena del extremo norte.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "FILTERED SEARCH - Barú whole homes with private pools",
            "area": "Todo Barú y Cholón",
            "sleeps": 6,
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "En Barú las villas le ganan a los hoteles en diseño y precio; acá hay que buscar.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Your hotel or villa",
            "what": "Seamos realistas: Barú no es un destino de restaurantes y casi todas las noches comés donde dormís. Calculá $15 a 30 por persona en Thani o Aura, más en Sabai. La comida de Thani es buena pero las reseñas marcan porciones chicas para el precio. Una villa con cocina (y a veces con cocinero) cambia bastante la cuenta para cinco.",
            "level": "$$-$$$"
          },
          {
            "name": "Playa Manglares Isla Barú",
            "what": "La única propiedad de la isla con fama real de comida: vale reservar mesa aunque duermas en otro lado. Unos $25 a 40 por persona.",
            "level": "$$$"
          },
          {
            "name": "Sabai Beach restaurant",
            "what": "Abierto también a los que no se alojan, en la playa privada de la punta suroeste. El mejor lugar de la isla para un almuerzo largo. $30 a 50 por persona.",
            "level": "$$$"
          },
          {
            "name": "Nena Beach Club, Playa Blanca",
            "what": "Almuerzo de beach club en la arena famosa: reposeras, pescado frito, arroz con coco, tragos. Suele ser pase de día o consumo mínimo, unos $30 a 50 por persona.",
            "level": "$$$"
          }
        ],
        "weather": "Los mismos números de temporada seca que Cartagena: 30-32C, mar a 28-29C, casi nada de lluvia, pero en Barú el viento no es un detalle, ordena los días. De diciembre a mayo los vientos alisios soplan fuerte en este tramo y el efecto práctico es que las mañanas están planchadas y las tardes se pican; los guías locales describen los cruces en lancha de la tarde en esta época como realmente bravos."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Cartagena",
        "title": "La ciudad amurallada",
        "acts": [
          {
            "name": "Caminata de orientación por la ciudad amurallada y atardecer en la muralla",
            "what": "Llegar, dejar las valijas y caminar del Centro a San Diego, a Las Bóvedas y arriba a la muralla para el atardecer. Tres opciones para el trago: Café del Mar, construido sobre la muralla, icónico y repleto, reservá o llegá 16:30, precios altos; Baluarte de Santo Domingo al lado, mucho menos lleno y bastante más barato; o el rooftop del Townhouse en San Diego, dos piletas chicas y DJ al atardecer, acceso a la pileta unos 50.000 COP. Si querés la vista de 360 grados sobre la ciudad vieja, la bahía y el skyline y no solo el mar, el rooftop del Movich a una cuadra de la Plaza Bolívar les gana a todos: abierto al público pero cierra por eventos privados, así que llamá antes.",
            "ppUsd": 30,
            "duration": "3 o 4 horas",
            "when": "Día 1, desde las 16:00 (atardecer cerca de 18:10 a principios de marzo)",
            "url": "https://www.townhousecartagena.com/rooftop"
          },
          {
            "name": "Primera cena: La Cevichería",
            "what": "La cevichería de Bourdain en Calle Stuart, junto a la Plaza San Diego. Chica y con patio, históricamente sin reservas, así que andá 18:30 o esperá cola, y una cola de cinco es peor que una de dos. Si está imposible, El Boliche Cebichería a unas cuadras es la opción local con mejor precio, $12 a 21.",
            "ppUsd": 30,
            "duration": "2 horas",
            "when": "Día 1, 19:30",
            "url": "https://thecartagena.guide/best-restaurants-cartagena/"
          }
        ]
      },
      {
        "n": 2,
        "place": "Cartagena",
        "title": "Bazurto, San Felipe y champeta",
        "acts": [
          {
            "name": "Tour de comida por el mercado de Bazurto",
            "what": "No la Cartagena turística: el mercado mayorista de verdad al este del centro, con guía, comiendo entre puestos de fruta, fritangas, carnicerías y un almuerzo sentados. Lo hacen Cartagena Connections y Juan Ballena, en general arranque 10:30 con transporte en bus local, degustación de frutas y almuerzo incluidos. Cinco es un buen número: casi todos topan el grupo chico en seis. Andá con operador, no por tu cuenta.",
            "ppUsd": 50,
            "duration": "4 horas",
            "when": "Día 2, 10:30",
            "url": "https://www.cartagenaconnections.com/mercado-bazurto-tour"
          },
          {
            "name": "Castillo San Felipe de Barajas, al final de la tarde",
            "what": "La gran fortaleza de la loma con la red de túneles. Andá 16:00-17:30, no al mediodía: no hay sombra y el sol de marzo castiga. Una hora y media contando los túneles y la vista sobre la ciudad vieja.",
            "ppUsd": 9,
            "duration": "1,5 horas",
            "when": "Día 2, 16:30",
            "url": "https://www.viator.com/Cartagena-attractions/Castillo-de-San-Felipe-de-Barajas/d4498-a18278"
          },
          {
            "name": "Celele y después champeta en Bazurto Social Club",
            "what": "Celele, en Getsemaní, es por lo que los foodies viajan acá: No.5 en Latin America's 50 Best 2025, No.48 en el World's 50 Best, cocina caribeña colombiana salida de la investigación del Caribe Project. Principales $16 a 23, degustación unos $78. Reservar es casi obligatorio: cierran la puerta después del check in, piden tarjeta y consumo mínimo, y hace falta una semana entre semana y dos para el finde; una mesa para cinco cuesta más que una para dos, así que reservá apenas tengan fechas. Después, cinco minutos a pie hasta Bazurto Social Club, en la Avenida del Centenario, para champeta en vivo y cultura de picó: el lado palenquero y afrocaribeño de la ciudad que la ciudad amurallada tapa.",
            "ppUsd": 85,
            "duration": "5 horas",
            "when": "Día 2, cena 19:30, champeta 22:30",
            "url": "https://www.cartagenaexplorer.com/celele-cartagena-restaurant-review/"
          }
        ]
      },
      {
        "n": 3,
        "place": "Cartagena",
        "title": "Getsemaní y la bahía",
        "acts": [
          {
            "name": "Caminata de arte callejero y cultura por Getsemaní",
            "what": "Dos o tres horas por los murales, la Calle de la Sierpe, la Plaza de la Trinidad y los paraguas del Callejón Angosto, con la gentrificación y la historia afrocaribeña que traen. La caminata compartida de grafitis sale unos $15 a 40; un guía privado para los cinco con un snack va más cerca de $40 a 60 por persona y vale la pena. A la mañana, antes del calor.",
            "ppUsd": 25,
            "duration": "2 o 3 horas",
            "when": "Día 3, 09:00",
            "url": "https://www.getyourguide.com/cartagena-l362/cartagena-getsemani-highlights-and-graffiti-walking-tour-t391473/"
          },
          {
            "name": "Volcán de lodo del Totumo (opcional: evaluarlo con honestidad)",
            "what": "Cono de barro de 15 metros a una hora al norte: te metés, flotás en arcilla gris tibia y te enjuagás en la laguna. Tours grupales de medio día $35 a 45 por persona, en grupo chico o privados $50 a 65, o $5 a 6 en la puerta si van manejando. Antes de decidir: es kitsch y está lleno, y el 'masaje', la 'ayuda con las fotos' y el 'lavado' esperan $2 de propina cada uno. Saltealo si el grupo prefiere una clase de cocina caribeña en serio ($70 a 90 por persona): mismo horario de mañana, mejor recuerdo.",
            "ppUsd": 45,
            "duration": "4 o 5 horas",
            "when": "Día 3, 08:00",
            "url": "https://www.getyourguide.com/cartagena-l362/cartagena-totumo-mud-volcano-experience-t323228/"
          },
          {
            "name": "Velero al atardecer por la bahía, después chiva o Alquímico",
            "what": "Catamarán compartido al atardecer por la bahía, de 90 minutos a dos horas, $25 a 50 por persona, casi siempre con barra libre de ron; el más recomendado es Sibarita Express. Un charter privado de noche para los cinco sale $500 a 750, o sea $100 a 150 por persona: solo vale si quieren el barco para ustedes. Después elijan la noche: la chiva rumbera, el bus pintado con banda de bronces y barra libre de aguardiente (unos $25 a 40 por persona, 3 horas, ridículo a propósito), o la versión adulta: Alquímico, en la Calle del Colegio, tres pisos, botellas con hierbas brillando en estantes de dos pisos, habitual del World's 50 Best Bars, y después salsa en Café Havana, en Getsemaní.",
            "ppUsd": 45,
            "duration": "6 horas",
            "when": "Día 3, zarpan 17:00, desde las 21:00",
            "url": "https://www.getyourguide.com/cartagena-l362/sunset-tours-tc306/"
          }
        ]
      },
      {
        "n": 4,
        "place": "Barú",
        "title": "Cruce a Barú y plancton",
        "acts": [
          {
            "name": "Traslado a Barú y Playa Blanca cuando se van las lanchas del día",
            "what": "Van privada desde la ciudad amurallada por el puente de Barbacoas, 1h a 1h15 puerta a puerta, unos 350.000 a 450.000 COP (us$85 a 110) por una van de cinco, o sea us$17 a 22 cada uno: que lo arregle el hotel. Check in y después caminar a Playa Blanca cerca de las 16:30, cuando ya se fueron las lanchas y las vans del día. Esta es la versión de esa playa que vale la pena: la misma arena blanca, sin vendedores, sin gente, con luz baja.",
            "ppUsd": 20,
            "duration": "Medio día",
            "when": "Día 4, salida de Cartagena 11:00",
            "url": "https://www.tomplanmytrip.com/best-isla-baru-hotels-colombia/"
          },
          {
            "name": "Nadar de noche con plancton bioluminiscente",
            "what": "Lancha chica a la laguna oscura de manglar cerca de Manzanillo del Mar / Portonaito, donde los dinoflagelados destellan azul cuando movés el agua. Es el mejor argumento para dormir en Barú en vez de ir por el día, porque solo se hace de noche. Por tu cuenta desde un hotel de Barú, unos $25 a 35 por persona; como excursión nocturna desde Cartagena, $50 a 70 por persona. Andá la noche más oscura que consigas: la luna brillante lo borra del todo, así que fijate la fase de la luna contra tus fechas antes de reservar.",
            "ppUsd": 30,
            "duration": "2 o 3 horas",
            "when": "Día 4, después de oscurecer (más o menos 19:30-21:30)",
            "url": "https://www.getyourguide.com/baru-island-l114977/bioluminescence-tours-tc2385/"
          }
        ]
      },
      {
        "n": 5,
        "place": "Barú",
        "title": "Lancha propia a los Rosarios",
        "acts": [
          {
            "name": "Lancha privada: islas del Rosario, snorkel y Cholón",
            "what": "El día grande, y la razón por la que Barú funciona. Alquilá tu propia lancha en vez de sumarte a un tour: una de 28 pies (10-12 pax) sale desde 1.800.000 COP, unos us$450, y una de 29 pies desde us$475, capitán y combustible incluidos, conservadora y equipo de música a bordo. Dividido entre cinco son us$90 a 95 cada uno: mejor que los pases de día de beach club a $93 a 125 por persona, y controlás la ruta y los horarios. Salida estándar: arrancar cerca de 08:30 con el mar todavía planchado, snorkel en los arrecifes del Rosario (10-15m de visibilidad, parque marino protegido), almuerzo en un club de la isla y a la tarde Cholón, la laguna de lanchas fondeadas donde se amarran todos, equipos de música compitiendo, bares flotantes vendiendo ceviche y mojitos. Ruidoso, desprolijo, muy colombiano, y mucho mejor en una lancha propia. Sumá us$7.50 por persona de entrada al parque nacional y us$2 por persona de seguro marítimo, solo efectivo.",
            "ppUsd": 100,
            "duration": "8 horas, 08:30-17:00",
            "when": "Día 5, y agarrá la primera mañana despejada, nunca la tarde",
            "url": "https://www.cartagenaconnections.com/private-boats.html"
          }
        ]
      },
      {
        "n": 6,
        "place": "Barú",
        "title": "Aviario y manglares",
        "acts": [
          {
            "name": "Aviario Nacional de Colombia",
            "what": "En Barú mismo, sin lancha: 21 exhibiciones en tres ecosistemas reconstruidos, unas 170 especies, dos demostraciones de vuelo por día con cuidador. Está muy bien hecho, y es el mejor plan B para una mañana de mucho viento. Entrada adulto extranjero 90.000 COP (unos us$22) a septiembre de 2026, estudiantes 65.000 COP.",
            "ppUsd": 22,
            "duration": "3 horas",
            "when": "Día 6, desde las 09:00, cuando abre",
            "url": "https://aviarionacional.co/"
          },
          {
            "name": "Kayak por los canales de manglar y después nada",
            "what": "El lado de la laguna de Barú está lleno de canales de manglar que se reman en agua plana incluso cuando el mar abierto está picado, que a media tarde en marzo suele estarlo. Varios hoteles prestan el equipo gratis: Thani Ecobeach incluye un kayak doble y un paddleboard sin cargo. Después, no hacer nada a propósito el resto del día. En una parada de playa de cuatro noches, un día vacío es todo el punto.",
            "ppUsd": 0,
            "duration": "2 horas más el resto del día",
            "when": "Día 6, 15:30",
            "url": "https://www.booking.com/hotel/co/thani-ecobeach-baru.html"
          }
        ]
      },
      {
        "n": 7,
        "place": "Barú",
        "title": "Snorkel y la última puesta",
        "acts": [
          {
            "name": "Snorkel a la mañana, o un pase de día a un beach club",
            "what": "Dos maneras de cerrar. O una salida de snorkel de medio día a los jardines de coral del Rosario, unos $40 a 70 por persona por el hotel, de nuevo a la mañana, cuando el agua está más clara y calma. O un pase de día en alguno de los beach clubs de diseño y ponerse horizontal: en Barú, Nena Beach Club, Sabai Beach Club, Mambo o Sunset Beach Club, y ninguno cobra muelle si llegás por tierra. En los Rosarios los pases medios van $93 a 125 por persona con lancha y almuerzo (Capri, Pa'ue, Mangata), que es exactamente por qué la lancha privada del día 5 es el mejor gasto para cinco personas.",
            "ppUsd": 55,
            "duration": "De medio día a todo el día",
            "when": "Día 7, 09:00",
            "url": "https://cartagenadaytours.com/blogs/travel-guide/best-beach-clubs-in-rosario-islands"
          },
          {
            "name": "Último atardecer, mirando al oeste",
            "what": "Barú mira al oeste, así que a diferencia de Cartagena el sol cae al mar abierto desde tu propia playa. Sin reserva, sin barco, sin precio. Vuelta a Cartagena el día 8 por ruta, como una hora, y listo.",
            "ppUsd": 0,
            "duration": "1 hora",
            "when": "Día 7, 17:45"
          }
        ]
      },
      {
        "n": 8,
        "place": "Buenos Aires",
        "title": "Vuelta",
        "acts": [
          {
            "name": "Vuelo de vuelta",
            "what": "Volvemos a Buenos Aires.",
            "ppUsd": 0
          }
        ]
      }
    ],
    "flights": {
      "w1": [
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "AEP → CTG",
          "from": "AEP",
          "to": "CTG",
          "duration": "7h10m",
          "priceUsd": 750,
          "dep": "12:45",
          "arr": "17:55",
          "flight": "AR1362",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h06m",
          "priceUsd": 660,
          "dep": "01:35",
          "arr": "05:41",
          "flight": "AV218",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h20m",
          "priceUsd": 660,
          "dep": "07:10",
          "arr": "11:30",
          "flight": "AV88",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 690,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 650,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "14h00m-18h00m",
          "priceUsd": 450,
          "via": "LIM",
          "estimate": true
        }
      ],
      "w2": [
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "AEP → CTG",
          "from": "AEP",
          "to": "CTG",
          "duration": "7h10m",
          "priceUsd": 740,
          "dep": "12:45",
          "arr": "17:55",
          "flight": "AR1362",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h06m",
          "priceUsd": 650,
          "dep": "01:35",
          "arr": "05:41",
          "flight": "AV218",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h20m",
          "priceUsd": 650,
          "dep": "07:10",
          "arr": "11:30",
          "flight": "AV88",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 675,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 640,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "14h00m-18h00m",
          "priceUsd": 440,
          "via": "LIM",
          "estimate": true
        }
      ],
      "w3": [
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "AEP → CTG",
          "from": "AEP",
          "to": "CTG",
          "duration": "7h10m",
          "priceUsd": 800,
          "dep": "12:45",
          "arr": "17:55",
          "flight": "AR1362",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h06m",
          "priceUsd": 700,
          "dep": "01:35",
          "arr": "05:41",
          "flight": "AV218",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "from": "EZE",
          "to": "BOG",
          "duration": "6h20m",
          "priceUsd": 700,
          "dep": "07:10",
          "arr": "11:30",
          "flight": "AV88",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 760,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 700,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
          "from": "EZE",
          "to": "CTG",
          "duration": "14h00m-18h00m",
          "priceUsd": 520,
          "via": "LIM",
          "estimate": true
        }
      ]
    },
    "hops": [],
    "transfers": [
      {
        "route": "Cartagena (Muelle de la Bodeguita) - Playa Blanca, Baru",
        "mode": "Lancha compartida",
        "duration": "45 a 60 min directo; ~2h en lancha de tour con paradas",
        "costUsd": 8
      },
      {
        "route": "Cartagena - Playa Blanca, Baru",
        "mode": "Por ruta, vía el puente de Pasacaballos (taxi / van privada)",
        "duration": "1h15m-1h45m",
        "costUsd": 80
      },
      {
        "route": "Cartagena - Playa Blanca, Baru",
        "mode": "Bus público a Pasacaballos + mototaxi",
        "duration": "60 a 70 min de bus + ~20 min de mototaxi",
        "costUsd": 6
      },
      {
        "route": "Cartagena - Islas del Rosario",
        "mode": "Tour en lancha por el día",
        "duration": "1h a 1h15m por tramo",
        "costUsd": 47
      },
      {
        "route": "Cartagena (Bocagrande / Castillogrande) - Tierra Bomba",
        "mode": "Lancha",
        "duration": "10 a 25 min",
        "costUsd": 5
      }
    ],
    "verdict": "Barú es la única playa a la que se llega por tierra, así que nadie depende de la lancha de las nueve. Durmiendo ahí, Playa Blanca queda vacía al amanecer y al atardecer.",
    "warning": "Semana Santa arranca el domingo 21 de marzo, justo cuando termina la tercera semana. Ojo con Wingo entre Bogotá y Cartagena: la valija se paga aparte y para cinco se come el ahorro.",
    "seasonality": "Marzo es temporada alta en el Caribe y los hoteles de adentro de la muralla se van a precio de Nueva York. La segunda semana es la mejor: pasó febrero y todavía falta para Semana Santa.",
    "gettingAround": "Aerolíneas vuela sin escalas de Aeroparque a Cartagena desde el 1 de enero de 2027, cinco veces por semana. A Barú se va por el puente, una hora en auto.",
    "sources": [
      "https://en.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez_International_Airport",
      "https://www.aeroroutes.com/eng/260903-ar1q27ctg",
      "https://www.sirchandler.com.ar/2026/08/aerolineas-argentinas-volara-a-curazao-%F0%9F%87%A8%F0%9F%87%BC-y-cartagena-%F0%9F%87%A8%F0%9F%87%B4/",
      "https://volavi.co/aviacion/noticias/aerolineas-argentinas-vuelos-cartagena-buenos-aires",
      "https://www.infobae.com/economia/2026/08/26/aerolineas-argentinas-suma-dos-destinos-nuevos-en-el-caribe-para-el-verano-2027-uno-de-ellos-fue-sensacion-en-el-mundial/",
      "https://www.flightconnections.com/flights-from-eze-to-bog",
      "https://www.flightconnections.com/flights-from-aep-to-bog",
      "https://www.flightconnections.com/flights-from-bog-to-ctg",
      "https://www.airportia.com/flights/av218/ezeiza/bogota/"
    ]
  },
  {
    "slug": "usa",
    "n": "03",
    "name": "Miami & los Cayos",
    "place": "Estados Unidos",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Tres días en Miami y cuatro en los Cayos.",
    "heroDir": "miami",
    "photoDirs": [
      "miami",
      "keys"
    ],
    "stops": [
      {
        "slug": "miami",
        "name": "Miami",
        "nights": 3,
        "note": "South Beach y Wynwood. El resort fee se cobra por habitación, ojo.",
        "propio": true,
        "hotels": [],
        "rentals": [],
        "food": [
          {
            "name": "Enriqueta's Sandwich Shop",
            "what": "Barra cubana en Wynwood desde 1961. Pan con bistec y una colada por menos de us$15. Solo desayuno y almuerzo, cierra temprano, mejor efectivo.",
            "level": "$"
          },
          {
            "name": "Versailles Restaurant",
            "what": "La institución de la Calle Ocho. Se va tanto por la ventanita de café y mirar gente como por la ropa vieja y la vaca frita.",
            "level": "$$"
          },
          {
            "name": "Mandolin Aegean Bistro",
            "what": "Griego turco en una casa de los años 40 reformada en Buena Vista, patio azul y blanco. Bib Gourmand Michelin 2026: la comida seria más conveniente de la lista y la más fácil para sentar a cinco.",
            "level": "$$$"
          },
          {
            "name": "Boia De",
            "what": "Salón de tendencia italiana en un strip mall de Buena Vista. Una estrella Michelin en la guía 2026. Chiquito: una mesa para cinco hay que reservarla el día que abren las reservas.",
            "level": "$$$$"
          }
        ],
        "weather": "Principios de marzo es el mejor clima que da Miami. Máximas promedio de 78F a 81F (26 a 27C) en el mes, mínima promedio 70F (21C), mar a unos 76F (24C): nadable pero no tibio."
      },
      {
        "slug": "islamorada-keys",
        "name": "Islamorada, Florida Keys",
        "nights": 4,
        "note": "Islamorada del lado de la bahía, con muelle propio.",
        "hotels": [
          {
            "name": "La Siesta Resort & Villas",
            "area": "Islamorada, 80241 Overseas Hwy (MM 80.2, lado océano)",
            "nightUsd": 685,
            "ppUsd": 137,
            "why": "El hotel más barato para cinco bajo un techo; las villas se renovaron hasta fines de 2026.",
            "url": "https://www.booking.com/searchresults.html?ss=La+Siesta+Resort+Villas+Islamorada",
            "score": "Tripadvisor Travellers' Choice, #8 of 12 Islamorada hoteles según U.S. News",
            "site": "https://www.islamoradaresortcollection.com/la-siesta-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "Amara Cay Resort",
            "area": "Islamorada, 80001 Overseas Hwy (MM 80, lado océano)",
            "nightUsd": 850,
            "ppUsd": 170,
            "why": "Se pasa del presupuesto. El mejor resort de diseño masivo de acá; los deportes náuticos gratis lo compensan.",
            "url": "https://www.booking.com/searchresults.html?ss=Amara+Cay+Resort+Islamorada",
            "score": "puesto 2 de 12 en mejores hoteles de Islamorada según U.S. News",
            "site": "https://www.islamoradaresortcollection.com/amara-cay-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "The Islands of Islamorada",
            "area": "Islamorada, 82779 Old Hwy (MM 82.8, lado océano)",
            "nightUsd": 880,
            "ppUsd": 176,
            "why": "Se pasa del presupuesto. Un solo techo, villas, lanchas propias: el lujo que tiene sentido.",
            "url": "https://www.booking.com/searchresults.html?ss=The+Islands+of+Islamorada",
            "score": "High ratings on low review volume",
            "site": "https://www.theislandsofislamorada.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Three Waters Resort & Marina (formerly Postcard Inn at Holiday Isle)",
            "area": "Islamorada, MM 84 lado océano (Holiday Isle)",
            "nightUsd": 870,
            "ppUsd": 174,
            "why": "Se pasa del presupuesto. La mejor playa y marina de Islamorada; el diseño es resort de playa anticuado.",
            "url": "https://www.booking.com/searchresults.html?ss=Three+Waters+Resort+Marina+Islamorada",
            "score": "Antes se llamaba Postcard Inn",
            "site": "https://www.islamoradaresortcollection.com/three-waters-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "Casa Morada",
            "area": "Islamorada, 136 Madeira Rd / 82200 Overseas Hwy (MM 82, lado bahía)",
            "nightUsd": 980,
            "ppUsd": 196,
            "why": "Se pasa 2x del presupuesto. El único hotel de diseño real de los Cayos: jardín de Raymond Jungles.",
            "url": "https://www.booking.com/hotel/us/casa-morada-islamorada1.html",
            "score": "9,6 for couples en Booking, Tripadvisor mixed on value",
            "site": "https://www.casamorada.com/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Key Largo 3BR waterfront canal house (filtered search)",
            "area": "Key Largo, MM 95-105, lado bahía o sobre canal",
            "sleeps": 6,
            "nightUsd": 556,
            "ppUsd": 111,
            "why": "La casa legal más barata de los Cayos y el arrecife de Pennekamp a 10 minutos.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/key-largo-area/key-largo",
            "isSearch": true
          },
          {
            "name": "Islamorada bayside 3BR canal house with dock (filtered search)",
            "area": "Islamorada lado bahía: canales de Plantation Key y Lower Matecumbe",
            "sleeps": 6,
            "nightUsd": 618,
            "ppUsd": 124,
            "why": "La elegida. Muelle en la casa, lado del atardecer, no se camina a nada pero se maneja a todo.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/islamorada-area/islamorada",
            "isSearch": true
          },
          {
            "name": "Long Key / Lower Matecumbe 3BR house (filtered search)",
            "area": "Long Key y Lower Matecumbe, MM 68-77",
            "sleeps": 6,
            "nightUsd": 593,
            "ppUsd": 119,
            "why": "La mejor relación precio belleza; a 20 min al sur de los restaurantes de Islamorada.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/islamorada-area/long-key",
            "isSearch": true
          },
          {
            "name": "Lush Tropical Waterfront Oasis with Heated Pool, Dock and WiFi (VRBO listing 3747408ha)",
            "area": "Islamorada, frente al agua con muelle privado y pileta climatizada",
            "sleeps": 6,
            "nightUsd": 673,
            "ppUsd": 135,
            "why": "Publicación verificada real con todo: pileta climatizada, muelle privado, frente al agua.",
            "url": "https://www.vrbo.com/3747408ha"
          },
          {
            "name": "Islamorada 4BR with private pool (filtered search)",
            "area": "Islamorada, oferta con pileta privada",
            "sleeps": 8,
            "nightUsd": 874,
            "ppUsd": 175,
            "why": "Se pasa del presupuesto. Pileta privada más muelle es la categoría que rompe los us$100 por persona.",
            "url": "https://www.floridarentals.com/florida-keys/islamorada-vacation-rentals/private-pool/",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Morada Bay Beach Cafe",
            "what": "MM 81 lado bahía. Mesas en la arena, el mejor atardecer de los Cayos, mariscos decentes. Arriba está Pierre's, la hermana cara. En marzo reservá mesa para cinco con tiempo.",
            "level": "$$$"
          },
          {
            "name": "Hungry Tarpon at Robbie's",
            "what": "MM 77.5. Desayuno y tacos de pescado sobre el muelle, chico y repleto. Primero comer, después darles de comer a los tarpones.",
            "level": "$$"
          },
          {
            "name": "Lazy Days Restaurant",
            "what": "MM 79.9 lado océano. Llevá tu pesca o pedí la de ellos; lo que hay que pedir es el pargo cola amarilla. Sencillo, bueno, local.",
            "level": "$$"
          },
          {
            "name": "Chef Michael's",
            "what": "MM 81.6. La mejor cocina real de Islamorada: hogfish y pescado local de cuatro maneras. Salón chico, reservá con tiempo.",
            "level": "$$$"
          }
        ],
        "weather": "Los Cayos están 1-2C más cálidos que Miami a principios de marzo: máximas de 27-28C, mínimas de 21-22C, agua cerca de 24C, y es temporada seca, así que llueve poco. Lo que importa de verdad es el viento."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Miami",
        "title": "Wynwood y Coconut Grove",
        "acts": [
          {
            "name": "Wynwood Walls más la recorrida gratis de galerías",
            "what": "El patio de Wynwood Walls es con entrada, después caminar NW 2nd Ave y NW 23rd-26th St por arte callejero gratis y galerías comerciales. Terminar en el Rubell Museum en Allapattah (us$15 adultos): una de las mejores colecciones privadas de arte contemporáneo de Estados Unidos. Cerrado lunes y martes; abre miércoles, jueves y domingo 11:30-17:30 y viernes y sábado 11:30-19:30.",
            "ppUsd": 30,
            "duration": "4 o 5 horas",
            "when": "Día 1 a la tarde, solo de miércoles a domingo",
            "url": "https://rubellmuseum.org/"
          },
          {
            "name": "Cena en Los Felix, Coconut Grove",
            "what": "Inspirado en la Ciudad de México, nixtamal propio, carta de mezcales. Tiene estrella Michelin y Estrella Verde Michelin en la guía Florida 2026. Reservá con semanas de anticipación: una mesa para cinco en la semana de spring break hay que cerrarla en enero.",
            "ppUsd": 95,
            "duration": "2,5 horas",
            "when": "Día 1 a la noche",
            "url": "https://guide.michelin.com/us/en/florida/miami/restaurant/los-felix"
          }
        ]
      },
      {
        "n": 2,
        "place": "Miami",
        "title": "Design District y la Pequeña Habana",
        "acts": [
          {
            "name": "Caminata de arquitectura por el Design District más el PAMM",
            "what": "Mañana en el Miami Design District: el Fly's Eye Dome de Buckminster Fuller, el Palm Court de Sou Fujimoto, la fachada del Museum Garage. Después 10 min al sur hasta el Perez Art Museum Miami: el edificio de Herzog y de Meuron con sus jardines colgantes es la verdadera atracción. us$18 adultos. Cerrado martes y miércoles; jueves abre hasta las 21:00.",
            "ppUsd": 18,
            "duration": "5 horas",
            "when": "Día 2, de jueves a lunes",
            "url": "https://www.pamm.org/"
          },
          {
            "name": "Recorrida gastronómica por la Calle Ocho, la Pequeña Habana",
            "what": "Seis paradas de degustación en 2.5 horas: sándwich cubano, empanadas, pastelitos, tostones, croquetas, café cubano, más un torcedor de habanos trabajando, el Maximo Gomez Domino Park y el Calle Ocho Walk of Fame. us$69.99 a 79 por persona. Sale de 1543 SW 8th St; reservar 24 a 48h antes. Quedate para el son en vivo en Ball and Chain.",
            "ppUsd": 79,
            "duration": "2,5 horas",
            "when": "Día 2, al final de la tarde",
            "url": "https://www.miamiculinarytours.com/tour/little-havana-food-tour/"
          }
        ]
      },
      {
        "n": 3,
        "place": "Miami",
        "title": "Un día de lancha en Biscayne",
        "acts": [
          {
            "name": "Día de lancha privada en Biscayne Bay (dividido real entre cinco)",
            "what": "Lancha privada con capitán desde Miami Beach o Downtown: el banco de arena de Key Biscayne, Star Island, el río Miami. GetYourGuide lista una lancha privada de 4 horas a us$400 para hasta 6; en el mercado abierto las lanchas y pontones van us$100 a 300 la hora. Calculá us$500 por cuatro horas = us$100 por persona entre cinco, más ~20% de propina al capitán (us$20 por persona) y llevá tu propia conservadora: los tragos comprados a bordo son donde se muere el presupuesto.",
            "ppUsd": 100,
            "duration": "4 horas",
            "when": "Día 3, media mañana, elegí el día con pronóstico más calmo",
            "url": "https://www.getyourguide.com/miami-l176/miami-private-yacht-charter-t676399/"
          },
          {
            "name": "Vizcaya Museum and Gardens",
            "what": "Villa italianizante de 1916 sobre Biscayne Bay, con jardines formales y la barcaza de piedra: el lugar más fotogénico de Miami. Entrada adulto us$20, bajada de us$25 por la restauración. Andá cuando abre o al final de la tarde por la luz.",
            "ppUsd": 20,
            "duration": "2 o 3 horas",
            "when": "Día 3, a la mañana o al final de la tarde",
            "url": "https://vizcaya.org/visit-2/planning-your-visit/"
          },
          {
            "name": "Bicis en Key Biscayne, o la alternativa del airboat en los Everglades",
            "what": "Opción A: alquilar bicis y hacer el Rickenbacker Causeway hasta Crandon Park y el faro de Bill Baggs Cape Florida: la mejor playa de Miami-Dade y la mejor vista del skyline. Opción B si se saltean la lancha: Everglades Safari Park desde us$30, o Everglades Holiday Park a us$41.99 + impuestos con show de yacarés. Los dos a ~45 min al oeste; ir 09:00 antes de los micros.",
            "ppUsd": 42,
            "duration": "Medio día",
            "when": "Día 3, la mitad del día que no se lleve el barco",
            "url": "https://www.evergladessafaripark.com/"
          }
        ]
      },
      {
        "n": 4,
        "place": "Los Cayos",
        "title": "Manejamos a Islamorada",
        "acts": [
          {
            "name": "Manejar de Miami a Islamorada y después sábalos en Robbie's",
            "what": "1h45 a 2h30 por la US-1. Parada en Alabama Jack's camino a Card Sound o en Key Largo Fisheries. Check in y Robbie's of Islamorada, MM 77.5, a darle de comer en la mano a sábalos de 2m desde el muelle: acceso al muelle us$2,50 por persona, balde de carnada us$5. Dura cinco minutos, la foto favorita de todos. Quedate para el atardecer en Morada Bay o Lorelei.",
            "ppUsd": 10,
            "duration": "Medio día manejando, 1 hora en Robbie's",
            "when": "Día 4, salir de Miami antes de las 10:00 para ganarle al causeway",
            "url": "https://www.robbies.com/"
          }
        ]
      },
      {
        "n": 5,
        "place": "Los Cayos",
        "title": "Sandbar y arrecife",
        "acts": [
          {
            "name": "Día de lancha al banco de arena y el arrecife (reservar esto primero)",
            "what": "Charter con capitán desde Islamorada, 4 a 6 horas: el banco de arena con marea baja (agua a la cintura, ancla, conservadora, música) y después snorkel en Alligator Reef Lighthouse o Cheeca Rocks. Calculá us$600 a 900 por un barco privado de medio día para seis en temporada alta, o sea us$120 a 180 por persona: el único lujo por el que vale romper la regla. Más barato en Robbie's: snorkel grupal dos veces por día, 10:00 y 13:30, o pesca en barco fiestero a us$100 por persona a la mañana y us$75 a la tarde.",
            "ppUsd": 140,
            "duration": "4 a 6 horas",
            "when": "Día 5, pero pasalo al día de los cuatro con menos viento",
            "url": "https://www.robbies.com/"
          }
        ]
      },
      {
        "n": 6,
        "place": "Los Cayos",
        "title": "Cayo Hueso, ida y vuelta",
        "acts": [
          {
            "name": "Excursión a Cayo Hueso: Bahia Honda, atardecer en Mallory Square",
            "what": "2h por tramo por el Seven Mile Bridge. Parada en Bahia Honda State Park, MM 37, us$8 por auto: la única playa natural realmente linda de los Cayos y vale por sí sola. En Cayo Hueso: Hemingway House, café cubano en Cuban Coffee Queen, la cola del Southernmost Point y el festejo gratis del atardecer en Mallory Square con artistas callejeros, arranca ~90 min antes (unas 18:30 a principios de marzo). Duval va a estar llena de spring breakers: tomá algo en el Green Parrot. Día largo, elijan quién maneja.",
            "ppUsd": 35,
            "duration": "12 horas puerta a puerta",
            "when": "Día 6, salir antes de las 09:00",
            "url": "https://www.floridastateparks.org/parks-and-trails/bahia-honda-state-park"
          }
        ]
      },
      {
        "n": 7,
        "place": "Los Cayos",
        "title": "Pennekamp y kayak",
        "acts": [
          {
            "name": "Snorkel en el John Pennekamp Coral Reef State Park",
            "what": "40 min al norte hasta Key Largo, MM 102.5. El barco de snorkel guiado del parque, 2,5 horas, us$45 por persona; privados desde us$50 por persona, guía en el agua unos us$120 más us$70 por snorkelista extra. Arrecifes bajos, la estatua del Cristo del Abismo, buena visibilidad cuando baja el viento. Combinalo con el History of Diving Museum, MM 83, a la vuelta: chico, raro y muy bueno.",
            "ppUsd": 45,
            "duration": "Medio día",
            "when": "Día 7 a la mañana, antes de que crezca el viento de la tarde",
            "url": "https://pennekamppark.com/snorkeling-tours/"
          },
          {
            "name": "Kayak en Indian Key y el último atardecer en Morada Bay",
            "what": "Casi todos los resorts de Islamorada y muchas casas incluyen kayaks y SUP gratis. Remá desde Indian Key Fill, en el MM 79, hasta Indian Key Historic State Park: las ruinas de un pueblo de naufragios de 1830 en una isla mínima. Agua calma del lado de la bahía, sin barco, y sirve hasta con viento. Cerrá con cena y atardecer en Morada Bay, con los pies en la arena.",
            "ppUsd": 0,
            "duration": "3 horas",
            "when": "Día 7, al final de la tarde",
            "url": "https://www.floridastateparks.org/parks-and-trails/indian-key-historic-state-park"
          }
        ]
      },
      {
        "n": 8,
        "place": "Buenos Aires",
        "title": "Vuelta",
        "acts": [
          {
            "name": "Vuelo de vuelta",
            "what": "Volvemos a Buenos Aires.",
            "ppUsd": 0
          }
        ]
      }
    ],
    "flights": {
      "w1": [
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h20m",
          "priceUsd": 950,
          "dep": "20:35",
          "arr": "04:55+1",
          "flight": "AA 900",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h05m",
          "priceUsd": 950,
          "dep": "22:15",
          "arr": "06:20+1",
          "flight": "AA 908",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "8h40m",
          "priceUsd": 900,
          "dep": "22:45",
          "arr": "07:00+1",
          "flight": "AR 1302",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~11h53m total (shortest one-stop option on the route)",
          "priceUsd": 760,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~12-13h total (7h27m EZE-PTY + 3h08m PTY-MIA + 1h30m-3h layover)",
          "priceUsd": 800,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~13-14h total (layover ~2h30m at SCL)",
          "priceUsd": 840,
          "via": "SCL or LIM",
          "estimate": true
        }
      ],
      "w2": [
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h20m",
          "priceUsd": 1200,
          "dep": "20:35",
          "arr": "04:55+1",
          "flight": "AA 900",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h05m",
          "priceUsd": 1200,
          "dep": "22:15",
          "arr": "06:20+1",
          "flight": "AA 908",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "8h40m",
          "priceUsd": 1150,
          "dep": "22:45",
          "arr": "07:00+1",
          "flight": "AR 1302",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~11h53m total",
          "priceUsd": 950,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~12-13h total",
          "priceUsd": 990,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Gol",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~13-14h total",
          "priceUsd": 960,
          "via": "GRU",
          "estimate": true
        }
      ],
      "w3": [
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h20m",
          "priceUsd": 1100,
          "dep": "20:35",
          "arr": "04:55+1",
          "flight": "AA 900",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "9h05m",
          "priceUsd": 1100,
          "dep": "22:15",
          "arr": "06:20+1",
          "flight": "AA 908",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "8h40m",
          "priceUsd": 1050,
          "dep": "22:45",
          "arr": "07:00+1",
          "flight": "AR 1302",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~11h53m total",
          "priceUsd": 880,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~12-13h total",
          "priceUsd": 920,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Gol",
          "route": "EZE → MIA",
          "from": "EZE",
          "to": "MIA",
          "duration": "~13-14h total",
          "priceUsd": 900,
          "via": "GRU",
          "estimate": true
        }
      ]
    },
    "hops": [],
    "transfers": [
      {
        "route": "MIA-Key West (Overseas Highway, US-1)",
        "mode": "Auto alquilado / manejar uno mismo",
        "duration": "3h30m-4h00m por tramo, 166 millas / 267 km",
        "costUsd": 95
      },
      {
        "route": "MIA-Key West by ferry",
        "mode": "No disponible",
        "duration": "n/a",
        "costUsd": 0
      },
      {
        "route": "MIA-FLL (Fort Lauderdale)",
        "mode": "Auto / app de viajes / Tri-Rail",
        "duration": "~45 min, ~30 millas",
        "costUsd": 40
      },
      {
        "route": "ELH-Harbour Island",
        "mode": "Taxi + taxi acuático",
        "duration": "~20 min en total",
        "costUsd": 18
      }
    ],
    "verdict": "Bahamas y Aruba se van a tres o cuatro veces el presupuesto en marzo. Los Cayos se manejan desde Miami, sin vuelo extra, y una casa con muelle sale menos que dos habitaciones de hotel.",
    "warning": "Hace falta visa B1/B2: Argentina no está en el programa de exención y no hay ESTA. Son hasta us$435 por cabeza y conviene sacar los cinco turnos ya. En Buenos Aires la espera es de unos quince días.",
    "seasonality": "El spring break de la Universidad de Miami es del 6 al 13 de marzo, exactamente la segunda semana. Es la peor para este viaje, unos us$250 más por persona solo en avión. La primera es la mejor.",
    "gettingAround": "Miami pide auto. Una camioneta para cinco sirve también para bajar a los Cayos: tres horas y media hasta Islamorada.",
    "sources": [
      "https://ar.usembassy.gov/visa-waiver-program/",
      "https://ar.usembassy.gov/secretary-noem-kickstarts-process-for-argentina-to-rejoin-visa-waiver-program/",
      "https://www.dhs.gov/news/2025/07/28/secretary-noem-kickstarts-process-argentina-rejoin-visa-waiver-program",
      "https://www.aila.org/library/dhs-secretary-signs-statement-of-intent-on-argentina-reentry-to-visa-waiver-program",
      "https://discover.passportindex.org/policy-and-regulations/u-s-visa-waiver-for-argentina/",
      "https://www.lanacion.com.ar/politica/visa-waiver-peter-lamelas-aseguro-que-trabaja-para-que-los-argentinos-puedan-ingresar-a-estados-nid16092026/",
      "https://www.filo.news/noticia/2026/09/16/peter-lamelas-ratifico-que-impulsara-el-ingreso-de-argentinos-a-eeuu-sin-visa",
      "https://www.americasquarterly.org/article/argentinas-complicated-u-s-visa-politics/",
      "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html"
    ]
  },
  {
    "slug": "mexico",
    "n": "04",
    "name": "Ciudad de México & Puerto Escondido",
    "place": "México",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Dos días en el DF y cinco en la costa de Oaxaca.",
    "heroDir": "puerto-escondido",
    "photoDirs": [
      "puerto-escondido",
      "cdmx"
    ],
    "stops": [
      {
        "slug": "cdmx",
        "name": "Mexico City",
        "nights": 2,
        "note": "Roma, Condesa y Juárez, todo caminable.",
        "hotels": [
          {
            "name": "Casa Prim Hotel Boutique",
            "area": "Colonia Juárez, Calle General Prim 70-72, a 10 min a pie de Roma Norte",
            "nightUsd": 375,
            "ppUsd": 75,
            "why": "Casona porfiriana, pisos de parquet, balcones al patio, bar en la terraza L'Enfant.",
            "url": "https://www.booking.com/hotel/mx/casa-prim-boutique.html",
            "score": "9,0 Booking (unas. 202 opiniones), ubicación 9/10",
            "site": "https://casaprim.com.mx/",
            "estimate": true
          },
          {
            "name": "Casa Decu",
            "area": "Hipodromo Condesa, Culiacan 10, a dos cuadras del Parque Mexico",
            "nightUsd": 360,
            "ppUsd": 72,
            "why": "Art Deco de verdad en Condesa, lounge en la terraza, bicis gratis, desayuno incluido.",
            "url": "https://www.booking.com/hotel/mx/casa-decu.html",
            "site": "https://www.decuhotels.com/casa-decu",
            "estimate": true
          },
          {
            "name": "Hotel Carlota",
            "area": "Rio Amazonas 73, Col. Cuauhtemoc, al borde de Juarez/Reforma, 15 min a pie de Roma Norte",
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "La famosa pileta de acero y vidrio en el patio; buen bar, ubicación central.",
            "url": "https://www.booking.com/hotel/mx/carlota.html",
            "score": "4.0/5 Tripadvisor",
            "site": "https://www.hotelcarlota.mx/",
            "estimate": true
          },
          {
            "name": "Octavia Casa",
            "area": "La Condesa",
            "nightUsd": 600,
            "ppUsd": 120,
            "why": "Fachada de listones de madera, minimalismo blanco, rafia y lino; la habitación más linda de acá.",
            "url": "https://www.booking.com/hotel/mx/octavia-casa.html",
            "site": "https://octaviacasa.mx/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Circulo Mexicano, a Member of Design Hotels",
            "area": "Centro Histórico, República de Guatemala 20, detrás de la Catedral",
            "nightUsd": 795,
            "ppUsd": 159,
            "why": "Clásico austero de Grupo Habita; pileta en la terraza sobre el Zocalo y el Templo Mayor.",
            "url": "https://www.booking.com/hotel/mx/circulo-mexicano.html",
            "site": "https://circulomexicano.com/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Caliza Roma - exclusive residence with private garden (Airbnb display title varies)",
            "area": "Roma Norte",
            "sleeps": 6,
            "nightUsd": 297,
            "ppUsd": 59,
            "why": "Tres dormitorios, seis camas reales, jardín privado; la mejor base general en Roma Norte para cinco.",
            "url": "https://www.airbnb.com/rooms/1223944928793592804"
          },
          {
            "name": "Casa Corazon - 5-bedroom oasis in La Condesa",
            "area": "La Condesa",
            "sleeps": 10,
            "nightUsd": 292,
            "ppUsd": 58,
            "why": "Cinco cuartos separados, nadie comparte; raro a este precio en la Condesa.",
            "url": "https://www.airbnb.com/rooms/860699249317648367"
          },
          {
            "name": "Beautiful apartment full of light, Condesa/Roma border",
            "area": "Límite entre Roma Norte y Condesa",
            "sleeps": 6,
            "nightUsd": 226,
            "ppUsd": 45,
            "why": "236 reseñas de 4,95; seis camas, mucha luz, todo a pie en los dos barrios.",
            "url": "https://www.airbnb.com/rooms/1645053806193120682"
          },
          {
            "name": "Large Mexican folk art apartment, top Condesa location",
            "area": "La Condesa",
            "sleeps": 6,
            "nightUsd": 210,
            "ppUsd": 42,
            "why": "Arte popular coleccionado de verdad, no decoración de alquiler; historial de reseñas largo y sólido.",
            "url": "https://www.airbnb.com/rooms/15087013"
          },
          {
            "name": "Casa Cobre - rooftop, sauna, copper bath",
            "area": "La Condesa",
            "sleeps": 10,
            "nightUsd": 911,
            "ppUsd": 182,
            "why": "El lujo arquitectónico: cinco dormitorios, terraza, sauna y una bañera de cobre.",
            "url": "https://www.airbnb.com/rooms/1700146663363466635"
          }
        ],
        "food": [
          {
            "name": "Contramar",
            "what": "Calle Durango 200, Roma Norte. El almuerzo de mariscos que define la ciudad desde 1998: tostadas de atún y el pescado a la talla, entero y abierto, mitad chile rojo, mitad verde de perejil. Ruidoso, luminoso, ahí come todo el que importa en Ciudad de México.",
            "level": "$$$ - unos us$45 a 60 por persona con tragos. Solo almuerzo, más o menos 13:00-18:30. Reservá con semanas para cinco; sin reserva se espera."
          },
          {
            "name": "Rosetta",
            "what": "Colima 166, Roma Norte. Elena Reygadas, elegida World's Best Female Chef, cocina con técnica italiana y producto mexicano en una mansión porfiriana venida abajo, con una escalera llena de plantas. Al lado, la Panadería Rosetta es la mejor panadería de la ciudad.",
            "level": "$$$$ - terreno de menú de pasos, unos us$80 a 110 por persona. Reservá con un mes. La panadería, us$5."
          },
          {
            "name": "Masala y Maiz",
            "what": "Calle Marsella 72, Juárez. Norma Listman y Saqib Keval cocinan las rutas comerciales históricas entre México, India y África oriental: no es fusión, es investigación. Una de las cocinas más interesantes de América.",
            "level": "$$$ - unos us$40 a 55 por persona. Reservá."
          },
          {
            "name": "Lardo",
            "what": "Agustín Melgar 6, Condesa. El lugar de barrio de Elena Reygadas: panes al horno de leña, platos mediterráneos simples, el mejor desayuno de la Condesa. Adonde vas cuando no conseguís lugar en Rosetta.",
            "level": "$$ - unos us$20 a 30 por persona. Sin reservas para grupos chicos en el desayuno; andá antes de las 10:00."
          }
        ],
        "weather": "Principios de marzo en Ciudad de México es el final de la seca y casi lo mejor que hay: máximas de 25 a 27C, mínimas de 10 a 12C, casi nada de lluvia y UV muy fuerte a 2.240 m. Dos salvedades."
      },
      {
        "slug": "puerto-escondido",
        "name": "Puerto Escondido",
        "nights": 5,
        "note": "La Punta para dormir, Carrizalillo para nadar, Zicatela de noche.",
        "hotels": [
          {
            "name": "Villas Carrizalillo",
            "area": "Playa Carrizalillo, Av Carrizalillo s/n, 300 m arriba de la caleta",
            "nightUsd": 320,
            "ppUsd": 64,
            "why": "Lo más conveniente de la costa: villa entera de 3 cuartos, terraza privada, a pasos de la caleta donde se nada.",
            "url": "https://www.booking.com/hotel/mx/villas-carrizalillo-puerto-escondido1.html",
            "score": "9.2-9.3/10 Booking (360 opiniones), couples rate the location 9.7",
            "site": "https://www.villascarrizalillo.com/",
            "estimate": true
          },
          {
            "name": "Villa Mozart y Macondo",
            "area": "Las Tortugas 77, Carrizalillo, a 200 m de Playa Carrizalillo",
            "nightUsd": 255,
            "ppUsd": 51,
            "why": "La cama decente más barata cerca de la caleta donde se nada; con encanto y verde, no de arquitectura.",
            "url": "https://www.booking.com/hotel/mx/villa-mozart-y-macondo.html",
            "estimate": true
          },
          {
            "name": "Raiz Hotel Boutique",
            "area": "Puebla 200, Punta de Zicatela (La Punta), a 350 m de la playa",
            "nightUsd": 430,
            "ppUsd": 86,
            "why": "Bungalows de techo de paja, madera y piedra, desayuno y yoga incluidos; La Punta a pie.",
            "url": "https://www.booking.com/hotel/mx/raiz-boutique.html",
            "score": "4.0/5 Tripadvisor, puesto 22 de 66 en Puerto Escondido - pero solo 13 opiniones and they are polarised",
            "site": "https://www.raiz-hotel.com/en/",
            "estimate": true
          },
          {
            "name": "Casa Bicachi - Adults Only",
            "area": "Heroes Oaxaquenos 116, Punta Zicatela (La Punta), 5 min a pie de la playa",
            "nightUsd": 537,
            "ppUsd": 107,
            "why": "Lo mejor puntuado de La Punta; cuartos modernos y limpios, pileta amplia, cinco minutos a la punta.",
            "url": "https://www.booking.com/hotel/mx/casa-bicachi.html",
            "score": "9,5 Booking (308 opiniones) - el más alto del viaje",
            "site": "https://www.casabicachi.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Casa TO",
            "area": "La Punta Zicatela, a 5 cuadras de la playa, 15 min del aeropuerto PXM",
            "nightUsd": 747,
            "ppUsd": 149,
            "why": "La elección arquitectónica: hormigón encofrado en tablas de Godefroy, cisternas y sombra, bar de vinos Glou Glou.",
            "url": "https://www.booking.com/hotel/mx/casa-to.html",
            "site": "https://www.casato.mx/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Pool and ocean-view palapa near beach (4 bedrooms)",
            "area": "Brisas de Zicatela / La Punta, en la loma",
            "sleeps": 8,
            "nightUsd": 383,
            "ppUsd": 77,
            "why": "La mejor del grupo: cuatro cuartos, seis camas reales, pileta privada, palapa con vista al mar, 286 reseñas.",
            "url": "https://www.airbnb.com/rooms/6479019"
          },
          {
            "name": "Minimalist cliffside villa with private pool",
            "area": "La Punta / acantilado de Brisas de Zicatela",
            "sleeps": 6,
            "nightUsd": 414,
            "ppUsd": 83,
            "why": "Diseño en serio: minimalista sobre el acantilado, pileta privada, cinco camas reales justas.",
            "url": "https://www.airbnb.com/rooms/747742226679490405"
          },
          {
            "name": "Pool and kitchen in La Punta (3 king bedrooms)",
            "area": "Brisas de Zicatela / La Punta",
            "sleeps": 6,
            "nightUsd": 375,
            "ppUsd": 75,
            "why": "Tres camas king y tres baños; dos parejas más uno, nadie en un sillón.",
            "url": "https://www.airbnb.com/rooms/1384829989529920560"
          },
          {
            "name": "Ground-floor flat with pool near beach",
            "area": "Brisas de Zicatela",
            "sleeps": 6,
            "nightUsd": 224,
            "ppUsd": 45,
            "why": "La forma más barata de meter cinco personas en una pileta privada a pasos de La Punta.",
            "url": "https://www.airbnb.com/rooms/1200937738138917145"
          },
          {
            "name": "Brutalist penthouse with an infinity pool",
            "area": "Puerto Escondido (La Punta / la loma de Brisas)",
            "sleeps": 6,
            "nightUsd": 518,
            "ppUsd": 104,
            "why": "Hormigón a la vista, pileta infinita sobre el Pacífico, cinco camas reales; el lujo que apenas es lujo.",
            "url": "https://www.airbnb.com/rooms/1294197466531856726"
          }
        ],
        "food": [
          {
            "name": "Almoraduz",
            "what": "Rinconada. Cocineros formados con Alejandro Ruiz, menú de degustación oaxaqueño moderno y serio con producto de la costa: la cocina más ambiciosa de Puerto Escondido y por la que la gente viaja. Reservar.",
            "level": "$$$ - unos us$50 a 70 por persona con maridaje de mezcal."
          },
          {
            "name": "Espadin",
            "what": "Zicatela. Cocina oaxaqueña: tlayudas, moles, mezcal de palenques chicos, en una terraza grande al aire libre. Adonde se va por la noche de comida y ambiente sin ir a un boliche.",
            "level": "$$ - unos us$25 a 40 por persona."
          },
          {
            "name": "Cafecito",
            "what": "Dos locales, Zicatela y cerca de Carrizalillo/Rinconada. La institución: desayunos tamaño americano, panadería, buen café, abre 06:00 para los surfers. Nada sofisticado, simplemente donde todos terminan después de la sesión del amanecer.",
            "level": "$ - unos us$8 a 15 por persona."
          },
          {
            "name": "Lychee",
            "what": "La Punta. Platos del sudeste asiático al fuego en la calle de tierra: la comida que le dio a La Punta fama de lugar donde además de surfear se come. Chico, sin reservas, hay cola.",
            "level": "$$ - unos us$20 a 30 por persona."
          }
        ],
        "weather": "Principios de marzo en la costa de Oaxaca es plena seca y casi perfecto. Máximas de 31 a 33C, mínimas de 21 a 23C, mar a 27 o 28C, humedad moderada y estadísticamente casi cero lluvia: marzo es el mes más seco del año acá."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Ciudad de México",
        "title": "Roma, Condesa y Barragán",
        "acts": [
          {
            "name": "Roma Norte + Condesa: recorrida a pie de arquitectura y comida",
            "what": "Empezar en la Plaza Rio de Janeiro, caminar Colima y Alvaro Obregon por las mansiones porfirianas y las galerías, café y rol de guayaba en la Panaderia Rosetta (Colima 179), tortillas hechas delante tuyo en el Expendio de Maiz Sin Nombre (Yucatan 84, sin carta: traen platos hasta que decís basta), después cruzar Avenida Veracruz a Condesa por las cuadras Art Deco alrededor del Parque Mexico y la Avenida Amsterdam, el hipódromo de los años 20 convertido en calle ovalada.",
            "ppUsd": 45,
            "duration": "5 o 6 horas",
            "when": "Día 1, de media mañana a la tarde. Expendio de Maiz no toma reservas y la cola es larga después de las 14:00: andá a las 13:00.",
            "url": "https://www.rosetta.com.mx/"
          },
          {
            "name": "Casa Estudio Luis Barragán",
            "what": "La casa estudio de 1948 del único Pritzker mexicano, Patrimonio de la Humanidad de la UNESCO en Tacubaya. Solo visita guiada, grupos chicos, paredes rosas y ocres, la famosa escalera flotante y la terraza abierta solo al cielo.",
            "ppUsd": 26,
            "duration": "1 hora 15 min",
            "when": "Día 1, a la tarde. Reservá apenas tengan fechas. Las entradas se venden solo por anticipado en visit.casaluisbarragan.org y el sitio aclara que sin entrada previa no se garantiza el ingreso. Los lugares para cinco en un mismo tour se agotan con semanas. Edad mínima 12, sin excepciones. Las respuestas por mail tardan 2 a 4 días hábiles; no lo dejes para un llamado.",
            "url": "https://visit.casaluisbarragan.org/mx"
          },
          {
            "name": "Noche de mezcalerías en Roma y Centro",
            "what": "Empezar en La Clandestina (Alvaro Obregon 298, Condesa) por destilados de agave de pequeños productores servidos en jícaras, después Licoreria Limantour (Alvaro Obregon 106), que está en la lista de los World's 50 Best Bars, y terminar en Bosforo (Luis Moya 31, Centro): un salón pintado de negro, sin cartel, sin carta y con la mejor selección de mezcales de la ciudad.",
            "ppUsd": 35,
            "duration": "4 o 5 horas",
            "when": "Día 1 a la noche. Bosforo abre cerca de las 20:00 y se llena a las 22:00. Entre los tres, Uber, no a pie.",
            "url": "https://www.limantour.tv/"
          }
        ]
      },
      {
        "n": 2,
        "place": "Ciudad de México",
        "title": "Chapultepec, Coyoacán y lucha",
        "acts": [
          {
            "name": "Chapultepec y el Museo Nacional de Antropología",
            "what": "El mejor museo de México: el edificio de 1964 de Pedro Ramirez Vazquez con la enorme fuente paraguas en voladizo del patio, la Piedra del Sol, las cabezas olmecas y las salas a escala real de Teotihuacan y maya. Después se entra al Bosque de Chapultepec; el Castillo de Chapultepec está en el cerro de arriba, si queda tiempo.",
            "ppUsd": 11,
            "duration": "3 o 4 horas el museo, más el parque",
            "when": "Día 2, desde las 09:00. Abre de martes a domingo 09:00-18:00, cierra los lunes. Entrada general MXN 210; la entrada gratis del domingo es solo para mexicanos y residentes, así que un grupo extranjero paga igual. El domingo el parque está en su mejor momento (familias, globos, carritos de comida) pero el museo con más gente.",
            "url": "https://mna.inah.gob.mx/"
          },
          {
            "name": "Coyoacán y el Museo Frida Kahlo (Casa Azul)",
            "what": "La casa azul cobalto de Londres 247 donde Kahlo nació, vivió con Rivera y murió, con su taller, la silla de ruedas frente al caballete, los corsés y la pirámide del jardín. Combinala con el centro de Coyoacan: el Mercado de Coyoacan por las tostadas, el Jardin Centenario y el Museo Casa Leon Trotsky a cuatro cuadras.",
            "ppUsd": 20,
            "duration": "2 horas la casa, medio día el barrio",
            "when": "Día 2, a la tarde. Lo difícil es la reserva: las entradas con horario se agotan con días o semanas y se venden solo en boletos.museofridakahlo.org.mx o en el kiosco de autoservicio de la tienda del museo. Cierra los lunes; martes 10:00-18:00, miércoles 11:00-18:00, de jueves a domingo 10:00-18:00. Los jueves a la noche está la 'Noche Azul', 17:15-21:00, el horario con menos gente.",
            "url": "https://boletos.museofridakahlo.org.mx/"
          },
          {
            "name": "Lucha libre en la Arena Mexico",
            "what": "La arena del CMLL en la Colonia Doctores, 16.500 butacas, luchadores enmascarados, cerveza en baldes, la tribuna cantando puteadas en rima. Comprá lugares cerca del ring y no las populares de arriba: querés ver las máscaras.",
            "ppUsd": 25,
            "duration": "3 horas",
            "when": "Día 2, a la noche. Las funciones del CMLL son viernes 20:30 (la grande), martes 19:30 y domingo 17:00. La Colonia Doctores es brava: Uber puerta a puerta, no camines desde el metro de noche.",
            "url": "https://www.cmll.com/"
          },
          {
            "name": "Mercado de Medellin",
            "what": "El mercado de Roma Sur que abastece a las comunidades colombiana, cubana y venezolana: arepas, mostradores de queso oaxaqueño, pastas de mole por kilo, puestos de flores, ceviche barato y una docena de fondas con comida corrida. No es un mercado turístico.",
            "ppUsd": 10,
            "duration": "1 a 2 horas",
            "when": "Cualquier mañana antes de las 14:00. Calle Campeche 101, Roma Sur, a 10 minutos a pie al sur de Roma Norte."
          }
        ]
      },
      {
        "n": 3,
        "place": "Puerto Escondido",
        "title": "Vuelo a la costa y La Punta",
        "acts": [
          {
            "name": "Volar MEX-PXM, instalarse en La Punta, primer atardecer en la punta",
            "what": "Volaris y Aeromexico Connect vuelan Ciudad de México a Puerto Escondido directo en unas 1h20. PXM está a 15 minutos de La Punta. Dejar las valijas, caminar hasta la punta del extremo sur de la playa, donde todos se juntan en las rocas para el atardecer, y después tostadas de atún y una cerveza.",
            "ppUsd": 70,
            "duration": "Medio día con el vuelo incluido",
            "when": "Día 3. Pasajes MEX-PXM ida y vuelta desde us$40 a 70; comprá con 2 o 3 meses. Tomá el vuelo de la mañana: el de la tarde se come el primer atardecer, y la pista de PXM está pegada a la costa: los vientos cruzados de la tarde desvían vuelos.",
            "url": "https://www.volaris.com/en-mx/flights-from-mexico-city-to-puerto-escondido"
          }
        ]
      },
      {
        "n": 4,
        "place": "Puerto Escondido",
        "title": "Surf y Carrizalillo",
        "acts": [
          {
            "name": "Clase de surf en la izquierda de La Punta",
            "what": "El banco de arena de La Punta larga una izquierda larga y perdonadora que es la razón de ser del pueblo: es la ola de principiantes y longboard de la costa de Oaxaca, lo opuesto al tubo cerrado de Zicatela, 3 km al norte. Clase grupal de dos horas, tabla y licra incluidas, una docena de escuelas en la calle de tierra principal.",
            "ppUsd": 53,
            "duration": "2 horas",
            "when": "Día 4, 07:00-09:00. Andá temprano: a media mañana entra el viento y al amanecer el agua está de aceite. Precio corriente MXN 1.000 por persona. Marzo es el final de la temporada de olas chicas, justo lo que quiere un principiante.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Caleta Carrizalillo: los 170 escalones, el baño, el atardecer",
            "what": "Taxi hasta lo alto del acantilado y bajar los 170 escalones de cemento a una caleta chica en herradura. Es la única playa de Puerto Escondido donde nadar es realmente seguro: espuma suave, pendiente leve, sin la resaca de Zicatela. Los bares de palapa te llevan micheladas y pescado a la parrilla a la reposera. Quedate al atardecer; las paredes del acantilado lo enmarcan. Después subir los 170 escalones, que a 32 grados es el verdadero ejercicio del día.",
            "ppUsd": 15,
            "duration": "4 a 6 horas",
            "when": "Día 4, desde las 14:00 hasta el atardecer (cerca de 18:45 a principios de marzo). No suelen cobrar reposera y sombrilla si pedís comida. Taxi desde La Punta, unos MXN 120 a 150 por auto."
          }
        ]
      },
      {
        "n": 5,
        "place": "Puerto Escondido",
        "title": "Bioluminiscencia de noche",
        "acts": [
          {
            "name": "Tour nocturno de bioluminiscencia, Laguna de Manialtepec",
            "what": "Una laguna de manglar 20 km al oeste del pueblo donde los dinoflagelados se encienden blanco azulado al mover el agua. Salís en lancha chica cuando oscurece y nadás: cada brazada deja luz y los peces dejan estelas debajo tuyo. Mejor en noches sin luna.",
            "ppUsd": 50,
            "duration": "2,5 horas más el traslado",
            "when": "Día 5, después de oscurecer. MXN 950 por persona, verificado. Clave: solo funciona en noches oscuras. La luna nueva cae alrededor del 8 de marzo de 2027 (calculado, aproximado), así que del 4 al 12 de marzo es la mejor ventana del mes. Reservá la noche más oscura de la estadía y nada de agua con protector o repelente.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Mañana tranquila en La Punta antes de la laguna",
            "what": "Café y budín de banana en la calle de tierra, otra surfeada, una hora de hamaca. Después el Mercado Benito Juárez, en el centro de Puerto Escondido, por fruta, pastas de mole y una comida corrida de MXN 60, más el Adoquín peatonal y Playa Principal, donde llegan las pangas de pesca.",
            "ppUsd": 15,
            "duration": "4 horas",
            "when": "Día 5, a la mañana. El mercado termina a las 14:00."
          }
        ]
      },
      {
        "n": 6,
        "place": "Puerto Escondido",
        "title": "Mazunte y Punta Cometa",
        "acts": [
          {
            "name": "La costa tranquila: San Agustinillo, Mazunte, atardecer en Punta Cometa, Zipolite",
            "what": "Un día largo hacia el este por la Carretera 200. Arrancar en San Agustinillo, una sola medialuna de arena y el mejor baño de los tres. Después Mazunte por el Centro Mexicano de la Tortuga, el centro nacional de investigación de tortugas marinas con piletas de las siete especies que anidan en México, y la cooperativa Cosmeticos Naturales. Al caer la tarde, caminata de 25 minutos hasta Punta Cometa, el punto más al sur de Oaxaca, un espolón de roca donde se ve el sol meterse en mar abierto y en marzo pasan ballenas soplando. Cerrar en Zipolite para cenar: la única playa nudista legal de México, ambiente más nocturno y zarpado, y una resaca brava, así que no te metas al agua después de tomar.",
            "ppUsd": 105,
            "duration": "10 a 12 horas",
            "when": "Día 6, todo el día. MXN 2.000 por persona por el tour organizado Mazunte-Zipolite-Punta Cometa, verificado. Más barato en colectivo o taxi: como 1h15 por tramo. Calculá Punta Cometa 17:45 para un atardecer de 18:45. El centro de tortugas cierra 16:30 y los lunes no abre.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          }
        ]
      },
      {
        "n": 7,
        "place": "Puerto Escondido",
        "title": "Delfines al amanecer",
        "acts": [
          {
            "name": "Panga al amanecer: delfines tornillo, tortugas y ballenas",
            "what": "Salida al amanecer desde Playa Puerto Angelito o Playa Principal en panga tradicional. Manadas de delfines tornillo de a cientos, tortugas golfinas apareándose en la superficie, mantarrayas y, en marzo, ballenas jorobadas todavía subiendo al norte. Suele terminar con una parada de snorkel en Puerto Angelito o Manzanillo.",
            "ppUsd": 47,
            "duration": "3 horas",
            "when": "Día 7, salida 06:00-06:30: el mar más plano y los delfines más activos con la primera luz. MXN 895 por persona, verificado. Marzo sigue dentro de la temporada de ballenas. Llevá pastillas para el mareo, el oleaje hamaca.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Temazcal",
            "what": "Un baño de vapor prehispánico: una cámara baja de adobe con cúpula, piedras volcánicas calentadas afuera y llevadas adentro, copal y hierbas, cuatro rondas con un guía. Pesado físico y emocional, no es spa. Varios operadores los hacen en La Punta y en la ruta a Manialtepec.",
            "ppUsd": 47,
            "duration": "2 a 2,5 horas",
            "when": "Día 7, al final de la tarde para salir al atardecer. MXN 900 por persona, verificado. Hacelo después del barco del amanecer, no antes. No apto para claustrofóbicos, embarazadas ni con problemas cardíacos o de presión. Tomá mucha agua antes y nada de alcohol ese mediodía.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "El último atardecer, y dónde verlo de verdad",
            "what": "Tres buenas opciones, en orden. Carrizalillo por el atardecer enmarcado por el acantilado con una michelada en la arena. La punta de La Punta, sentados en las rocas con los surfers todavía en el agua en la última luz: el ritual local, gratis y el mejor ambiente. O los bares del acantilado arriba de Playa Zicatela camino a Rinconada, que tienen el horizonte más amplio y los peores precios.",
            "ppUsd": 15,
            "duration": "2 horas",
            "when": "Día 7. El atardecer a principios de marzo es cerca de 18:40-18:50. Ubicate 30 minutos antes."
          }
        ]
      },
      {
        "n": 8,
        "place": "Buenos Aires",
        "title": "Vuelta",
        "acts": [
          {
            "name": "Vuelo de vuelta",
            "what": "Volvemos a Buenos Aires.",
            "ppUsd": 0
          }
        ]
      }
    ],
    "flights": {
      "w1": [
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h40m",
          "priceUsd": 880,
          "dep": "23:25-23:55",
          "arr": "06:05-06:20 +1",
          "flight": "AM29 (AM029)",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h35m",
          "priceUsd": 900,
          "dep": "12:00",
          "arr": "18:35",
          "flight": "AM31 (AM031)",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "14h-16h total",
          "priceUsd": 720,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 740,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h-15h total",
          "priceUsd": 790,
          "via": "LIM",
          "estimate": true
        }
      ],
      "w2": [
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h40m",
          "priceUsd": 870,
          "dep": "23:25-23:55",
          "arr": "06:05-06:20 +1",
          "flight": "AM29 (AM029)",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h35m",
          "priceUsd": 890,
          "dep": "12:00",
          "arr": "18:35",
          "flight": "AM31 (AM031)",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "14h-16h total",
          "priceUsd": 710,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 730,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h-15h total",
          "priceUsd": 780,
          "via": "LIM",
          "estimate": true
        }
      ],
      "w3": [
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h40m",
          "priceUsd": 950,
          "dep": "23:25-23:55",
          "arr": "06:05-06:20 +1",
          "flight": "AM29 (AM029)",
          "estimate": true
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "9h35m",
          "priceUsd": 970,
          "dep": "12:00",
          "arr": "18:35",
          "flight": "AM31 (AM031)",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "14h-16h total",
          "priceUsd": 790,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 810,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
          "from": "EZE",
          "to": "MEX",
          "duration": "13h-15h total",
          "priceUsd": 860,
          "via": "LIM",
          "estimate": true
        }
      ]
    },
    "hops": [
      {
        "route": "MEX-PXM",
        "airline": "Viva Aerobus",
        "duration": "1h18m sin escalas",
        "priceUsd": 190,
        "frequency": "~14 flights/week (about 2 daily), the highest frequency operator on the route; also operates NLU (AIFA)-PXM",
        "estimate": true
      }
    ],
    "transfers": [
      {
        "route": "Oaxaca City (OAX) -> Puerto Escondido",
        "mode": "Van compartida (Ruta Coatlanes-Costa, Transportes Bahia Colotepec) por la supercarretera Barranca Larga-Ventanilla",
        "duration": "2h30m-3h30m",
        "costUsd": 18
      },
      {
        "route": "Oaxaca City (OAX) -> Puerto Escondido",
        "mode": "Van privada / transfer para el grupo",
        "duration": "2h30m-3h30m",
        "costUsd": 190
      },
      {
        "route": "PXM airport -> Puerto Escondido town (Zicatela / La Punta / Rinconada)",
        "mode": "Taxi o colectivo",
        "duration": "10 a 20 min",
        "costUsd": 12
      },
      {
        "route": "Huatulco (HUX) -> Puerto Escondido",
        "mode": "Por ruta (Carretera 200): shuttle, bus o transfer privado",
        "duration": "2h30m-3h",
        "costUsd": 25
      },
      {
        "route": "MEX Terminal 1 <-> Terminal 2 (Aerotren / AirTrain)",
        "mode": "Tren automático gratis, hace falta tarjeta de embarque",
        "duration": "5 min de viaje, calculá 45 a 60 min puerta a puerta",
        "costUsd": 0
      }
    ],
    "verdict": "Puerto Escondido es la única del Pacífico con la arquitectura y la gente que buscamos. Se duerme en La Punta, se nada en Carrizalillo y Zicatela queda para la noche.",
    "warning": "El vuelo de Buenos Aires llega a la Terminal 2 y Volaris y Viva salen de la 1: cambiar de terminal lleva una hora y no está protegido. Conviene sacar el tramo a la costa con Aeroméxico en el mismo ticket. El 15 de marzo es feriado.",
    "seasonality": "La primera y la segunda semana están limpias. La tercera termina en Domingo de Ramos y ahí arranca el movimiento a la costa. La luna nueva cae cerca del 8 de marzo, que es cuando mejor se ve la bioluminiscencia.",
    "gettingAround": "En el DF, metro y Uber. En Puerto Escondido, colectivos y taxis; entre La Punta y Zicatela hay diez minutos.",
    "sources": [
      "https://www.flightconnections.com/flights-from-eze-to-mex",
      "https://www.flightconnections.com/flights-from-mex-to-eze",
      "https://www.flightconnections.com/flights-from-buenos-aires-aep",
      "https://www.aeroroutes.com/eng/250827-am1q26eze",
      "https://www.aeromexico.com/en_us/flights-from-buenos-aires-to-mexico-city",
      "https://www.flightera.net/en/flight/Aerom%C3%A9xico-Buenos+Aires-Mexico+City/AM31",
      "https://www.airportia.com/flights/am31/ezeiza/mexico-city/",
      "https://en.wikipedia.org/wiki/List_of_Aerol%C3%ADneas_Argentinas_destinations",
      "https://en.wikipedia.org/wiki/Mexico_City_International_Airport"
    ]
  }
];
