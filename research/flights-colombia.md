# Buenos Aires → Cartagena, Feb/March 2027 — flight research notes

Research date: 20 September 2026. Group of ~5, economy, round trip, USD per person.

---

## The headline: there IS now a nonstop, and it is not from Ezeiza

The brief assumed there is almost certainly no nonstop Buenos Aires → Cartagena. That was true until 2026. It is **not true for the travel dates**.

**Aerolíneas Argentinas launches AEP–CTG nonstop on 1 January 2027.**

From AeroRoutes, the schedule lines verbatim:

```
AR1362 AEP1245 – 1755CTG 7M8 x23
AR1363 CTG2015 – 0520+1AEP 7M8 x23
```

Decoded:

| | |
|---|---|
| Outbound | AR1362, AEP 12:45 → CTG 17:55, block 7h10m |
| Inbound | AR1363, CTG 20:15 → AEP 05:20 next day, block 7h05m |
| Aircraft | Boeing 737 MAX 8 (`7M8`), 170 seats — 8 Premium Economy, 162 Economy |
| Days | `x23` = every day except day 2 (Tue) and day 3 (Wed) → **Mon, Thu, Fri, Sat, Sun** |
| Effective | **1 Jan 2027 through 29 Mar 2027** |
| Frequency | 5x weekly |

Three independent confirmations: AeroRoutes (schedule data), Wikipedia's Rafael Núñez route table (`Aerolíneas Argentinas | Buenos Aires–Aeroparque (begins 1 January 2027)`), and Colombian aviation outlet Volavi which published the same flight numbers and times. The original announcement is Sir Chandler, 26 Aug 2026, plus Infobae the same day.

### Does it cover all three windows? Yes, every single date.

2027 calendar check — 1 Jan 2027 is a Friday, so 1 Feb 2027 is a Monday, and Feb has 28 days.

| Date | Weekday | AR operates? |
|---|---|---|
| Fri 26 Feb | Friday | yes |
| Sat 27 Feb | Saturday | yes |
| Sat 6 Mar | Saturday | yes |
| Sun 7 Mar | Sunday | yes |
| Fri 5 Mar | Friday | yes |
| Sat 13 Mar | Saturday | yes |
| Fri 12 Mar | Friday | yes |
| Sat 20 Mar | Saturday | yes |
| Sun 21 Mar | Sunday | yes |

Every requested date lands on an operating day, and 29 Mar 2027 season end clears the last return by a week.

### Two caveats worth naming

1. **The 12:45 departure kills the "Friday night" plan.** AR1362 is a midday flight. Departing Friday 26 Feb or Friday 5/12 Mar means taking the Friday off work. If the group genuinely cannot, the night-departure option is Avianca AV218 out of EZE at 01:35 (wheels up in the small hours of Saturday, which is functionally "Friday night") connecting in Bogotá.
2. **The return lands the next morning.** AR1363 leaves Cartagena 20:15 and lands Aeroparque 05:20+1. So "return Sat 6 Mar" means you get home Sunday 7 Mar at dawn. Good for squeezing a last beach day, bad if anyone needs Sunday to recover.

Block-time sanity check: AEP–CTG is ~4,700 km. Departure 12:45 ART (UTC−3) = 15:45 UTC; arrival 17:55 COT (UTC−5) = 22:55 UTC → 7h10m. Consistent, and consistent with a 737 MAX 8 nonstop. Volavi explicitly describes it as direct; Infobae calls it the first direct Buenos Aires–Cartagena service.

---

## 1. Nonstop EZE → CTG, and nonstop EZE → BOG

**Nonstop EZE → CTG: no.** No airline flies Ezeiza to Cartagena nonstop, and none is scheduled to. The new nonstop is from **Aeroparque**, not Ezeiza. Every EZE-originating itinerary to Cartagena involves at least one stop. Confirmed against Cartagena's full route table — the airport's South American service is Lima, Panama City, Santiago (seasonal), Venezuela, and now Buenos Aires–Aeroparque.

