# Asset Inventory — Qronos Reconstruction

> Rule: do NOT copy proprietary images, logos, or vendor brand art. Recreate equivalents with original SVG/CSS. Paths below are reference-only observations.

---

## 1. Fonts (no files to copy)
- Reference loads **no webfont files** (0 `@font-face`, no Google Fonts). It relies on:
  - Display: `"Google Sans", sans-serif` → falls back to system sans on most machines.
  - Body: `system-ui, -apple-system, "Segoe UI", sans-serif`.
  - Mono: `"SFMono-Regular", Consolas, monospace`.
- **Our plan**: use system stack + `Inter`-like fallback via `next/font` (e.g. `Inter` for body, `Space Grotesk` or system for display, `JetBrains Mono`/`ui-monospace` for mono) OR pure system to stay faithful and zero-weight. No font binaries committed; `font-display` token maps to our display stack.

## 2. Icons (Lucide-style, recreate with `lucide-react`)
| Reference | Our equivalent |
|---|---|
| `menu` (mobile) | `Menu` |
| `check-check size-4` (pricing) | `CheckCheck` |
| `arrow-up-right w-3` (socials) | `ArrowUpRight` |
| double-chevron `>>` (StarButton) | custom inline SVG chevrons (drawn, not copied) |
| avatar presence dots, status dots | CSS `rounded-full` spans |
| guardrail/inbox/testimonial metric glyphs | `Clock`, `Activity`, `Shield`, `Timer`, `Bell`, `Database` from Lucide |

## 3. Logos & brand
| Observed | Recreation |
|---|---|
| `/images/qronos-logo.png` (header `h-7`, footer `h-6`) + `/images/qronos-logo-square.png` (sidebar) | Original wordmark: draw simple geometric mark (concentric arc + node) + set "Qronos" in display font. Export as `public/images/qronos-logo.svg` + `qronos-mark.svg`. No tracing. |
| Testimonial logos `meridian.png`, `monolyth.png` (`h-6`) | Original text-based wordmarks ("MERIDIAN", "MONOLYTH") in spaced sans — do not replicate their artwork. |
| Agent avatars `gemini.png`, `codex.png`, `claude.png`, (+ `cursor.png` in CTA payload) `size-3` in table, `size-9` in CTA stack, 96×96 testimonial photos | Generic agent glyphs: colored initial discs (G/C/C/+) + abstract SVG faces for testimonials (pravatar-style initials, not copied photos). |
| Logo-marquee 10 vendor images (`stripe/vercel/bigquery/slack/supabase/github/hubspot/zapier/snowflake/aws-s3`, `h-8 md:h-10`) | **Do not use vendor logos.** Create 10 neutral placeholder chips (generic shapes + labels like "Acme", "Northwind") in same size/grayscale treatment, or abstract integration glyphs. Keeps layout + marquee behavior without trademark issues. |

## 4. Images & illustrations
- Hero: remote photoreal image (`hebbkx…` blob URL, `object-cover`, flipped `scaleX(-1)`) behind canvas — **do not hotlink**. Replace with pure canvas + CSS gradients (black base + radial glows). No photo needed.
- `about-schedule-mobile.png`, `tracking-dashboard-mobile.png` (preload-only, mobile fallbacks) — replace with responsive live DOM (same components, stacked), no raster needed.
- Testimonial portraits (`moustachia-balding.png`, `dani-raulisa.png` 96×96) — replace with initial-based avatars.

## 5. SVG / decorative (recreate in code)
- Pipeline diagrams (`#pipeline-flow`, `#qronos-agent-pipeline-silver`, `#qronos-orchestrator-silver`, arrow): rebuild as original React SVG — rounded rects (`fill #141111/#1b0c0b/#111010`, stroke `white/12%`), connecting paths, 3 pulse circles. Same semantics, new path geometry.
- Divider crosses + hairlines: CSS `before/after` (already spec'd).
- Fixed grid lines: 4 spans, no asset.
- Noise: inline SVG `feTurbulence` data-URI at 3% opacity (utility class).
- Budget scan beam, StarButton traveling dot, guardrail beam: CSS `offset-path` + radial-gradient dots — no assets.

## 6. Background textures
- All textures are CSS gradients (145° card, radial top-glow, hatch, vignettes). No image textures to reproduce. Implement as Tailwind arbitrary values + CSS vars.

## 7. New local asset list (to create in Phase 6)
- `public/images/qronos-logo.svg`, `qronos-mark.svg`
- `public/images/integrations/*.svg` ×10 (original abstract marks)
- `public/images/agents/*.svg` (G/C/C/+ discs) — or pure CSS, preferred
- `public/images/testimonials/meridian.svg`, `monolyth.svg` (text wordmarks)
- No raster photos, no vendor art, no remote hotlinks.

## 8. Legal note
All vendor names/marks observed in alt text are property of their owners. Our reconstruction uses generic stand-ins and must not ship Stripe/Vercel/Slack/etc. artwork or the reference's PNGs.
