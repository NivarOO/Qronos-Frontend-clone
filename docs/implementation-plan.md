# Implementation Plan — Qronos Reconstruction (post-audit)

> No code written yet (per brief). This plan follows directly from `reference-audit.md`, `component-map.md`, `assets.md`.

---

## 1. Architecture
- **Next.js (App Router) + React + TypeScript**, `app/page.tsx` composes sections; no global state needed (local `useState` for menu, toggles, carousel).
- **Tailwind CSS v4** (CSS-first `@theme`) for all tokens; **CSS variables** for design tokens (`--background`, `--foreground`, `--muted-foreground`, `--border`, card gradients, StarButton `--duration/--light-*`).
- **Framer Motion**: only for scroll reveals + marquee if CSS alone proves insufficient; default to CSS (`transition-all`, `marquee`/`star-btn`/`pulse`/`budget-meter-scan` keyframes) + `IntersectionObserver` `Reveal` wrapper. Canvas particles via tiny custom hook (no lib).
- **Icons**: `lucide-react` only. No other runtime deps.

## 2. Token setup (`app/globals.css`)
- `:root`: background `#000101`, foreground `#ecebe7`, card `#020204`, muted `#040608`, muted-fg `#757168`, accent `#07090d`, border `#101215`, input `#07090c`, ring `#ecebe7`; font stacks (display/body/mono); radius `4px` base; easings; keyframes `marquee`, `star-btn`, `pulse`, `budget-meter-scan`, `line-reveal`, `char-in`.
- Utilities: `.font-display`, `.word-gradient` equivalent, `.noise-overlay`, `.hover-lift`, divider hatch, mask helpers.

## 3. File tree (small reusable components, no mega-file)
```
app/
  layout.tsx  page.tsx  globals.css
components/
  Navbar.tsx  Hero.tsx  LogoStrip.tsx  SectionDivider.tsx  SectionHeader.tsx
  StarButton.tsx  Reveal.tsx
  features/FeatureSection.tsx  GanttCard.tsx  PipelineStrip.tsx
  pipeline/PipelineDemo.tsx  SchedulerDemo.tsx  Guardrails.tsx  Inbox.tsx
  insights/InsightsDashboard.tsx
  pricing/Pricing.tsx  PricingCard.tsx  BillingToggle.tsx
  Testimonials.tsx  FinalCTA.tsx  Footer.tsx  ParticleField.tsx
lib/data.ts (nav, features, pipeline, schedule, guardrails, inbox, insights, pricing, testimonials)
public/images/ (original SVGs only — see assets.md)
docs/ (audit artifacts — done)
```

## 4. Build order
1. Scaffold Next+TS+Tailwind, tokens, layout, grid overlay, divider, header, footer shell.
2. Hero + canvas + StarButton + marquee (CSS loop, `prefers-reduced-motion` respected).
3. SectionHeader + FeatureSection (sidebar+Gantt+01–03 carousel with slider/drag).
4. Pipeline/Scheduler/Guardrails/Inbox demos (SVG + CSS animations).
5. Insights dashboard (responsive image→DOM swap at `lg`, table + bars from `lib/data`).
6. Pricing (grid + toggles with annual prices `$15.20/$12`) + Testimonials + FinalCTA + Footer.
7. Reveal-on-scroll pass, focus-visible audit, responsive QA at 390/640/768/1024/1280/1536, `prefers-reduced-motion` (disable marquee/pulses/particles).

## 5. Fidelity vs. restraint
- Match: spacing scale, type scale (37→48 H2, clamp H1), double-frame cards, mono micro-labels, gradient headlines, marquee timing (30s), StarButton (3s), budget scan (5.6s), hover/focus/disabled contracts in audit §6.
- Diverge deliberately: original brand/vendor artwork → our own marks; remote hero photo → canvas+gradients; portrait photos → initial avatars.

## 6. Acceptance (before calling it done)
- `npm run build` + `tsc` clean; no console errors; keyboard navigable (menu, switch, links); Lighthouse-responsive check at mobile/tablet/desktop widths; visual diff against audit section-by-section.