**Nonstop EZE → BOG: yes, Avianca only.**

| Flight | Times | Duration | Days | Aircraft |
|---|---|---|---|---|
| AV218 | EZE 01:35 → BOG 05:41 | ~6h06m | Daily | — |
| AV88 | EZE 07:10 → BOG 11:30 | ~6h20m | Daily | A320neo / 787-8 |

Both verified on flight-status trackers as real, currently operating Avianca flights. Some sources give AV88 as 07:30–11:55; treat the exact minute as soft, the flight as solid.

FlightConnections lists a third rotation as "AV8396" departing ~16:50. An 8xxx number is the usual shape of a codeshare rather than Avianca metal, and I could not confirm it independently, so **I am not asserting it as a real Avianca-operated flight**. There is an afternoon/evening wave on this route; I just won't put a flight number on it.

**LATAM does not fly EZE–BOG nonstop** — it sells the route only as connections, despite having a large presence at both ends. **Aerolíneas Argentinas flies AEP–BOG nonstop (AR1360, 12:45–17:30), not EZE–BOG.**

### The "direct to gateway + domestic hop" option, labelled clearly

This is the structure the brief asked to be treated as DIRECT: fly the nonstop to the gateway, then hop.

- **Best version:** Avianca AV218 or AV88 EZE→BOG nonstop, then one of ~15 daily BOG→CTG departures (1h30m).
- **Price:** EZE–BOG round trip ~USD 630–700 in these windows, plus BOG–CTG round trip ~USD 90–130. Call it USD 720–830 booked separately.
- **Book it as one Avianca ticket, not two.** Through-ticketed, Avianca protects the connection and checks bags through to Cartagena. Two separate tickets means you clear immigration and customs in Bogotá, re-check bags, pay the domestic carrier's bag fee fresh, and eat the cost yourself if the international leg is late. Kayak shows the Avianca through-fare BUE–CTG at ~USD 671, which is *cheaper* than the two legs bought separately — so there is no reason to split.

---

## 2. One-stop EZE → CTG

| Via | Airline(s) | Total time | RT USD (est) | Verdict |
|---|---|---|---|---|
| **BOG** | Avianca | 10h30m–13h | ~675–760 | Cleanest. Single ticket, one bag rule, protected connection, ~15 daily onward hops. |
| **PTY** | Copa | 10h–12h | ~640–700 | Best compromise. Copa is the only EZE–PTY operator (~6h46m); PTY–CTG is daily and is Cartagena's busiest international route. Copa's average Tocumen connection is 90 min. |
| **LIM** | JetSMART | 14h–18h | ~440–520 | **Cheapest by a wide margin** but a ULCC self-connect. See warning below. |
| **LIM** | LATAM | 11h30m–14h | ~670–730 | Full-service alternative. LIM–CTG corridor has 30 flights/week; EZE–LIM has 16/week. |
| **SCL** | Avianca (seasonal) | 12h–15h | ~700 | Weak. Avianca's SCL–CTG is seasonal and I could **not** confirm it is loaded for Feb/Mar 2027. Usually resolves to SCL–BOG–CTG, i.e. two stops. Don't plan around it. |
| **GRU** | — | — | — | **Not a valid one-stop.** No GRU–CTG nonstop exists; Cartagena has no Brazil service at all. Via São Paulo becomes EZE–GRU–BOG–CTG, two stops, 16h+. Rule it out. |

### The JetSMART-via-Lima warning

Kayak shows JetSMART as the cheapest BUE–CTG carrier at USD 415 round trip, against a route average of USD 694. That is a real gap and worth taking seriously for a group of 5. But:

- JetSMART's base fare is **personal item only**. Carry-on and checked bags are both paid extras.
- The two legs (JetSMART EZE–LIM, JetSMART Perú LIM–CTG) may price as separate tickets. If so, a missed connection is entirely your problem.
- Layovers in Lima are frequently long, which is how the total hits 14–18h.

