# Colombia — 9 days, 5 people, early March 2027

Working notes for `stay-colombia.json`. Researched September 2026.
Group: 5 friends, late 20s/30s, design-conscious, want a scene not a party hostel.
Budget: USD 100 per person per night → **USD ~500/night for the group**, however it is split.
Route: Buenos Aires → Cartagena (3 nights) → beach (4 nights) → Cartagena → home.

---

## 1. Method, and what I could and could not verify

Read this before trusting any number.

**What blocked me.** Booking.com serves a bot challenge (HTTP 202 with an empty body) to both the fetch tool and curl, so I could not pull a single live rate for early March 2027. Tripadvisor and GetYourGuide return 403. My web-search budget ran out partway through, so the last third of the research was done by fetching known URLs directly.

**What worked.** Kayak hotel pages render fully and were my best source — they give a price range, a star rating, a guest score with review count, a street address, and sometimes a month-by-month seasonality note. Airbnb individual listing pages also render, which is why the Cartagena Airbnbs are verified in detail (bedroom counts, bed counts, ratings, review counts, Superhost status) while the Barú ones are not.

**So: every price in the JSON is an estimate.** `is_estimate` is `true` on all of them and each carries a `note` saying what the figure is based on. One exception worth knowing: the Townhouse figure of USD 187 is a **March-specific** average pulled from Kayak's seasonality data, which makes it the single most reliable number in the file.

**What I refused to do.** I did not invent a hotel, a URL or a price. Where I could not find an official website I left `site_url` empty rather than guessing a domain. Where I could not verify a direct Booking.com property URL for a Barú hotel I used Booking's Barú *region* page and said so in the note. Where an Airbnb listing was real but I could not capture its `/rooms/` URL, `is_search_url` is `true`.

**One listing is dead.** `airbnb.com/rooms/1571267223098215089` — a 5BR villa in the Barugrande condominium on Barú — returned HTTP 410 Gone. It has been delisted. It appears in search results; do not use it.

---

## 2. The beach decision

### The five candidates, scored on what actually matters

| Option | Time from Cartagena | Water | Crowds | Good hotels ≤USD 100pp? | 4-night base? |
|---|---|---|---|---|---|
| **Isla Barú** | ~1h **by road** | Good; excellent at the south end | Bad at Playa Blanca 11:00–16:00, empty at dawn/dusk | 2 of 5, plus villas | **Yes** |
| Islas del Rosario (Isla Grande) | 45–60 min boat, fixed schedule | **Best** — 10–15m visibility, marine park | Moderate, day-trip driven | Few; mostly rustic | 2 nights, not 4 |
| Tierra Bomba | 10–20 min boat | Brackish, mediocre | Low | Blue Apple USD 203–284 | No |
| Santa Marta / Tayrona / Palomino | Flight or 4–5h drive | Good | High in March | Yes | Breaks the no-moving rule |
| Isla Múcura / San Bernardo | 2h+ open sea | Arguably best of all | Rising | Punta Faro, but dear | Risky in March |

### Verdict: Isla Barú, south/southwest side

The deciding factor is the **road**. Barú was cut off by the Canal del Dique and reconnected by bridge in 2014, so you drive there in about an hour and leave when you like. Every other candidate hands your schedule to a boat.

That matters specifically in **early March**. Two independent sources say the same thing: the trade winds blow December to May, mornings are calm, and *afternoon boat rides are particularly challenging*. The Rosario day-boat system compounds it — departures 07:50–08:30, **mandatory** return 15:00–16:00, 45–50 minutes of open water each way. That is a fine structure for one day. It is a bad structure for four, and it is a genuinely uncomfortable one for the 2h+ San Bernardo crossing in the windiest month of the year.

Staying on Barú, you still get the good water: the Rosario reefs are a 20–40 minute hop on your own chartered boat, taken in the morning when the sea is flat.

