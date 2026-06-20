# Soulful Backpack — Design System

> **Soulful Backpack** is the parent company behind a small family of products that
> help people move through life transitions with less weight and more intention. The
> name is the throughline: a move, a trip, a fresh start is really a question of
> *what you choose to carry forward.* Every product under Soulful Backpack is built to
> make that choice calmer and more honest.

This project is both the living system (tokens, components, guidelines) and the
home of the flagship product it was sampled from.

---

## Brand architecture

| Level | Name | Role |
|---|---|---|
| **Company** | **Soulful Backpack** | owns this design system, the voice, the logo, the merch |
| **Product** | **Help Me Move** | the move-companion app (flagship, built) |
| **Product** | **Help Me Travel** | the travel companion (planned, inherits this system) |
| **Feature** (in Help Me Move) | **"The Backpack"** | the opening reflection ("why are you moving, really?") |

The company name and the in-app feature name share the backpack metaphor on purpose:
it is the brand's signature idea (what you carry), surfacing as a ritual inside each
product. Because the company is *Soulful* Backpack and the feature is *The* Backpack,
they read as family rather than collision.

---

## Sources (the source of truth)

The system is sampled directly from the working product in this project — not from
screenshots. When in doubt, the code wins.

- `Help Me Move.html` + `app/` — the flagship app (iOS prototype). Real components live here.
- `docs/PRD-PM-Version.md`, `docs/PRD-Addendum-Emotional-Architecture.md` — product + voice intent.
- `backpack/` — the original token + study files (Backpack, Focus, Retro studies), renamed from the legacy `anchor/`.
- Live-app screenshots in `uploads/` — where the palette's "how each color earns its place" came from.

---

## CONTENT FUNDAMENTALS — how Soulful Backpack writes

The writing is the product. The rule that governs everything:

> **Discovery framing, never loss framing.** *"What haven't you used in a year?"*
> creates momentum. *"What do you want to sell?"* creates resistance. Audit every
> prompt, label, and button for which one it is.

- **Voice:** calm, honest, non-patronizing. A steady friend who has done this before,
  not a coach and not a therapist. Never peppy, never clinical.
- **Person:** address the user as **"you."** The product speaks in plain first-person
  plainness ("Before we start…"). It never lectures.
- **Functional value and emotional cost are named together.** An object can be fully
  usable *and* heavy with a closed chapter. The product gives words to that trade,
  it doesn't resolve it for you.
- **No scores, no grades, no sentiment analysis.** The user's own words are the
  content; data is supporting context. The app never tells you how you feel.
- **Casing:** Sentence case for everything readable. UPPERCASE only for tracked
  kicker/overlines. Title Case reserved for product/feature names.