For 5 people each wanting a checked bag for a beach trip, budget roughly USD 80–160 per person in fees on top. The USD 415 headline realistically lands nearer USD 520–580 all-in — still the cheapest, but the gap narrows from "obvious" to "you're trading a day of your life for ~USD 150."

---

## 3. Does AEP have usable service toward Colombia?

**Yes — and it is now the better airport for this trip.** This is the biggest correction to the brief.

- **AEP → CTG nonstop:** Aerolíneas AR1362/AR1363 from 1 Jan 2027 (see above).
- **AEP → BOG nonstop:** two carriers — Avianca AV154 (07:00–11:30, A320neo) and Aerolíneas AR1360 (12:45–17:30). Route runs 6x weekly, ~6h45m.

Practical upside for a group living in Buenos Aires: Aeroparque is inside the city, roughly 15–30 minutes from most neighbourhoods. Ezeiza is 45–75 minutes out plus a much larger taxi or remis bill — for 5 people with luggage that is one or two extra cars each way. Over a round trip that difference is real money and a meaningful chunk of the day.

The one thing AEP cannot give you is a night departure.

---

## 4. Domestic BOG → CTG

**Route density:** ~103 flights per week, about 15 a day, first departure 00:20 and last 23:55. Flight time 1h30m, 655 km. You will never be stuck.

**Carriers and typical pricing (one way USD 40–70 in normal season; round trip below):**

| Airline | RT USD (est) | Notes |
|---|---|---|
| Avianca | ~120 | Best if your international ticket is also Avianca — sells as one through-ticket. Classic/Flex include 23kg checked. Basic/Light do not. Since 27 Jan 2026, Light on international Americas routes does include a 10kg carry-on. |
| LATAM Colombia | ~115 | Economy Basic = personal item only, no cabin bag, no checked bag. Light adds 10kg cabin bag, still no hold bag. Need Plus for checked. |
| Wingo | ~95 | See bag trap below. |
| JetSMART Colombia | ~90 | Same ULCC structure, same trap. |
| **Clic** | **n/a** | **Does not fly BOG–CTG.** |

### Correction on Clic

The brief lists Clic as a BOG–CTG option. It isn't one. Clic's Cartagena service is seasonal and regional only: Bucaramanga and Cúcuta from 26 Dec 2026, and Ibagué, Medellín–Olaya Herrera and Pereira from 18 Dec 2026. No Bogotá. Don't plan a hop on it.

### The low-cost baggage trap, stated plainly

Wingo's advertised fare includes **one personal item, maximum 6kg, 40×35×25 cm**. That is smaller than a normal daypack. Then:

- A real carry-on (12kg, 55×45×25) is a paid add-on.
- A 20kg checked bag is another paid add-on, roughly **USD 40–70 per bag per direction**, varying by route and how late you buy.
- Buying at the airport instead of online costs materially more.

Do the arithmetic for 5 people, one checked bag each, round trip: at USD 50 a pop that is USD 500 of fees on a set of tickets that looked USD 25 cheaper per person than Avianca. **The saving inverts completely.** JetSMART Colombia is identical in structure.

Compounding trap: if you arrive into Bogotá internationally with checked bags and your domestic hop is a *separately bought* Wingo or JetSMART ticket, you pay that bag fee from scratch, at the airport, at the worst price — on top of having already paid to check the bag internationally. For a group of 5, book the domestic leg on the same ticket as the international one.

---

## 5. Getting to the beach

### Islands

| Destination | Mode | Time | Cost |
|---|---|---|---|
| **Playa Blanca, Barú** | Shared speedboat from Muelle de la Bodeguita | 45–60 min direct, ~2h if it stops | COP 20,000–40,000 (~USD 5–10) one way |
| **Playa Blanca, Barú** | **Road via Pasacaballos bridge** | 1h15m–1h45m | **USD 60–100 round trip for the whole vehicle** |
| **Playa Blanca, Barú** | Public bus + mototaxi | 60–70 min + ~20 min | ~USD 6 |
| **Islas del Rosario** | Speedboat day tour | 1h–1h15m each way | ~COP 159,000 (~USD 40) incl. lunch **+ COP 29,000 (~USD 7) park tax** |
| **Tierra Bomba** | Lancha from Bocagrande / Castillogrande | **10–25 min** | COP 10,000–25,000 (~USD 3–7) one way |

