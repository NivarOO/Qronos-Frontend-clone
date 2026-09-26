/**
 * Cross/plus corner mark used by SectionDivider (original recreation).
 * Exported for the navbar, which carries the same corner ticks.
 */
export function CornerMark({
  className = "",
  tone = "z-10",
}: {
  className?: string;
  tone?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute ${tone} size-3 ${className} before:absolute before:top-0 before:left-1/2 before:h-full before:w-px before:-translate-x-1/2 before:bg-[linear-gradient(to_bottom,transparent,rgba(226,232,240,0.65)_50%,transparent)] after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:-translate-y-1/2 after:bg-[linear-gradient(to_right,transparent,rgba(226,232,240,0.65)_50%,transparent)]`}
    />
  );
}

/**
 * Decorative band between major sections: hairline top/bottom rules,
 * diagonal hatch fill, 4 corner plus-marks. Purely presentational.
 */
export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-10 w-full max-w-[1344px] lg:w-[calc(100%-3.5rem)]"
    >
      <div className="absolute inset-x-0 top-1/2 h-10 -translate-y-1/2 border-y border-white/[0.12] bg-[repeating-linear-gradient(135deg,transparent_0,transparent_6px,rgba(255,255,255,0.06)_6px,rgba(255,255,255,0.06)_7px)]" />
      <CornerMark className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMark className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMark className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMark className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
    </div>
  );
}
