# Design Tokens — usage & substitution notes

Source of truth: `src/styles/tokens.css` (CSS vars) + `src/lib/tokens.ts` (JS mirror).
Tailwind v4 mapping: `app/globals.css` (`@theme inline` → `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`, `font-display`, …).

## Font substitution (documented, per brief)
- Reference declares `--font-display: "Google Sans", sans-serif` but ships **zero** webfont files — it renders as system sans everywhere.
- `Google Sans` is proprietary and not legally distributable, so we map:
  - `--font-sans` → exact reference system stack (no substitution).
  - `--font-display` → `"Inter", system-ui, …` Inter is the closest freely-available geometric-humanist sans; tracked at `-0.025em` with tight display leading (`0.92–0.95`) to match the reference rhythm. If Inter is absent, it falls back to the identical system chain the reference renders.
  - `--font-mono` → exact reference stack (`SFMono-Regular, Consolas, …`).
- No font binaries are committed; no remote font requests are made.

## Rules
- Use tokens / mapped utilities only — never re-hardcode `#000101`, `#37333b`, `rgba(255 255 255 / …)`, `clamp(…)` display sizes, or `30s/3s/5.6s` timings in components.
- Translucency: `rgb(… / alpha)` + `color-mix` only; no flattened solids.
- Blur: `var(--blur-backdrop)` (12px) only on the pricing CTA surface, per audit.
- Borders: `var(--border-white-*)` / `var(--card-border)` at observed alpha; never solid replacements.
- Gradients: `var(--gradient-*)` only.
- Motion: `var(--duration-*)` + `var(--ease-*)`; honor `prefers-reduced-motion` (tokens zero-out loops).
