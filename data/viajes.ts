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
    "name": "Máncora",
    "place": "Lima y la costa norte, Perú",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Dos días en Lima y cinco en la playa del norte.",
    "heroDir": "mancora",
    "stops": [
      {
        "slug": "lima",
        "name": "Lima",
        "nights": 2,
        "note": "Barranco: casonas, museos chicos y el mar abajo del acantilado.",
        "hotels": [
          {
            "name": "Second Home Peru",
            "area": "Barranco - Domeyer 366, on the clifftop above Playa Los Pavos",
            "nightUsd": 390,
            "ppUsd": 78,
            "why": "Sculptor Victor Delfin's own cliff house: art everywhere, pool, Pacific view.",
            "url": "https://www.booking.com/hotel/pe/secondhomeperu.html",
            "score": "9.3/10 Booking.com (865+ reviews)",
            "site": "https://www.secondhomeperu.com/",
            "estimate": true
          },
          {
            "name": "Casa Republica Barranco Boutique Hotel",
            "area": "Barranco - Av. Saenz Pena 208, one block off the boulevard",
            "nightUsd": 490,
            "ppUsd": 98,
            "why": "1920s republican mansion, rooftop terrace, free bikes, walk everywhere.",
            "url": "https://www.booking.com/hotel/pe/casa-republica-barranco.html",
            "score": "9.0/10 Booking.com (381 verified reviews)",
            "site": "https://casarepublica.com/",
            "estimate": true
          },
          {
            "name": "Casa Caceres",
            "area": "Barranco - quiet residential street, adults only",
            "nightUsd": 309,
            "ppUsd": 62,
            "why": "Adults-only, garden and terrace, quiet street, strong value in Barranco.",
            "url": "https://www.booking.com/searchresults.html?ss=Casa%20Caceres%20Barranco%20Lima",
            "score": "9.3/10 Booking.com",
            "estimate": true
          },
          {
            "name": "Villa Barranco by Ananay Hotels",
            "area": "Barranco - restored 1920s townhouse near Playa Barranquito, 1.2 mi from the beach",
            "nightUsd": 777,
            "ppUsd": 155,
            "why": "The best-designed mid-size house in Barranco; Ananay's restoration is genuinely good.",
            "url": "https://www.booking.com/hotel/pe/villa-barranco.html",
            "score": "4/5 Tripadvisor, ranked #45 of 298 Lima hotels",
            "site": "https://villabarranco.ananayhotels.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Hotel B",
            "area": "Barranco - Av. Saenz Pena 204, next door to MATE",
            "nightUsd": 1068,
            "ppUsd": 214,
            "why": "Belle Epoque mansion run as a living contemporary art gallery; Lima's best-looking hotel.",
            "url": "https://www.booking.com/hotel/pe/arts-boutique-b.html",
            "score": "9.1/10 Booking.com, 9.6/10 Expedia (210 reviews)",
            "site": "https://www.relaischateaux.com/us/hotel/hotel-b/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "House in Barranco (artist host Giselle) - entire 3BR home",
            "area": "Barranco, five blocks from the ocean, among the galleries",
            "sleeps": 5,
            "nightUsd": 140,
            "ppUsd": 28,
            "why": "Sleeps exactly five in three real bedrooms; artist-owned, three bathrooms.",
            "url": "https://www.airbnb.com/rooms/27774691"
          },
          {
            "name": "Hoomie | Fusion House _4BR (entire house)",
            "area": "Barranco",
            "sleeps": 8,
            "nightUsd": 200,
            "ppUsd": 40,
            "why": "Four bedrooms, professionally managed, more room than five people need.",
            "url": "https://www.airbnb.com/rooms/1010972266330542335"
          },
          {
            "name": "Classic Barranco Vintage House - Boulevard & Park",
            "area": "Barranco, beside the boulevard and Parque Municipal",
            "sleeps": 6,
            "nightUsd": 150,
            "ppUsd": 30,
            "why": "Period Barranco house steps from the boulevard, but only two bedrooms.",
            "url": "https://www.airbnb.com/rooms/1094863601762208605"
          },
          {
            "name": "Casa Barranco - apartment with terrace near the esplanade",
            "area": "Barranco, near the malecon esplanade",
            "sleeps": 5,
            "nightUsd": 120,
            "ppUsd": 24,
            "why": "New apartment with a private terrace in the middle of Barranco.",
            "url": "https://www.airbnb.com/rooms/1464740181450363931"
          },
          {
            "name": "Barranco entire-home search (filter: 5 guests, entire place, 3+ bedrooms)",
            "area": "Barranco, Lima",
            "sleeps": 5,
            "nightUsd": 160,
            "ppUsd": 32,
            "why": "Fallback search if the listings above are taken for March.",
            "url": "https://www.airbnb.com/barranco-peru/stays/houses",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Kjolle (Barranco)",
            "what": "Pia Leon's tasting menu in the Central building - the best-value world-class meal in Lima.",
            "level": "$$$$ - S/988 (~USD 264) pp, ~USD 1,320 for five. Vegetal menu S/456. Verified on kjolle.com."
          },
          {
            "name": "Isolina (Barranco)",
            "what": "Old-Lima taberna; enormous shared plates of tacu tacu, cau cau, seco de asado - built for a group of five.",
            "level": "$$ - USD 25-50 pp"
          },
          {
            "name": "Merito (Barranco)",
            "what": "Small Venezuelan-Peruvian counter restaurant, wood fire, natural wine, the hip one.",
            "level": "$$ - USD 30-50 pp"
          },
          {
            "name": "Canta Rana (Barranco)",
            "what": "Scruffy neighbourhood cevicheria, lunch only, fish ceviche around S/45.",
            "level": "$ - USD 7-15 pp"
          }
        ],
        "weather": "Early March is the tail of Lima's summer and the best weather of the year: highs around 26-28C, nights 19-20C, high humidity (70-85%), strong UV, and essentially no rain - Lima is a coastal desert and the grey garua drizzle is a May-October phenomenon, not a March one. The sea is at its annual warmest but the Humboldt current still keeps it cool, roughly 20-22C, so the malecon beaches are swimmable-but-bracing rather than tropical."
      },
      {
        "slug": "mancora",
        "name": "Mancora",
        "nights": 5,
        "note": "Las Pocitas y Vichayito, al sur del pueblo, es donde están las casas.",
        "hotels": [
          {
            "name": "DCO Suites, Lounge & Spa",
            "area": "Playa Las Pocitas, Mancora - directly on the sand",
            "nightUsd": 468,
            "ppUsd": 94,
            "why": "Best-designed room you can get on Pocitas sand inside budget; spa, private beach.",
            "url": "https://www.booking.com/searchresults.html?ss=DCO%20Suites%20Lounge%20%26%20Spa%20Mancora",
            "score": "9.6/10 Booking.com",
            "estimate": true
          },
          {
            "name": "Makani Vichayito",
            "area": "Playa Vichayito Norte, km 1155 Panamericana Norte, 5 min north of Los Organos",
            "nightUsd": 327,
            "ppUsd": 65,
            "why": "Beachfront bungalows on the emptiest sand on the strip; the value pick.",
            "url": "https://www.booking.com/city/pe/vichayito.html",
            "score": "9.2/10 Booking.com",
            "site": "https://www.makanivichayito.com/",
            "estimate": true
          },
          {
            "name": "El Samay Hotel Boutique",
            "area": "Canoas de Punta Sal, Tumbes - near Punta Sal Grande beach, 25-45 min north of Mancora",
            "nightUsd": 300,
            "ppUsd": 60,
            "why": "Highest-rated place on the north coast, private beach, half the price of Pocitas.",
            "url": "https://www.booking.com/city/pe/canoas-de-punta-sal.html",
            "score": "9.8/10 Booking.com (~220 reviews) - the highest score on the whole coast",
            "estimate": true
          },
          {
            "name": "Arennas Mancora",
            "area": "Playa Las Pocitas, Mancora - beachfront, ~25 min walk from Pocitas centre",
            "nightUsd": 660,
            "ppUsd": 132,
            "why": "The polished one: beachfront pool villas, two pools, best-looking resort on Pocitas.",
            "url": "https://www.booking.com/design/city/pe/mancora.html",
            "score": "9.2/10 Booking.com (229 reviews)",
            "site": "https://www.arennasmancora.com/en/home/",
            "over": true,
            "estimate": true
          },
          {
            "name": "KiChic",
            "area": "Las Pocitas / south Mancora, ~3km from town, directly beachfront",
            "nightUsd": 780,
            "ppUsd": 156,
            "why": "Nine adults-only rooms, outdoor showers, organic kitchen; the design splurge.",
            "url": "https://www.booking.com/hotel/pe/kichic.html",
            "score": "9.5/10 Booking.com",
            "site": "https://www.kichic.pe/en/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Casa Claro de Luna - Las Pocitas (entire 5-bedroom beach house)",
            "area": "Playa Las Pocitas, Mancora",
            "sleeps": 10,
            "nightUsd": 400,
            "ppUsd": 80,
            "why": "Five bedrooms on Pocitas sand: everyone gets their own room and a beach house.",
            "url": "https://www.airbnb.com/rooms/657930837608148100"
          },
          {
            "name": "House with Private Pool for 8 people - Vichayito",
            "area": "Vichayito",
            "sleeps": 8,
            "nightUsd": 280,
            "ppUsd": 56,
            "why": "Four bedrooms and a private pool in Vichayito at a perfect 5.0 rating.",
            "url": "https://www.airbnb.com/rooms/1109685935939049308"
          },
          {
            "name": "Las Pocitas, brand new house with swimming pool (entire 4BR)",
            "area": "Playa Las Pocitas, Mancora",
            "sleeps": 12,
            "nightUsd": 350,
            "ppUsd": 70,
            "why": "New-build four-bedroom house with pool, on the good stretch of Pocitas.",
            "url": "https://www.airbnb.com/rooms/1321133264832239578"
          },
          {
            "name": "Paradise en Vichayito II (entire beachfront house)",
            "area": "Vichayito, beachfront",
            "sleeps": 6,
            "nightUsd": 180,
            "ppUsd": 36,
            "why": "Beachfront Vichayito house with 245 reviews at 4.87 - the most proven rental here.",
            "url": "https://www.airbnb.com/rooms/41271186"
          },
          {
            "name": "Beachfront Casa DIEM Eco-Luxury Vichayito",
            "area": "Vichayito, beachfront",
            "sleeps": 6,
            "nightUsd": 300,
            "ppUsd": 60,
            "why": "The design-forward eco-build on Vichayito sand; the architecture pick of the rentals.",
            "url": "https://www.airbnb.com/rooms/53462358"
          }
        ],
        "food": [
          {
            "name": "La Sirena d'Juan (Mancora, main strip)",
            "what": "The town's long-standing fine-dining room; Peruvian-Japanese seafood, tiny, so book a table for five ahead.",
            "level": "$$$ - roughly USD 30-50 pp"
          },
          {
            "name": "At(e)lier (Mancora)",
            "what": "Dim, atmospheric small plates and craft cocktails; inventive dishes like banana gnocchi, vegan options.",
            "level": "$$$ - higher-end for Mancora, roughly USD 25-45 pp"
          },
          {
            "name": "Tokuyo (Mancora)",
            "what": "Mancora's sushi and Nikkei spot; vegan makis and poke bowls as well as the raw fish.",
            "level": "$$ - roughly USD 15-30 pp"
          },
          {
            "name": "La Biodega / Blacksheep Cafe (Mancora)",
            "what": "Daytime cafes for coffee, chai, brunch and working wifi; Blacksheep is air-conditioned and mural-covered.",
            "level": "$ - roughly USD 6-14 pp"
          }
        ],
        "weather": "March is Mancora's hottest month and the best swimming of the year: daytime highs around 30-31C (the national weather service puts the March average high at 30.8C), nights 23-24C, sea temperature around 25C - the warmest it gets - and about 10.6 hours of sun a day. December to April is peak beach season, so early March is hot, sunny and BUSY, with high-season room rates and houses booked months out."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Lima",
        "title": "Barranco a pie",
        "acts": [
          {
            "name": "Barranco street art and architecture walking tour",
            "what": "Two-hour guided walk: Parque Municipal, Bajada de Banos murals, Puente de los Suspiros, malecon.",
            "ppUsd": 25,
            "duration": "2 hours",
            "when": "Morning, 10:00 start",
            "url": "https://www.getyourguide.com/lima-l39/colorful-barranco-tour-and-street-art-t853560/"
          },
          {
            "name": "MATE - Museo Mario Testino",
            "what": "Testino's fashion and Andean portrait photography in a restored 19th-century Barranco villa.",
            "ppUsd": 8,
            "duration": "1-1.5 hours",
            "when": "Early afternoon (open ~10:00-19:00)",
            "url": "https://mate.pe/"
          },
          {
            "name": "Museo Pedro de Osma",
            "what": "Belle-epoque mansion 200m from MATE holding colonial painting, Andean silver and Amazonian art.",
            "ppUsd": 10,
            "duration": "1 hour",
            "when": "Late afternoon",
            "url": "https://museopedrodeosma.org/"
          },
          {
            "name": "Dinner at Isolina, then pisco at Lady Bee",
            "what": "Huge old-Lima taberna plates to share, then an agave-and-pisco cocktail bar in Barranco.",
            "ppUsd": 55,
            "duration": "3-4 hours",
            "when": "Evening from 20:00",
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
            "name": "Huaca Pucllana guided visit",
            "what": "Pre-Inca adobe pyramid standing inside residential Miraflores; guided walk over the terraces.",
            "ppUsd": 5,
            "duration": "1 hour",
            "when": "Morning, 09:00-10:00 before the heat",
            "url": "https://huacapucllanamiraflores.pe/"
          },
          {
            "name": "Surquillo market tour plus ceviche cooking class",
            "what": "Shop ajies, limes and fish at Mercado No.1 de Surquillo, then cook ceviche, causa and a pisco sour.",
            "ppUsd": 75,
            "duration": "4 hours",
            "when": "Morning, 09:30 start (market is freshest early)",
            "url": "https://www.getyourguide.com/lima-l39/cooking-classes-tc43/"
          },
          {
            "name": "Malecon bike ride, Barranco to Miraflores",
            "what": "Ride the 10km clifftop cycle path past Parque del Amor and Larcomar to Chorrillos and back.",
            "ppUsd": 15,
            "duration": "2-3 hours",
            "when": "Late afternoon, 16:00-18:30 for the sunset",
            "url": "https://www.getyourguide.com/lima-l39/bike-tours-tc180/"
          },
          {
            "name": "Tandem paragliding off the Miraflores cliffs",
            "what": "Ten-minute tandem flight launching from Parque Raimondi over the malecon and Larcomar.",
            "ppUsd": 100,
            "duration": "10-15 min flight, allow 1-2 hours for five people",
            "when": "Afternoon, 12:00-17:00 when the sea breeze is up",
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
            "name": "Arrival: sunset in the Pocitas tide pools, ceviche and a cold Cusquena",
            "what": "Walk Las Pocitas at low tide, sit in the natural rock pools, eat on the sand.",
            "ppUsd": 15,
            "duration": "2-3 hours",
            "when": "16:30 to sunset (~18:30 in March)",
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
            "name": "Surf lesson at the Mancora point break",
            "what": "Long, mellow left reef break; the inside section is one of South America's best beginner waves.",
            "ppUsd": 25,
            "duration": "1.5-2 hours",
            "when": "Early morning, 07:00-09:00, before the afternoon wind",
            "url": "https://www.mancorakiteclub.com/solo-surf"
          },
          {
            "name": "Poza de Barro mud baths plus Mirador de Mancora",
            "what": "Sulfurous thermal mud pool up the Fernandez valley, 11km inland, reached by mototaxi.",
            "ppUsd": 30,
            "duration": "2.5 hours",
            "when": "Late morning or mid-afternoon",
            "url": "https://www.getyourguide.com/mancora-l219469/mancora-poza-de-barro-hot-springs-and-mirador-de-mancora-t948558/"
          },
          {
            "name": "Horseback ride along Vichayito beach at sunset",
            "what": "Ride several kilometres of empty sand between Mancora and Vichayito in the golden hour.",
            "ppUsd": 15,
            "duration": "1-1.5 hours",
            "when": "17:00-18:30, finishing at sunset",
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
            "name": "Swim with green sea turtles at El Nuro pier",
            "what": "Wild green turtles gather under the fishing pier for scraps; you snorkel among them from a small boat.",
            "ppUsd": 10,
            "duration": "2-3 hours including transport",
            "when": "Morning, 08:00-11:00 (pier open 08:00-17:00, calmest and clearest early)",
            "url": "https://www.getyourguide.com/mancora-l219469/desde-mancora-nado-con-tortugas-paseo-en-catamaran-y-avistamiento-de-aves-t953477/"
          },
          {
            "name": "Lunch in Los Organos and the La Vuelta left",
            "what": "Fishing-village lunch, then watch or surf the powerful tubular left reef called La Vuelta.",
            "ppUsd": 15,
            "duration": "3-4 hours",
            "when": "Midday to late afternoon",
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
            "name": "Day trip north to Punta Sal / Canoas",
            "what": "The strip's widest, calmest, emptiest beach, 25-45 min north in the Tumbes region.",
            "ppUsd": 20,
            "duration": "Full day",
            "when": "Leave 09:00, back for sunset",
            "url": "https://www.booking.com/city/pe/canoas-de-punta-sal.html"
          },
          {
            "name": "Cabo Blanco: Hemingway's fishing club and the barrel",
            "what": "Forty minutes south; the 1950s big-game fishing club site and a world-famous tubing left.",
            "ppUsd": 25,
            "duration": "Half day",
            "when": "Morning, dawn for the wave",
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
            "name": "Last-day slow plan: SUP or snorkel, then sunset drinks in Mancora",
            "what": "Paddleboard the flat Vichayito water in the morning, then the Mancora beach bars for sunset.",
            "ppUsd": 25,
            "duration": "Half day plus evening",
            "when": "SUP 08:00-10:00 (glassiest); bars from 18:00",
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
          "duration": "4h50m",
          "priceUsd": 335,
          "estimate": true,
          "note": "JA (EZE-LIM, number not yet published for NS27)"
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 370,
          "estimate": true,
          "note": "H2 5800"
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 455,
          "estimate": true,
          "note": "LA 2376"
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "duration": "8h30m-10h30m (2h15 + 2h-4h layover + 3h45)",
          "priceUsd": 300,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "8h45m-11h",
          "priceUsd": 320,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
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
          "duration": "4h50m",
          "priceUsd": 270,
          "estimate": true,
          "note": "JA (EZE-LIM, number not yet published for NS27)"
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 290,
          "estimate": true,
          "note": "H2 5800"
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 385,
          "estimate": true,
          "note": "LA 2376 / LA 2946"
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "duration": "8h30m-10h30m",
          "priceUsd": 245,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "8h45m-11h",
          "priceUsd": 260,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
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
          "duration": "4h50m",
          "priceUsd": 285,
          "estimate": true,
          "note": "JA (EZE-LIM, number not yet published for NS27)"
        },
        {
          "kind": "directo",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 305,
          "estimate": true,
          "note": "H2 5800"
        },
        {
          "kind": "directo",
          "airline": "LATAM",
          "route": "EZE → LIM",
          "duration": "4h50m",
          "priceUsd": 400,
          "estimate": true,
          "note": "LA 2376 / LA 2946"
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → LIM",
          "duration": "8h30m-10h30m",
          "priceUsd": 255,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Sky Airline",
          "route": "EZE → LIM",
          "duration": "8h45m-11h",
          "priceUsd": 275,
          "via": "SCL",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "AEP → LIM",
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
        "duration": "1h50m nonstop",
        "priceUsd": 150,
        "frequency": "~27-30 weekly, 3-5 departures/day; departures spread 05:35-19:05",
        "estimate": true
      }
    ],
    "transfers": [
      {
        "route": "Talara airport (TYL) - Mancora",
        "mode": "private transfer / taxi (car or van, pre-booked)",
        "duration": "1h15m-1h30m (~78 km)",
        "costUsd": 55
      },
      {
        "route": "Talara airport (TYL) - Mancora",
        "mode": "colectivo / combi (shared)",
        "duration": "1h30m-2h30m",
        "costUsd": 4
      },
      {
        "route": "Tumbes airport (TBP) - Mancora",
        "mode": "private transfer / taxi",
        "duration": "1h30m-1h50m (~110 km)",
        "costUsd": 70
      },
      {
        "route": "Piura airport (PIU) - Mancora",
        "mode": "private van / bus",
        "duration": "2h25m-3h00m (~185 km)",
        "costUsd": 90
      },
      {
        "route": "Lima (LIM airport or Miraflores) - Paracas",
        "mode": "Cruz del Sur bus (Ejecutivo / Cruzero)",
        "duration": "3h15m-3h45m (~245 km via Panamericana Sur)",
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
    "name": "Cartagena",
    "place": "Cartagena y el Caribe, Colombia",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Tres días en la ciudad amurallada y cuatro en Barú.",
    "heroDir": "cartagena",
    "stops": [
      {
        "slug": "cartagena",
        "name": "Cartagena de Indias",
        "nights": 3,
        "note": "Adentro de la muralla y en Getsemaní, todo a pie.",
        "hotels": [
          {
            "name": "Townhouse Boutique Hotel",
            "area": "San Diego, Calle Segunda de Badillo 36-88, inside the walls",
            "nightUsd": 447,
            "ppUsd": 89,
            "why": "The design pick: art-hotel interiors, best rooftop in the walled city, only two rooms needed.",
            "url": "https://www.booking.com/hotel/co/townhouse-boutique.en.html",
            "score": "8.9/10 Very good (169 reviews, Kayak)",
            "site": "https://www.townhousecartagena.com/",
            "estimate": true
          },
          {
            "name": "Hotel Kartaxa",
            "area": "San Diego, inside the walled city",
            "nightUsd": 487,
            "ppUsd": 97,
            "why": "Highest-rated in-budget hotel inside the walls; pool, breakfast, San Diego calm, 25 rooms.",
            "url": "https://www.booking.com/hotel/co/hotel-kartaxa.en.html",
            "score": "9.4/10 Wonderful (913 reviews, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Boutique Casa del Coliseo",
            "area": "El Centro, Calle del Coliseo 35-23, steps from the Cathedral",
            "nightUsd": 448,
            "ppUsd": 90,
            "why": "Twelve rooms, murals, rooftop pool, prime Centro address for ninety a head.",
            "url": "https://www.booking.com/hotel/co/casa-del-coliseo.en.html",
            "score": "9.2/10 Wonderful (936 reviews, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Casa Pizarro",
            "area": "Getsemaní, Calle del Pozo 25-56",
            "nightUsd": 420,
            "ppUsd": 84,
            "why": "Cheapest per head of the good ones; courtyard pool, spa, rooftop, 1,900 reviews.",
            "url": "https://www.booking.com/hotel/co/casa-pizarro-boutique.en.html",
            "score": "8.9/10 Very good (1,933 reviews, Kayak)",
            "estimate": true
          },
          {
            "name": "Hotel Capellán de Getsemaní  [SPLURGE - OVER BUDGET]",
            "area": "Getsemaní, Carrera 9 No. 29-52, by Parque Centenario",
            "nightUsd": 540,
            "ppUsd": 108,
            "why": "Best-looking hotel in reach: rooftop pool with hot tub, spa, two-bedroom suites.",
            "url": "https://www.booking.com/hotel/co/capellan-de-getsemani.en.html",
            "score": "9.3/10 Wonderful (836 reviews, Kayak)",
            "site": "https://hotelcapellandegetsemani.com/en/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Old City Sanctuary - luxury colonial villa with private pool",
            "area": "Walled City, El Centro",
            "sleeps": 10,
            "nightUsd": 600,
            "ppUsd": 120,
            "why": "The most beautiful option in this file: original colonial arches, high ceilings, private pool.",
            "url": "https://www.airbnb.com/rooms/713364"
          },
          {
            "name": "Casa Salvatore - 4BR colonial house with private pool",
            "area": "Getsemaní, short walk to the Clock Tower gate",
            "sleeps": 9,
            "nightUsd": 500,
            "ppUsd": 100,
            "why": "Exactly five real beds for five people; colonial house, private pool, daily housekeeping.",
            "url": "https://www.airbnb.com/rooms/1111144595599803777"
          },
          {
            "name": "3-bedroom colonial house in the Walled City, pool + rooftop jacuzzi",
            "area": "El Centro, Historic Centre (exact address released after booking)",
            "sleeps": 12,
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "Ground-floor pool plus rooftop jacuzzi, ensuite bedrooms, butler; cheapest good house.",
            "url": "https://www.airbnb.com/rooms/856462808151932857"
          },
          {
            "name": "5-bedroom colonial villa with rooftop pool, San Diego",
            "area": "San Diego, steps from Plaza de San Diego, inside the walls",
            "sleeps": 16,
            "nightUsd": 525,
            "ppUsd": 105,
            "why": "Restored colonial villa, private rooftop pool, king bed in every room, breakfast included.",
            "url": "https://www.airbnb.com/rooms/51493412"
          },
          {
            "name": "FILTERED SEARCH - whole homes with pools, Getsemaní and the walled city",
            "area": "Getsemaní / El Centro / San Diego",
            "sleeps": 6,
            "nightUsd": 400,
            "ppUsd": 80,
            "why": "Where to hunt a right-sized 3BR casona rather than paying for a sixteen-bed mansion.",
            "url": "https://www.airbnb.com/getsemani-cartagena-colombia/stays/pools",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Celele",
            "what": "Colombian Caribbean, Latin America's 50 Best No.5, Getsemaní. Mains $16-23, tasting around $78. Book 1-2 weeks ahead; a card and a minimum spend are required, and a five-top needs more notice.",
            "level": "$$$$"
          },
          {
            "name": "Carmen",
            "what": "Caribbean ingredients, European technique, El Centro. Mains $18-27, tasting $68-83. The other fine-dining anchor alongside Celele.",
            "level": "$$$$"
          },
          {
            "name": "Marea by Rausch",
            "what": "Seafood and risotto on the Getsemaní waterfront by the Rausch brothers. $22-34 per person. The best of the smart-but-not-tasting-menu tier, and easier to seat five than Celele.",
            "level": "$$$"
          },
          {
            "name": "La Cevichería",
            "what": "The Bourdain ceviche house, Calle Stuart near Plaza San Diego, El Centro. $13-23. Go early, it queues.",
            "level": "$$$"
          }
        ],
        "weather": "Early March is the dry season and about as good as this coast gets: lows around 24-25C, highs 30-32C, sea at 28-29C, roughly 11.6 hours of sun and very little rain. The catch is wind."
      },
      {
        "slug": "baru",
        "name": "Isla Barú",
        "nights": 4,
        "note": "Se llega por el puente, sin depender de lanchas.",
        "hotels": [
          {
            "name": "Thani Ecobeach Barú",
            "area": "Quiet end of the Playa Blanca strip, north Barú (Pendales)",
            "nightUsd": 420,
            "ppUsd": 84,
            "why": "Best in-budget beach hotel on Barú; free kayak and paddleboard, sea-view family rooms.",
            "url": "https://www.booking.com/hotel/co/thani-ecobeach-baru.html",
            "score": "Strong; 234 verified Booking.com reviews",
            "estimate": true
          },
          {
            "name": "Aura Hotel Barú",
            "area": "West Barú, facing Isla Cholón",
            "nightUsd": 437,
            "ppUsd": 87,
            "why": "In budget for five, calm private beach, fifteen minutes by boat from the Rosarios.",
            "url": "https://www.booking.com/region/co/baru.html",
            "score": "Mixed-positive on Tripadvisor; praised for beach and service",
            "estimate": true
          },
          {
            "name": "Playa Manglares Isla Barú  [OVER BUDGET]",
            "area": "North Barú, mangrove-and-beach side",
            "nightUsd": 571,
            "ppUsd": 114,
            "why": "The one people go to for the food; mangrove setting, far quieter than Playa Blanca.",
            "url": "https://www.booking.com/region/co/baru.html",
            "score": "NOT VERIFIED - listed as a recommended property, score not captured",
            "over": true,
            "estimate": true
          },
          {
            "name": "Sabai Beach Hotel  [SPLURGE - WELL OVER BUDGET]",
            "area": "Southwest tip of Barú, inside Parque Natural Corales del Rosario",
            "nightUsd": 784,
            "ppUsd": 157,
            "why": "200 metres of private white sand, genuinely secluded; the best beach in this list.",
            "url": "https://www.booking.com/region/co/baru.html",
            "score": "9.0/10 Wonderful (582 reviews, Kayak)",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Private house facing the Caribbean, Barú Island (4BR, private beach + pool)",
            "area": "Barú Island, beachfront",
            "sleeps": 12,
            "nightUsd": 500,
            "ppUsd": 100,
            "why": "Private beach and private pool at a hundred a head; the right answer for Barú.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Spectacular home in Barú with private beach, marina and pool",
            "area": "Barú, private beachfront with its own marina",
            "sleeps": 8,
            "nightUsd": 600,
            "ppUsd": 120,
            "why": "Own marina: your charter boat collects you from the house, not a public pier.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Ojalá - private villa with its own dock, Cholón",
            "area": "Cholón, west Barú",
            "sleeps": 12,
            "nightUsd": 900,
            "ppUsd": 180,
            "why": "Butler and cook included, private pier straight onto Cholón; the group splurge.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "Waterfront apartment, Calablanca Residences",
            "area": "North Barú, Calablanca (beside the Sofitel)",
            "sleeps": 8,
            "nightUsd": 350,
            "ppUsd": 70,
            "why": "Cheapest credible whole-place on the island, on the good north-end water.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          },
          {
            "name": "FILTERED SEARCH - Barú whole homes with private pools",
            "area": "All of Barú and Cholón",
            "sleeps": 6,
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "Villas beat hotels on Barú on both design and price; this is where to shop.",
            "url": "https://www.airbnb.com/baru-colombia/stays",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Your hotel or villa",
            "what": "Be realistic: Barú is not a restaurant destination and most nights you eat where you sleep. Budget $15-30pp at Thani or Aura, more at Sabai. Thani's food is good but reviewers flag small portions for the price. A villa with a kitchen (and in some cases a cook) changes this equation considerably for five people.",
            "level": "$$-$$$"
          },
          {
            "name": "Playa Manglares Isla Barú",
            "what": "The one property on the island with an actual food reputation - worth booking a table even if you sleep elsewhere. Roughly $25-40 per person.",
            "level": "$$$"
          },
          {
            "name": "Sabai Beach restaurant",
            "what": "Open to non-guests as well as guests, on the private beach at the southwest tip. The nicest setting for a long lunch on the island. $30-50 per person.",
            "level": "$$$"
          },
          {
            "name": "Nena Beach Club, Playa Blanca",
            "what": "Beach-club lunch on the famous sand: loungers, fried fish, coconut rice, cocktails. Usually a day pass or a minimum spend, roughly $30-50 per person.",
            "level": "$$$"
          }
        ],
        "weather": "Same dry-season numbers as Cartagena - 30-32C, sea at 28-29C, almost no rain - but on Barú the wind is not a footnote, it shapes the days. December to May the trade winds blow hard over this stretch and the practical effect is that mornings are glassy while afternoons get choppy, with local guides describing afternoon boat crossings in this season as genuinely challenging."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Cartagena",
        "title": "La ciudad amurallada",
        "acts": [
          {
            "name": "Walled-city orientation walk and sunset on the muralla",
            "what": "Land, drop bags, then walk Centro to San Diego to Las Bóvedas and up onto the sea wall for sunset. Three ways to do the sunset drink: Café del Mar, literally built on top of the ramparts, iconic and packed - reserve or arrive by 16:30, premium prices; Baluarte de Santo Domingo next door, much less crowded and noticeably cheaper; or Townhouse rooftop in San Diego, two wading pools and a sunset DJ, pool access around 50,000 COP. If you want the 360-degree view over old city, bay and skyline rather than just the sea, the Movich rooftop one block off Plaza Bolívar beats all of them - open to the public but it closes for private events, so call ahead.",
            "ppUsd": 30,
            "duration": "3-4 hours",
            "when": "Day 1, 16:00 onwards (sunset roughly 18:10 in early March)",
            "url": "https://www.townhousecartagena.com/rooftop"
          },
          {
            "name": "First dinner: La Cevichería",
            "what": "The Bourdain ceviche place on Calle Stuart by Plaza San Diego. Small and courtyard-ish, historically no reservations, so go at 18:30 or expect to queue - and a queue of five is worse than a queue of two. If it is brutal, El Boliche Cebichería a few streets away is the locals' better-value answer at $12-21.",
            "ppUsd": 30,
            "duration": "2 hours",
            "when": "Day 1, 19:30",
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
            "name": "Bazurto market food tour",
            "what": "Not the tourist version of Cartagena: the real wholesale market east of the centre, with a guide, eating through fruit stalls, fried-food stands, butchers and a sit-down lunch. Cartagena Connections and Juan Ballena both run it, typically a 10:30 start with local bus transport, fruit tasting and lunch included. Five is a good size - most operators cap small-group at six. Go with an operator, not alone.",
            "ppUsd": 50,
            "duration": "4 hours",
            "when": "Day 2, 10:30",
            "url": "https://www.cartagenaconnections.com/mercado-bazurto-tour"
          },
          {
            "name": "Castillo San Felipe de Barajas, late afternoon",
            "what": "The big hilltop fortress with the tunnel network. Go at 16:00-17:30, not midday - there is no shade and March sun is punishing. About an hour and a half including the tunnels and the view back over the old city.",
            "ppUsd": 9,
            "duration": "1.5 hours",
            "when": "Day 2, 16:30",
            "url": "https://www.viator.com/Cartagena-attractions/Castillo-de-San-Felipe-de-Barajas/d4498-a18278"
          },
          {
            "name": "Celele, then champeta at Bazurto Social Club",
            "what": "Celele in Getsemaní is the reason food people fly here - No.5 in Latin America's 50 Best 2025, No.48 in the World's 50 Best, Caribbean-Colombian cooking out of the Caribe Project research. Mains $16-23, tasting around $78. Reservations are effectively mandatory: they lock the door after check-in, require a card and a minimum spend, and you need a week ahead on weekdays, two weeks for a weekend - and a table for five is harder than a table for two, so book the moment dates are fixed. Afterwards walk five minutes to Bazurto Social Club on Avenida del Centenario for live champeta and picó sound-system culture: the Palenque/Afro-Caribbean side of this city that the walled city hides.",
            "ppUsd": 85,
            "duration": "5 hours",
            "when": "Day 2, 19:30 dinner, 22:30 champeta",
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
            "name": "Getsemaní street-art and culture walk",
            "what": "Two to three hours through the murals, Calle de la Sierpe, Plaza de la Trinidad and the Callejón Angosto umbrellas, with the gentrification and Afro-Caribbean history that goes with them. The shared graffiti walk is about $15-40; a private guide for the five of you with a snack runs nearer $40-60pp and is worth it. Morning, before the heat.",
            "ppUsd": 25,
            "duration": "2-3 hours",
            "when": "Day 3, 09:00",
            "url": "https://www.getyourguide.com/cartagena-l362/cartagena-getsemani-highlights-and-graffiti-walking-tour-t391473/"
          },
          {
            "name": "Volcán del Totumo mud volcano (optional - judge it honestly)",
            "what": "A 15-metre mud cone about an hour north where you climb in and float in warm grey clay, then rinse in the lagoon. Group half-day tours $35-45pp, small-group or private $50-65, or $5-6 at the gate if you drive yourselves. Worth knowing before you commit: it is kitschy and crowded, and the 'massage', 'photo help' and 'wash' each carry a $2 tip expectation that stacks up. Skip it if the group would rather do a proper Caribbean cooking class ($70-90pp) - same morning slot, better memory.",
            "ppUsd": 45,
            "duration": "4-5 hours",
            "when": "Day 3, 08:00",
            "url": "https://www.getyourguide.com/cartagena-l362/cartagena-totumo-mud-volcano-experience-t323228/"
          },
          {
            "name": "Sunset sail on the bay, then chiva or Alquímico",
            "what": "A shared sunset catamaran across Cartagena bay, 90 minutes to two hours, $25-50pp, usually with an open bar of rum drinks; Sibarita Express is the commonly recommended one. A private evening charter for just the five of you runs $500-750, i.e. $100-150pp - only worth it if you want the boat to yourselves. Then choose your night: the chiva rumbera painted party bus with a brass band and an aguardiente open bar (about $25-40pp, 3 hours, deliberately ridiculous), or the grown-up version - Alquímico on Calle del Colegio, three floors, herb-infused bottles glowing on two-storey shelves, a World's 50 Best Bars regular - then salsa at Café Havana in Getsemaní.",
            "ppUsd": 45,
            "duration": "6 hours",
            "when": "Day 3, 17:00 sail, 21:00 onwards",
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
            "name": "Transfer to Barú, then Playa Blanca after the day boats leave",
            "what": "Private van from the walled city over the Barbacoas bridge, about 1h-1h15 door to door, roughly 350,000-450,000 COP (USD 85-110) for a van of five, so USD 17-22 each - have the hotel arrange it. Check in, then walk onto Playa Blanca around 16:30 once the day boats and vans have gone. This is the version of that beach worth seeing: same white sand, no vendors, no crowd, low light.",
            "ppUsd": 20,
            "duration": "Half day",
            "when": "Day 4, leave Cartagena 11:00",
            "url": "https://www.tomplanmytrip.com/best-isla-baru-hotels-colombia/"
          },
          {
            "name": "Bioluminescent plankton night swim",
            "what": "Small boat into the dark mangrove lagoon near Manzanillo del Mar / Portonaito, where the dinoflagellates flash blue when you move the water. This is the single best argument for sleeping on Barú rather than day-tripping it, because it only runs at night. Standalone from a Barú hotel, roughly $25-35pp; packaged as an evening excursion from Cartagena, $50-70pp. Go on the darkest night available - a bright moon washes it out completely, so check the moon phase against your dates before booking.",
            "ppUsd": 30,
            "duration": "2-3 hours",
            "when": "Day 4, after dark (roughly 19:30-21:30)",
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
            "name": "Private boat charter: Rosario Islands, snorkelling and Cholón",
            "what": "The big day, and the reason Barú works. Charter your own speedboat rather than joining a day tour: a 28ft (10-12 pax) runs from 1,800,000 COP, about USD 450, and a 29ft from about USD 475, captain and fuel included, cooler and sound system on board. Split five ways that is USD 90-95 each - better than the $93-125pp beach-club day passes and you control the route and the clock. Standard run: leave around 08:30 while the sea is still flat, snorkel the Rosario reefs (10-15m visibility, protected marine park), lunch at an island club, then Cholón in the afternoon - the anchored-boat lagoon where everyone rafts up, sound systems competing, floating bars selling ceviche and mojitos. Loud, messy, very Colombian, and far better on a boat you control. Add USD 7.50pp national park fee and USD 2pp maritime insurance, cash only.",
            "ppUsd": 100,
            "duration": "8 hours, 08:30-17:00",
            "when": "Day 5 - and take the first clear morning, never the afternoon",
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
            "what": "On Barú itself, so no boat: 21 exhibits across three reconstructed ecosystems, around 170 species, two daily flight demonstrations with a handler. Genuinely well done, and the best fallback for a blown-out windy morning. Foreign adult admission 90,000 COP (about USD 22) as of September 2026, students 65,000 COP.",
            "ppUsd": 22,
            "duration": "3 hours",
            "when": "Day 6, from 09:00 when it opens",
            "url": "https://aviarionacional.co/"
          },
          {
            "name": "Kayak the mangrove channels, then nothing",
            "what": "The lagoon side of Barú is threaded with mangrove channels you can paddle in flat water even when the open sea is blown out - which by mid-afternoon in March it often is. Several hotels lend the kit free: Thani Ecobeach includes a double kayak and a paddleboard at no charge. Then deliberately do nothing with the rest of the day. On a four-night beach stop, one empty day is the whole point.",
            "ppUsd": 0,
            "duration": "2 hours plus the rest of the day",
            "when": "Day 6, 15:30",
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
            "name": "Morning snorkel, or a beach-club day pass",
            "what": "Two ways to close it out. Either a half-day snorkel run to the Rosario coral gardens, roughly $40-70pp through your hotel - again, morning, when the water is clearest and calmest. Or take a day pass at one of the designed beach clubs and go horizontal: on Barú, Nena Beach Club, Sabai Beach Club, Mambo or Sunset Beach Club, and none charge a dock fee if you arrive by land. In the Rosarios, mid-range passes are $93-125pp including boat and lunch (Capri, Pa'ue, Mangata) - which is exactly why the private charter on day 5 is the better spend for five people.",
            "ppUsd": 55,
            "duration": "Half to full day",
            "when": "Day 7, 09:00",
            "url": "https://cartagenadaytours.com/blogs/travel-guide/best-beach-clubs-in-rosario-islands"
          },
          {
            "name": "Last sunset, west-facing",
            "what": "Barú faces west, so unlike Cartagena you get the sun dropping into open water straight off your own beach. No booking, no boat, no price. Back to Cartagena on day 8 by road, about an hour, and out.",
            "ppUsd": 0,
            "duration": "1 hour",
            "when": "Day 7, 17:45"
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
          "duration": "7h10m",
          "priceUsd": 750,
          "estimate": true,
          "note": "AR1362"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h06m",
          "priceUsd": 660,
          "estimate": true,
          "note": "AV218"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h20m",
          "priceUsd": 660,
          "estimate": true,
          "note": "AV88"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 690,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 650,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
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
          "duration": "7h10m",
          "priceUsd": 740,
          "estimate": true,
          "note": "AR1362"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h06m",
          "priceUsd": 650,
          "estimate": true,
          "note": "AV218"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h20m",
          "priceUsd": 650,
          "estimate": true,
          "note": "AV88"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 675,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 640,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
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
          "duration": "7h10m",
          "priceUsd": 800,
          "estimate": true,
          "note": "AR1362"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h06m",
          "priceUsd": 700,
          "estimate": true,
          "note": "AV218"
        },
        {
          "kind": "directo",
          "airline": "Avianca",
          "route": "EZE → BOG",
          "duration": "6h20m",
          "priceUsd": 700,
          "estimate": true,
          "note": "AV88"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → CTG",
          "duration": "10h30m-13h00m",
          "priceUsd": 760,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → CTG",
          "duration": "10h00m-12h00m",
          "priceUsd": 700,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "JetSMART",
          "route": "EZE → CTG",
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
        "mode": "Shared speedboat / lancha",
        "duration": "45-60 min direct; ~2h on a tour boat that stops en route",
        "costUsd": 8
      },
      {
        "route": "Cartagena - Playa Blanca, Baru",
        "mode": "Road, via the Pasacaballos bridge (taxi / private van)",
        "duration": "1h15m-1h45m",
        "costUsd": 80
      },
      {
        "route": "Cartagena - Playa Blanca, Baru",
        "mode": "Public bus to Pasacaballos + mototaxi",
        "duration": "60-70 min bus + ~20 min mototaxi",
        "costUsd": 6
      },
      {
        "route": "Cartagena - Islas del Rosario",
        "mode": "Speedboat day tour",
        "duration": "1h-1h15m each way",
        "costUsd": 47
      },
      {
        "route": "Cartagena (Bocagrande / Castillogrande) - Tierra Bomba",
        "mode": "Lancha",
        "duration": "10-25 min",
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
    "name": "Miami",
    "place": "Miami y los Cayos, Estados Unidos",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Tres días en Miami y cuatro en los Cayos.",
    "heroDir": "miami",
    "stops": [
      {
        "slug": "miami",
        "name": "Miami",
        "nights": 3,
        "note": "South Beach y Wynwood. El resort fee se cobra por habitación, ojo.",
        "hotels": [
          {
            "name": "Hotel Rendale Miami Beach (formerly Generator Miami)",
            "area": "Mid-Beach, 3120 Collins Ave (at 31st St)",
            "nightUsd": 440,
            "ppUsd": 88,
            "why": "Cheapest bed on the sand block; functional not beautiful, Generator brand gone.",
            "url": "https://www.booking.com/hotel/us/generator-miami.html",
            "score": "Mixed, roughly 7/10 on booking channels; rebrand split the review history",
            "site": "https://www.miamiandbeaches.com/l/hotels/hotel-rendale-miami-beach/13357",
            "estimate": true
          },
          {
            "name": "Freehand Miami",
            "area": "Upper South Beach / Collins Park, 2727 Indian Creek Dr",
            "nightUsd": 610,
            "ppUsd": 122,
            "why": "Best scene-without-party-hostel in Miami; quad config is built for exactly five.",
            "url": "https://www.booking.com/hotel/us/freehand-miami.html",
            "score": "Excellent on design, garden and the Broken Shaker bar; rooms rated average",
            "site": "https://freehandhotels.com/miami/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Life House, Little Havana",
            "area": "Little Havana, 528 SW 9th Ave (4 blocks off Calle Ocho)",
            "nightUsd": 670,
            "ppUsd": 134,
            "why": "Real design, Cuban mansion, cheapest boutique, but three small rooms kills it.",
            "url": "https://www.booking.com/hotel/us/life-house-little-havana.html",
            "score": "4.0/5 Tripadvisor, ranked #52 of 143 Miami hotels",
            "site": "https://www.lifehousehotels.com/hotels/miami/little-havana",
            "over": true,
            "estimate": true
          },
          {
            "name": "Circa 39 Miami Beach",
            "area": "Mid-Beach, 3900 Collins Ave (beach directly across the road)",
            "nightUsd": 625,
            "ppUsd": 125,
            "why": "Double-queen rooms mean only two rooms and two resort fees, not three.",
            "url": "https://www.booking.com/hotel/us/circa-39.html",
            "score": "4.0/5 Tripadvisor, ranked #36 of 211 Miami Beach hotels",
            "site": "https://www.circa39.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Arlo Wynwood",
            "area": "Wynwood, 2217 NW Miami Ct (one block from Wynwood Walls)",
            "nightUsd": 675,
            "ppUsd": 135,
            "why": "Best design per dollar in Miami; rooftop pool, and you can walk home.",
            "url": "https://www.booking.com/hotel/us/arlo-wynwood.html",
            "score": "4.0/5 Tripadvisor, ranked #6 of 154 Miami hotels",
            "site": "https://www.arlohotels.com/arlo-wynwood/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Little Havana 3BR house with pool (filtered search)",
            "area": "Little Havana / West Little Havana",
            "sleeps": 6,
            "nightUsd": 621,
            "ppUsd": 124,
            "why": "Cheapest way to get a pool, a kitchen and free parking inside the city.",
            "url": "https://www.airbnb.com/s/Little-Havana--Miami--FL/homes?adults=5&min_bedrooms=3&checkin=2027-03-02&checkout=2027-03-05",
            "isSearch": true
          },
          {
            "name": "Private Saltwater Pool, Gated Off-Street Parking, 3Bed/2Bath, Sleeps 6 (VRBO listing 849934)",
            "area": "Miami mainland (Coconut Grove / Coral Way side)",
            "sleeps": 6,
            "nightUsd": 730,
            "ppUsd": 146,
            "why": "Real verified listing; gated parking alone saves USD 45/night of valet.",
            "url": "https://www.vrbo.com/849934"
          },
          {
            "name": "Wynwood / Edgewater 3BR apartment or townhouse (filtered search)",
            "area": "Wynwood and Edgewater",
            "sleeps": 6,
            "nightUsd": 766,
            "ppUsd": 153,
            "why": "Best location for this group by far, and the most over budget because of it.",
            "url": "https://www.airbnb.com/s/Wynwood--Miami--FL/homes?adults=5&min_bedrooms=3&checkin=2027-03-02&checkout=2027-03-05",
            "isSearch": true
          },
          {
            "name": "Coconut Grove pool house (VRBO filtered search)",
            "area": "Coconut Grove",
            "sleeps": 6,
            "nightUsd": 860,
            "ppUsd": 172,
            "why": "OVER BUDGET. Loveliest houses in Miami, worst value at three nights.",
            "url": "https://www.vrbo.com/vacation-rentals/pool/usa/florida/south-east/coconut-grove",
            "isSearch": true
          },
          {
            "name": "Miami Beach 3BR condo in a LEGAL short-term-rental zone (filtered search)",
            "area": "South Beach Entertainment District / North Beach Town Center / RM-2 and RM-3 zones only",
            "sleeps": 6,
            "nightUsd": 960,
            "ppUsd": 192,
            "why": "OVER BUDGET, and most Miami Beach listings are illegal, check the zone first.",
            "url": "https://www.airbnb.com/s/Miami-Beach--FL/homes?adults=5&min_bedrooms=3&checkin=2027-03-02&checkout=2027-03-05",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Enriqueta's Sandwich Shop",
            "what": "Wynwood counter Cuban since 1961. Pan con bistec and a colada under USD 15. Breakfast and lunch only, closes early, cash-friendly.",
            "level": "$"
          },
          {
            "name": "Versailles Restaurant",
            "what": "The Calle Ocho institution. Go for the ventanita walk-up coffee window and the people-watching as much as the ropa vieja and vaca frita.",
            "level": "$$"
          },
          {
            "name": "Mandolin Aegean Bistro",
            "what": "Greek-Turkish in a converted 1940s house in Buena Vista, blue-and-white courtyard. A 2026 Michelin Bib Gourmand, the best-value serious meal on this list and the easiest to seat five.",
            "level": "$$$"
          },
          {
            "name": "Boia De",
            "what": "Italian-leaning room in a Buena Vista strip mall. One Michelin star in the 2026 guide. Tiny, a table for five needs booking the day reservations open.",
            "level": "$$$$"
          }
        ],
        "weather": "Early March is the best weather Miami gets. Average highs rise from 78F to 81F (26-27C) across the month, average low 70F (21C), sea temperature about 76F (24C), swimmable but not warm."
      },
      {
        "slug": "islamorada-keys",
        "name": "Islamorada, Florida Keys",
        "nights": 4,
        "note": "Islamorada del lado de la bahía, con muelle propio.",
        "hotels": [
          {
            "name": "La Siesta Resort & Villas",
            "area": "Islamorada, 80241 Overseas Hwy (MM 80.2, oceanside)",
            "nightUsd": 685,
            "ppUsd": 137,
            "why": "Cheapest one-roof hotel option for five; villas were renovated through late 2026.",
            "url": "https://www.booking.com/searchresults.html?ss=La+Siesta+Resort+Villas+Islamorada",
            "score": "Tripadvisor Travellers' Choice; #8 of 12 Islamorada hotels per U.S. News",
            "site": "https://www.islamoradaresortcollection.com/la-siesta-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "Amara Cay Resort",
            "area": "Islamorada, 80001 Overseas Hwy (MM 80, oceanside)",
            "nightUsd": 850,
            "ppUsd": 170,
            "why": "OVER BUDGET. Best mainstream design resort here; free watersports soften it.",
            "url": "https://www.booking.com/searchresults.html?ss=Amara+Cay+Resort+Islamorada",
            "score": "#2 of 12 Best Hotels in Islamorada per U.S. News; Conde Nast Traveler listed",
            "site": "https://www.islamoradaresortcollection.com/amara-cay-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "The Islands of Islamorada",
            "area": "Islamorada, 82779 Old Hwy (MM 82.8, oceanside)",
            "nightUsd": 880,
            "ppUsd": 176,
            "why": "OVER BUDGET. One roof, villas, own charters, the splurge that makes sense.",
            "url": "https://www.booking.com/searchresults.html?ss=The+Islands+of+Islamorada",
            "score": "High ratings on low review volume",
            "site": "https://www.theislandsofislamorada.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Three Waters Resort & Marina (formerly Postcard Inn at Holiday Isle)",
            "area": "Islamorada, MM 84 oceanside (Holiday Isle)",
            "nightUsd": 870,
            "ppUsd": 174,
            "why": "OVER BUDGET. Best beach and marina in Islamorada; design is dated beach-resort.",
            "url": "https://www.booking.com/searchresults.html?ss=Three+Waters+Resort+Marina+Islamorada",
            "score": "Rebranded from Postcard Inn, read only post-rebrand reviews",
            "site": "https://www.islamoradaresortcollection.com/three-waters-resort",
            "over": true,
            "estimate": true
          },
          {
            "name": "Casa Morada",
            "area": "Islamorada, 136 Madeira Rd / 82200 Overseas Hwy (MM 82, bayside)",
            "nightUsd": 980,
            "ppUsd": 196,
            "why": "OVER BUDGET 2x. The only true design hotel in the Keys, Raymond Jungles garden.",
            "url": "https://www.booking.com/hotel/us/casa-morada-islamorada1.html",
            "score": "9.6/10 for couples on Booking.com; Tripadvisor mixed on value",
            "site": "https://www.casamorada.com/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Key Largo 3BR waterfront canal house (filtered search)",
            "area": "Key Largo, MM 95-105, bayside or canal-front",
            "sleeps": 6,
            "nightUsd": 556,
            "ppUsd": 111,
            "why": "Cheapest legal house in the Keys and Pennekamp reef is 10 minutes away.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/key-largo-area/key-largo",
            "isSearch": true
          },
          {
            "name": "Islamorada bayside 3BR canal house with dock (filtered search)",
            "area": "Islamorada bayside, Plantation Key and Lower Matecumbe canals",
            "sleeps": 6,
            "nightUsd": 618,
            "ppUsd": 124,
            "why": "THE PICK. Dock at the house, sunset side, walk-to-nothing but drive-to-everything.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/islamorada-area/islamorada",
            "isSearch": true
          },
          {
            "name": "Long Key / Lower Matecumbe 3BR house (filtered search)",
            "area": "Long Key and Lower Matecumbe, MM 68-77",
            "sleeps": 6,
            "nightUsd": 593,
            "ppUsd": 119,
            "why": "Best value-to-beauty ratio; 20 min south of the Islamorada restaurants.",
            "url": "https://www.vrbo.com/vacation-rentals/usa/florida/keys/islamorada-area/long-key",
            "isSearch": true
          },
          {
            "name": "Lush Tropical Waterfront Oasis with Heated Pool, Dock and WiFi (VRBO listing 3747408ha)",
            "area": "Islamorada, waterfront with private dock and heated pool",
            "sleeps": 6,
            "nightUsd": 673,
            "ppUsd": 135,
            "why": "Real verified listing with the full package: heated pool, private dock, waterfront.",
            "url": "https://www.vrbo.com/3747408ha"
          },
          {
            "name": "Islamorada 4BR with private pool (filtered search)",
            "area": "Islamorada, private-pool inventory",
            "sleeps": 8,
            "nightUsd": 874,
            "ppUsd": 175,
            "why": "OVER BUDGET. Private pool plus dock is the category that breaks USD 100 pp.",
            "url": "https://www.floridarentals.com/florida-keys/islamorada-vacation-rentals/private-pool/",
            "isSearch": true
          }
        ],
        "food": [
          {
            "name": "Morada Bay Beach Cafe",
            "what": "MM 81 bayside. Tables in the sand, the best sunset in the Keys, decent seafood. Pierre's upstairs is the fancy sister. Book a table for five ahead in March.",
            "level": "$$$"
          },
          {
            "name": "Hungry Tarpon at Robbie's",
            "what": "MM 77.5. Breakfast and fish tacos on the dock, tiny and packed. Eat first, then feed the tarpon.",
            "level": "$$"
          },
          {
            "name": "Lazy Days Restaurant",
            "what": "MM 79.9 oceanside. Bring your own catch or order theirs; yellowtail snapper is the order. Straightforward, good, local.",
            "level": "$$"
          },
          {
            "name": "Chef Michael's",
            "what": "MM 81.6. The best actual cooking in Islamorada, hogfish and local fish done four ways. Small room, reserve ahead.",
            "level": "$$$"
          }
        ],
        "weather": "The Keys run 1-2C warmer than Miami in early March: highs around 27-28C, lows 21-22C, water about 24C, and it is the dry season so rain is minimal. What actually matters is WIND."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Miami",
        "title": "Wynwood y Coconut Grove",
        "acts": [
          {
            "name": "Wynwood Walls plus the free gallery walk",
            "what": "Ticketed Wynwood Walls courtyard, then walk NW 2nd Ave and NW 23rd-26th St for free street art and commercial galleries. Finish at the Rubell Museum in Allapattah (USD 15 adult), one of the best private contemporary collections in the US. CLOSED Mon and Tue; open Wed/Thu/Sun 11:30-17:30 and Fri/Sat 11:30-19:30.",
            "ppUsd": 30,
            "duration": "4-5 hours",
            "when": "Day 1 afternoon, Wed-Sun only",
            "url": "https://rubellmuseum.org/"
          },
          {
            "name": "Dinner at Los Felix, Coconut Grove",
            "what": "Mexico-City-inspired, house nixtamal, mezcal list. Holds both a Michelin star and a Michelin Green Star in the 2026 Florida guide. Book weeks ahead, a table for five in spring-break week needs to be locked in by January.",
            "ppUsd": 95,
            "duration": "2.5 hours",
            "when": "Day 1 evening",
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
            "name": "Design District architecture walk plus PAMM",
            "what": "Morning in the Miami Design District: Buckminster Fuller's Fly's Eye Dome, Sou Fujimoto's Palm Court, the Museum Garage facade. Then 10 min south to Perez Art Museum Miami, the Herzog and de Meuron building with its hanging gardens is the real attraction. USD 18 adult. CLOSED Tue and Wed; open late Thu to 21:00.",
            "ppUsd": 18,
            "duration": "5 hours",
            "when": "Day 2, Thu-Mon",
            "url": "https://www.pamm.org/"
          },
          {
            "name": "Little Havana Calle Ocho food walk",
            "what": "Six tasting stops over 2.5 hours, Cuban sandwich, empanadas, pastelitos, tostones, croquetas, cafe cubano, plus a working cigar roller, Maximo Gomez Domino Park and the Calle Ocho Walk of Fame. USD 69.99-79 pp. Departs 1543 SW 8th St; book 24-48h ahead. Stay on for live son at Ball and Chain.",
            "ppUsd": 79,
            "duration": "2.5 hours",
            "when": "Day 2 late afternoon",
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
            "name": "Private boat day on Biscayne Bay (real split for five)",
            "what": "Private captained charter from Miami Beach or Downtown: Key Biscayne sandbar, Star Island, the Miami River. GetYourGuide lists a 4-hour private charter at USD 400 for up to 6; open-market motorboats and pontoons run USD 100-300/hour. Budget USD 500 for four hours = USD 100 pp for five, plus ~20% captain tip (USD 20 pp) and bring your own cooler, drinks bought aboard are where the budget dies.",
            "ppUsd": 100,
            "duration": "4 hours",
            "when": "Day 3 late morning, pick the calmest forecast day",
            "url": "https://www.getyourguide.com/miami-l176/miami-private-yacht-charter-t676399/"
          },
          {
            "name": "Vizcaya Museum and Gardens",
            "what": "1916 Italianate villa on Biscayne Bay with formal gardens and the stone barge, the most photogenic place in Miami. Adult admission currently USD 20, reduced from USD 25 during restoration. Go at opening or late afternoon for the light.",
            "ppUsd": 20,
            "duration": "2-3 hours",
            "when": "Day 3 morning or late afternoon",
            "url": "https://vizcaya.org/visit-2/planning-your-visit/"
          },
          {
            "name": "Key Biscayne bikes, or the Everglades airboat alternative",
            "what": "Option A: rent bikes, ride the Rickenbacker Causeway to Crandon Park and the Bill Baggs Cape Florida lighthouse, best beach in Miami-Dade and the best skyline view. Option B if you skip the boat: Everglades Safari Park from USD 30, or Everglades Holiday Park at USD 41.99 + tax including the gator show. Both ~45 min west; go at 09:00 before the coaches.",
            "ppUsd": 42,
            "duration": "Half day",
            "when": "Day 3, whichever half the boat does not take",
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
            "name": "Drive Miami to Islamorada, then tarpon at Robbie's",
            "what": "1h45 to 2h30 on US-1. Stop at Alabama Jack's on the Card Sound approach or Key Largo Fisheries. Check in, then Robbie's of Islamorada at MM 77.5 to hand-feed 2m tarpon off the dock, dock access USD 2.50 pp, bait bucket USD 5. Five minutes long, everyone's favourite photo. Stay for sunset at Morada Bay or Lorelei.",
            "ppUsd": 10,
            "duration": "Half day driving, 1 hour at Robbie's",
            "when": "Day 4, leave Miami by 10:00 to beat the causeway",
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
            "name": "Private sandbar and reef boat day (book this first)",
            "what": "Captained charter out of Islamorada for 4-6 hours: the Islamorada sandbar at low tide (waist-deep flats, anchor up, cooler, music), then snorkel Alligator Reef Lighthouse or Cheeca Rocks. Expect USD 600-900 for a private half-day boat for six in peak season, i.e. USD 120-180 pp, the one splurge worth breaking the rule for. Cheaper alternatives at Robbie's: twice-daily group snorkel at 10:00 and 13:30, or party-boat fishing at USD 100 pp morning, USD 75 pp afternoon.",
            "ppUsd": 140,
            "duration": "4-6 hours",
            "when": "Day 5, but move it to whichever of the four days has the lightest wind",
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
            "name": "Key West day trip: Bahia Honda, Mallory Square sunset",
            "what": "2h each way down the Seven Mile Bridge. Stop at Bahia Honda State Park, MM 37, USD 8 per vehicle, the only genuinely beautiful natural beach in the Keys and worth the stop on its own. In Key West: Hemingway House, Cuban coffee at Cuban Coffee Queen, the Southernmost Point queue, then the free Mallory Square sunset celebration with buskers, starting ~90 min before sunset (about 18:30 in early March). Duval will be full of spring breakers, drink at the Green Parrot instead. Long day, nominate a driver.",
            "ppUsd": 35,
            "duration": "12 hours door to door",
            "when": "Day 6, leave by 09:00",
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
            "name": "Snorkel John Pennekamp Coral Reef State Park",
            "what": "40 min north to Key Largo, MM 102.5. The park's own 2.5-hour guided snorkel boat is USD 45 pp; private operators from USD 50 pp, in-water guide about USD 120 plus USD 70 per extra snorkeller. Shallow patch reefs, the Christ of the Abyss statue, good visibility when the wind is down. Pair it with the History of Diving Museum at MM 83 on the way back, small, odd, genuinely good.",
            "ppUsd": 45,
            "duration": "Half day",
            "when": "Day 7 morning, before the afternoon wind builds",
            "url": "https://pennekamppark.com/snorkeling-tours/"
          },
          {
            "name": "Kayak Indian Key, then the last sunset at Morada Bay",
            "what": "Free kayaks and SUPs come with most Islamorada resorts and many rental houses. Paddle from Indian Key Fill at MM 79 to Indian Key Historic State Park, the ruins of an 1830s wrecking town on a tiny island. Calm bayside water, no boat needed, and it works even on a windy day. Finish with dinner and sunset at Morada Bay, feet in the sand.",
            "ppUsd": 0,
            "duration": "3 hours",
            "when": "Day 7 late afternoon",
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
          "duration": "9h20m",
          "priceUsd": 950,
          "estimate": true,
          "note": "AA 900"
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "duration": "9h05m",
          "priceUsd": 950,
          "estimate": true,
          "note": "AA 908"
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "duration": "8h40m",
          "priceUsd": 900,
          "estimate": true,
          "note": "AR 1302"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "duration": "~11h53m total (shortest one-stop option on the route)",
          "priceUsd": 760,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "duration": "~12-13h total (7h27m EZE-PTY + 3h08m PTY-MIA + 1h30m-3h layover)",
          "priceUsd": 800,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MIA",
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
          "duration": "9h20m",
          "priceUsd": 1200,
          "estimate": true,
          "note": "AA 900"
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "duration": "9h05m",
          "priceUsd": 1200,
          "estimate": true,
          "note": "AA 908"
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "duration": "8h40m",
          "priceUsd": 1150,
          "estimate": true,
          "note": "AR 1302"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "duration": "~11h53m total",
          "priceUsd": 950,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "duration": "~12-13h total",
          "priceUsd": 990,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Gol",
          "route": "EZE → MIA",
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
          "duration": "9h20m",
          "priceUsd": 1100,
          "estimate": true,
          "note": "AA 900"
        },
        {
          "kind": "directo",
          "airline": "American Airlines",
          "route": "EZE → MIA",
          "duration": "9h05m",
          "priceUsd": 1100,
          "estimate": true,
          "note": "AA 908"
        },
        {
          "kind": "directo",
          "airline": "Aerolineas Argentinas",
          "route": "EZE → MIA",
          "duration": "8h40m",
          "priceUsd": 1050,
          "estimate": true,
          "note": "AR 1302"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MIA",
          "duration": "~11h53m total",
          "priceUsd": 880,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MIA",
          "duration": "~12-13h total",
          "priceUsd": 920,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Gol",
          "route": "EZE → MIA",
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
        "mode": "Rental car / self-drive",
        "duration": "3h30m-4h00m each way, 166 miles / 267 km",
        "costUsd": 95
      },
      {
        "route": "MIA-Key West by ferry",
        "mode": "NOT AVAILABLE",
        "duration": "n/a",
        "costUsd": 0
      },
      {
        "route": "MIA-FLL (Fort Lauderdale)",
        "mode": "Car / rideshare / Tri-Rail",
        "duration": "~45 min, ~30 miles",
        "costUsd": 40
      },
      {
        "route": "ELH-Harbour Island",
        "mode": "Taxi + water taxi",
        "duration": "~20 min total",
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
    "name": "Puerto Escondido",
    "place": "Ciudad de México y Oaxaca, México",
    "accent": "#0f0f0e",
    "tint": "#e9e7e0",
    "summary": "Dos días en el DF y cinco en la costa de Oaxaca.",
    "heroDir": "puerto-escondido",
    "stops": [
      {
        "slug": "cdmx",
        "name": "Mexico City",
        "nights": 2,
        "note": "Roma, Condesa y Juárez, todo caminable.",
        "hotels": [
          {
            "name": "Casa Prim Hotel Boutique",
            "area": "Colonia Juarez, Calle General Prim 70-72, 10 min walk to Roma Norte",
            "nightUsd": 375,
            "ppUsd": 75,
            "why": "Porfirian townhouse, parquet floors, courtyard balconies, L'Enfant rooftop bar.",
            "url": "https://www.booking.com/hotel/mx/casa-prim-boutique.html",
            "score": "9.0/10 Booking.com (approx. 202 reviews); location scored 9/10",
            "site": "https://casaprim.com.mx/",
            "estimate": true
          },
          {
            "name": "Casa Decu",
            "area": "Hipodromo Condesa, Culiacan 10, two blocks from Parque Mexico",
            "nightUsd": 360,
            "ppUsd": 72,
            "why": "Real Art Deco bones in Condesa, rooftop lounge, free bikes, breakfast included.",
            "url": "https://www.booking.com/hotel/mx/casa-decu.html",
            "score": "Not verified this session - check Booking.com listing",
            "site": "https://www.decuhotels.com/casa-decu",
            "estimate": true
          },
          {
            "name": "Hotel Carlota",
            "area": "Rio Amazonas 73, Col. Cuauhtemoc, on the Juarez/Reforma edge, 15 min walk to Roma Norte",
            "nightUsd": 450,
            "ppUsd": 90,
            "why": "The famous steel-and-glass lap pool in the courtyard; good bar, central location.",
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
            "why": "Slatted-timber facade, whitewashed minimalism, raffia and linen; the most beautiful room here.",
            "url": "https://www.booking.com/hotel/mx/octavia-casa.html",
            "score": "Not verified this session",
            "site": "https://octaviacasa.mx/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Circulo Mexicano, a Member of Design Hotels",
            "area": "Centro Historico, Republica de Guatemala 20, behind the Cathedral",
            "nightUsd": 795,
            "ppUsd": 159,
            "why": "Shaker-austere Grupo Habita landmark; rooftop pool over the Zocalo and Templo Mayor.",
            "url": "https://www.booking.com/hotel/mx/circulo-mexicano.html",
            "score": "Not verified this session - Tripadvisor and Booking listings both live",
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
            "why": "Three bedrooms, six real beds, private garden; best all-round Roma Norte base for five.",
            "url": "https://www.airbnb.com/rooms/1223944928793592804"
          },
          {
            "name": "Casa Corazon - 5-bedroom oasis in La Condesa",
            "area": "La Condesa",
            "sleeps": 10,
            "nightUsd": 292,
            "ppUsd": 58,
            "why": "Five separate bedrooms, so nobody shares; rare for the price in Condesa.",
            "url": "https://www.airbnb.com/rooms/860699249317648367"
          },
          {
            "name": "Beautiful apartment full of light, Condesa/Roma border",
            "area": "Roma Norte / Condesa border",
            "sleeps": 6,
            "nightUsd": 226,
            "ppUsd": 45,
            "why": "236 reviews at 4.95; six beds, high light, walkable to everything in both barrios.",
            "url": "https://www.airbnb.com/rooms/1645053806193120682"
          },
          {
            "name": "Large Mexican folk art apartment, top Condesa location",
            "area": "La Condesa",
            "sleeps": 6,
            "nightUsd": 210,
            "ppUsd": 42,
            "why": "Proper collected folk art rather than rental-grade styling; long, solid review history.",
            "url": "https://www.airbnb.com/rooms/15087013"
          },
          {
            "name": "Casa Cobre - rooftop, sauna, copper bath",
            "area": "La Condesa",
            "sleeps": 10,
            "nightUsd": 911,
            "ppUsd": 182,
            "why": "The architectural splurge: five bedrooms, rooftop, sauna and a copper soaking bath.",
            "url": "https://www.airbnb.com/rooms/1700146663363466635"
          }
        ],
        "food": [
          {
            "name": "Contramar",
            "what": "Calle Durango 200, Roma Norte. The city's defining seafood lunch since 1998: tuna tostadas, and the pescado a la talla, a whole butterflied fish half red-chile, half parsley-green. Loud, bright, everyone who matters in Mexico City eats here.",
            "level": "$$$ - around USD 45-60 pp with drinks. Lunch only, roughly 13:00-18:30. Reserve weeks ahead for five; walk-ins wait."
          },
          {
            "name": "Rosetta",
            "what": "Colima 166, Roma Norte. Elena Reygadas, named World's Best Female Chef, cooking Italian technique with Mexican produce in a crumbling Porfirian mansion with a plant-filled staircase. The neighbouring Panaderia Rosetta is the best bakery in the city.",
            "level": "$$$$ - tasting menu territory, around USD 80-110 pp. Reserve a month out. The bakery is USD 5."
          },
          {
            "name": "Masala y Maiz",
            "what": "Calle Marsella 72, Juarez. Norma Listman and Saqib Keval cooking the actual historical trade routes between Mexico, India and East Africa - not fusion, research. One of the most interesting kitchens in the Americas.",
            "level": "$$$ - around USD 40-55 pp. Reserve."
          },
          {
            "name": "Lardo",
            "what": "Agustin Melgar 6, Condesa. Elena Reygadas's neighbourhood room: wood-oven flatbreads, simple Mediterranean plates, the best breakfast in Condesa. Where you go when you cannot get into Rosetta.",
            "level": "$$ - around USD 20-30 pp. No reservations for small groups at breakfast; go before 10:00."
          }
        ],
        "weather": "Early March in Mexico City is the tail of the dry season and about as good as it gets: highs 25-27C, lows 10-12C, almost no rain, very strong UV at 2,240 m. Two real caveats."
      },
      {
        "slug": "puerto-escondido",
        "name": "Puerto Escondido",
        "nights": 5,
        "note": "La Punta para dormir, Carrizalillo para nadar, Zicatela de noche.",
        "hotels": [
          {
            "name": "Villas Carrizalillo",
            "area": "Playa Carrizalillo, Av Carrizalillo s/n, 300 m above the cove",
            "nightUsd": 320,
            "ppUsd": 64,
            "why": "Best value on the coast: whole 3-bed villa, private terrace, steps straight down to the swimmable cove.",
            "url": "https://www.booking.com/hotel/mx/villas-carrizalillo-puerto-escondido1.html",
            "score": "9.2-9.3/10 Booking.com (360 verified reviews); couples rate the location 9.7",
            "site": "https://www.villascarrizalillo.com/",
            "estimate": true
          },
          {
            "name": "Villa Mozart y Macondo",
            "area": "Las Tortugas 77, Carrizalillo, 200 m from Playa Carrizalillo",
            "nightUsd": 255,
            "ppUsd": 51,
            "why": "Cheapest decent bed near the swimmable cove; charming and green rather than architectural.",
            "url": "https://www.booking.com/hotel/mx/villa-mozart-y-macondo.html",
            "score": "Tripadvisor listing live with 66+ reviews; score not re-verified this session",
            "estimate": true
          },
          {
            "name": "Raiz Hotel Boutique",
            "area": "Puebla 200, Punta de Zicatela (La Punta), 350 m from the beach",
            "nightUsd": 430,
            "ppUsd": 86,
            "why": "Thatched bungalows, wood and stone, breakfast and yoga included; walkable La Punta.",
            "url": "https://www.booking.com/hotel/mx/raiz-boutique.html",
            "score": "4.0/5 Tripadvisor, ranked #22 of 66 in Puerto Escondido - but only 13 reviews and they are polarised",
            "site": "https://www.raiz-hotel.com/en/",
            "estimate": true
          },
          {
            "name": "Casa Bicachi - Adults Only",
            "area": "Heroes Oaxaquenos 116, Punta Zicatela (La Punta), 5 min walk to the beach",
            "nightUsd": 537,
            "ppUsd": 107,
            "why": "Best-reviewed stay in La Punta; clean modern rooms, generous pool, five minutes to the point.",
            "url": "https://www.booking.com/hotel/mx/casa-bicachi.html",
            "score": "9.5/10 Booking.com (308 verified reviews) - the highest verified score of any property on this list",
            "site": "https://www.casabicachi.com/",
            "over": true,
            "estimate": true
          },
          {
            "name": "Casa TO",
            "area": "La Punta Zicatela, 5 blocks from the beach, 15 min from PXM airport",
            "nightUsd": 747,
            "ppUsd": 149,
            "why": "The architecture pick: Godefroy's board-formed concrete, cisterns and shade, Glou Glou wine bar.",
            "url": "https://www.booking.com/hotel/mx/casa-to.html",
            "score": "Not verified this session",
            "site": "https://www.casato.mx/",
            "over": true,
            "estimate": true
          }
        ],
        "rentals": [
          {
            "name": "Pool and ocean-view palapa near beach (4 bedrooms)",
            "area": "Brisas de Zicatela / La Punta hillside",
            "sleeps": 8,
            "nightUsd": 383,
            "ppUsd": 77,
            "why": "Best in the set: four bedrooms, six real beds, private pool, ocean-view palapa, 286 reviews.",
            "url": "https://www.airbnb.com/rooms/6479019"
          },
          {
            "name": "Minimalist cliffside villa with private pool",
            "area": "La Punta / Brisas de Zicatela cliffside",
            "sleeps": 6,
            "nightUsd": 414,
            "ppUsd": 83,
            "why": "Genuinely design-led: minimalist cliffside build, private pool, exactly five real beds.",
            "url": "https://www.airbnb.com/rooms/747742226679490405"
          },
          {
            "name": "Pool and kitchen in La Punta (3 king bedrooms)",
            "area": "Brisas de Zicatela / La Punta",
            "sleeps": 6,
            "nightUsd": 375,
            "ppUsd": 75,
            "why": "Three king beds and three bathrooms; two couples plus one, nobody on a sofa.",
            "url": "https://www.airbnb.com/rooms/1384829989529920560"
          },
          {
            "name": "Ground-floor flat with pool near beach",
            "area": "Brisas de Zicatela",
            "sleeps": 6,
            "nightUsd": 224,
            "ppUsd": 45,
            "why": "Cheapest way to get five people into a private pool within walking distance of La Punta.",
            "url": "https://www.airbnb.com/rooms/1200937738138917145"
          },
          {
            "name": "Brutalist penthouse with an infinity pool",
            "area": "Puerto Escondido (La Punta / Brisas hillside)",
            "sleeps": 6,
            "nightUsd": 518,
            "ppUsd": 104,
            "why": "Raw concrete, infinity pool over the Pacific, five real beds; the splurge that is only just a splurge.",
            "url": "https://www.airbnb.com/rooms/1294197466531856726"
          }
        ],
        "food": [
          {
            "name": "Almoraduz",
            "what": "Rinconada. Chefs Alejandro Ruiz-trained, doing a serious modern Oaxacan tasting menu with coast produce - the most ambitious kitchen in Puerto Escondido and the one people fly in for. Reserve.",
            "level": "$$$ - around USD 50-70 pp with mezcal pairings."
          },
          {
            "name": "Espadin",
            "what": "Zicatela. Oaxacan cooking - tlayudas, moles, mezcal from small palenques - on a big open terrace. Where you go for the food-plus-scene evening without going to a nightclub.",
            "level": "$$ - around USD 25-40 pp."
          },
          {
            "name": "Cafecito",
            "what": "Two locations, Zicatela and near Carrizalillo/Rinconada. The institution: American-sized breakfasts, pastries, good coffee, open from 06:00 for the surfers. Not fancy, just reliably where everyone ends up after the dawn session.",
            "level": "$ - around USD 8-15 pp."
          },
          {
            "name": "Lychee",
            "what": "La Punta. Southeast Asian plates cooked over fire on the dirt street - the food that made La Punta's reputation as somewhere you actually eat rather than just surf. Small, no reservations, queue.",
            "level": "$$ - around USD 20-30 pp."
          }
        ],
        "weather": "Early March on the Oaxaca coast is peak dry season and close to perfect. Highs 31-33C, lows 21-23C, sea around 27-28C, humidity moderate, and statistically almost zero rain - March is the driest month of the year here."
      }
    ],
    "days": [
      {
        "n": 1,
        "place": "Ciudad de México",
        "title": "Roma, Condesa y Barragán",
        "acts": [
          {
            "name": "Roma Norte + Condesa architecture and food crawl on foot",
            "what": "Start at Plaza Rio de Janeiro, walk Colima and Alvaro Obregon for the Porfirian mansions and galleries, coffee and guava roll at Panaderia Rosetta (Colima 179), tortillas made in front of you at Expendio de Maiz Sin Nombre (Yucatan 84, no menu - they bring you dishes until you say stop), then cross Avenida Veracruz into Condesa for the Art Deco blocks around Parque Mexico and Avenida Amsterdam, the 1920s racetrack turned into an oval street.",
            "ppUsd": 45,
            "duration": "5-6 hours",
            "when": "Day 1, late morning into afternoon. Expendio de Maiz does not take reservations and the queue is long after 14:00 - go at 13:00.",
            "url": "https://www.rosetta.com.mx/"
          },
          {
            "name": "Casa Estudio Luis Barragan",
            "what": "The 1948 house-studio of Mexico's only Pritzker laureate, a UNESCO World Heritage site in Tacubaya. Guided visit only, small groups, pink and ochre walls, the famous floating staircase and the roof terrace open only to the sky.",
            "ppUsd": 26,
            "duration": "1 hour 15 min",
            "when": "Day 1, afternoon. BOOK THE MOMENT YOU HAVE DATES. Tickets are sold only in advance through visit.casaluisbarragan.org and the site states in terms that entry is not guaranteed without an advance ticket. Slots for five people on one tour typically go weeks out. Minimum age 12, no exceptions. Email replies take 2-4 business days, so do not leave it to a phone call.",
            "url": "https://visit.casaluisbarragan.org/mx"
          },
          {
            "name": "Mezcaleria night in Roma and Centro",
            "what": "Start at La Clandestina (Alvaro Obregon 298, Condesa) for small-producer agave spirits poured into jicaras, then Licoreria Limantour (Alvaro Obregon 106) which sits on the World's 50 Best Bars list, and finish at Bosforo (Luis Moya 31, Centro) - a black-painted room with no sign, no menu and the best mezcal list in the city.",
            "ppUsd": 35,
            "duration": "4-5 hours",
            "when": "Day 1 night. Bosforo opens around 20:00 and fills by 22:00. Uber between the three, not walking.",
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
            "name": "Chapultepec and the Museo Nacional de Antropologia",
            "what": "Mexico's greatest museum: Pedro Ramirez Vazquez's 1964 building with the vast cantilevered umbrella fountain in the courtyard, the Aztec Sun Stone, the Olmec heads and the full-scale Teotihuacan and Maya rooms. Then walk into Bosque de Chapultepec; Chapultepec Castle is on the hill above if there is time.",
            "ppUsd": 11,
            "duration": "3-4 hours for the museum, plus the park",
            "when": "Day 2, from 09:00. Open Tuesday to Sunday 09:00-18:00, CLOSED MONDAYS. MXN 210 general admission - Sunday free entry applies only to Mexican nationals and residents, so a foreign group pays either way. A Sunday visit means the park is at its best (families, balloon sellers, food carts) but the museum is at its most crowded.",
            "url": "https://mna.inah.gob.mx/"
          },
          {
            "name": "Coyoacan and the Museo Frida Kahlo (Casa Azul)",
            "what": "The cobalt-blue house on Londres 247 where Kahlo was born, lived with Rivera and died, with her studio, wheelchair at the easel, corsets and the garden pyramid. Pair it with the Coyoacan centre - Mercado de Coyoacan for tostadas, Jardin Centenario, and the Museo Casa Leon Trotsky four blocks away.",
            "ppUsd": 20,
            "duration": "2 hours for the house, half a day for the barrio",
            "when": "Day 2, afternoon. BOOKING IS THE HARD PART: timed-entry tickets sell out days to weeks ahead and are sold only through boletos.museofridakahlo.org.mx or a self-service kiosk at the museum shop. Closed Mondays; Tuesday 10:00-18:00, Wednesday 11:00-18:00, Thursday to Sunday 10:00-18:00. Thursday evenings there is 'Noche Azul' 17:15-21:00, which is the least crowded slot.",
            "url": "https://boletos.museofridakahlo.org.mx/"
          },
          {
            "name": "Lucha libre at Arena Mexico",
            "what": "CMLL's home arena in Colonia Doctores, 16,500 seats, masked wrestlers, beer in buckets, the crowd chanting obscenities in rhyme. Buy ringside-ish seats rather than the cheap upper tiers - you want to see the masks.",
            "ppUsd": 25,
            "duration": "3 hours",
            "when": "Day 2, evening. CMLL cards run Friday 20:30 (the big one), Tuesday 19:30 and Sunday 17:00. Colonia Doctores is rough - take Ubers door to door, do not walk from the metro at night.",
            "url": "https://www.cmll.com/"
          },
          {
            "name": "Mercado de Medellin",
            "what": "The Roma Sur market that serves the Colombian, Cuban and Venezuelan communities: arepas, Oaxacan cheese counters, mole pastes by the kilo, flower stalls, cheap ceviche and a dozen fondas doing comida corrida. Not a tourist market.",
            "ppUsd": 10,
            "duration": "1-2 hours",
            "when": "Any morning before 14:00. Calle Campeche 101, Roma Sur, 10 minutes' walk south of Roma Norte."
          }
        ]
      },
      {
        "n": 3,
        "place": "Puerto Escondido",
        "title": "Vuelo a la costa y La Punta",
        "acts": [
          {
            "name": "Fly MEX-PXM, settle in La Punta, first sunset on the point",
            "what": "Volaris and Aeromexico Connect fly Mexico City to Puerto Escondido direct in about 1h20. PXM is 15 minutes from La Punta. Drop bags, walk to the point at the south end of the beach where everyone gathers on the rocks for sunset, then tostadas de atun and a beer.",
            "ppUsd": 70,
            "duration": "Half a day including the flight",
            "when": "Day 3. Return fares MEX-PXM have been seen as low as USD 40-70; book 2-3 months out. Take the morning flight - the afternoon one eats your first sunset, and PXM's runway sits right on the coast so afternoon crosswinds cause diversions.",
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
            "name": "Surf lesson on the left at La Punta",
            "what": "La Punta's sandbar throws a long, forgiving left that is the reason the village exists - it is the beginner and longboard wave of the Oaxaca coast, and the opposite of Zicatela's closeout barrel 3 km north. Two-hour group lesson, board and rashguard included, a dozen schools on the main dirt street.",
            "ppUsd": 53,
            "duration": "2 hours",
            "when": "Day 4, 07:00-09:00. Go early: the wind comes onshore by mid-morning and the water is glassy at dawn. MXN 1,000 per person is the going rate. March is the tail of the smaller-swell season, which is exactly what beginners want.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Carrizalillo cove: the 170 steps, the swim, the sunset",
            "what": "Taxi to the clifftop, walk down the 170 concrete steps into a small horseshoe cove. This is the only beach in Puerto Escondido where swimming is genuinely safe - soft whitewater, a gentle shelf, no rip like Zicatela's. Palapa bars bring micheladas and grilled fish to your chair. Stay for sunset; the cliff walls frame it. Walk back up the 170 steps, which at 32 degrees is the day's real workout.",
            "ppUsd": 15,
            "duration": "4-6 hours",
            "when": "Day 4, from about 14:00 through sunset (roughly 18:45 in early March). Chair-and-umbrella rental is usually waived if you order food. Taxi from La Punta about MXN 120-150 for the car."
          }
        ]
      },
      {
        "n": 5,
        "place": "Puerto Escondido",
        "title": "Bioluminiscencia de noche",
        "acts": [
          {
            "name": "Bioluminescence night tour, Laguna de Manialtepec",
            "what": "A mangrove lagoon 20 km west of town where dinoflagellates light up blue-white when the water is disturbed. You go out in a small boat after dark, then swim - every stroke trails light, and the fish leave streaks under you. Best on moonless nights.",
            "ppUsd": 50,
            "duration": "2.5 hours plus transfer",
            "when": "Day 5, after dark. MXN 950 per person, verified. CRITICAL: this only works on dark nights. The new moon falls around 8 MARCH 2027 (computed, approximate), so roughly 4-12 March is the best window of the whole month. Book for the darkest night of your stay and no swimming with sunscreen or repellent on.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Slow morning in La Punta before the lagoon",
            "what": "Coffee and banana bread on the dirt street, a second surf, an hour in a hammock. Then the Mercado Benito Juarez in Puerto Escondido town centre for fruit, mole pastes and a MXN 60 comida corrida, plus the Adoquin pedestrian strip and Playa Principal where the fishing pangas land.",
            "ppUsd": 15,
            "duration": "4 hours",
            "when": "Day 5, morning. The market is done by 14:00."
          }
        ]
      },
      {
        "n": 6,
        "place": "Puerto Escondido",
        "title": "Mazunte y Punta Cometa",
        "acts": [
          {
            "name": "The quiet coast: San Agustinillo, Mazunte, Punta Cometa sunset, Zipolite",
            "what": "One long day east on Highway 200. Start at San Agustinillo, a single crescent of sand and the loveliest swim of the three. Then Mazunte for the Centro Mexicano de la Tortuga, the national sea-turtle research centre with tanks of all seven species that nest in Mexico, and the Cosmeticos Naturales cooperative. Late afternoon, hike 25 minutes out to PUNTA COMETA, the southernmost headland in Oaxaca, a rocky spur where you can watch the sun set into open ocean with whales spouting offshore in March. Finish at Zipolite for dinner - Mexico's only legal nude beach, a late and slightly wilder scene, and a vicious rip current, so do not swim there after drinking.",
            "ppUsd": 105,
            "duration": "10-12 hours",
            "when": "Day 6, full day. MXN 2,000 per person for the organised Mazunte-Zipolite-Punta Cometa tour, verified. Cheaper by colectivo/taxi if you do it yourselves - about 1h15 each way. Time Punta Cometa for about 17:45 to be in position for a 18:45 sunset. Turtle centre closes 16:30ish and is closed Mondays.",
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
            "name": "Dawn panga: spinner dolphins, turtles and whales",
            "what": "Out of Playa Puerto Angelito or Playa Principal at sunrise in a traditional panga. Pods of spinner dolphins in the hundreds, olive ridley turtles mating on the surface, manta rays, and in March humpbacks still passing on their way north. Usually ends with a snorkel stop at Puerto Angelito or Manzanillo.",
            "ppUsd": 47,
            "duration": "3 hours",
            "when": "Day 7, leaving 06:00-06:30 - the sea is flattest and the dolphins are most active at first light. MXN 895 per person, verified. March is still inside whale season. Take seasickness tablets, the swell rolls.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Temazcal",
            "what": "A pre-Hispanic sweat lodge: a low domed adobe chamber, volcanic stones heated outside and carried in, copal and herbs, four rounds with a facilitator. Physically and emotionally heavy, not a spa treatment. Several operators run them in La Punta and on the Manialtepec road.",
            "ppUsd": 47,
            "duration": "2-2.5 hours",
            "when": "Day 7, late afternoon so you come out at sunset. MXN 900 per person, verified. Do it AFTER the dawn boat, not before. Not for anyone claustrophobic, pregnant or with heart or blood-pressure issues. Hydrate hard beforehand and do not drink that lunchtime.",
            "url": "https://www.puerto-escondido.mx/en/adventures/"
          },
          {
            "name": "Last sunset, and where to actually watch it",
            "what": "Three good options, in order. CARRIZALILLO for the framed cliff sunset with a michelada in the sand. LA PUNTA point, sitting on the rocks with the surfers still out in the last light - the local ritual, free, and the best atmosphere. Or the clifftop bars above Playa Zicatela on the way to Rinconada, which have the widest horizon and the worst prices.",
            "ppUsd": 15,
            "duration": "2 hours",
            "when": "Day 7. Sunset in early March is around 18:40-18:50. Be in position 30 minutes early."
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
          "duration": "9h40m",
          "priceUsd": 880,
          "estimate": true,
          "note": "AM29 (AM029)"
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "duration": "9h35m",
          "priceUsd": 900,
          "estimate": true,
          "note": "AM31 (AM031)"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "duration": "14h-16h total",
          "priceUsd": 720,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 740,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
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
          "duration": "9h40m",
          "priceUsd": 870,
          "estimate": true,
          "note": "AM29 (AM029)"
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "duration": "9h35m",
          "priceUsd": 890,
          "estimate": true,
          "note": "AM31 (AM031)"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "duration": "14h-16h total",
          "priceUsd": 710,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 730,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
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
          "duration": "9h40m",
          "priceUsd": 950,
          "estimate": true,
          "note": "AM29 (AM029)"
        },
        {
          "kind": "directo",
          "airline": "Aeromexico",
          "route": "EZE → MEX",
          "duration": "9h35m",
          "priceUsd": 970,
          "estimate": true,
          "note": "AM31 (AM031)"
        },
        {
          "kind": "escala",
          "airline": "Avianca",
          "route": "EZE → MEX",
          "duration": "14h-16h total",
          "priceUsd": 790,
          "via": "BOG",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "Copa Airlines",
          "route": "EZE → MEX",
          "duration": "13h30m-15h total",
          "priceUsd": 810,
          "via": "PTY",
          "estimate": true
        },
        {
          "kind": "escala",
          "airline": "LATAM",
          "route": "EZE → MEX",
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
        "duration": "1h18m nonstop",
        "priceUsd": 190,
        "frequency": "~14 flights/week (about 2 daily), the highest frequency operator on the route; also operates NLU (AIFA)-PXM",
        "estimate": true
      }
    ],
    "transfers": [
      {
        "route": "Oaxaca City (OAX) -> Puerto Escondido",
        "mode": "Shared shuttle van (Ruta Coatlanes-Costa, Transportes Bahia Colotepec) via the Barranca Larga-Ventanilla supercarretera",
        "duration": "2h30m-3h30m",
        "costUsd": 18
      },
      {
        "route": "Oaxaca City (OAX) -> Puerto Escondido",
        "mode": "Private van / transfer for the group",
        "duration": "2h30m-3h30m",
        "costUsd": 190
      },
      {
        "route": "PXM airport -> Puerto Escondido town (Zicatela / La Punta / Rinconada)",
        "mode": "Taxi or colectivo",
        "duration": "10-20 min",
        "costUsd": 12
      },
      {
        "route": "Huatulco (HUX) -> Puerto Escondido",
        "mode": "Road (Highway 200) - shuttle, bus or private transfer",
        "duration": "2h30m-3h",
        "costUsd": 25
      },
      {
        "route": "MEX Terminal 1 <-> Terminal 2 (Aerotren / AirTrain)",
        "mode": "Free automated people mover, boarding pass required",
        "duration": "5 min ride, allow 45-60 min door to door",
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