**On Playa Blanca crowds, honestly.** It is overrun. Sources describe "armies of sweaty tourists", persistent vendors, and an idyllic quality that has been lost. But that is a *day-tripper* phenomenon, roughly 11:00 to 16:00. Sleep on the island and the beach is empty at dawn and dusk. This is the single strongest argument for a beach *stay* rather than a beach *day trip*, and it is why the day-4 plan has you walking onto the sand at 16:30.

**Barú also owns the itinerary.** Bioluminescent plankton at the Manzanillo lagoon (night-only, so only people staying there get it), the Aviario Nacional, mangrove channels for kayaking, and Cholón. None of that exists on a Rosario day pass.

**Runner-up:** Isla Grande, if water clarity outranks everything. Take **two** nights, not four. Expect rustic hotels, rocky entries needing water shoes, one boat a day, and limited food.

**Rejected and why:** Tierra Bomba is 15 minutes away and great for a day, but the water is brackish and it is not a place to spend four nights. Santa Marta/Tayrona/Palomino needs a flight or a 4–5 hour drive, and most Tayrona beaches are closed to swimming for current — it breaks the brief outright. San Bernardo is beautiful and probably has the best water of the five, but 2h+ each way of open sea in March with almost no exit options is the wrong risk for this trip.

---

## 3. Budget reality — the bit worth arguing about

### Cartagena in March is expensive, and five is an awkward number

March sits inside the high-season block (mid-January to March) at roughly **1.5–2× low-season rates**. Out of reach entirely, for **one double**:

- Casa San Agustín — USD 673 (9.7 on Kayak, 417 reviews)
- Casa Pestagua Relais & Châteaux — USD 709 (9.6, 403 reviews)
- Four Seasons Cartagena — USD 690 (9.4)
- Sofitel Legend Santa Clara — USD 593 (8.9, 1,105 reviews)

Then there is the **fifth-person problem**. The original budget rule assumed two sharing a double. Five people need two or three rooms, and the odd one out is the expensive one. Three rooms at a USD 160 boutique is USD 448–487 a night — USD 90–97 each, right on the ceiling, for a decent room rather than a beautiful one.

### Why the colonial houses win

On the design-first rule the answer is clear: **take a casona.** A 3–5 bedroom colonial house inside the walls with a plunge pool, a courtyard, 18-foot ceilings, daily housekeeping and often breakfast runs USD 450–600 for the whole place — USD 90–120 each. That buys architecture no hotel in this price band can touch, plus a kitchen, a terrace and somewhere to drink before dinner. It also deletes the third-room penalty.

Direct comparison at roughly the same money:

| | Per person | What you get |
|---|---|---|
| Casa Pizarro, 3 rooms | USD 84 | Good 3-star boutique, small pool, Getsemaní |
| **Casa Salvatore (Airbnb)** | **USD 100** | **4-bed colonial house, private pool, 5 real beds, 4.98★** |

If the group is choosing between those two, take the house.

### Barú is worse

Beach hotels charge per room and the rooms are dear. Of the five listed, only **Thani (USD 84pp)** and **Aura (USD 87pp)** come in under budget. The beautiful ones are hopeless: Las Islas USD 460+ per double, Sofitel Barú Calablanca USD 430+, Isla del Encanto USD 338+. So the recommendation for the beach stop is also **not a hotel** — a private-pool beach villa split five ways lands near USD 100pp, beats every in-budget hotel on architecture, and if it has its own dock your charter boat collects you from the house instead of a public pier.

---

## 4. Hotel shortlist, with the five-person maths

Single rooms are estimated at 80% of the double rate unless noted.

### Cartagena — listed design-first

