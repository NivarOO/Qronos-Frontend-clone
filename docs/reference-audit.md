# Reference Audit — Qronos AI Agent Scheduler (Template v1.2)

> Source: `https://qronos-ai-agent-scheduler-template-v1.21st.app/`
> Audit date: 2026-09-26
> Method: live page fetch (markdown + HTML), compiled CSS inspection, Next.js payload inspection. No proprietary source copied — all values below are observed computed/class-level facts re-expressed in our own words.
> Stack detected: Next.js + Turbopack, single compiled CSS bundle, canvas hero background, inline SVG pipeline diagrams, Lucide icons.

---

## 1. Page outline (top → bottom)

1. **Fixed header / navbar** — `fixed top-3`, centered pill-ish bar, logo left, 5 links center, `GET STARTED` star-button right, hamburger on mobile.
2. **Hero** — full-viewport (`min-h-screen`), centered text, canvas particle/gradient background + two gradient overlays, H1 + sub + 2 CTAs, logo marquee pinned near bottom.
3. **Logo marquee** — grayscale integration logos, edge-faded mask, infinite horizontal loop, ~10 unique logos repeated 4× (40 nodes).
4. **Divider** — repeated 40px-tall band: thin top/bottom borders + diagonal hatch fill + 4 cross/plus marks at corners. Used between major sections (at least 5 instances).
5. **Features (`#features`)** — eyebrow-free H2 `Stateful execution / keeps agents in motion`, intro paragraph, left sticky sidebar mock + Gantt chart + 3 numbered feature rows (01/02/03) + pipeline strip card.
6. **How it works (`#how-it-works`)** — H2 `Durable autonomy / resumes in context`. Four stacked showcase rows, each = text left + live-mock card right (alternating on desktop):
   - Multi-agent pipeline (SVG orchestrator diagram)
   - Flexible scheduling (7-day week strip + 3 trigger rows)
   - Built-in guardrails (6 toggle rows)
   - Agent inbox (4 message rows)
7. **Insights (`#insights`)** — H2 `Track agent insights / in real time`. Large dashboard card: stat trio, budget bar, per-assignee bar chart, project × agent table. Mobile shows a static image; desktop renders live DOM.
8. **Pricing (`#pricing`)** — H2 `Pricing that grows / with your agents`. 4-tier grid (Starter / Basic / Team / Enterprise) with billing toggles on Basic + Team.
9. **Testimonials (`#customers`)** — H2 `Teams moving faster / with autonomous work`. 2 cards (Meridian, Monolyth) each with logo, quote, avatar/author, 2 metric cells.
10. **Final CTA** — particle canvas (180 particles), overlapping avatar stack (Gemini/Codex/Claude/Cursor/+), H2 `Stop babysitting agents / Let them own the work`, sub, `GET STARTED` + `REQUEST A DEMO`.
11. **Footer** — black, 6-column grid (brand span 2 + Product/Developers/Company/Legal), social links with arrow hover, bottom bar with copyright + green status dot.

Anchors observed: `#features` (About), `#how-it-works` (Features), `#insights`, `#pricing`, `#customers` (Testimonials), plus `#integrations`, `#developers`, `#security`, `#`.

---

## 2. COLOR SYSTEM

### Base theme (from `:root`)
| Token | Value | Usage |
|---|---|---|
| `--background` | `#000101` | page body |
| `--foreground` | `#ecebe7` (warm off-white) | primary text |
| `--card` / `--popover` | `#020204` | card base (overridden per-card by gradients) |
| `--muted` / `--secondary` | `#040608` | muted surfaces |
| `--muted-foreground` | `#757168` (warm gray) | secondary paragraph text |
| `--accent` | `#07090d` | hover surfaces |
| `--border` | `#101215` | default border |
| `--input` | `#07090c` | switch track (unchecked) |
| `--ring` | `#ecebe7` | focus ring |
| `--chart-1…5` | `#ecebe7, #a7a49e, #6c695f, #3c3a35, #171612` | charts/table muted ramp |

Body rule: `background: var(--background); color: var(--foreground)`.

