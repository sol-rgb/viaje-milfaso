# Vuelo a México — Notas de investigación

**Research date:** 20 September 2026
**Trip:** ~5 people, Buenos Aires → Mexico City → Pacific coast (Puerto Escondido)
**Travel dates:** Feb/March 2027
**Currency:** USD, round trip, per person, economy

> **Honesty statement.** No fare for February or March 2027 is precisely quotable in September 2026. Airline revenue management has not loaded final inventory for those dates and aggregator price pages do not expose forward monthly data that far out. Every price in this file and in `flights-mexico.json` is marked `is_estimate: true` and is derived from **12-month historical route data pulled from KAYAK on 2026-09-20** plus documented seasonality. Flight numbers, routings, airport facts, holiday dates and visa rules are **verified**, not estimated. Where I could not verify something, I say so explicitly below.

---

## 1. The single most important finding: only ONE airline flies EZE–MEX nonstop

**Aeroméxico is the sole nonstop operator on Buenos Aires Ezeiza – Mexico City.**

This is confirmed by three independent sources:

- **FlightConnections** states outright: *"Aeromexico is the only airline flying nonstop from Buenos Aires to Mexico City."*
- **Wikipedia's Mexico City International Airport** airlines-and-destinations table lists Aeroméxico as the only carrier serving Buenos Aires–Ezeiza.
- **AeroRoutes** schedule filings for the route carry only AM flight numbers.

### Aerolíneas Argentinas: route DISCONTINUED — verify claim answered

**Aerolíneas Argentinas does NOT fly EZE–MEX.** The route was **discontinued in 2019** and has not returned as of September 2026.

Wikipedia's *List of Aerolíneas Argentinas destinations* marks Mexico City as terminated. AR's only remaining Mexican destination is **Cancún (CUN)**. AR's North/Central America network is now just Miami, New York, Cancún, Punta Cana and Aruba — Mexico City, Panama City, Havana, Toronto and Montreal have all been dropped.

⚠️ **Beware aggregator noise.** Several search results (Skyscanner route pages, trip.com, momondo) appear to claim "Aerolíneas Argentinas y Aeroméxico tienen vuelos directos de Buenos Aires a Ciudad de México." **This is wrong.** Those pages are auto-generated and conflate AR's *codeshare/interline* marketing on the route with actual metal. If you search AR's own booking engine for EZE–MEX you will get a connecting itinerary, not a nonstop. Do not build a plan around an AR nonstop.

### Aeroméxico EZE–MEX — verified schedule detail

| Item | Detail | Source |
|---|---|---|
| Flight numbers | **AM29 / AM029** (northbound overnight), **AM30 / AM030** (southbound), plus **AM31 / AM32** on the daytime rotation | AeroRoutes, FlightConnections, Flightera, Airportia |
| Aircraft | Boeing 787-8 and 787-9, 3-3-3 economy | FlightConnections, AeroRoutes |
| Duration EZE→MEX | **9h 25m – 9h 50m** (~9h40m typical) | FlightConnections, Aeroméxico |
| Duration MEX→EZE | ~9h 05m | FlightConnections |
| Distance | 4,594–4,621 mi / 7,393–7,435 km | FlightConnections |
| Terminals | EZE Terminal A/P → **MEX Terminal 2** | Aeroméxico |
| Cabins | Economy + Business nonstop (Premium Economy shown on some seasons only) | FlightConnections |
| Frequency | 7–9 weekly depending on season | AeroRoutes |

**Verified times (AeroRoutes, filed schedule for 11 Jan – 28 Feb 2026 — the closest published analogue to our window):**

- **AM029** — EZE **23:55** → MEX **06:20 +1** — Boeing 787
- **AM030** — MEX **09:50** → EZE **21:55** — Boeing 787
- During this period the route ran **7 weekly instead of 9**.

FlightConnections separately shows AM29 at **23:25 → 06:05+1**, 9h40m. Treat the departure as **"roughly 23:25–23:55"** — the exact minute moves between seasons.

**AM31** is the second, daytime rotation: **EZE 12:00 → MEX 18:35, 9h35m** (Flightera, Airportia). Aeroméxico's own route page confirms departures on this route span **12:00 to 23:55**, which is consistent with two rotations. ⚠️ **Caveat:** AM31 only exists when the route is above 7 weekly. I could not verify it will operate on your specific 2027 dates. Do not assume it.

### Why this matters for your trip