| Hotel | Area | Score | Config for 5 | Group/night | **pp** |
|---|---|---|---|---|---|
| **Townhouse Boutique** | San Diego | 8.9 (169) | 1 Junior Suite + 1 Deluxe Double | 447 | **89** |
| Hotel Kartaxa | San Diego | 9.4 (913) | 2 doubles + 1 single | 487 | 97 |
| Casa del Coliseo | El Centro | 9.2 (936) | 2 doubles + 1 single | 448 | 90 |
| Hotel Casa Pizarro | Getsemaní | 8.9 (1,933) | 2 doubles + 1 single | 420 | 84 |
| Hotel Capellán *(splurge)* | Getsemaní | 9.3 (836) | 2-bed suite + 1 double | 540 | **108 — over** |

- **Townhouse** is the design pick and needs only two rooms. Its USD 187 is a verified March average. Downside: the rooftop bar is public until midnight and the upper floors hear it. If the Junior Suite turns out to sleep 2 not 3, it becomes 3 rooms at ~USD 105pp.
- **Kartaxa** has 25 rooms — the safest bet for actually getting three rooms in March. Highest score in the in-budget group.
- **Casa del Coliseo** has only **12 rooms**. Taking a quarter of the hotel in peak March means booking very early. No elevator.
- **Casa Pizarro** is the value pick, not the beauty pick — a notch below Townhouse on design. Room count unverified.
- **Capellán** is 8% over. It is the best-looking thing in reach (rooftop pool with hot tub, spa, two-bedroom suites) and on a design-first rule it is the stretch most worth making. Reviews flag noise and pricey food.

**Considered and set aside:** Sophia Hotel (8.6, Plaza de la Aduana, USD 141–200 — lands around USD 104pp across three rooms, and the price data was too scattered to trust); Hotel Casa Tere (8.2, Getsemaní, USD 71–108 — the cheap fallback at roughly USD 55pp, but ordinary); Amarla (8-room boutique, 9.1, well regarded — too small for three rooms and no price found).

### Barú

| Hotel | Area | Config for 5 | Group/night | **pp** |
|---|---|---|---|---|
| **Thani Ecobeach** | Quiet end of Playa Blanca | Family room + double | 420 | **84** |
| **Aura Hotel Barú** | West, facing Cholón | 2 doubles + 1 single | 437 | **87** |
| Playa Manglares | North, mangrove side | 2 doubles + 1 single | 571 | 114 — over |
| Casa Córdoba Barú | South | 2 doubles + 1 single | 608 | 122 — over, **capacity unconfirmed** |
| Sabai Beach *(splurge)* | SW tip, 9.0 (582) | 2 doubles + 1 single | 784 | 157 — well over |

- **Thani** has sea-view family rooms, which is what makes five people cheap. Reviewers call it "by far the best place to stay on this side of Barú" but flag music from neighbouring bars and small restaurant portions.
- **Aura** at USD 156 is good value; one Tripadvisor reviewer paid USD 250 and called it overpriced. At USD 250 it becomes USD 140pp — walk away.
- **Casa Córdoba** is flagged `fits_5: false` — not because it fails, but because it is consistently described as small and intimate and I could not verify a room count anywhere. Phone before planning around it.
- **Sabai** is the best-reviewed and best-sited hotel on the island and 57% over budget. At that price a villa is plainly better.
- **Budget escape hatch:** Soy Local Barú, ~USD 108 a double on Playa Blanca (~USD 65pp across three rooms). Basic, not beautiful, frees up a lot of boat money.

---

## 5. Airbnbs

### Cartagena — all four individually verified on live listing pages

| Listing | Beds | Verified | Est. total | **pp** |
|---|---|---|---|---|
| Old City Sanctuary, El Centro | 5 bed / 6 beds / 6 bath | 4.91★, 91 reviews, top 10% | 600 | 120 |
| **Casa Salvatore, Getsemaní** | **4 bed / 5 beds / 4 bath** | **4.98★, 148 reviews, Guest Favourite** | 500 | **100** |
| 3BR + rooftop jacuzzi, El Centro | 3 bed / 6 beds / 4 bath | 4.77★, 146 reviews | 450 | 90 |
| 5BR villa, San Diego | 5 bed / 11 beds / 5.5 bath | 4.89★, 201 reviews | 525 | 105 |

