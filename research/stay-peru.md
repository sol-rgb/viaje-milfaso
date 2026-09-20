# Peru — working notes

**Trip:** 9 days, early March 2027, from Buenos Aires. Lima 2 nights → Máncora 5 nights → Lima → home.
**Group:** exactly 5 people, late 20s/30s, design-conscious, good food, some scene, no party hostel.
**Budget rule:** ≤ USD 100 per person per night → group total ≤ ~USD 500/night.
**Priority:** design and architecture first, then value, then price.
**Research date:** 20 September 2026.

---

## 0. Read this before you read anything else

### What is actually verified vs. what is inferred

| Thing | Status |
|---|---|
| Hotel existence and current operation | **Verified.** Every hotel below was found on a Booking.com listing page fetched 2026-09-20, and where an official site exists it was fetched and confirmed live. |
| Guest scores | **Verified**, from Booking.com listing pages (Sept 2026). |
| Room prices | **Estimates.** Nothing publishes March-2027 rates 18 months out. Every figure is a current Sept-2026 rate. |
| Airbnb listings | **Real listing IDs**, pulled from Airbnb's own area collection pages. |
| Airbnb prices | **Estimates.** Airbnb does not expose nightly rates to automated fetches without dates. |
| Activity prices | **Mixed** — marked individually in the JSON `note` fields. |
| Seasonality claims | **Verified** from multiple independent sources. See §6. |

### Tooling limits that shaped this research

- **Booking.com individual hotel pages return empty to automated fetches.** Booking.com *district* and *city* listing pages work fine, so that is where the scores and prices come from. Where I could not confirm an individual hotel's exact URL slug, I gave a Booking.com **search URL** instead and flagged it. I did not guess slugs.
- **Tripadvisor, Expedia, GetYourGuide and Viator all return 403 or 429** to automated fetches. Their data here comes from search-result snippets, which is why some activity prices are ranges.
- **The web-search budget (200 calls) ran out** before I could fetch a Lima-March climate page or a Lima paragliding price. Both are flagged in the JSON.
- **No hotel, URL or price in either file is invented.** Where something could not be confirmed, the `note` field says so.

### Price-inflation warning

Early March is **peak summer season** on Peru's north coast (Dec–Apr). The Sept-2026 rates used here will very likely be **15–30% higher** for March 2027, and the best Las Pocitas / Vichayito houses book out months ahead. Treat every number as a floor.

---

## 1. LIMA — Barranco, 2 nights

### Why Barranco over Miraflores
Clifftop, walkable, and everything this group wants is inside about 15 blocks: Hotel B, MATE, Museo Pedro de Osma, Central and Kjölle (same building), Isolina, Mérito, Canta Rana, Lady Bee. The Miraflores malecón is a 25-minute walk or a 10-minute taxi north. Miraflores has more hotel stock and feels safer to nervous travellers, but it is comparatively corporate.

Airport (LIM) → Barranco: 45–70 min, USD 20–30 by Uber/Cabify. **Five people plus luggage needs an XL or two cars.**

### The five-people problem in Lima
Barranco's best hotels are tiny — Second Home has **8 rooms**, Hotel B has 17, Atemporal (Miraflores) has 9. Getting **three rooms on the same March dates** is the single biggest booking risk in the whole trip. Book Lima before you book Máncora.

### Hotels — group of 5

| Hotel | Config for 5 | Group/night | PP/night | Verdict |
|---|---|---|---|---|
| **Second Home Peru** | 2 Ocean View doubles + 1 Deluxe Single | **USD 390** | **78** | ✅ **BEST PICK** |
| Casa República Barranco | 2 doubles + 1 single-occupancy | USD 490 | 98 | ✅ in budget, borderline |
| Casa Cáceres | 3 rooms | USD 309 | 62 | ✅ cheapest decent option |
| Villa Barranco by Ananay | 3 rooms | USD 777 | 155 | ❌ **OVER** |
| Hotel B | 3 rooms | USD 1,068 | 214 | ❌ **WAY OVER** |