The **AM29 redeye is close to perfect for a Friday-night departure**. Leave EZE ~23:25–23:55 on Friday, land MEX ~06:05–06:20 Saturday morning, and you can connect to the Pacific coast the same morning and be on the beach by lunchtime. You lose zero daylight. The AM31 midday departure arrives 18:35 and forces an overnight in CDMX.

### One live risk unrelated to season

In **October–November 2026, Ezeiza ran partial runway closures for works** and **Aeroméxico suspended EZE–MEX entirely from 25 Oct to 11 Nov 2026**, rebooking passengers onto LATAM via Santiago and Lima (Sir Chandler, La Devi, Cronista). Because Aeroméxico is the *only* nonstop operator, any future phase of those works kills the nonstop option outright. Those works are scheduled to finish well before Feb/Mar 2027, but **confirm no further phases are announced before you buy nonrefundable tickets.**

---

## 2. One-stop options EZE → MEX

All verified as real, operating routings. Durations are airborne time from published sector times plus a realistic hub connection.

| Via | Airline(s) | Sectors | Airborne | Realistic total | Notes |
|---|---|---|---|---|---|
| **BOG** | Avianca | EZE–BOG ~6h25m + BOG–MEX ~4h30m | ~10h55m | **14–16h** | Cheapest. KAYAK names Avianca the cheapest EZE–MEX carrier at **$689 RT** |
| **PTY** | Copa | EZE–PTY 7h24m + PTY–MEX 3h59m | **11h23m** | **13h30m–15h** | Copa is the *only* nonstop EZE–PTY operator. KAYAK: **$692 RT**. Multiple PTY–MEX banks daily = same-day recovery if you misconnect |
| **LIM** | LATAM | EZE–LIM ~5h + LIM–MEX ~6h10m | ~11h10m | **13–15h** | 2 connections/day. LIM–MEX runs 16x weekly, ~2 daily |
| **SCL** | LATAM | EZE–SCL ~2h20m + SCL–MEX ~8h | ~10h20m | **14–16h** | 1–2/day. The SCL–MEX leg is nearly as long as the nonstop — poor value unless priced far below |
| **GRU** | Gol/LATAM/AR + Aeroméxico | EZE–GRU ~3h + GRU–MEX ~10h | ~13h | **16–18h** | Worst total time — São Paulo is the wrong direction. Only if Aeroméxico sells it as one cheap SkyTeam ticket |

**LATAM one-way fare band on the route: $360–$1,375** (one-stop, ~10h45m airborne, ~13h total including layover).

**Practical read:** Copa via Panama is the best one-stop. Avianca via Bogotá is the cheapest. Neither saves enough over the nonstop to justify 4–6 extra hours each way for a one-week trip — the nonstop premium is only about **$110–190 per person** per KAYAK's own comparison. **For a 7-day trip, pay for the nonstop.**

⚠️ **Never book the GRU or BOG routing as two separate tickets.** Self-connects are not protected. If leg one is late you eat the cost of leg two.

---

## 3. AEP (Aeroparque) — plainly: NOT USABLE

**There is no service from AEP toward Mexico. None. Not nonstop, not as a practical connecting gateway.**

AEP's complete international network (FlightConnections + Wikipedia):

- **Uruguay** — Montevideo, Punta del Este
- **Brazil** — ~15 airports (São Paulo, Rio, Florianópolis, Porto Alegre, Curitiba, Salvador, Recife…)
- **Chile** — Santiago (Aerolíneas, JetSmart, LATAM, Sky)
- **Peru** — Lima only (Aerolíneas, JetSmart, LATAM, Sky)
- **Colombia** — Bogotá (Aerolíneas/Avianca); Cartagena seasonal Jan–Mar, starting Jan 2027
- **Paraguay** — Asunción
- **Bolivia** — Santa Cruz de la Sierra

**No Mexico. No Central America. No Panama City** — so the Copa routing is EZE-only.

You *could* theoretically fly AEP–BOG and connect to MEX, or AEP–LIM and connect on LATAM. It saves nothing, adds self-transfer risk, and every Mexico itinerary is priced and ticketed out of EZE anyway. **Plan the whole trip out of EZE.**

The only real AEP consideration: if anyone joins from a domestic Argentine city arriving into AEP, the **AEP→EZE crosstown transfer takes 45–75 minutes and costs ~USD 25–35.** Do not book a tight same-day connection between the two airports.

---

## 4. Internal flights — MEX to the Pacific coast

### MEX → PXM (Puerto Escondido) — the target

**Verified current operators** (Wikipedia PXM + KAYAK, Sept 2026):