**Casa Salvatore is the best-balanced option in the whole file** — five real beds for five people (an exact fit, nobody on a sofa), a genuine colonial house, private pool, daily housekeeping and pool service included, and it lands precisely on the budget line. **Old City Sanctuary** is the most beautiful thing here (original colonial arches, high ceilings, five separate bedrooms) and is listed first on the design-first rule despite being over. The **5BR San Diego villa** sleeps 16 — you would be paying for eleven beds you will not use.

**Deliberately excluded:** "Charming Getsemaní house with rooftop plunge pool" (`rooms/972586018720097604`). Gorgeous, 4.97★ over 104 reviews, private rooftop plunge pool — but it maxes at **3 guests** and the third bed is a sofa bed. It does not work.

**Seen but no URL captured:** "NOK Iconic 6BR Luxury Villa with Pool at Getsemani" and "Casa Menorca" (6BR, 4.97★, 31 reviews). Search by name from the Getsemaní pools page.

### Barú — real listings, but none individually verifiable

All four are confirmed to exist on Airbnb's Barú stays page with ratings and review counts. None of their `/rooms/` URLs could be captured, so all are flagged `is_search_url: true`.

- **Private house facing the Caribbean** — 4BR, 12 guests, private beach + pool, 4.97★ (58). Est. USD 100pp. **This is the pick for the beach stop.**
- **Spectacular home with marina** — private beach, marina, restaurant, pool, 4.82★ (44). Bedroom count unverified, so `sleeps_5_in_real_beds` is marked false out of caution. Est. USD 120pp.
- **Ojalá, Cholón** — 4 rooms, 12 guests, own pier, butler and cook, 5.0★ (19). Est. USD 180pp, the group splurge.
- **Calablanca waterfront apartment** — only **2 bedrooms** for 8 guests, which almost certainly means sofa beds for the fifth. Only 6 reviews. Cheap (est. USD 70pp) but flagged.
- **Outside Airbnb:** Vrbo 3681844, "Villa en Barú con playa privada 6BR" — verified to exist, private beach, reachable by land and sea.

---

## 6. Activity notes

**Rooftop sunset, the real comparison.** Café del Mar is literally on the ramparts and is the famous one — reserve or arrive by 16:30, premium prices. (One rooftop directory lists it as closed; two other guides still write it up as operating. **Confirm before building a night around it.**) Movich, one block off Plaza Bolívar, has the genuine 360° over old city, bay and skyline and is the better *view* — but it closes for private events, so call. Townhouse is the most relaxed: two wading pools, sunset DJ, public, pool access ~50,000 COP. Baluarte de Santo Domingo is the local answer — far less crowded, cheaper, same wall.

**The Palenque / champeta angle.** Skip the staged version. Do Celele in Getsemaní then walk five minutes to **Bazurto Social Club** on Avenida del Centenario for live champeta and picó sound-system culture. That is the Afro-Caribbean city the walled city hides.

**Private boat beats day passes, decisively.** A 28ft speedboat holding 10–12 runs from 1,800,000 COP (~USD 450) with captain, fuel, cooler and sound system; a 29ft from ~USD 475. Split five ways: **USD 90–95 each.** Rosario beach-club day passes run USD 93–125pp for a fixed itinerary and a fixed clock. The charter is cheaper *and* you control the route. Add USD 7.50pp park fee and USD 2pp maritime insurance, **cash only at the pier**. Go at 08:30 — flat sea.

**Bioluminescence: check the moon.** A bright moon washes it out completely. Check the lunar phase against your dates before booking. USD 25–35pp locally from a Barú hotel; USD 50–70pp packaged from Cartagena.