**Second Home Peru** is the pick and it is not close. It is the actual house of the sculptor **Víctor Delfín**, a 1920s Tudor mansion on the Barranco cliff with a pool, the Pacific below and his sculpture all through the garden and the rooms. His daughter Lilian runs it; he still lives there. 9.3/10 on Booking.com across 865+ reviews with recent positive reviews from June 2025. Direct rates from secondhomeperu.com: Deluxe Single USD 90, Double with Shared Terrace USD 135, Ocean View USD 150–175, Panoramic/Mirador/Sirena USD 200–220. Two Ocean Views plus one Deluxe Single = **USD 390, or USD 78 each**. Book direct: secondhomeperu@gmail.com / +51 1 246 4615.

**Casa República** is the safe institutional alternative — a 1920s republican mansion restored for USD 5m, reopened Dec 2018, 21 rooms so capacity is never the problem, rooftop terrace, free bikes, Av. Sáenz Peña 208. 9.0/10 across 381 verified reviews. It lands at USD 98 pp **only if they discount single occupancy**; at full rate for the third room it is USD 525 / USD 105 pp, i.e. just over. Ask for a group rate.

**Casa Cáceres** at USD 62 pp is the cheapest way to put five people in a pleasant adults-only Barranco house, but its room count is not published so five-across-three-rooms is unconfirmed, and it is less architecturally interesting.

**The over-budget two.** Villa Barranco (Ananay) is the genuine design step up from Casa República without going to Hotel B money — 20 rooms, restored 1920s townhouse, USD 259–301/room. **Hotel B** is the showpiece: 1914 Belle Époque mansion, hotel since May 2013, Peru's only Relais & Châteaux, run as a living contemporary art gallery, next door to MATE. At USD 214 pp it is more than double the cap, and two nights of it costs more than five nights in Máncora. If the group wants one blowout, do **one night at Hotel B, one at Second Home**.

**Budget fallback not in the five:** Barranco Boutique Hotel by 3B — 9.3/10, USD 82.50/room, 3 rooms = USD 248 / **USD 50 pp**. Plain modern, clean, central, free parking. No character, but it is half the price of anything else here.

### Airbnbs — Barranco

The real-beds test matters here, because several Barranco listings advertise 6 guests on 2 bedrooms.

1. **House in Barranco (host Giselle, artist)** — `airbnb.com/rooms/27774691` — **5 guests, 3 bedrooms, 3 bathrooms, verified.** 4.75/5 from 181 reviews; Giselle has 8 years hosting and 4.8 across 705 reviews. Five blocks from the ocean, among the galleries. ~USD 140 → **USD 28 pp**. *This is the only Lima listing where the five-in-real-beds question is fully answered.*
2. **Hoomie | Fusion House _4BR** — `rooms/1010972266330542335` — 4BR/2BA verified, 4.75/5 (117). ~USD 200 → USD 40 pp. Professionally managed, reliable, less characterful.
3. **Classic Barranco Vintage House** — `rooms/1094863601762208605` — ⚠️ **only 2 bedrooms for 6 guests.** Someone is on a sofa. 4.76/5 (38). Great location, fails the bed test.
4. **Casa Barranco, apartment with terrace** — `rooms/1464740181450363931` — real listing, capacity and beds unconfirmed.
5. Fallback search: `airbnb.com/barranco-peru/stays/houses` — **set bedrooms filter to 3+** so results only include houses that sleep five properly.

Other real Barranco IDs found, bed counts unverified: `859331679218565293` (Loft in a Barranco house, 4.92/107), `904273913217029745` (Casa Corina, 4.75/24), `1618192064695318688` (rooftop jacuzzi + gym, 4.47/17).

**Verdict for Lima:** for only two nights, take the hotel. The Airbnb saves ~USD 50 pp/night but you lose the Delfín house, and the house *is* the point.

### Lima weather, early March
Tail of summer and the best weather of the year. Highs 26–28 °C, nights 19–20 °C, humidity 70–85%, strong UV, **essentially no rain** — Lima is a coastal desert and the grey *garúa* drizzle is a May–October thing, not March. Sea at its annual warmest but the Humboldt current keeps it to roughly **20–22 °C**: swimmable, bracing, not tropical.
⚠️ Search budget ran out before I could fetch a Lima climate page — these are general-knowledge figures, not sourced in this pass. Sanity-check on weather-and-climate.com or senamhi.gob.pe.

---

## 2. MÁNCORA — 5 nights

### The strip, north to south