### Section / card backgrounds (observed)
- Page: near-black `#000101` / pure `#000` in hero + footer.
- Showcase cards: `linear-gradient(145deg, rgba(19,19,21,0.98), rgba(7,7,8,0.98))` with 5px outer padding + inner 8px card — creates double-frame effect.
- Pipeline demos: `#101112` and `#080707` variants, plus `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.055), transparent 70%), linear-gradient(#0a0a0c,#070708)` and insights variant `radial-gradient(circle at 50% 0%, rgba(94,73,86,0.24), transparent 68%), linear-gradient(#09090c,#09090c)`.
- Top highlight wash inside pricing/testimonial cards: `linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03) 40%, transparent)`, height ~192px.
- Hero overlays: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)` + `linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.6))` over canvas.
- Divider hatch: `repeating-linear-gradient(135deg, transparent 0 6px, rgba(255,255,255,0.06) 6px 7px)`.
- Bars: cyan `from-cyan-600/80 via-cyan-400 to-cyan-200`, emerald `from-emerald-600/80 via-emerald-400 to-emerald-200`, violet `from-violet-600/80 via-violet-400 to-violet-200`; track `bg-white/[0.045]`.
- Status dots: green `#00c758` / emerald `#00d294`, orange `#ff8b1a`, rose `#ff667f`, amber `#ffd236`, sky `#00bcfe`, cyan `#00d2ef`, violet `#a685ff`.

### Text
- Primary: `#ecebe7` / `white`.
- Secondary: `text-white/70` (nav), `text-muted-foreground #757168` (section subs, `text-xl`).
- Muted/meta: `text-white/50, /40, /35, /32, /30, /25, /24, /18`, mono labels at 8–10px.
- Gradient headline: `linear-gradient(to bottom, #fff, #d4d4d8 50%, #71717b)` via `bg-clip-text`.
- Accent text: `text-amber-300` star, `text-emerald-100/300` budget, `text-orange-300/85` budget-left, `text-white/75` stats.

### Borders
- Default hairlines: `border-white/[0.06–0.12]`, `border-[#37333b]` (pricing/testimonial outer+inner), `border-white/[0.08]` + `shadow inset 0 1px rgba(255,255,255,0.025–0.08)`.
- Header rules: `bg-foreground/10` 1px top/bottom on nav.
- Fixed grid lines: `bg-white/15` with `mix-blend-difference`.
- Switch unchecked: `bg-zinc-500`; checked: `bg-emerald-500`; thumb white.

### Buttons
- StarButton (dark outline pill): transparent/black bg, `border-slate-200/50`, white text, animated radial highlight dot traveling the border (`--light-color #FAFAFA`, `--light-width 110px`, `--border-width 2px`).
- Primary white pill (`REQUEST A DEMO`, pricing `Get Started` uses translucent variant): `bg-white text-black border-white/30`; pricing variant `bg-white/[0.06] text-foreground border-white/25 backdrop-blur-md`, hover `bg-white/[0.1]`.
- No disabled buttons observed (only `disabled:` utilities present for completeness).

---

## 3. TYPOGRAPHY

