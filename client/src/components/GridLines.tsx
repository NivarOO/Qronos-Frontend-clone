/**
 * Fixed vertical grid lines framing the page shell (hero-visible decor).
 * 1px white/15 lines with difference blending, offset wider on lg.
 */
export function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-1/2 z-[51] w-full max-w-[1400px] -translate-x-1/2"
    >
      <span className="absolute inset-y-0 left-0 w-px bg-white/15 mix-blend-difference lg:left-5" />
      <span className="absolute inset-y-0 right-0 w-px bg-white/15 mix-blend-difference lg:right-5" />
      <span className="absolute inset-y-0 left-px w-px bg-white/15 mix-blend-difference lg:left-7" />
      <span className="absolute inset-y-0 right-px w-px bg-white/15 mix-blend-difference lg:right-7" />
    </div>
  );
}
