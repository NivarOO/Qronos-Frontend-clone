# Component Map — Qronos Reconstruction

> All specs are observed values re-expressed for our own implementation. No proprietary code copied.
> Shared tokens: page `1400px`, content `1344px`, radius outer `14px` / inner `8px`, borders `white/6–12%` or `#37333b`, H2 `37px→48px`, sub `text-xl muted`.

---

## 1. Navbar (`Navbar`)
- Container: `fixed top-3 inset-x-0 z-50`, inner `max-w-[1344px] h-12 px-5 flex justify-between items-center`, top/bottom 1px `foreground/10` hairlines.
- Left: logo mark `h-7 w-auto` (+ wordmark).
- Center (≥md): 5 links `text-sm text-white/70 hover:text-white transition-colors duration-300`, underline span `absolute -bottom-1 h-px w-0 group-hover:w-full bg-white transition-all duration-300`. Targets: About→`#features`, Features→`#how-it-works`, Insights→`#insights`, Pricing→`#pricing`, Testimonials→`#customers`.
- Right: `StarButton` small (`h-8 px-4 text-xs rounded-3xl border-slate-200/50`) label `GET STARTED` + double-chevron; mobile: hamburger (`menu` icon, `md:hidden`, `text-white`).
- Responsive: hamburger <768px opens stacked panel with same 5 links + CTA; ≥768px inline.
- States: link hover brighten + underline grow; CTA traveling-dot loop continuous; focus-visible ring.

## 2. Hero (`Hero`)
- Layout: `min-h-screen flex flex-col justify-center items-center text-center`, content `max-w-[1400px] px-4 sm:px-8 lg:px-14 py-28 sm:py-32 lg:py-40`.
- H1: two blocks — `The schedule management` (solid white) / `system for autonomous agents` (gradient `white→zinc-300→zinc-500`). `font-display clamp(2rem,9vw,2.5rem) → sm:clamp(2rem,4.6vw,4.5rem)`, leading ~0.92–0.96, tracking-tight. Reveal `opacity-0 translate-y-8 duration-1000`.
- Sub: two lines, `text-sm sm:base lg:lg muted`, `delay-150 duration-700`.
- CTAs: row `flex-col min-[390px]:flex-row gap-3`, `StarButton` medium (`h-10 px-4 text-sm rounded-full`) + white pill `h-10 px-5 bg-white text-black border-white/30 rounded-full text-sm`.
- Background: black canvas (particle field) + right-to-left dark gradient + top-to-bottom vignette. Content `z-10`, canvas `absolute inset-0`.
- Marquee pinned `absolute bottom-12`.

## 3. LogoStrip (`LogoStrip`)
- Viewport: `max-w-[1344px] overflow-hidden mask linear-gradient(to right, transparent, black 25%, black 75%, transparent)`.
- Track: `flex w-max gap-[42px]`, `marquee 30s linear infinite` (translateX 0→-50%), content duplicated 4×.
- Logo: `h-8 md:h-10 grayscale brightness-0 invert opacity-75 pointer-events-none select-none`.
- 10 slots: Stripe/Vercel/BigQuery/Slack/Supabase/GitHub/HubSpot/Zapier/Snowflake/AWS-S3 positions (we will use original generic glyphs, not vendor art).

## 4. Divider (`SectionDivider`)
- Box: `relative h-10 max-w-[1344px] mx-auto`, band `absolute inset-x-0 top-1/2 h-10 -translate-y-1/2 border-y white/[0.12]` + hatch `repeating-linear-gradient(135deg, transparent 6px, white/6% 7px)`.
- Corners: 4 `size-3` plus-marks, each `before` vertical + `after` horizontal 1px gradient `rgba(226,232,240,0.65)`.
- Purely decorative, `aria-hidden`.

## 5. SectionHeader (`SectionHeader`)
- Grid: `grid items-end gap-8 lg:grid-cols-12`, title `lg:col-span-7`, sub `lg:col-span-5 lg:pb-4`.
- H2: `font-display 37px lg:48px leading-[0.95] tracking-tight`, span 1 `text-foreground`, span 2 `mt-1 lg:mt-3 text-muted-foreground` (CTA variant span 2 = white/zinc gradient).
- Sub: `text-xl leading-relaxed text-muted-foreground`.
- Reveal: H2 `translate-y-8 opacity-0 duration-1000`, sub `delay-200`.