| Airline | Weekly frequency | Terminal at MEX |
|---|---|---|
| **Viva Aerobus** | ~14/wk (~2 daily) — highest frequency. Also flies **NLU (AIFA)**–PXM | **T1** |
| **Volaris** | ~7/wk (1 daily). Also GDL–PXM, TIJ–PXM; **PBC–PXM starts 1 Dec 2026** | **T1** |
| **Aeroméxico / Aeroméxico Connect** | ~7/wk (1 daily) | **T2** |

Total: **~28 nonstop MEX–PXM flights/week, about 4 per day.** Flight time **1h 18m**, 278 miles.

**PXM airport constraints — verified:**
- Single runway **09/27, 2,300 m / 7,546 ft**, asphalt
- **Only 3 aircraft stands, narrowbody only** — A320 / 737 / E190 class
- No widebodies. Capacity is genuinely constrained, which is why fares spike hard in high season
- International service exists (American Eagle DFW, United Express IAH, Air Canada Rouge YYZ seasonal + YVR from 8 Dec 2026, WestJet YYC seasonal) — these compete for the same limited stands

**Pricing (KAYAK 12-month data, pulled 2026-09-20):**
- Cheapest one-way seen: **$40** (Volaris)
- Cheapest round-trip seen: **$96**
- **12-month average: $147 RT**, typical band **$111–$196**
- Cheapest month September ($122), most expensive December ($170)
- Booking 23+ weeks ahead saves ~29%

**→ March 2027 planning estimate: $190 RT** normally, **$230+ RT** if you touch the 13–15 March puente or the Semana Santa run-up. March is dry season and high season on the Oaxaca coast.

### MEX → HUX (Huatulco)

- Operators: **Aeroméxico / Aeroméxico Connect, Viva Aerobus, Volaris**
- **~28 nonstop/week (~4 daily)**, spread evenly across all days
- Flight time **1h 26m**
- KAYAK: cheapest OW $49, cheapest RT $108, **12-month average $173 RT**, band **$142–$224**, December peak $238
- **Aeroméxico Connect is the most punctual carrier on the route at 94% on-time**
- **→ March estimate: $200 RT**

**Huatulco is the best fallback gateway.** Longer runway, more capacity, more even daily distribution than PXM. **HUX → Puerto Escondido by road on Highway 200 is 2h30m–3h.** If PXM fares spike, fly HUX and drive.

### MEX → ZIH (Ixtapa/Zihuatanejo)

- Operators: **Aeroméxico Connect (~14/wk), Volaris (~7/wk)**. ⚠️ **Viva Aerobus does NOT serve MEX–ZIH** — only two carriers, thinner competition than PXM/HUX
- **~20 nonstop/week (2–3 daily)**, flight time **1h 13m**
- KAYAK: cheapest OW $59, cheapest RT $134, **average $164 RT**, band **$130–$228**
- Aeroméxico 95% on-time
- **→ March estimate: $180 RT**

⚠️ **ZIH is in Guerrero, not Oaxaca.** It is an *alternative destination*, not an alternative gateway to Puerto Escondido. Completely different trip.

### MEX → PVR (Puerto Vallarta)

- Operators: **Aeroméxico (~42/wk), Viva Aerobus (~14/wk), Volaris**
- **~63 nonstop/week (~9 daily)** — by far the best-served
- Flight time **1h 42m**, 410 miles
- KAYAK: cheapest OW $41, cheapest RT $70, **average $140 RT**, band **$113–$185**. **February is the cheapest month at ~$108 RT**
- **→ March estimate: $150 RT**

**Cheapest and most reliable of all the beach options** — 9 daily flights means a missed connection is recoverable same-day, which is absolutely not true at PXM. **Trade-off:** Puerto Vallarta is a mass-market resort town ~1,000 km up the coast from Oaxaca. Different trip entirely from Puerto Escondido.

---

## 5. The Oaxaca (OAX) routing — the smart hedge

This is worth serious consideration and is probably underrated.

### MEX → OAX
- Operators: **Aeroméxico, Viva Aerobus, Volaris**
- **~54 nonstop/week (7–8 daily)** — vs. only ~4 daily into PXM
- Flight time **1h 19m**
- KAYAK: cheapest OW $36, cheapest RT $110, **average $163 RT**, band **$129–$226**
- **→ March estimate: $175 RT**

With 7–8 daily flights this leg **almost never strands you.** That is the entire argument.

### Then OAX → Puerto Escondido, two ways:

**(a) By road — the new supercarretera. Recommended.**