**Mud volcano, honestly.** USD 35–45pp group, USD 50–65 small-group/private, USD 5–6 at the gate if you drive yourselves. It is kitschy and crowded, and the "massage", "photo help" and "wash" each carry a ~USD 2 tip expectation that stacks up. A Caribbean cooking class (USD 70–90pp) fills the same morning slot and is probably the better memory. Flagged as optional in the JSON.

**Aviario Nacional pricing is current and official.** Foreign adult 90,000 COP (~USD 22) as of 1 September 2026; students 65,000 COP. Straight from `tickets.aviarionacional.co`.

**Celele needs booking now.** They lock the door after check-in, take no walk-ins, require a card and a minimum spend, and charge for no-shows. A week ahead on weekdays, two weeks for a weekend — and a five-top is harder than a two-top.

---

## 7. Restaurants, with real prices

Per-person figures from a 2026 local-and-foreigner guide.

**Cartagena**

| | Where | What | Per person |
|---|---|---|---|
| Celele | Getsemaní | Colombian Caribbean, LatAm 50 Best **No.5** | mains 16–23, tasting ~78 |
| Carmen | El Centro | Caribbean + European technique | mains 18–27, tasting 68–83 |
| Marea by Rausch | Getsemaní waterfront | Seafood, risotto | 22–34 |
| La Cevichería | El Centro | The Bourdain ceviche house | 13–23 |
| La Cocina de Pepina | Getsemaní | Proper costeño home cooking | 9–15 |

Also good and cheaper: El Boliche Cebichería (12–21), Demente (7–17), La Mulata (7–13), Salou (13–21). Drinks: **Alquímico** on Calle del Colegio, three floors, a World's 50 Best Bars regular.