Three things that actually matter for a group of 5:

1. **Take the road to Barú, not the boat.** The USD 60–100 is for the *vehicle*, not per person — about USD 16 each. And it is the only option that isn't hostage to the schedule: essentially all Playa Blanca boats leave in one morning wave by ~09:00, with nothing meaningful for the rest of the day. Miss it and you're not going by sea. A private van also means you choose when to come back. Last stretch of road is unpaved.
2. **The Rosario park tax is nearly always excluded** from the advertised tour price. Budget the extra ~USD 7 × 5 separately so nobody is caught short at the dock.
3. **Tierra Bomba is the easy win.** Ten to twenty-five minutes from Bocagrande, a few dollars, boats leave when full. It's the only one of the three that works as a spontaneous half-day rather than a planned expedition.

### Up the coast

| Route | Mode | Time | Cost |
|---|---|---|---|
| Cartagena → Santa Marta | Minivan (Marsol et al.) | 4h direct, ~5h30m via Barranquilla | ~COP 80,000 (USD 20–23) |
| Cartagena → Santa Marta | Long-distance bus | 4h30m–5h30m | USD 16–18 |
| Santa Marta → Palomino | Bus / colectivo | ~2h | ~USD 7 *(estimate)* |

Marsol is cheapest but runs terminal-to-terminal at both ends, so add taxis. Door-to-door operators cost more and are probably worth it with 5 people and luggage.

**Cartagena → Palomino is 6–7h total by road** with the change at Santa Marta. That's a separate multi-night leg, not a day trip.

### CTG → SMR by air: don't

**There is no nonstop Cartagena–Santa Marta flight.** Verified against Santa Marta's full route table — SMR is served only from Bogotá, Medellín, Cali, Pereira, Bucaramanga and Panama City. Flying means backtracking through BOG or MDE: 4–6h door to door, more expensive, more hassle. **The 4h road transfer beats it on every axis.**

---

## Seasonality and date-specific risk

Late Feb / March is dry season and **high season** on the Colombian Caribbean. Expect a premium.

- February is Cartagena's driest month (~1mm rain) and sits in the Dec–Feb peak. Hoteliers apply high-season rates through February.
- On Kayak's BUE–CTG data the spread between cheapest and dearest month is **39%** — January worst at USD 833, November best at USD 596. All three windows sit in the upper half.

### Three calendar facts that decide which window to pick

1. **Carnaval de Barranquilla 2027 is 6–9 February** — before all three windows. You dodge it. Good, because it distorts pricing and accommodation across the entire coast.
2. **Post-Carnaval, March eases.** Weather stays dry, prices stay high but availability improves as the January–February vacation rush clears.
3. **Semana Santa 2027 is 21–28 March, Palm Sunday on 21 March.** This is Colombia's biggest domestic travel surge. **W3 ends exactly as it begins.** A Sunday 21 March return is the single worst date in the entire set. Take Saturday 20 March.

Also note the Aerolíneas nonstop season is scheduled only to **29 March 2027** — W3 sits near the end, where inventory thins and there's less slack if anything reschedules.

### Ranking

| Window | Dates | Nonstop RT (est) | Read |
|---|---|---|---|
| W1 | 26/27 Feb – 6/7 Mar | ~USD 750 | Still carries February peak pricing. |
| **W2** | **5/6 Mar – 13 Mar** | **~USD 740** | **Best. Past the February peak, clear of Semana Santa.** |
| W3 | 12/13 Mar – 20/21 Mar | ~USD 800 | Most expensive and most crowded. Runs into Holy Week. |

### Booking