The **Autopista Barranca Larga–Ventanilla** is fully open. Verified via CAPUFE (gob.mx):
- **104.2 km long**
- Connects km 72+000 of federal highway 175 (Oaxaca–Puerto Ángel) at the Barranca Larga junction, to km 151+800 of federal highway 200 (Pinotepa Nacional–Salina Cruz) at the Ventanilla junction
- **Two toll plazas:** Barranca Larga (km 1+500) and Ventanilla (km 92+000). Tolls rose in April 2026
- **Cut the journey from ~7 hours to 2h30m–3h30m** — a ~4-hour saving

Transport options:
- **Shared shuttle van, MXN 300 (~USD 16–18) per person.** *Ruta Coatlanes-Costa* departs roughly every 20 minutes and is cited as having the best safety record. *Transportes Bahía Colotepec* runs hourly 07:00–20:00
- **Private van ~USD 190 per vehicle** — about **USD 38 each split 5 ways.** With 5 people and luggage this is clearly the right call over the colectivo

**(b) By air — Aerotucán**

- **Aerotucán** (and **Aerovega**) are the only scheduled OAX–PXM operators
- **Cessna Caravan 208**, ~12–14 seats
- **Flight time 35–45 minutes.** At least 2 daily year-round, peak and low season. Classic departure ~07:00 arriving ~07:40
- Price from about **MXN 3,205 one way** (~USD 120–160); one traveller reported ~USD 130 OW
- ⚠️ **Hard 15 kg / 33 lb baggage limit**, per-kg excess fees. This is a real problem for 5 people with boards or big bags
- ⚠️ **Book far ahead.** A 5-seat block on a 12-seat Caravan in March high season is a meaningful share of the aircraft

**Verdict:** for a group of 5, **fly MEX–OAX, spend a night or two in Oaxaca City, then take a private van down the supercarretera.** It is often cheaper AND more reliable than MEX–PXM in March, and you get Oaxaca City thrown in.

---

## 6. ⚠️ THE BAGGAGE TRAPS — Volaris and Viva Aerobus

Both are **ultra-low-cost carriers**. The headline fare is not the fare.

### Volaris
- **Only the under-seat personal item is free.** Max **45 × 35 × 20 cm**, must fit under the seat
- **The overhead carry-on is NOT included in the base fare.** It is a paid add-on, or bundled into a higher fare such as *Plus*
- On the basic fare, **personal item + carry-on together must stay under 15 kg**
- Carry-on bought at booking: roughly **USD 30–45**. Bought later or at the airport, the fee **doubles or triples**
- Checked bag is separate, **25 kg** allowance. Domestic Mexico bags are priced in pesos, lower than international. Volaris publishes no flat rate — it varies by route, fare and timing
- Overweight **25–32 kg** incurs surcharges; **32–45 kg** up to **~USD 220 / ~MXN 2,000**; **over 45 kg is refused**
- ⚠️ **Surfboards are charged as oversize** — directly relevant for Puerto Escondido

### Viva Aerobus
- Free personal item **45 × 35 × 20 cm** on every fare
- **The base "Zero" fare includes NO overhead carry-on at all.** Nothing in the bin
- Checked bags sold **by weight, 15 kg up to 32 kg per piece**
- **Cheapest prepaid online at booking.** Fees **rise sharply at the airport and again at the gate**
- Priced in pesos on Mexican domestic routes, USD on US routes

### The rule
**Buy every bag at the moment of booking.** Never at the airport, never at the gate. Budget **an extra USD 35–60 per person round trip** for one checked bag on Viva or Volaris.

### Which is why Aeroméxico Connect may actually be cheaper
Aeroméxico MEX–PXM runs about **USD 40–60 more per person** than Viva/Volaris — **but it includes a checked bag**, which erases most of the gap, and it departs **Terminal 2**. See next section.

---

## 7. ⚠️ THE MEX TERMINAL TRAP — the biggest operational risk in this trip

**Aeroméxico's EZE nonstop arrives Terminal 2. Volaris and Viva Aerobus both depart Terminal 1.**

- T1 is the older, larger terminal: **Volaris, Viva Aerobus, and nearly every foreign long-haul carrier**
- T2 is **Aeroméxico and SkyTeam partners**
- The terminals are linked by the **Aerotrén / AirTrain**: 3 km automated people mover, **free**, **boarding pass required**, **operates 05:00–23:00 only**
- Ride time is 5 minutes, but **with waiting and walking the transfer takes 20–30 minutes**
- Outside operating hours a **24-hour connection bus** runs, **10–25 minutes depending on traffic**
- **Official guidance: allow 45–60 minutes between terminals**, especially if you must clear immigration or re-screen