- **Display font**: `--font-display: "Google Sans", sans-serif` (class `font-display`) — used for H1, H2, big stats (99.7%, 28,491). Fallback: system sans.
- **Body**: system stack `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (`font-sans`, antialiased).
- **Mono**: `"SFMono-Regular", Consolas, "Liberation Mono", monospace` (`font-mono`) — all micro-labels, stats captions, pipeline messages, Gantt dates.
- **Serif**: only for quote pseudo-marks (`font-serif` on `before/after`).
- Weights: Light 300 / Normal 400 / Medium 500 / Semibold 600 / Extrabold 800. Body 400, nav 400, H1/H2 display 400–500 visually tight, prices 800, mono labels 400–500.
- Sizes:
  - H1: `clamp(2rem, 9vw, 2.5rem)` mobile → `clamp(2rem, 4.6vw, 4.5rem)` ≥sm, leading 0.96→0.92, tracking-tight (-0.025em), centered, balanced.
  - H2: `37px` mobile → `48px` ≥lg, leading 0.95, tracking-tight. Two-line pattern: line 1 `text-foreground`, line 2 `text-muted-foreground` (CTA line 2 uses white→zinc gradient instead).
  - Section sub: `text-xl leading-relaxed text-muted-foreground` (hero sub smaller: `text-sm → base → lg`).
  - Card titles: `text-2xl → lg:text-3xl` medium; feature H3 `text-3xl → lg:text-4xl`.
  - Micro: `font-mono text-[8–10px] tracking-[0.06–0.13em] uppercase` for eyebrows/status; table `9px → lg:12px`.
- Transforms: CTAs uppercase (`GET STARTED`), labels uppercase (MON–SUN, RUNS TODAY, LIVE). Letter-spacing widest on mono labels.

---

## 4. LAYOUT

- **Max widths**: page `1400px`, nav/marquee/dividers `1344px` (`lg:w calc(100% - 3.5rem)`, `sm: calc(100% - 2rem)`), content padding `px-4 → sm:8 → lg:14 (56px)`, footer same.
- **Gutters**: `px-[15px]` on section containers, inner `mx-0 → lg:mx-5`.
- **Section spacing**: `pt-24 pb-16 → lg:pt-32 lg:pb-20` (features `pb-0`, how-it-works `py-24 → lg:py-32`, CTA `py-24 → lg:py-32`, inner CTA `py-20 → lg:py-28`).
- **Section header grid**: `grid items-end gap-8 lg:grid-cols-12` → title `lg:col-span-7`, sub `lg:col-span-5 lg:pb-4`.
- **Hero**: `min-h-screen flex flex-col justify-center items-start`, content `py-28 → sm:py-32 → lg:py-40`, max-w `22rem` mobile → none on sm, centered.
- **Feature/pipeline cards**: `rounded-lg/xl` (`8–14px` system: outer `14px`, inner `8px`), `p-[5px]` outer frame, header `h-11 / px-[18px] py-[11px]`, footer `h-[50px]`, gaps `gap-3/4/5/6/8/12`.
- **Pricing grid**: `grid gap-6 md:grid-cols-2 xl:grid-cols-4`, card min-height driven by longest (Team, 10 features).
- **Testimonials**: `grid gap-8 lg:grid-cols-2 lg:gap-12`, quote `min-h-32 md:min-h-28`, metrics `grid-cols-1 sm:grid-cols-2`.
- **Footer**: `grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8`, brand `col-span-2`, `py-16 → lg:py-20`, bottom bar `border-t white/10 py-8`.
- **Radius**: base `4px`, `md 2px`, `lg 4px`, `sm 0px`, `xl 8px`, `3xl 24px`, full pill everywhere for buttons/switch/pills; cards `8/14px`; avatars `rounded-xl` (testimonial) / `rounded-full` (inbox, CTA stack).
- **Fixed grid overlay**: 4 vertical 1px lines at container edges (`left-0/right-0/left-px/right-px → lg 20/28px`), `z-[51]`, pointer-events-none.

---

## 5. EFFECTS

- **Shadows**: subtle inset top light `inset 0 1px rgba(255,255,255,0.025–0.08)` + inset bottom dark `inset 0 -1px rgba(0,0,0,0.7)` on every framed card; pipeline `0 14px 50px rgba(0,0,0,0.45)`; avatar `shadow-sm black/15 + ring-1 foreground/10`; pricing CTA `inset 0 1px rgba(255,255,255,0.18), 0 8px 20px rgba(0,0,0,0.18)`.
- **Blur**: `backdrop-blur-md` on pricing CTAs; header has no blur (transparent). Blur tokens 8/12/24px available.
- **Masks**: marquee `mask: linear-gradient(to right, transparent, black 25%, black 75%, transparent)`; insights card `mask-image: linear-gradient(to bottom, black 84%, transparent)`.
- **Grain**: `.noise-overlay` utility exists (SVG feTurbulence, opacity 0.03) — subtle, not dominant.
- **Glow**: emerald/orange/rose status dots with soft outer glow; StarButton traveling radial dot; gradient bars with luminous `via-*400 to-*-200` ends.
- **Pseudo-elements**: divider crosses built from `before` (vertical) + `after` (horizontal) 1px gradients `rgba(226,232,240,0.65)`; pricing/testimonial top hairlines via absolute spans `from-slate-300/0 via-slate-200/90`.

---

## 6. ANIMATION & INTERACTION

> Durations/easings below are observed class/keyframe values, not guesses.

| Element | Initial | Hover | Active/Pressed | Focus | Transition |
|---|---|---|---|---|---|
| Nav link | `text-white/70` | `text-white`, underline `w-0 → w-full` | — (anchor jump) | focus-visible ring (global) | `transition-colors duration-300`, underline `transition-all duration-300` |
| StarButton (header/hero/CTA) | transparent, white text, traveling dot at `offset-distance 0%` | dot continues loop; text stays white | scale/opacity via `disabled:` only; no press style observed | `focus-visible ring-[3px]` | dot `star-btn calc(var(--duration)*1s) linear infinite` (`--duration: 3`); wrapper `transition-colors` |
| White pill (`REQUEST A DEMO`) | `bg-white text-black border-white/30` | `bg-white text-black` (same, slight brightness) | — | ring | `transition-all`, default 150ms |
| Pricing card CTA | `bg-white/[0.06] backdrop-blur-md` | `bg-white/[0.1]` | — | ring | `transition-all` |
| Footer/social link | `text-white/40` | `text-white`, arrow `opacity-0 -translate-x-1 → opacity-100 translate-x-0` | — | ring | `transition-colors` / arrow `transition-all` |
| Billing switch | `bg-zinc-500`, thumb left | thumb slight shift (native) | thumb slides `translate-x-0 → calc(100%-2px)`, track → `bg-emerald-500` | `ring-[3px]` | `transition-all`, thumb `transition-transform` |
| Logo marquee | 40 logos `grayscale invert opacity-75` | none (pointer-events-none) | none | none | `marquee 30s linear infinite` (reverse variant 25s exists in CSS) |
| Scroll reveal (H1/H2/subs/cards) | `opacity-0 translate-y-4/8/12` | n/a | n/a | n/a | `transition-all duration-700–1000 delay-150/200/300/500, ease default cubic-bezier(.4,0,.2,1)` |
| Feature carousel 01–03 | inactive `opacity-0 translate-y-4 pointer-events-none` / active `opacity-100 translate-y-0`, bottom brush progress | `group` hover available | slider `role=slider cursor-ew-resize` drag across 3 cols | `focus-visible:outline` | `transition-all duration-700` |
| Pipeline pulses | 3 SVG circles + status dot | continuous | — | — | `pulse 2s cubic-bezier(.4,0,.6,1) infinite`, staggered `0/0.35/0.7s`; budget scan `budget-meter-scan 5.6s ease-in-out infinite` |
| Hero/Canvas | static first paint, then particle drift | — | — | — | canvas rAF; CTA reveal `delay-200 duration-700` |
| CTA particles | 180 dots, `#e4e4e7`, rise 12, opacity 42, scale 8, horizon `#a1a1aa` 22% | — | — | — | continuous canvas |
| Char/line reveals | `clip-path inset(0 100% 0 0)` / `opacity-0 translateY(60%)` | — | — | — | `line-reveal .8s cubic-bezier(.77,0,.175,1)`, `char-in .4s cubic-bezier(.22,1,.36,1)` |
| Misc | `.hover-lift translateY(-4px) .4s cubic-bezier(.34,1.56,.64,1)`, `.letter-spin rotateY(360deg) .6s` | as listed | — | — | springy `(.34,1.56,.64,1)` |