Roughly **16 weeks ahead saves ~16%** on the Buenos Aires–Bogotá corridor. For a late-February 2027 departure that means booking around **early November 2026**.

For 5 people: book as a single booking where possible. Cheap fare buckets rarely hold 5 seats, and on a 5x-weekly 170-seat 737 the cheap inventory on the nonstop is genuinely finite.

---

## Recommendation

**W2 on the Aerolíneas AEP–CTG nonstop.** ~USD 740 per person round trip, 7h10m each way, no connection, no domestic hop, no bag re-check, departing from the city airport. For a group of 5 the elimination of a Bogotá connection — five people, five sets of bags, one customs queue — is worth more than the fare difference to any one-stop.

If price dominates: **JetSMART via Lima**, ~USD 440 headline, realistically USD 520–580 with bags, at the cost of a full extra day in each direction.

If you want a middle option or you end up on W3: **Copa via Panama**, USD 640–700. It's the most resilient choice for W3 specifically because routing through Tocumen never touches Colombian domestic Semana Santa demand.

---

## Honesty notes on the numbers

Per the brief's honesty rule, here is exactly what is verified and what is estimated.

**Verified hard facts** (schedule data, route tables, published policy):
- AR1362/AR1363 flight numbers, times, aircraft, days, and the 01JAN27–29MAR27 effective window — AeroRoutes, corroborated by Volavi and Wikipedia.
- AV218 and AV88 as real, daily, currently-operating Avianca EZE–BOG flights.
- AV154 and AR1360 on AEP–BOG.
- Absence of nonstop EZE–CTG, absence of GRU–CTG, absence of CTG–SMR, absence of Clic on BOG–CTG.
- BOG–CTG frequency (103/week) and duration (1h30m).
- Baggage policy structures for Wingo, Avianca and LATAM.
- Carnaval 2027 (6–9 Feb) and Semana Santa 2027 (21–28 Mar) dates.

**Estimated** — every `rt_price_usd` in the JSON is flagged `is_estimate: true`. Feb/March 2027 fares are ~5 months out and not precisely quotable today. The estimates are anchored on current same-season, same-route fare data: Kayak's BUE–CTG route page (average USD 694, typical band USD 604–844, JetSMART USD 415, Avianca USD 671, and Aerolíneas nonstop Feb/Mar inventory showing ~USD 706–771) and the EZE–BOG page (typical USD 558–741, Avianca nonstop USD 631, February USD 671, Copa USD 573). Window-to-window adjustments apply the documented seasonal pattern: W2 slightly below W1, W3 above both for Semana Santa.

**Deliberately not asserted:**
- The third Avianca EZE–BOG rotation listed as "AV8396" — 8xxx numbering suggests a codeshare and I couldn't confirm Avianca metal. Named the wave, withheld the number.
- Avianca's seasonal SCL–CTG for Feb/Mar 2027 — the route exists seasonally but I could not confirm it's loaded for these dates.
- Santa Marta → Palomino cost is marked an estimate. One search result returned "USD 231" for this 2h local bus ride, which is plainly wrong; I discarded it rather than pass it through, and used the well-documented ~USD 5–10 range for that corridor.

COP→USD conversions throughout use ~3,900–4,000 COP/USD.

---

## Sources

**New Aerolíneas nonstop**
- AeroRoutes, "Aerolineas Argentinas Adds Cartagena in 1Q27" — https://www.aeroroutes.com/eng/260903-ar1q27ctg
- Sir Chandler, 26 Aug 2026 — https://www.sirchandler.com.ar/2026/08/aerolineas-argentinas-volara-a-curazao-%F0%9F%87%A8%F0%9F%87%BC-y-cartagena-%F0%9F%87%A8%F0%9F%87%B4/
- Volavi — https://volavi.co/aviacion/noticias/aerolineas-argentinas-vuelos-cartagena-buenos-aires
- Infobae, 26 Aug 2026 — https://www.infobae.com/economia/2026/08/26/aerolineas-argentinas-suma-dos-destinos-nuevos-en-el-caribe-para-el-verano-2027-uno-de-ellos-fue-sensacion-en-el-mundial/

