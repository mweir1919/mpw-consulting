# Site proposal: salons, sold on outcomes (2026-10-15)

**Status:** proposal. Nothing on mpwconsulting.ca changes until Max says yes. Every site change goes through change control (Weir2 `other-worlds/business/mpw-firm/Sales/keep-kill-change.md`).
**Prototype:** `index.html` in this folder (open it locally, or the private artifact Max was sent). Contact sheets: `contact-sheet-desktop.png`, `contact-sheet-mobile.png`.

## What changed in the business

Read from Weir2 `other-worlds/business/mpw-firm/CEO/decisions.md` (Oct 14) and `2026-10-14-niche-rescore.md`:

- **Buyer:** appointment-based personal services. Leading candidate is independent multi-chair hair salons (3–15 chairs, on Vagaro or Square). Wax/lash/brow studios are a close second. The niche is **not locked** until owner conversations happen.
- **Offer:** sell outcomes. MPW builds ops tools (rebooking, waitlist backfill, win-back, review requests, AEO). AEO is one lever inside those, not a standalone service.
- **Shape:** fixed-scope build, about 4–6 weeks, flat fee, 50/50 payment, plus a one-time milestone bonus against a baseline (for example extra completed bookings in 90 days). No retainers. Prices (about $2.5–5k) are untested and stay off the site.
- **Superseded:** plumbing/HVAC ICP, the missed-call-first offer, and the "missed call while you're under the sink" line.

## What's wrong with the current site

- The H1 is "Your objectives stay the same. AI is how you get there." That leads with AI, which breaks the standing rule (keep-kill-change row 13), and names no buyer and no fix (row 1).
- `/report` and `/calculator` are built for trades, an ICP that was dropped Oct 14. They should come off nav paths and the sitemap (keep the URLs alive for anyone already sent them, or redirect).
- "Diagnose / Build / Handoff" says nothing about how MPW is paid, which is now the most distinctive thing about the offer.

## The proposed homepage, beat by beat

| # | Beat | What the visitor sees | Device |
|---|---|---|---|
| 1 | Recognition | An empty salon at closing. Headline: "Fill the chairs you already pay for." The chair moves toward you as you scroll; then "Who sits here Friday at two?" | Layered planes (room, headline, chair cutout, haze) at different rates |
| 2 | Tension | Three plain statements: no rebook at checkout, a cancellation nobody backfills, a regular who drifts away. "None of it shows up as a cost. It shows up as an empty chair." | Plain flow, staggered entrance |
| 3 | Peak | A paper appointment book for one week. Scrolling fills the empty slots in four passes: rebooked at the chair, backfilled from a waitlist, won back, found. Labeled as an illustration, not client data. | Pinned, longest act. This is the signature move |
| 4 | Range | The five levers on a sideways rail: Rebooking, Waitlist, Win-back, Reviews, Search. "Most studios need two or three." | Horizontal pan |
| 5 | Terms | Baseline → Build → Count → Hand off. Flat fee, half to start. One-time bonus only if bookings beat the agreed baseline. No retainer. Who it's for; which booking software it works with. | Flow, image reveal |
| 6 | Commitment | "Find out what your book is leaving empty." One button: Book a call (Calendly). hello@ as a fallback. | Pinned close, magnetic CTA |

One action, one label everywhere: **Book a call**.

## Rules the copy follows

- Leads with the owner's outcome (full chairs), never with AI. AI appears once, as where clients now search.
- No prices, no invented numbers, no claimed clients or results. The book is labeled "Illustration" and "Not client data."
- No founder face, bio, student status, BCG, GWL or Laurier.
- Smooth Wax Bar is not mentioned.
- "We" is used, but nothing claims staff MPW doesn't have.
- Fresha is described honestly: export only, no direct integration.

## Rest of the site

- **/approach:** retire. Its content moves into beat 5.
- **/about:** cut to a few lines about how MPW works (fixed scope, paid on results, you keep everything). No bio.
- **/contact:** keep the form, retitle "Book a call", Calendly first.
- **/report, /calculator:** unlink; keep the URLs or 301 to home. A salon equivalent (a "what's your book leaving empty" estimate from chairs, hours, average ticket and rebook rate) is the natural next lead magnet once a real Smooth Wax data pull gives honest inputs.
- **Metadata and JSON-LD:** change the description to match the new hero, and set `areaServed` to the GTA.

## Open calls for Max

1. **Niche wording.** The prototype says "independent hair salons and wax, lash and brow studios," which covers both top candidates. Lock to one once owner conversations land?
2. **"Miss it and you owe nothing more."** This follows from the one-time bonus model. Confirm it is how you want to say it.
3. **Bonus wording.** The site names the bonus but not the amount. Keep it that way?
4. **GWL clearance** is still an open item in `CEO/decisions.md`. Publishing a salon-facing site is a public step; clear it first.
5. **Imagery.** The photos are AI-generated placeholders (room, chair, station, desk). Swap in real salon photography before launch, or keep generated imagery and say nothing about it?

## How to ship it (after a yes)

Port into the Next.js app rather than serving the static file. Keep the brand tokens (navy, gold, Libre Caslon Text, Public Sans) already in `app/globals.css`. The scroll engine (`scrollcraft.js`/`.css`, MIT, Nate Herk) can be loaded as a client component on the homepage only. About a day of work, plus a real-phone check on iOS Safari before cutover.

## How this was built

Built with the scroll-craft skill (github.com/nateherkai/scroll-craft). Its asset generator (kie.ai) wasn't used; photos came from the OpenAI image API, including a clean background plate with the chairs removed so the chair could be a separate plane. Verified with headless Chromium at 1440×900, 390×844 and reduced motion: no console errors, no horizontal overflow, and the rail has positive overflow at both widths. Not verified: a real iPhone.