| Place | From Máncora | What it is |
|---|---|---|
| Punta Sal / Canoas | 25–45 min N | Widest, calmest, emptiest. El Samay is here. |
| **Máncora town** | — | The point break, the restaurants, the bars, the noise. |
| **Las Pocitas** | 2 km S | Rock tide pools at low tide. The boutique hotels. DCO, Arennas, KiChic, Casa de Playa. |
| **Vichayito** | 5–10 min S | Emptiest good sand. Whole-house rentals. Makani. |
| Los Órganos | 10–15 min S | Fishing village. "La Vuelta" left reef. Dunamar. |
| El Ñuro | ~20 km S | The turtle pier. |
| Cabo Blanco | 40 min S | Hemingway's old fishing club; world-class barrel on north swells. |

**Base in Las Pocitas or Vichayito.** Beautiful, quiet, and a S/5–15 mototaxi from Máncora's restaurants — the scene without sleeping in it.

### ⭐ The single strongest recommendation in this file

**For five people over five nights, rent a whole house in Las Pocitas or Vichayito.** It wins on all three priorities at once:

- **Design** — the best *architecture* on this coast is private beach houses, not hotels.
- **Value** — USD 56–80 pp/night for a 4–5 bedroom house with a pool, vs USD 94 for a hotel room.
- **Practicality** — everyone gets a real bedroom, you get a kitchen, and nobody negotiates over who takes the single.

Hotels only win if nobody wants to cook or organise.

### Hotels — group of 5

| Hotel | Beach | Score | Config for 5 | Group/night | PP | Verdict |
|---|---|---|---|---|---|---|
| **DCO Suites, Lounge & Spa** | Las Pocitas | 9.6 | 3 suites | USD 468 | **94** | ✅ **best hotel pick** |
| Makani Vichayito | Vichayito | 9.2 | bungalow(4) + double | USD 327 | 65 | ✅ value |
| El Samay Hotel Boutique | Canoas de Punta Sal | **9.8** | 3 rooms | USD 300 | 60 | ✅ best value/quality |
| Arennas Máncora | Las Pocitas | 9.2 | 3 Deluxe | USD 660 | 132 | ❌ **OVER** |
| KiChic | Las Pocitas | 9.5 | 3 of 9 rooms | USD 780 | 156 | ❌ **WAY OVER** |

**DCO Suites** — 9.6/10, contemporary design suites directly on Las Pocitas sand, spa, private beach. USD 156/suite → three suites = USD 468, **USD 94 pp, just inside budget**. ⚠️ Two caveats: an independent Máncora guide quoted "from USD 195", which would push it to USD 117 pp and **over**; and it is a small couples-oriented property, so confirm in writing that they will release three suites to one group. `dcosuites.com` does not resolve and the Booking slug could not be confirmed — Expedia page is in the JSON.

**Makani Vichayito** — beachfront bungalows, rooms and suites on the emptiest sand, 9.2/10, USD 109/room → **USD 65 pp**. Official site confirmed live 2026-09-20. The **bungalow-plus-double** route is cheaper than three rooms — email reservasmakani@gmail.com / +51 981 317 293 and ask. Downsides: mototaxi for every trip into Máncora (~S/15 each way, and five people need two or three of them), and the kitchen shuts at 17:00 unless dinner is arranged ahead.

**El Samay Hotel Boutique** (Canoas de Punta Sal) — **9.8/10 across ~220 reviews, the highest score on this entire coast**, private beach area, outdoor pool, USD 100/room → **USD 60 pp**. The trade-off is geography: 25–45 min north, so every Máncora dinner becomes a drive. Best used as one or two of the five nights, or as the whole stay if the group wants quiet over scene.

**Arennas Máncora** (USD 132 pp, over) is the most polished resort on Pocitas — seven room categories up to Beachfront Pool Villa, two pools, 9.2/10 across 229 reviews. Worth pricing the **Pool Villa (sleeps 4) + one double** directly; if the villa genuinely sleeps four it may land nearer USD 110 pp than USD 132.

**KiChic** (USD 156 pp, well over) is the design splurge: **9 rooms, adults only**, outdoor showers, organic vegetarian-and-fish kitchen, yoga, private cinema, directly beachfront ~3 km south of town. 9.5/10. ⚠️ Taking three of nine rooms in March high season is a real constraint — **email them about the separate "KiCHIC House"**, which may take all five in one booking. Price unpublished. reservas@kichic.com / +51 922 104 569.

