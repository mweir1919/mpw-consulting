# Site proposal v2: start from the owner's goal (2026-10-17)

**Status:** proposal. Nothing on mpwconsulting.ca changes until Max says yes.
**Prototype:** `index.html` in this folder. Contact sheets: `contact-sheet-desktop.png`, `contact-sheet-mobile.png`.

## Why v2

Max rejected v1 ("Fill the chairs you already pay for") on 2026-10-17. It built the whole site around one niche's one pain, the same mistake as the earlier missed-call-for-trades version. The rule now in Weir2 `MPW.md` → Rules: the public message leads with the north star in `Strategy/offer.md`. That means starting from the owner's goal, building what moves it, and getting paid more when it moves. Niches choose targeting and examples. They never become the headline.

He also said the alignment was off and some scroll sections ran too long. v2 puts every section on one shared container, so each left edge lines up with the logo (checked at 1440px and 390px). The page is 6.7 screens long, down from 13.8.

## Decisions Max made (2026-10-17)

- **Hero: the owner's goal (option A).** "This year I want ___". The goal changes as you scroll: more repeat customers, my evenings back, quotes out the same day, fewer no-shows, to stop chasing invoices. It resolves to "Name yours. We build what moves it." The hero is complete before any scroll, with the first goal, the promise and the button all on screen. Type only, no photo, and the goal line is set upright (no italics).
- **Pay-for-results sits low, just before the close.**

## The page

| # | Section | What it does |
|---|---|---|
| 1 | Hero | The goal line changes as you scroll. Short pin (1.9 screens). |
| 2 | Start from the goal, not the tool | Five tabs, one per agreed objective type: More customers, Hours back, Faster, Fewer dropped balls, Something new. Each shows three examples from different businesses and "what we'd count". Labelled "Examples, not packages." Click or arrow keys; no scroll trap. |
| 3 | How it runs | Diagnose → Build → Hand off, plus who it's for and what we don't sell. Plain flow. |
| 4 | We get paid more when your number moves | A short pin (1.7 screens). A line draws itself across the chart: agreed baseline, then the build (flat fee, half up front), then the line rising, with a bonus only on what lands above the baseline. No retainer. Labelled as an illustration. |
| 5 | Close | "What's the number you want to move?" with one button, Book a call. hello@ is shown as text. |

## Copy rules it follows

- AI is named once, as how the work gets done. It is never the headline or the pitch.
- No single-niche headline. Examples span salons, landscaping, cleaning, trades, bookkeeping, agencies and studios.
- No prices, invented numbers, claimed clients, founder bio, BCG/GWL/Laurier, or Smooth Wax.
- Examples avoid GWL-sensitive categories (pharmacy, optical, physio/chiro, med spa). "Studio or clinic" appears once under no-shows; swap it if clinics should stay out entirely.

## Open calls for Max

1. ~~The five hero goals.~~ Decided 2026-10-17: more repeat customers, my evenings back, quotes out the same day, fewer no-shows, to stop chasing invoices.
2. **Bonus wording.** "A one-time bonus is due only on what lands above the line." Should the amount stay off the site?
3. **GWL clearance** before anything public (still open in `CEO/decisions.md`).
4. ~~Photo.~~ Decided 2026-10-17: type only.

## Shipping it (after a yes)

Port into the Next.js app as the homepage. Keep the brand tokens already in `app/globals.css`. Load the scroll engine (`scrollcraft.js`/`.css`, MIT, Nate Herk) on the homepage only. Retire `/approach` and unlink `/report` and `/calculator`, which were built for trades. Then check it on a real iPhone before cutover.

## Added 2026-10-17 (round 3)

- Nav: About and Contact in the bar (hidden on phones, repeated in the footer).
- "Send a note" beside Book a call in the hero and the close, pointing at the contact form.
- "Where we work: online, from Toronto, and on-site when the work needs someone in the room."
- Diagnose step ends "If AI isn’t the right tool for it, we’ll say so."
- Port plan: keep /about and /contact, retire /approach (How the work runs replaces it).