### Why this bites you specifically

AM29 lands at **06:05–06:20**. You then must:
1. Clear **migración** (Argentine passports occasionally get secondary-screened)
2. Clear **aduana**
3. Collect and re-check bags
4. Cross to T1 on the Aerotrén — **which does not start until 05:00** (fine here) but requires a boarding pass
5. Clear T1 security
6. Board

**A self-connect onto a Volaris or Viva T1 departure before ~10:00 is genuinely risky.** And because it is a separate ticket, nobody owes you anything if you miss it.

### The fix
**Book Aeroméxico Connect MEX–PXM on the SAME through-ticket as AM29.** You stay in Terminal 2, you never touch the Aerotrén, the connection is protected, and if the EZE leg runs late Aeroméxico rebooks you for free. The ~USD 40–60 premium is cheap insurance and includes a bag.

---

## 8. Visa — Argentine citizens entering Mexico, 2026/2027

### ✅ NO VISA REQUIRED

Verified against the **primary source**: the Argentine Consulate General in Mexico (cmexi.cancilleria.gob.ar), an official `.gob.ar` site.

> *"los ciudadanos argentinos titulares de pasaportes comunes u ordinarios no requieren de visa para ingresar a México"*

**Up to 180 consecutive days** for tourism.

This matters because **Mexico HAS tightened requirements for several other South American nationalities** (Brazil, Peru, Ecuador, Venezuela and Colombia have all faced changes at various points). **Argentina is not among them.** The rule is current as of 2026.

### What you actually need

| Requirement | Detail |
|---|---|
| **Passport** | Valid for the entire stay. ⚠️ **The DNI is NOT accepted** — you need the passport |
| **FMM Digital (FMMd)** | Completed on arrival by scanning the QR code at the migration filter, or in advance via the INM portal. The paper FMM has been replaced at air borders. No separate fee for air arrivals under 180 days — it is bundled into the airfare as the DNI/TUA tax |
| **Return ticket** | *"Pasaje de regreso al lugar de origen, con fecha cierta de retorno que no supere los 180 días"* — must be **confirmed with a fixed date**, NOT open or standby |
| **Proof of funds** | **Minimum USD 500 per person per week**, plus **USD 50 for each additional day** beyond the week. Shown as cash, credit card limits, or both |
| **Accommodation** | The consulate states in capitals: *"SE EXIGEN RESERVAS HOTELERAS PAGAS POR TODA LA ESTADÍA"* — paid accommodation bookings for the whole stay may be required |
| **Prohibition** | Tourist status permits **no remunerated activity** in Mexico |

### Practical advice for a group of 5

The number of days granted is **at the immigration officer's discretion** and is often well under 180. Have the **hotel/Airbnb confirmations and the return e-ticket on your phones before you reach the desk at MEX**. Argentines occasionally get pulled for secondary questioning at MEX; having the paperwork ready resolves it in minutes. For a 7–9 day trip the funds requirement is trivial (~USD 500–650 each) but be able to show a card.

---

## 9. Seasonality and holiday collisions — READ THIS BEFORE PICKING A WINDOW

### March on the Oaxaca coast
**Dry season and high season.** Best surf and weather of the year at Puerto Escondido — and priced accordingly. The best window to visit is November–April.

### 🔴 Collision 1: SEMANA SANTA 2027

**Verified 2027 dates:**
- **Palm Sunday (Domingo de Ramos): Sunday 21 March 2027**
- Holy Thursday: **Thursday 25 March 2027**
- **Good Friday (Viernes Santo): Friday 26 March 2027** — a Mexican federal holiday
- **Easter Sunday (Domingo de Resurrección): Sunday 28 March 2027**

**Semana Santa proper runs 21–28 March 2027.**

**→ W3's return date of Sunday 21 March lands EXACTLY on Palm Sunday**, the opening of the holiday, when Mexican domestic demand toward the coast surges hard. W1 and W2 are clear of it.

**If you take W3, return Saturday 20 March, not Sunday 21 March.**

### 🔴 Collision 2: THE BENITO JUÁREZ PUENTE

**Natalicio de Benito Juárez** is a Mexican federal holiday observed on the **third Monday of March**. In 2027 that is **Monday 15 March 2027**.

Mexico deliberately moved this holiday to a Monday by constitutional reform in 2006 *specifically to create a long weekend* — a *puente*. So **Saturday 13 – Monday 15 March 2027 is a national long weekend.**

This hits:
- **W3's departure** — arriving Fri 12 / Sat 13 March, straight into the puente
- **W2's return** — Saturday 13 March, day one of the puente