**Also verified, not in the five:** Dunamar Beach House (Los Órganos, **9.6/10**, USD 180/room → USD 108 pp, slightly over); Casa de Playa (Playa Pocitas, official site live, WhatsApp +51 998 234 903); Norte Suites Boutique (El Ñuro, 9.3, USD 210); Amai Luna (Pocitas, 8.4, USD 107); Hotel Las Pocitas (mixed reviews — praised beach and food, complaints about basic amenities).

### Airbnbs — Las Pocitas / Vichayito

Ranked by **verified bedroom count first**, because that is the constraint.

1. ⭐ **Casa Claro de Luna — Las Pocitas** — `rooms/657930837608148100` — **5+ bedrooms, sleeps 10, verified.** 4.92/5 (104). ~USD 400 → **USD 80 pp**. Five people get five real bedrooms, a beach house, and the Pocitas tide pools out front. **Top Máncora recommendation in this file.** Because it sleeps 10, ask for a five-guest rate — many Peruvian hosts price per guest above a base.
2. **House with Private Pool for 8 — Vichayito** — `rooms/1109685935939049308` — **4 bedrooms, sleeps 8, verified.** 5.0/5 (24 — small sample, flawless). ~USD 280 → **USD 56 pp**. Best price-per-head of any real-bedroom option.
3. **Las Pocitas, brand new house with pool** — `rooms/1321133264832239578` — **4 bedrooms, sleeps 12, verified.** 4.96/5 (28). ~USD 350 → USD 70 pp. Newer build, contemporary rather than rustic-quincha.
4. **Paradise en Vichayito II** — `rooms/41271186` — max 6 verified, **bedrooms unverified**. 4.87/5 across **245 reviews** — the most road-tested house on the strip. ~USD 180 → USD 36 pp. Cheapest per head, but confirm real beds.
5. **Beachfront Casa DIEM Eco-Luxury Vichayito** — `rooms/53462358` — 4.89/5 (36), **bedrooms unverified**. ~USD 300 → USD 60 pp. Look at this one first if architecture outranks everything; it is also the least documented.

Other real IDs in the area: `934355279961003141` (Macondo by Wiro House, Vichayito, private pool, 4.83/40), `31136898` (Samay Wasi Vichayito, 4.87/148), `25168604` (Casa sol Vichayito), `16205139` (Casa Ñuro Beach Villa, 4.9/136), `16668976` (Casa de los Psicólogos, 4.94/151), `50438354` (Private Oceanfront Bungalow, sleeps 5, 4.91/229), `34589448` (Unique beach house, Punta Sal, 4.91/131), `1078460912805531689` (Casa del Enact LN5, Órganos, 5BR sleeps 10+, 4.83/30), `852807514702479668` (Beachfront Luxury Home with pool + A/C, 4.9/29), `8457658` (Casa Solé Mio, Playa Las Pocitas, 4.68/114), `947913153471740572` (Casa Duna, Quincha, 4.81/75).

Search URL with the right filters: `airbnb.com/vichayito-peru/stays/beachfront`

### Máncora weather, early March
**Hottest month and best swimming of the year.** Highs 30–31 °C (SENAMHI puts the March average high at 30.8 °C), nights 23–24 °C, **sea ~25 °C — the warmest it gets**, ~10.6 h of sun a day. Dec–Apr is peak season, so it is hot, sunny and **busy**, with high-season rates and the good houses gone months ahead.

⚠️ **Honest caveat:** March is also *statistically the wettest month* on the north coast, averaging ~128 mm. That average is heavily skewed by El Niño years. In a normal year you get a handful of short heavy afternoon downpours and high humidity rather than washed-out days — but it is not the guaranteed-dry month that August is. Do not promise the group five cloudless days.

---

## 3. Activities — day by day

### Lima, days 1–2