**Route and schedule data**
- Wikipedia, Rafael Núñez International Airport — https://en.wikipedia.org/wiki/Rafael_N%C3%BA%C3%B1ez_International_Airport
- Wikipedia, Simón Bolívar International Airport (Santa Marta) — https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar_International_Airport_(Colombia)
- FlightConnections EZE–BOG — https://www.flightconnections.com/flights-from-eze-to-bog
- FlightConnections AEP–BOG — https://www.flightconnections.com/flights-from-aep-to-bog
- FlightConnections BOG–CTG — https://www.flightconnections.com/flights-from-bog-to-ctg
- FlightConnections EZE–LIM — https://www.flightconnections.com/flights-from-eze-to-lim
- FlightConnections LIM–CTG — https://www.flightconnections.com/flights-from-lim-to-ctg
- Airportia AV218 — https://www.airportia.com/flights/av218/ezeiza/bogota/
- Airportia AV88 — https://www.airportia.com/flights/av88/ezeiza/bogota/
- Copa airport experience / connection times — https://www.copaair.com/en-us/discover-copa-airlines/airport-experience/

**Fares**
- Kayak BUE–CTG — https://www.kayak.com/flight-routes/Buenos-Aires-BUE/Cartagena-Rafael-Nunez-CTG
- Kayak EZE–BOG — https://www.kayak.com/flight-routes/Buenos-Aires-Ministro-Pistarini-EZE/Bogota-El-Dorado-BOG
- Kayak EZE–PTY — https://www.kayak.com/flight-routes/Buenos-Aires-Ministro-Pistarini-EZE/Panama-City-Tocumen-Intl-PTY
- JetSMART Cartagena — https://jetsmart.com/ofertas/en-us/flights-to-cartagena-de-indias

**Baggage**
- Avianca official baggage — https://www.avianca.com/en/my-booking/prepare-your-trip/baggage
- Avianca baggage fees 2026 — https://deeparrival.com/airlines/avianca/baggage-fees/
- LATAM baggage fees 2026 — https://deeparrival.com/airlines/latam/baggage-fees/
- Wingo review incl. baggage — https://cielo.travel/wingo-airline-review/

**Ground and boat transfers**
- Baquianos, how to get to Playa Blanca — https://baquianos.com/en/blog/how-to-get-to-playa-blanca
- Baquianos, how to get to Tierrabomba — https://baquianos.com/en/blog/how-to-get-to-tierrabomba
- Cartagena Explorer, Playa Blanca guide — https://www.cartagenaexplorer.com/playa-blanca-colombia-cartagena-guide/
- Cartagena Explorer, Tierra Bomba guide — https://www.cartagenaexplorer.com/tierra-bomba-island-guide/
- Bookaway, Cartagena–Isla Tierra Bomba — https://www.bookaway.com/routes/colombia/cartagena-to-isla-tierra-bomba
- Mi Vida Viajera, Barú by car/bus/boat — https://en.mividaviajera.com/colombia/baru/
- Gecko Routes, Santa Marta–Cartagena — https://www.geckoroutes.com/colombia/santa-marta-to-cartagena/
- Busbud, Cartagena–Santa Marta — https://www.busbud.com/en/bus-cartagena-santa-marta/r/d3f74v-d3gpzq
- Along Dusty Roads, Cartagena–Santa Marta — https://www.alongdustyroads.com/posts/how-to-get-from-cartagena-to-santa-marta

**Seasonality**
- Tom Plan My Trip, best time to visit Cartagena — https://www.tomplanmytrip.com/best-time-to-visit-cartagena-de-indias-colombia/
- My Cartagena Trip, month by month — https://mycartagenatrip.com/when-to-visit-cartagena/
- Impulse Travel, Barranquilla Carnival 2027 — https://impulsetravel.co/barranquilla-carnival-guide/