The effect is concentrated on the **domestic legs** — MEX–PXM and MEX–HUX fares, and Puerto Escondido hotel rates — **not** the Buenos Aires nonstop.

### Window ranking

| Window | Dates | Verdict |
|---|---|---|
| 🟢 **W1** | 26/27 Feb → 6/7 Mar | **BEST.** Clear of both holidays. Cheapest international pricing. Late Feb is post-peak shoulder out of Argentina |
| 🟡 **W2** | 5/6 Mar → 13 Mar | **GOOD, with one fix.** Likely the cheapest international fares. But the 13 Mar return is day one of the puente. **Fix: fly PXM→MEX on Fri 12 Mar and overnight in CDMX** rather than connecting Saturday morning |
| 🔴 **W3** | 12/13 Mar → 20/21 Mar | **WORST.** Congested on both ends — puente on departure, Palm Sunday on return. Most expensive of the three. If forced into it, return Sat 20 Mar |

### Booking timing — you are in the sweet spot right now

KAYAK's own data:
- **EZE–MEX: book at least 9 weeks ahead to save ~35%**
- **MEX–PXM: book 23 weeks ahead to save ~29%**
- MEX–HUX: 17 weeks. MEX–OAX: 15 weeks. MEX–PVR: 21 weeks. MEX–ZIH: 26 weeks

Researching in **September 2026 for a February/March 2027 trip (~5–6 months out) puts you in the ideal booking window for every single leg.** Do not wait.

---

## 10. Price basis — how the estimates were built

**Source data: KAYAK route pages for EZE–MEX and the domestic legs, pulled 2026-09-20. These carry rolling 12-month actuals, not forward 2027 quotes.**

### EZE–MEX baseline
| Metric | Value |
|---|---|
| Cheapest round-trip seen | **$689** |
| Typical round-trip band | **$771 – $1,057** |
| 12-month average round-trip | **$886** |
| Cheapest one-way seen | **$396** |
| Current one-way average | **$432** |
| **Nonstop (Aeroméxico) from** | **$772 RT** |
| Cheapest carrier overall | Avianca **$689**, Copa **$692** |
| Cheapest month | November $785 (11% below average) |
| Most expensive month | January $1,019 |
| Also expensive | July $980 |

⚠️ KAYAK's page does **not** publish February or March monthly figures, so those two months were **interpolated**, not read off.

### Reasoning applied to each window

**W1 (late Feb):** January is the Argentine summer peak at $1,019; by late February schools have restarted and demand drops sharply. Late Feb sits at or just below the $886 average. Nonstop premium over the $772 floor accounts for the redeye being the most desirable bank. → **$880 nonstop / $720 one-stop.**

**W2 (early–mid Mar):** Deepest part of the Argentine shoulder. Marginally below W1 internationally. → **$870 nonstop / $710 one-stop.**

**W3 (mid Mar, returning into Palm Sunday weekend):** Two pressures stack — the Mexican puente on arrival and the Semana Santa run-up on return. Applied ~8–12% holiday-adjacent loading, which keeps the number inside the quoted $771–$1,057 typical band rather than inventing a spike. → **$950 nonstop / $790 one-stop.**

**Domestic legs:** took the KAYAK 12-month average, then moved toward the upper half of the typical band to reflect March being dry/high season on the Oaxaca coast — the same shape as the published December peak.

**Confidence:** international estimates **moderate-to-good** (large historical sample, stable single-operator nonstop market). Domestic estimates **moderate** (ULCC pricing is volatile and PXM capacity is genuinely constrained — a $230+ RT outcome on MEX–PXM in a holiday-adjacent week is entirely plausible).

---

## 11. Recommendation

### 🏆 Best overall: W1 on the Aeroméxico redeye

1. **Friday 26 Feb 2027**, depart EZE ~23:25–23:55 on **Aeroméxico AM29**, Boeing 787
2. **Saturday 27 Feb**, land MEX ~06:05–06:20, **Terminal 2**
3. Connect **same morning** on **Aeroméxico Connect MEX–PXM**, on the **same through-ticket**, also Terminal 2 — no Aerotrén, no self-connect risk, checked bag included
4. Land Puerto Escondido before midday Saturday. Full first day on the beach
5. Return **Saturday 6** or **Sunday 7 March**

| Cost line | Per person |
|---|---|
| EZE–MEX round trip (nonstop, Aeroméxico) | ~**$880** |
| MEX–PXM round trip (Aeroméxico Connect, bag included) | ~**$230** |
| **Total per person** | ~**$1,110** |
| **Group of 5** | ~**$5,550** |