| Day | Activity | PP | Duration | When |
|---|---|---|---|---|
| 1 | Barranco street art + architecture walk | ~25 | 2 h | 10:00 |
| 1 | MATE — Museo Mario Testino | ~8 (may be free) | 1–1.5 h | early afternoon |
| 1 | Museo Pedro de Osma | ~10 | 1 h | late afternoon |
| 1 | Isolina dinner + Lady Bee pisco | ~55 | 3–4 h | from 20:00 |
| 2 | Huaca Pucllana guided visit | ~5 | 1 h | 09:00 |
| 2 | Surquillo market + ceviche cooking class | 55–95 | 4 h | 09:30 |
| 2 | Malecón bike ride Barranco→Miraflores | ~15 | 2–3 h | 16:00–18:30 |
| 2 | Tandem paragliding, Miraflores cliffs | ~80–110 | 10–15 min flight | 12:00–17:00 |
| 2 | Tasting menu dinner (Kjölle / Mayta / Maido / Central) | 240–440 | 3–4 h | 19:00/20:00 |
| 2 | Circuito Mágico del Agua | ~2 | 1–1.5 h | after dark |

**Restaurant prices — the one thing I verified hardest:**

| Restaurant | Tasting menu | ≈ USD pp | Source |
|---|---|---|---|
| **Kjölle** (Barranco) | S/988 (vegetal S/456) | **~264** | ✅ kjolle.com/en/menu |
| **Mayta** (Miraflores) | S/899, 11 courses | ~240 | 2026 sources |
| **Maido** (Miraflores) | S/1,295; pairings S/1,985–2,525 | ~340 | 2026 sources |
| **Central** (Barranco) | quotes ranged S/1,045–1,630 | **267–440** | conflicting — treat as a range |