**Could not verify:** *Interno* (the restaurant staffed by inmates at the San Diego women's prison) and *Alma* at Casa San Agustín did not appear with prices or an operating confirmation in any source I could reach. **Check both are open before planning around them** — Interno in particular has had programme interruptions historically.

**Barú.** Not a restaurant destination; most nights you eat where you sleep (USD 15–30pp at Thani or Aura, more at Sabai). The exceptions: **Playa Manglares** is the one property with a food reputation, worth a table even if you sleep elsewhere (USD 25–40). **Sabai's** restaurant is open to non-guests and is the nicest long-lunch setting on the island (USD 30–50). **Nena Beach Club** on Playa Blanca for the beach-club version (USD 30–50, usually a pass or minimum spend). And the **Cholón floating vendors** — boats pulling alongside yours with ceviche, oysters and cocktails, cash, agree the price out loud first.

---

## 8. Logistics

**Flights.** From 1 January 2027 Aerolíneas Argentinas flies **Buenos Aires Aeroparque (AEP) → Cartagena nonstop, 5× weekly**. The trip opens and closes in Cartagena with no Bogotá connection — which is exactly why a single road-reachable beach base is the right structure. Five times weekly means fixed return days: **build the 3+4 nights around the flight days, not the reverse.**

**Semana Santa 2027 begins Palm Sunday, 21 March.** Early March sits clear of it — the single most expensive and most crowded week of the year on this coast, both for prices and for Colombian domestic holiday traffic on Barú. **Do not let the dates drift past mid-March.**

**Note on nights.** 3 + 4 = 7 nights across a 9-day trip. Day 8 is the road back to Cartagena and day 9 the flight out, so depending on the AEP departure time you may need **one extra Cartagena night on day 8**. Worth checking against the flight schedule before booking.

**In Cartagena.** Walled city and Getsemaní are walkable — 10–15 min end to end, ~10 min between them. Taxis have no meters and no official tariff, so **agree the fare out loud before getting in**; short hops 10,000–15,000 COP, airport to walled city 15–20 min for 25,000–35,000 COP. Uber/DiDi/InDriver exist but coverage is thin and waits are long; at night have the hotel call a taxi. **Five people do not fit in one taxi** — budget two cars per trip, or book a van.

**Cartagena → Barú.** By road over the Barbacoas bridge, 1h–1h15. Private van for five: 350,000–450,000 COP (USD 85–110) each way, USD 17–22 a head. By sea it is 45–60 min and hotel transfers run ~USD 35pp — USD 175 for five, more than the van. **Take the road**: cheaper for a group, runs on your schedule, immune to the wind.

**Boat transfers.** Rosario day boats leave Muelle La Bodeguita 07:50–08:30 and **must** return 15:00–16:00. Two fees, **cash only at the pier**: park entrance 31,500 COP (~USD 7.50) and maritime insurance 8,800 COP (~USD 2). Some clubs leave from Marina Todomar in Bocagrande instead — check the confirmation. Tierra Bomba water taxis are separate and cheap: 8,000 COP pp to Punta Arena from behind the Bocagrande hospital, 10,000 COP to Bocachica from La Bodeguita, leaving when full.

---

## 9. March weather, properly

Dry season, and about as good as this coast gets: lows 24–25 °C, highs 30–32 °C, sea 28–29 °C, ~11.6 hours of sun, very little rain.

**The wind is the real story.** December through May the trade winds blow steadily over the Caribbean coast. It keeps the city bearable and the mosquitoes down, but it churns the sea. Mornings are glassy; the water builds through the afternoon, and local guides describe afternoon boat crossings in this season as genuinely challenging.

Three practical consequences, which is why the itinerary is shaped the way it is:

1. **Every boat activity goes in the morning.** No exceptions.
2. **Playa Blanca's water turns from turquoise to stirred-up and greenish on the windiest afternoons**, sometimes with seaweed. The honest expectation-setter for anyone picturing the photos.
3. **The wind hides the sun.** People burn badly here without noticing.

March is also peak pricing (1.5–2× low season). The compensation is the driest, clearest, least-buggy time of year.

---

## 10. Safety — practical, not alarmist

The walled city, San Diego and Getsemaní are fine to walk day and evening and are visibly policed; violent crime against tourists is uncommon. After ~midnight stick to lit main streets in Getsemaní — the quiet side alleys empty out. Moving as a group of five is itself decent protection; splitting up at 2am is the thing that goes wrong.

**The real everyday risk is the transactional hustle, not danger.** Agree the price out loud in pesos before accepting *anything*: a woven bracelet slipped onto your wrist, a flower pressed into your hand, oysters, a beach massage, a chair, or a photo with a palenquera (that is a paid transaction, ~10,000–20,000 COP — settle it before the camera comes up). **Never accept a free sample**; payment will be expected.

**Do not buy island tours from sellers on the muralla or the beach.** Inflated prices, overcrowded boats, and the classic ruined day at Playa Blanca. Book through the hotel or a known operator.

Restaurants: pick places with displayed prices, check the bill, and note that *propina voluntaria* is genuinely voluntary. Taxis: agree the fare first. Scopolamine drugging is rare but real — watch your drink, take a taxi rather than walking long distances very late.

**On Barú:** the public Playa Blanca strip has persistent vendors, the boat channel has current so swim in front of your hotel, and respect the sun.

---

## 11. Full source list

**Local and specialist guides**
- https://www.cartagenaexplorer.com/best-boutique-hotels-cartagena-colombia/
- https://www.cartagenaexplorer.com/best-hotels-getsemani/
- https://www.cartagenaexplorer.com/cartagena-islands-guide/
- https://www.cartagenaexplorer.com/best-rosario-island-hotels/
- https://www.cartagenaexplorer.com/tierra-bomba-island-guide/
- https://www.cartagenaexplorer.com/cartagena-best-restaurants/
- https://www.cartagenaexplorer.com/celele-cartagena-restaurant-review/
- https://www.cartagenaexplorer.com/places-sunset-drinks-cartagena-colombia/
- https://cartagenadaytours.com/blogs/travel-guide/tierra-bomba-vs-rosario-islands-vs-baru
- https://cartagenadaytours.com/blogs/travel-guide/how-to-visit-rosario-islands
- https://cartagenadaytours.com/blogs/travel-guide/best-beach-clubs-in-rosario-islands
- https://cartagenadaytours.com/blogs/travel-guide/cartagena-safety-tips
- https://www.tomplanmytrip.com/best-isla-baru-hotels-colombia/
- https://www.tomplanmytrip.com/best-cartagena-islands-colombia/
- https://www.tomplanmytrip.com/is-cartagena-safe-colombia/
- https://thecartagena.guide/best-restaurants-cartagena/
- https://www.thecartagena.guide/is-cartagena-safe/
- https://www.juanballena.com/blogs/travel-tips-cartagena/rooftop-bars-in-cartagena
- https://www.juanballena.com/products/bazurto-market-tour-cartagena
- https://www.therooftopguide.com/rooftop-bars-in-cartagena.html
- https://hotelierschoice.com/guides/cartagena/luxury/
- https://mycartagenatrip.com/when-to-visit-cartagena/

**Pricing and hotel data (Kayak — the pages that actually rendered)**
- https://www.kayak.com/Cartagena-Hotels-Townhouse-Boutique-Hotel.3674674.ksp
- https://www.kayak.com/Cartagena-Hotels-Hotel-Casa-Pizarro.2453116.ksp
- https://www.kayak.com/Cartagena-Hotels-Hotel-Boutique-Casa-del-Coliseo.2047975.ksp
- https://www.kayak.com/Cartagena-Hotels-Hotel-Capellan-de-Getsemani.2975739.ksp
- https://www.kayak.com/Cartagena-Hotels.26923.hotel.ksp
- https://www.kayak.com/Isla-Grande-del-Rosario-Hotels.74042.hotel.ksp
- https://www.kayak.com/Baru-Hotels-Baru-Playa-Eco-Beach-Resort.2276320.ksp

**Booking.com property pages** *(all blocked to automated reads; links are for the traveller to open)*
- https://www.booking.com/hotel/co/hotel-kartaxa.en.html
- https://www.booking.com/hotel/co/casa-del-coliseo.en.html
- https://www.booking.com/hotel/co/townhouse-boutique.en.html
- https://www.booking.com/hotel/co/casa-pizarro-boutique.en.html
- https://www.booking.com/hotel/co/capellan-de-getsemani.en.html
- https://www.booking.com/hotel/co/sophia.en.html
- https://www.booking.com/hotel/co/thani-ecobeach-baru.html
- https://www.booking.com/hotel/co/las-islas.en.html
- https://www.booking.com/hotel/co/isla-del-encanto.en.html
- https://www.booking.com/hotel/co/san-pedro-de-majagua.html
- https://www.booking.com/hotel/co/blue-apple-beach-house.html
- https://www.booking.com/region/co/baru.html
- https://www.booking.com/city/co/playa-blanca.html

**Official hotel sites (verified)**
- https://www.townhousecartagena.com/ · https://www.townhousecartagena.com/rooftop
- https://www.sophiahotel.com.co/en/
- https://hotelcapellandegetsemani.com/en/

**Airbnb / Vrbo**
- https://www.airbnb.com/rooms/1111144595599803777 — Casa Salvatore, 4BR + pool, Getsemaní
- https://www.airbnb.com/rooms/856462808151932857 — 3BR walled city, pool + jacuzzi
- https://www.airbnb.com/rooms/51493412 — 5BR villa, San Diego
- https://www.airbnb.com/rooms/713364 — Old City Sanctuary, 5BR + pool
- https://www.airbnb.com/rooms/972586018720097604 — Getsemaní plunge pool *(sleeps 3 — excluded)*
- https://www.airbnb.com/baru-colombia/stays
- https://www.airbnb.com/getsemani-cartagena-colombia/stays/pools
- https://www.vrbo.com/3681844
- ~~https://www.airbnb.com/rooms/1571267223098215089~~ — **HTTP 410 Gone, delisted**

**Activities and boats**
- https://www.cartagenaconnections.com/private-boats.html
- https://www.cartagenaconnections.com/mercado-bazurto-tour
- https://www.cartagenaconnections.com/beach-and-islands.html
- https://www.getyourguide.com/cartagena-l362/cartagena-getsemani-highlights-and-graffiti-walking-tour-t391473/
- https://www.getyourguide.com/cartagena-l362/cartagena-bazurto-market-authentic-food-culture-tour-t71512/
- https://www.getyourguide.com/cartagena-l362/cartagena-totumo-mud-volcano-experience-t323228/
- https://www.getyourguide.com/cartagena-l362/sunset-tours-tc306/
- https://www.getyourguide.com/baru-island-l114977/bioluminescence-tours-tc2385/
- https://www.viator.com/Cartagena-attractions/Castillo-de-San-Felipe-de-Barajas/d4498-a18278
- https://www.viator.com/Cartagena-tours/Catamaran-Cruises/d4498-g3-c32016
- https://aviarionacional.co/ · https://tickets.aviarionacional.co/
- https://nauty360.com/blog/rosario-islands-cartagena-private-boat-guide
- https://hicartagena.com/rosario-islands-trip-cartagena-tour/

**Weather**
- https://www.roughguides.com/articles/cartagena-colombia-weather-march-travel-tips/
- https://bestdateweather.com/en/cartagena-colombia-weather-march

**Tripadvisor (existence and review verification; pages 403 to automated reads)**
- https://www.tripadvisor.com/Hotel_Review-g1507145-d7760467-Reviews-Sabai_Beach_Hotel-Isla_Baru_Cartagena_District_Bolivar_Department.html
- https://www.tripadvisor.com/Hotel_Review-g17619872-d28647482-Reviews-Thani_Ecobeach_Baru-Pendales_Cartagena_District_Bolivar_Department.html
- https://www.tripadvisor.com/ShowUserReviews-g1507145-d1867805-r118536816-Aura_Hotel_Baru_By_Sport_Baru-Isla_Baru_Cartagena_District_Bolivar_Department.html
- https://www.tripadvisor.com/Hotel_Review-g297476-d13455990-Reviews-Townhouse_Boutique_Hotel-Cartagena_Cartagena_District_Bolivar_Department.html
- https://www.tripadvisor.com/Hotel_Review-g297476-d8873914-Reviews-Hotel_Casa_Pizarro-Cartagena_Cartagena_District_Bolivar_Department.html
- https://www.tripadvisor.com/Hotel_Review-g297476-d5888752-Reviews-Hotel_Boutique_Casa_del_Coliseo-Cartagena_Cartagena_District_Bolivar_Department.html

---

## 12. What to verify before booking

1. **Every price.** Booking.com blocked all automated reads, so no live early-March-2027 rate exists in this file. Only the Townhouse figure is March-specific.
2. **Room availability for three rooms** at Casa del Coliseo (12 rooms), Casa Pizarro, Aura and Playa Manglares.
3. **Casa Córdoba Barú's capacity** — flagged as unconfirmed for a group of five.
4. **Whether Townhouse's Junior Suite sleeps 3.** The two-room config depends on it.
5. **Direct Booking.com URLs** for Aura, Playa Manglares, Casa Córdoba and Sabai — I could only verify the Barú region page.
6. **Airbnb bed counts on Barú.** All four are real listings but none was individually openable.
7. **Café del Mar's operating status** — one directory lists it closed, others do not.
8. **Interno and Alma** — no operating confirmation found.
9. **The moon phase** for the bioluminescence night.
10. **The AEP flight days**, which determine whether you need a 9th-day Cartagena night.