### 💰 Cheapest viable alternative

Avianca via Bogotá + Viva Aerobus MEX–PXM as a self-connect with an overnight in CDMX:
**~$720 + ~$190 + bags ≈ $950 per person** (~$4,750 for the group).
Saves ~$160 each, but costs you a terminal change, an extra night's accommodation, 5–6 extra hours each way, and zero connection protection.

### 🛡️ Most robust alternative

**MEX–OAX (7–8 daily flights) + private van down the supercarretera.**
~$175 RT + ~$38 each for the van. Similar total cost to flying into PXM, dramatically lower risk of being stranded, and you get Oaxaca City as a bonus.

### Quick decision rules
- ✅ **Take W1.** If W1 is impossible, take W2 but fly the coast→CDMX leg on Fri 12 March.
- ✅ **Pay for the Aeroméxico nonstop.** The one-stop saves ~$110–190 and costs 4–6 hours each way.
- ✅ **Book the domestic leg on the same ticket as the international one.** This is the single highest-value decision in the whole itinerary.
- ✅ **Buy every bag at booking**, never at the airport.
- ✅ **Book now.** You are inside the optimal window for every leg.
- ❌ **Do not plan around an Aerolíneas Argentinas nonstop.** It does not exist.
- ❌ **Do not plan around AEP.** It has nothing toward Mexico.
- ❌ **Do not return on Sunday 21 March.** That is Palm Sunday.

---

## 12. Open items I could NOT verify

Listed explicitly so nothing here reads as more certain than it is.

1. **Exact Feb/Mar 2027 fares.** Not quotable in September 2026. Everything is an estimate with a stated basis.
2. **Whether AM31 (the midday rotation) operates on your specific 2027 dates.** It exists and is documented, but it only runs when the route is above 7 weekly. AeroRoutes shows the comparable 2026 period at 7 weekly, which suggests AM29/AM30 only. **Verify in the booking engine.**
3. **Exact AM29 departure minute for Feb/Mar 2027** — sources show both 23:25 and 23:55 across different seasons.
4. **Whether further Ezeiza runway works are scheduled for 2027.** The Oct–Nov 2026 phase is documented and it suspended the nonstop entirely. Check before buying nonrefundable fares.
5. **Exact current Barranca Larga–Ventanilla toll amounts.** Confirmed they rose in April 2026; the specific 2026/27 figure was not pinned down. Budget ~MXN 400–500 per car each way.
6. **Precise Volaris/Viva domestic peso baggage rates.** Both publish route- and date-variable pricing rather than a flat table. The USD ranges given are indicative.
7. **Aerotucán availability for a 5-seat block** on a 12–14 seat Caravan in March high season. Treat as uncertain until booked.

---

## 13. Full source list

### Route and schedule verification
- FlightConnections, EZE→MEX — https://www.flightconnections.com/flights-from-eze-to-mex
- FlightConnections, MEX→EZE — https://www.flightconnections.com/flights-from-mex-to-eze
- FlightConnections, AEP departures — https://www.flightconnections.com/flights-from-buenos-aires-aep
- **AeroRoutes, "Aeromexico 1Q26 Buenos Aires Frequency Changes"** — https://www.aeroroutes.com/eng/250827-am1q26eze
- Aeroméxico official, EZE→MEX — https://www.aeromexico.com/en_us/flights-from-buenos-aires-to-mexico-city
- Flightera, AM31 — https://www.flightera.net/en/flight/Aerom%C3%A9xico-Buenos+Aires-Mexico+City/AM31
- Airportia, AM31 — https://www.airportia.com/flights/am31/ezeiza/mexico-city/

### Airline network / airport facts
- Wikipedia, List of Aerolíneas Argentinas destinations — https://en.wikipedia.org/wiki/List_of_Aerol%C3%ADneas_Argentinas_destinations
- Wikipedia, Mexico City International Airport — https://en.wikipedia.org/wiki/Mexico_City_International_Airport
- Wikipedia, Puerto Escondido International Airport — https://en.wikipedia.org/wiki/Puerto_Escondido_International_Airport
- Wikipedia, Aeroparque Jorge Newbery — https://en.wikipedia.org/wiki/Aeroparque_Jorge_Newbery

