/**
 * TypeScript mirror of src/styles/tokens.css for JS-driven surfaces
 * (canvas particles, SVG fills, inline bar positions).
 * Values must stay in sync with tokens.css — import from here, never re-hardcode.
 */

export const colors = {
  background: "#000101",
  foreground: "#ecebe7",
  muted: "#040608",
  mutedForeground: "#757168",
  border: "#101215",
  accent: "#07090d",
  accentForeground: "#ecebe7",
  card: "#020204",
  cardForeground: "#ecebe7",
  cardBorder: "#37333b",
  input: "#07090c",
  ring: "#ecebe7",
  statusGreen: "#00c758",
  statusEmerald: "#00d294",
  statusOrange: "#ff8b1a",
  statusAmber: "#ffd236",
  statusRose: "#ff667f",
  statusSky: "#00bcfe",
  statusCyan: "#00d2ef",
  statusViolet: "#a685ff",
  particle: "#e4e4e7",
  particleHorizon: "#a1a1aa",
} as const;

export const layout = {
  maxPage: 1400,
  maxContent: 1344,
  headerHeight: 48,
} as const;

export const motion = {
  marqueeMs: 30_000,
  starMs: 3_000,
  budgetScanMs: 5_600,
  pulseMs: 2_000,
  revealMs: 700,
  revealSlowMs: 1000,
} as const;

export const gradients = {
  card: "linear-gradient(145deg, rgba(19,19,21,0.98), rgba(7,7,8,0.98))",
  headline: "linear-gradient(to bottom, #ffffff, #d4d4d8 50%, #71717b)",
  barCyan: "linear-gradient(to right, rgba(0,146,181,0.8), #00d2ef, #a2f4fd)",
  barEmerald:
    "linear-gradient(to right, rgba(0,151,103,0.8), #00d294, #a4f4cf)",
  barViolet:
    "linear-gradient(to right, rgba(127,34,254,0.8), #a685ff, #ddd6ff)",
} as const;