**Booking reality for five:** Central and Maido need **1–3 months' notice** and a table for five is harder than a table for two; Maido was named **World's Best Restaurant 2025**, so demand is at a peak. **Kjölle or Mayta are the smart picks** — same calibre of kitchen (Kjölle is Pía León's, in the Central building), a fraction of the hassle, and Kjölle is a 10-minute walk from any Barranco hotel.

**Notes and honesty flags:**
- **MATE** — one 2026 source says entry is now **free**; the historic ticket was ~S/30 and Viator still sells a paid admission. Official site returned 503. Budget USD 8.
- **Paragliding** — price **not verified this pass** (search budget exhausted, GetYourGuide blocks fetches). Historic street rate S/300–400 at Parque Raimondi, Miraflores. Wind-dependent. Flights go one at a time, so allow 1–2 h for five people.
- **Cooking class** — USD 55–95 range, no single price confirmed. Five is a good size; several operators will run it privately for a group of five.
- **Huaca Pucllana / Circuito Mágico / Pedro de Osma** — prices are historic estimates, not re-verified.
- **La Mar** takes no reservations — send two people ahead at 12:15 to hold a table for five.

### Máncora, days 3–7

| Day | Activity | PP | Duration | When |
|---|---|---|---|---|
| 3 | Arrival: Pocitas tide pools, ceviche, sunset | ~15 | 2–3 h | 16:30–18:30 |
| 4 | Surf lesson, Máncora point break | 16–27 | 1.5–2 h | 07:00–09:00 |
| 4 | Poza de Barro mud baths + Mirador | 4 DIY / 25–35 tour | 2.5 h | late morning |
| 4 | Horseback ride, Vichayito beach at sunset | 11–17 | 1–1.5 h | 17:00–18:30 |
| 5 | **Swim with green turtles, El Ñuro pier** | 6–8 DIY / 27–45 tour | 2–3 h | 08:00–11:00 |
| 5 | Los Órganos lunch + watch "La Vuelta" | ~15 | 3–4 h | midday–late pm |
| 6 | Day trip north to Punta Sal / Canoas | ~20 | full day | 09:00 out |
| 6 | Cabo Blanco: fishing club + the barrel | ~25 | half day | dawn |
| 7 | Kitesurf — **only if the wind shows up** | 245 (6 h course) | 2–3 afternoons | 11:00–17:00 |
| 7 | SUP / snorkel, then sunset drinks | ~25 | half day + evening | 08:00 / 18:00 |

### ⚠️ Seasonality — the four honest answers

1. **WHALE WATCHING: NO. Not in March.** Multiple independent sources confirm the humpback season runs **mid-July to late October**. Early March is four months outside it. Listed in the JSON as `day: 0` purely so nobody in the group books a "March whale tour" from an operator happy to take the money. (When it *does* run: S/80–150, 2–3 h, from Los Órganos.)

2. **KITESURFING: mostly NO.** Season is roughly **April/May–December**, most constant wind **Aug–Oct**. Early March sits at the bottom of the wind cycle. Keep it as an opportunistic "if it's blowing" item, never a planned day. Verified prices when it runs: USD 245 for a 6-hour semi-private beginner course, USD 360 for three afternoons private; local guides quote S/200–350 for singles. Mobile schools cover Máncora, Pocitas, Vichayito, Los Órganos and El Ñuro and come to your house.

3. **CABO BLANCO SURF: YES, March is in season.** Left reef break on **north swells, October–April**, up to 3 m, "world famous for its long, perfect tubes." But it only truly breaks **about 8 times a year** and is advanced-only. Same for **Los Órganos "La Vuelta"** — north swells Oct–April, up to 2.5 m, multiple tube sections, called one of the best waves in Peru, advanced only.
   Conversely **Lobitos is the wrong season** — it wants south swells, April–November.

4. **CABO BLANCO DEEP-SEA FISHING: it is not what the legend suggests.** Hemingway fished here in 1956 and Alfred Glassell's **1,560 lb black marlin all-tackle world record still stands from 1953** — but current sources describe basic facilities and **limited organised charters**. You negotiate directly with local boats. Expect **USD 250–450 for a boat for the day, cash**, arranged through your hotel; a boat comfortably takes five, so USD 50–90 each. Peru-wide charters on FishingBooker start around USD 245. **None of these fishing figures is a confirmed quote.**

5. **TURTLES AT EL ÑURO: yes, basically year-round.** One regional guide lists "sea turtle swimming: June–Oct", but the green turtles at El Ñuro are **resident** — they follow the fishing boats — and most operators run daily all year. Confirm with your hotel the week before. **Verified DIY cost:** pier entry S/5, boat S/10–15, compulsory life jacket S/2, optional snorkel S/5 ≈ **USD 6–8 all in**, plus transport. Organised 3-hour tours from Máncora start ~S/100 (USD 27), up to USD 45 for catamaran versions. A group of five fills a small boat — negotiate a private one. Pier open 08:00–17:00; go early for calm, clear water.

**Verified activity prices (high confidence):**
- **Surf lessons:** group S/60–100 (USD 16–27) for 1–2 h; private 80-min ~S/50 at some schools. Board rental S/20–40/h, S/30–50 half day, S/50–80 full day. Máncora point works ~year-round at 1–2.5 m and gets crowded. Schools: Máncora Kite Club, Surf Point Máncora, Inca Warriors.
- **Poza de Barro:** entry **S/5–15**. 11 km inland up the Fernández valley. Mototaxi ~35 min each way (five people = two or three mototaxis); also reachable on horseback (2 h) or on foot (4 h). Organised tours with pickup + guide + Mirador ~USD 25–35 pp, 2h30.
- **Horseback, Vichayito beach:** TraviTour lists the coastal ride at **S/60 list / S/40 sale** (USD 11–17). Finca Capitán Máncora also runs guided rides. **Book the sunset slot a day or two ahead** — five horses at golden hour is the most-requested time.

---

## 4. Food

### Lima
| Place | What | Price level |
|---|---|---|
| **Kjölle** (Barranco) | Pía León's tasting menu, in the Central building. Best-value world-class meal in Lima. | $$$$ — S/988 (~USD 264) pp, ~USD 1,320 for five ✅ verified |
| **Isolina** (Barranco) | Old-Lima taberna, enormous shared plates — tacu tacu, cau cau, seco de asado. Built for five. | $$ — USD 25–50 pp |
| **Mérito** (Barranco) | Small Venezuelan-Peruvian counter, wood fire, natural wine. The hip one. | $$ — USD 30–50 pp |
| **Canta Rana** (Barranco) | Scruffy neighbourhood cevichería, lunch only. Fish ceviche ~S/45. | $ — USD 7–15 pp |
| **La Mar** (Miraflores) | Gastón Acurio's daytime cevichería. No reservations. | $$ — USD 20–40 pp |

### Máncora
| Place | What | Price level |
|---|---|---|
| **La Sirena d'Juan** (main strip) | The town's long-standing fine-dining room. Peruvian-Japanese seafood. Tiny — book for five. | $$$ — USD 30–50 pp |
| **At(e)lier** | Dim, atmospheric small plates and craft cocktails. Banana gnocchi. Vegan options. | $$$ — USD 25–45 pp |
| **Tokuyo** | Máncora's sushi and Nikkei spot. Vegan makis and poke bowls too. | $$ — USD 15–30 pp |
| **La Biodega / Blacksheep Café** | Daytime coffee, chai, brunch, working wifi. Blacksheep is air-conditioned and mural-covered. | $ — USD 6–14 pp |
| **Side-street cevicherías** | Ceviche S/20–35, arroz con mariscos S/25–40, grilled fish S/20–30, set lunch S/10–15. | $ — USD 3–11 pp |

Also named in sources: Palmeras Eco Tienda y Café (smoothie bowls, sourdough), Pizzalia (wood-fired, ping pong and pool tables), ManQura Restobar, Detour Surf & Coffee, El Italiano.

---

## 5. Getting around

### Máncora — mototaxis
Verified fares: **S/2–5** within town · **S/5–10** to Las Pocitas · **S/10–15** to Vichayito · **S/15–25** to Los Órganos or El Ñuro.

⚠️ **Five people need two or three mototaxis** — they take two comfortably, three at a squeeze. Double or triple every fare above. For anything beyond Los Órganos, hire a regular taxi for the group instead.

Always **agree the fare before getting in**; prices move with demand and roughly double after midnight. Colectivos run the Panamericana for S/3–8 (how you reach Punta Sal or Cabo Blanco cheaply). Bike rental S/20–30/day. Máncora town is walkable end to end in 15 min; **Las Pocitas → town along the beach at low tide is a 25–30 min walk**. Several Pocitas/Vichayito hotels run free shuttles — ask, and ask whether it takes five.

### Airports
Talara (**TYL**) ~1 h · Tumbes (**TBP**) ~1 h 30 · Piura (**PIU**) ~2 h 30. LATAM and Sky fly all three from Lima. **Private transfer from Talara ~USD 40–60 for the car** = USD 8–12 a head for five, much better than five colectivo seats. Operators: Texa Tours, Talara Express.

### Lima
Uber, Cabify or DiDi rather than street taxis. **Five people plus luggage = XL vehicle or two cars.** Barranco→Miraflores USD 4–7; Barranco→airport USD 20–30 and 45–70 min depending on traffic. Barranco is entirely walkable; the Miraflores malecón is a flat 10 km cycle path.

---

## 6. Booking order — what to lock first

1. **Lima hotel (3 rooms).** Second Home has 8 rooms total. This is the tightest constraint in the trip.
2. **Máncora house.** The 4–5 bedroom Pocitas/Vichayito houses go months ahead for March high season.
3. **Kjölle or Mayta** for the Lima blowout dinner (Central/Maido want 1–3 months, and a five-top is harder).
4. Flights LIM↔TYL/TBP/PIU — limited daily frequency on the north-coast routes.
5. Everything else in Máncora can be arranged on the ground a day ahead, except the **sunset horseback slot**.

---

## 7. Full source list

**Booking.com (listing pages — individual hotel pages return empty to automated fetch)**
- https://www.booking.com/district/pe/lima/barranco.html
- https://www.booking.com/design/city/pe/lima.html
- https://www.booking.com/city/pe/mancora.html
- https://www.booking.com/design/city/pe/mancora.html
- https://www.booking.com/city/pe/vichayito.html
- https://www.booking.com/city/pe/los-organos.html
- https://www.booking.com/city/pe/canoas-de-punta-sal.html
- https://www.booking.com/hotel/pe/secondhomeperu.html
- https://www.booking.com/hotel/pe/casa-republica-barranco.html
- https://www.booking.com/reviews/pe/hotel/casa-republica-barranco.html
- https://www.booking.com/hotel/pe/arts-boutique-b.html
- https://www.booking.com/hotel/pe/villa-barranco.html
- https://www.booking.com/hotel/pe/kichic.html

**Hotel official sites (all fetched and confirmed live 2026-09-20)**
- https://www.secondhomeperu.com/
- https://casarepublica.com/
- https://www.relaischateaux.com/us/hotel/hotel-b/
- https://villabarranco.ananayhotels.com/
- https://www.kichic.pe/en/
- https://www.arennasmancora.com/en/home/
- https://www.makanivichayito.com/
- https://www.casadeplayamancora.net/
- https://www.expedia.com/Mancora-Hotels-Dco.h94718336.Hotel-Information

**Airbnb (area collection pages — real listing IDs sourced from these)**
- https://www.airbnb.com/vichayito-peru/stays/houses
- https://www.airbnb.com/vichayito-peru/stays/beachfront
- https://www.airbnb.com/las-pocitas-peru/stays/beachfront
- https://www.airbnb.com/las-pocitas-peru/stays/apartments
- https://www.airbnb.com/mancora-district-peru/stays
- https://www.airbnb.com/barranco-peru/stays/houses
- https://www.airbnb.com/barranco-peru/stays/apartments
- https://www.airbnb.com/rooms/27774691 (individual listing, fetched)

**Restaurants**
- https://kjolle.com/en/menu ✅ (only fully verified tasting-menu price)
- https://joinpearl.co/blogs/a-realistic-guide-to-visiting-maido-in-2026
- https://joinpearl.co/blogs/planning-a-visit-to-central-in-2026
- https://www.peruforless.com/blog/best-restaurants-in-lima
- https://www.getperu.com/best-restaurants-lima
- https://www.tiffanywhsu.com/home/lima-barranco

**Máncora — activities, surf, seasonality**
- https://www.vivamancora.com/Peru/en/surf-and-kitesurf/ ✅ (best source on swell seasons)
- https://www.vivamancora.com/Peru/en/whale-watching/ ✅ (whale season)
- https://www.vivamancora.com/Peru/en/vichayito-beach/
- https://www.mancorakiteclub.com/faq
- https://www.mancorakiteclub.com/solo-surf
- https://travitour.pe/en/products/paseo-costero-en-caballo ✅ (horseback price)
- https://www.chullostravelperu.com/blog/en/el-nuro-beach ✅ (turtle pier costs)
- https://www.chullostravelperu.com/blog/en/beach-los-organos
- https://www.lonelyplanet.com/peru/north-coast/mancora/activities/poza-de-barro/a/poi-act/1166225/363416
- https://www.getyourguide.com/mancora-l219469/mancora-poza-de-barro-hot-springs-and-mirador-de-mancora-t948558/
- https://www.getyourguide.com/mancora-l219469/desde-mancora-nado-con-tortugas-paseo-en-catamaran-y-avistamiento-de-aves-t953477/
- https://www.civitatis.com/en/mancora/excursion-pozas-de-barro/
- https://iziperu.com/mancora/swim-with-turtles-tour-iziperu/
- https://www.perunorth.com/pacific-beach-4d
- https://en.wikipedia.org/wiki/Cabo_Blanco,_Peru
- https://fishingbooker.com/destinations/country/pe

**Lima — activities**
- https://www.getyourguide.com/lima-l39/colorful-barranco-tour-and-street-art-t853560/
- https://www.getyourguide.com/lima-l39/lima-barranco-walking-tour-street-art-photo-stops-t1159336/
- https://www.viator.com/tours/Lima/MATE-Admission-Ticket/d928-72963P2
- https://mate.pe/ (returned 503)

**Máncora — guides, food, transport**
- https://www.getperu.com/mancora ✅ (mototaxi fares, activity price ranges)
- https://nomapsorfoottracks.com/foot-tracks/mancora-peru ✅ (restaurants, transport)
- https://www.perumancora.com/en/hotels/las-pocitas
- https://digitalnomads.world/city-guide/mancora/
- https://jcandthesquirrel.com/how-to-plan-your-trip-to-mancora-vichayito-peru/

**Weather**
- https://en.climate-data.org/south-america/peru/piura/mancora-33713/
- https://weather-and-climate.com/mancora-March-averages
- https://championtraveler.com/dates/best-time-to-visit-mancora-pe/
- ⚠️ No Lima March climate page fetched — search budget exhausted. Lima figures are general knowledge.

**Blocked to automated fetch (data used only from search-result snippets):** tripadvisor.com (403), expedia.com (429), getyourguide.com (403), viator.com (403), weather-and-climate.com (403).