### Fare data (KAYAK, pulled 2026-09-20)
- EZE–MEX — https://www.kayak.com/flight-routes/Buenos-Aires-Ministro-Pistarini-EZE/Mexico-City-Benito-Juarez-MEX
- MEX–PXM — https://www.kayak.com/flight-routes/Mexico-City-MEX/Puerto-Escondido-PXM
- MEX–HUX — https://www.kayak.com/flight-routes/Mexico-City-MEX/Huatulco-HUX
- MEX–ZIH — https://www.kayak.com/flight-routes/Mexico-City-MEX/Ixtapa-Zihuatanejo-ZIH
- MEX–PVR — https://www.kayak.com/flight-routes/Mexico-City-MEX/Puerto-Vallarta-PVR
- MEX–OAX — https://www.kayak.com/flight-routes/Mexico-City-MEX/Oaxaca-OAX
- Expedia EZE–MEX — https://www.expedia.com/lp/flights/eze/mex/buenos-aires-to-mexico-city

### Visa (primary source)
- **Consulado General Argentino en México — Requisitos para ingresar a México como turista** — https://cmexi.cancilleria.gob.ar/es/requisitos-para-ingresar-m%C3%A9xico-como-turista
- Consulado Argentino, Mundial 2026 requisitos — https://cmexi.cancilleria.gob.ar/es/mundial-2026-requisitos-para-ingresar-m%C3%A9xico-como-turista

### Holidays and seasonality
- PublicHolidays.mx, Easter 2027 — https://publicholidays.mx/easter/
- Office Holidays, Benito Juárez's Birthday — https://www.officeholidays.com/holidays/mexico/benito-juarezs-birthday
- México Turismo, Holy Week 2027 — https://www.mexicoturismo.com.mx/en/holy-week-2027.html
- Wikipedia, Public holidays in Mexico — https://en.wikipedia.org/wiki/Public_holidays_in_Mexico

### Oaxaca coast ground transport
- **CAPUFE / gob.mx, Autopista Barranca Larga–Ventanilla** — https://www.gob.mx/capufe/articulos/autopista-barranca-larga-ventanilla
- México Desconocido, nueva autopista Oaxaca–Puerto Escondido — https://www.mexicodesconocido.com.mx/nueva-autopista-oaxaca-puerto-escondido.html
- Mexico Travel & Leisure, Oaxaca to Puerto Escondido 2026 — https://www.mexicotravelandleisure.com/blog/oaxaca-to-puerto-escondido/
- NVI Noticias, carretera Oaxaca–Puerto Escondido tiempos y costos — https://www.nvinoticias.com/oaxaca/viaje/carretera-oaxaca-puerto-escondido-tiempo-y-costos-desde-cdmx/171354
- Live Like It's The Weekend, Oaxaca to Puerto Escondido 2026 — https://www.livelikeitstheweekend.com/oaxaca-to-puerto-escondido-mexico/
- Alternative Airlines, Aerotucán — https://www.alternativeairlines.com/aerotucan
- Puerto Escondido Airport, Aerotucán — https://www.puertoescondidoairport.com/airlines/aerotucan-airlines/

### Baggage policies
- Volaris official baggage policy — https://cms.volaris.com/en/travel-info/baggage-policy/
- DeepArrival, Volaris baggage fees 2026 — https://deeparrival.com/airlines/volaris/baggage-fees/
- DeepArrival, Viva Aerobus baggage fees 2026 — https://deeparrival.com/airlines/viva-aerobus/baggage-fees/
- Upgraded Points, Viva Aerobus baggage fees — https://upgradedpoints.com/travel/airlines/viva-aerobus-baggage-fees/

### MEX terminal connection
- AICM official, AirTrain — https://www.aicm.com.mx/en/passengers/services/aicm-services/airtrain
- Aeropuerto MEX, connection between terminals — https://aeropuerto-mex.com/en/connection-terminals
- Wikipedia, Aerotrén — https://en.wikipedia.org/wiki/Aerotr%C3%A9n

### Ezeiza runway works / Aeroméxico suspension (risk context)
- Sir Chandler, Aeroméxico canceló sus vuelos en las semanas de restricciones de Ezeiza — https://www.sirchandler.com.ar/2026/05/aeromexico-cancelo-sus-vuelos-en-las-semanas-de-restricciones-de-ezeiza/
- La Devi, Obras en Ezeiza: Aeroméxico cancela sus vuelos — https://argentina.ladevi.info/transporte/companias-aereas/obras-ezeiza-aeromexico-cancela-sus-vuelos-y-reubica-pasajeros-n100766
- El Cronista, Más aerolíneas anuncian la suspensión de sus vuelos — https://www.cronista.com/negocios/mas-aerolineas-anuncian-la-suspension-de-sus-vuelos-durante-el-cierre-de-ezeiza/