- **No `active:` or plain `focus:` utilities** in bundle (0 hits); interaction is hover + focus-visible + disabled only.
- **Sticky/fixed**: header `fixed top-3 z-50`; grid lines `fixed z-[51]`; sidebar mocks `sticky top-0` inside feature/insights panels.
- **Scroll**: smooth anchor jumps; reveal on enter (IntersectionObserver logic in JS bundle, classes above are the visible contract); `overflow-x-hidden` on main.

---

## 7. RESPONSIVE

Observed breakpoints (Tailwind rem media queries): `390px` (custom `min-[390px]`), `40rem/640px (sm)`, `48rem/768px (md)`, `64rem/1024px (lg)`, `80rem/1280px (xl` via `xl:grid-cols-4`), `96rem/1536px`.

| Range | Layout changes |
|---|---|
| **Mobile (<640)** | H1 `9vw` clamp, max-w 22rem centered; CTAs stacked (`flex-col`, switches to row at 390px); marquee logos `h-8`; section headers stacked; pricing 1-col; testimonials 1-col, metrics 1-col; insights shows static image (`lg:hidden`), Gantt/sidebar hidden or compressed; footer 2-col; hamburger menu. |
| **Tablet (640–1023, md)** | Pricing `md:grid-cols-2`; footer `md:grid-cols-6`; testimonial quote `min-h-28`; marquee `md:h-10`; bottom footer bar row; nav still hamburger until md (`hidden md:flex`). |
| **Desktop (1024–1279, lg)** | Nav inline; H2 `48px`; sections `lg:grid-cols-12` with 7/5 split; how-it-works rows side-by-side; insights live dashboard (`hidden lg:flex`); hero `4.6vw` clamp; CTA `lg:py-28`; fixed grid lines offset 20/28px. |
| **Large (≥1280, xl)** | Pricing `xl:grid-cols-4` (only `xl:` usage); containers capped at 1344/1400px, extra space becomes black margin. |

No invented breakpoints — all above appear literally in class strings.

---

## 8. Interaction-state checklist (per prompt §12)

For every CTA/link/switch: initial / hover / focus-visible / disabled recorded in §6 table. Pressed (`active:`) has no dedicated style in the reference — click feedback is the native anchor/switch motion plus page jump. Transitions are 150–300ms for controls, 700–1000ms for reveals, linear 3s/5.6s/30s for loops. Easing: default `cubic-bezier(.4,0,.2,1)`, reveals occasionally `(.77,0,.175,1)` / `(.22,1,.36,1)`, hovers `(.34,1.56,.64,1)`. Transforms: underline scaleX, arrow slide, card lift -4px, reveal translateY 16–32px, marquee translateX -50%. Opacity: 0→1 reveals, 40→100 link brightening, 75% logos. Shadows: CTA inner-glow intensifies on hover; borders `white/10 → white brighter` only via bg change. Colors: white/70→white links, white/40→white footer, white/[0.06]→[0.1] pricing CTA.