## 6. FeatureSection (`FeatureSection` + `FeatureCard` + `GanttCard` + `PipelineStrip`)
- Section `#features`, `pt-24 lg:pt-32 pb-0`.
- Split panel: `grid md:grid-cols-2 rounded-xl border overflow-hidden` — left sticky sidebar mock (`sticky top-0 w-[18%]`, nav groups Inbox/My agents/Run history/Pulse/Workspace/Agents/Schedules/More + Favorites trio), right Gantt (`bg-[#101112]`, header AUG(5col)/SEP(2col) + dates 03/10/17/24/31/07/14, 6 rows with name + trigger + step chips + progress bar).
- Feature rows 01–03: number `font-mono text-sm muted`, title `text-3xl lg:4xl font-display`, body `max-w-md text-lg muted`, stat `text-5xl lg:6xl font-display` + caption `font-mono text-sm muted` (99.7% successful runs / 50+ trigger sources / 15m strict timeout). Carousel behavior with bottom 3-col slider + progress brush.
- PipelineStrip: `bg-[#080707] rounded-xl border-white/[0.12] shadow-2xl`, header `MULTI-AGENT PIPELINE · LIVE` + `state persisted`, SVG flow (Orchestrator → Router → 3 agents), footer message `Pipeline started…` + stats `RUNS TODAY 28,491 / SUCCESS 99.7% / BUDGET LEFT $12.40`.

## 7. PipelineDemo (`PipelineDemo`, reusable SVG)
- Frame: `max-w-[620px] rounded-[8px] border-white/[0.09] bg-145deg-#131315→#070708`, header `px-[18px] py-[11px] border-b white/6` with green dot + `font-mono 10px tracking-[0.1em] white/30` label + `white/18` meta (`3 agents · 0 errors`).
- Body: SVG nodes — trigger/shared-context/orchestrator/router/agent pills, fills `#141111/#1b0c0b/#111010`, strokes `white/12%`, accent pulses rose `#fb7185`, status green `#4ade80` / amber `#f59e0b`.
- Footer: message `font-mono 10px white/50` + stat row (`8px white/25` caption, `14px white/75` value).
- Animation: pulse dots staggered 0/0.35/0.7s, message cycles.

## 8. SchedulerDemo (`SchedulerDemo`)
- Frame same as PipelineDemo. Header: `Schedule / Next 7 days / 12 queued`.
- Week strip: 7-col grid lines `border-l white/[0.055]`, labels MON–SUN `font-mono 9px white/30`.
- Rows (3): name `text-xs white/80` + trigger `font-mono 9px white/35` (CRON 08:30 / WEBHOOK / ADAPTIVE) + `LIVE white/30` + bar `h-2 rounded-full bg-white/[0.045]` with gradient fill positioned by `left/width%`.
- Footer: `3 trigger types / 99.99% run reliability`, `font-mono 9px white/35`.

## 9. Guardrails (`Guardrails`)
- Text: title + `Use budget caps, logs, and timeouts…`.
- Card: 6 rows — icon + name (`Daily API budget`, `Run timeout`, `Sensitive tools`, `Failure retries`, `Concurrency limits`, `Tool access`) + desc + right control (toggle `Require approval` / `Monitor` / `Block` pills or switch). Traveling beam dot (`--duration:5`, `#FAFAFA`) along row edge.
- Typography: name `text-sm medium`, desc `text-xs muted`.

## 10. Inbox (`Inbox`)
- Title `Agent Inbox` `text-2xl lg:3xl`, sub `Review completed work…`.
- Rows (4): `grid [auto_1fr_auto] gap-3 rounded-lg px-3 py-3.5`, first `bg-white/[0.045]` rest transparent. Avatar `size-10 rounded-full` initials RA/SA/FA/OA tinted cyan/yellow/red/emerald (`bg-*/10 border-*/20 text-*/100`) + presence dot. Title `text-sm medium`, body `text-xs muted`, time `text-xs tabular-nums white/30` (8m/1h/4h/1d).

## 11. Insights (`InsightsDashboard`)
- Section `#insights`. Card: `rounded-xl border-[#37333b] bg-radial-white-top + #09090c`, bottom fade mask 84%.
- Mobile: static image cover; desktop (`hidden lg:flex`): sidebar + main.
- Header: `Agent insights ★(amber) •••(white/35)`, tabs Inbox/Insights/….
- Stats: `3,389 completed / 1,128 in progress / 729 in review` + budget `Live $6,840/$10,000, 68.4% allocated` with scan animation `5.6s ease-in-out infinite`.
- Bar chart: `Agent tasks per assignee`, y 0–180, 14 bars (AM/JT/RK/SL/MP/DN/KC/RB/EA/NW/CV/HF/IO/LG).
- Table: `Project | Tasks | Gemini | Codex | Claude`, 10 rows (Daily intelligence 239 … Revenue operations 38), `text-[9px] lg:xs`, row border `white/6`, agent icons `size-3 rounded-full`.
- Responsive: image <1024, live DOM ≥1024, `aspect-[1.05]`.