- **Numbers are reassurance, not pressure.** Money is shown to reframe ("that's 6 days
  of runway"), never to nag.
- **Emoji:** none in product surfaces. The brand's warmth comes from type and color,
  not emoji.
- **Punctuation house rule:** **never use em dashes (—) in user-facing copy.** Use
  commas, periods, colons, or the middot "·". (This is a hard rule across all products.)

**Examples (the right register):**
- Onboarding: *"Before we start, why are you moving, really? Write whatever comes to mind. There are no wrong answers."*
- Stuck nudge: *"This one has been waiting 3 days. When you started, you wrote…"*
- After a sale: *"It sold on Saturday. I thought I'd feel sad but mostly I felt lighter."*
- Reframe: *"You're not selling a chair. You're choosing what to carry into your next chapter."*

---

## VISUAL FOUNDATIONS

**Overall feeling:** warm paper and quiet ink. Editorial, unhurried, tactile. It
should feel like a well-made paper notebook, not a dashboard.

- **Color.** Surfaces are warm paper (`--paper #f8f1e9`) and sand, never pure-white
  pages (white is for cards only). Text is a warm near-black (`--ink-900 #221b17`),
  "the missing dark." One warm signal color carries all action: **terracotta**
  (`#bd6a3c`) for buttons, links, focus. Semantics are disciplined: **sage** = positive/
  done, **coral** = spend/alert, **gold** = waiting. Pastels (pale pink, sage-soft) are
  fills and chips only, **never text**. Each color "earns its place" — nothing decorative.
- **Type.** Two families. **Lora** (quiet serif) for display, headings, pulled quotes,
  and *every number* — numbers read as considered. **Mulish** (humanist sans) for body,
  labels, and all UI. Reflective question prompts are set in serif; UI controls in sans.
- **Spacing & shape.** Generous gutters (22px default), clear section rhythm (30px).
  Soft corners everywhere: cards 22px, fields 16px, inputs 12px, pills fully round.
  Nothing is sharp.
- **Surfaces & shadow.** White cards float on paper with a low, warm, diffuse shadow
  (`0 8px 24px rgba(34,27,23,0.06)`) and a hairline border (`rgba(34,27,23,0.06)`).
  Shadows are never hard or gray. The primary button carries a soft terracotta glow.
- **Cards.** White, 22px radius, hairline border + low shadow. Content-first, no headers
  unless needed. Rows inside a card are divided by 1px soft hairlines, not boxes.
- **Borders.** Almost always the two hairline tokens. Dashed terracotta border signals
  an "add" affordance (add a task, add an item).
- **Backgrounds.** Flat warm paper. No gradients, no photographic hero washes, no
  textures or patterns. Accent "washes" are flat tint blocks (sage-tint, terracotta-tint)
  behind a pulled quote, often with a 3–4px rounded accent bar on the left edge.
- **Motion.** Calm and transform-only. Entrances *rise* 12px and settle on
  `cubic-bezier(0.2,0.7,0.2,1)`; opacity is never animated from 0 (so content is always
  readable even if a preview throttles the timeline). No bounces, no infinite loops on
  content. **Sheets/modals appear instantly** — their resting (visible) state is the base,
  animation is enhancement only. (Learned gotcha — see `CLAUDE.md`.)
- **Hover / press.** Hover = a slightly deeper shade (terracotta → terracotta-deep), not
  a glow. Press = a tiny `translateY(1px) scale(0.99)` settle. Quiet, physical, never flashy.
- **Focus.** Terracotta, used sparingly. Inputs shift their border to terracotta on focus.

---

## ICONOGRAPHY

- **A single restrained line set**, authored in-house: 24×24 viewBox, `currentColor`
  stroke, ~1.7–2px weight, round caps and joins, geometric and minimal. Lives in
  `app/icons.jsx` (migrating into `components/`). Icons inherit text color and never
  carry their own fills except the occasional filled heart (the one warm reward, shown
  in sage after a story is written post-sale/donation).
- **No icon font, no third-party set, no emoji** in product surfaces. If you need an
  icon the set doesn't have, draw it in the same grid and weight rather than importing
  a mismatched library.
- The brand "mark" used in-app is a small rotated rounded square (a stylized pack/tag)
  in sage. The real logo now lives in `assets/logo/` (see Brand assets below).

## Brand assets — the logo

The Soulful Backpack logo is a wordmark (thin geometric caps) under a soft-pink
line-art backpack mark, two-tone: **SOULFUL** in warm ink, **BACKPACK** in terracotta.
The canonical logo is the **transparent PNG** — it is the real art, used on warm light
surfaces (paper, white cards, sand).

- `assets/logo/soulful-backpack-mark.png` — **the logo.** Background removed, transparent (720×720). Use this everywhere.
- `assets/logo/soulful-backpack-original.png` — the source file, untouched.

> Intended for light surfaces, which fits the warm-paper brand. If you ever need a
> knockout version for dark backgrounds, or a larger export for print/merch, say the
> word and I'll produce it from this same art (no redraw, same feel).

---

## Index / manifest

- **`styles.css`** (root) — the one file consumers link. Imports everything below.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- **`base/base.css`** — element primitives + utilities (`.bp-btn`, `.bp-field`, `.bp-kicker`, `.bp-rise`).
- **`components/`** — React primitives (`Button`, `StatusChip`, `Card`, `TabBar`, `BottomSheet`) with `.d.ts` + `.prompt.md` + a `@dsCard` HTML each.
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing) plus the Brand logo card.
- **`assets/logo/`** — the Soulful Backpack logo: the transparent PNG mark (canonical) and the original source art.
- **`ui_kits/help-me-move/`** — pointer to the flagship product surfaces.
- **`templates/`** — copy-and-edit starting points consuming projects can pick from: **Deck** (`templates/deck/`, 1280×720 slide layouts), **Doc** (`templates/doc/`, print-ready document), **Sheet** (`templates/sheet/`, branded spreadsheet/tracker that maps cleanly to Google Sheets). Each loads the system via a sibling `ds-base.js`.
- **`SKILL.md`** — makes this downloadable as a Claude Code skill.
- **Flagship app:** `Help Me Move.html` (+ `app/`). **Standalone export:** `Help Me Move - standalone.html`.

### Caveats (pass 1)
- Fonts load from Google Fonts; self-hosted `@font-face` binaries are a follow-up.
- The flagship app still consumes the legacy `backpack/backpack.css` tokens; migrating it to
  `styles.css` is a clean follow-up so there's one source of truth.
- Component coverage is a growing set (Button, StatusChip, Card, TabBar, BottomSheet). More can follow
  (TextField, SegmentedControl, status-grouped TaskRow) on your go-ahead.