## 12. Pricing (`Pricing` + `PricingCard` + `BillingToggle`)
- Section `#pricing`, grid `mt-8 gap-6 md:grid-cols-2 xl:grid-cols-4`.
- Card: outer `rounded-[14px] border-[#37333b] bg-145deg p-[5px] shadow-insets`, inner header `rounded-[8px] border p-4` + top wash `h-48`. Name `text-sm medium muted`, price `text-3xl extrabold` + period `text-sm foreground/80` (`$0/mo`, `$19/mo`, `$15/seat/mo`, `Custom`), desc `text-xs muted`, CTA full-width `rounded-full border-white/25 bg-white/[0.06] backdrop-blur-md hover:bg-white/[0.1]`, features `ul gap-3 li text-sm muted` with `check-check size-4 foreground` icons.
- Tiers: Starter 6 feats / Basic 7 (+toggle Yearly + `Save 20%` pill) / Team 10 (+toggle) / Enterprise 10 + `Contact Sales`. Annual prices: Basic `$15.20`, Team `$12` (revealed when toggle on).
- Toggle: `h-[1.15rem] w-8 rounded-full border-transparent`, off `bg-zinc-500` on `bg-emerald-500`, thumb `size-4 white`, `translate-x-0 → calc(100%-2px)`, label `Yearly text-[10px] muted` + pill `text-[9px] border-white/10 bg-white/[0.04]`.
- No highlighted/popular card in reference — all four equal weight.

## 13. Testimonials (`Testimonials` + `TestimonialCard`)
- Section `#customers`, grid `mt-8 gap-8 lg:grid-cols-2 lg:gap-12`.
- Card: same double-frame as pricing. Body `flex flex-col items-center px-8 lg:px-12 pt-12 lg:pt-16 pb-10 text-center`: logo `h-6`, quote `mt-10 min-h-32 md:min-h-28 text-lg text-balance`, avatar `size-11 rounded-xl ring-1` + name `text-sm medium` + role `text-xs muted`.
- Metrics: `grid sm:grid-cols-2 border-t [#37333b]`, cell `px-6 py-8` with icon + `text-sm muted text-balance` (e.g. `80% of recurring intelligence automated`, `10× faster response`).
- Data: Meridian/Moustachia Balding (CTO) + Monolyth/Dani Raulisa (VP Eng).

## 14. CTA (`FinalCTA`)
- Section `py-24 lg:py-32`, particle canvas absolute (`180 particles #e4e4e7 rise 12 opacity 42 scale 8`, horizon `#a1a1aa` 22%, `opacity-60`).
- Stack: 5 overlapping avatars `-ml-2 size-9 rounded-full border-white/12 bg-black p-[5px]` (Gemini/Codex/Claude/Cursor/+), label `Teams building with Qronos`.
- H2 `Stop babysitting agents.` (solid) / `Let them own the work.` (white→zinc gradient), sub `max-w-2xl text-lg sm:xl muted`, buttons `mt-10 flex flex-wrap justify-center gap-3` (same two CTAs as hero).

## 15. Footer (`Footer`)
- `bg-black`, container `max-w-[1400px] px-[15px] lg:px-14`, `py-16 lg:py-20`.
- Grid `grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8`: brand `col-span-2` (logo `h-6`, blurb `text-sm white/50 max-w-xs`, socials Twitter/GitHub/LinkedIn `text-sm white/40 hover:white` + arrow `opacity-0 -translate-x-1 → visible`).
- Columns: heading `text-sm medium white mb-6`, links `text-sm white/40 hover:white space-y-4`; Careers has `Hiring` pill (`text-xs px-2 py-0.5 bg-white text-black rounded-full`).
- Bottom: `border-t white/10 py-8 flex-col md:flex-row`, `© 2026 Qronos` `text-sm white/30`, status `size-2 emerald-400 dot + All scheduler systems operational`.

## 16. Shared primitives
- `StarButton` (sizes sm `h-8 text-xs rounded-3xl` / md `h-10 text-sm rounded-full`, `--duration 3`, traveling radial dot, `border-slate-200/50`).
- `SectionDivider`, `Reveal` (IO → remove `opacity-0 translate-y-*`), `StatusPill` (`LIVE` mono 9px), `GradientBar`, `Avatar` (with fallback initials), `CheckItem`.
