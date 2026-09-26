
import { useCallback, useEffect, useRef, useState } from "react";
import { useContent } from "@/src/lib/content";
import { CarouselBackdrop } from "@/src/components/features/CarouselBackdrop";
import { PipelineCard } from "@/src/components/features/PipelineCard";

/**
 * Auto-advancing 01 → 02 → 03 panel.
 * Slide: cross-fade + rise (700ms); progress brush fills per slide;
 * pauses on hover/focus; segments are keyboard-operable.
 */
const SLIDE_MS = 6000;

export function FeatureCarousel() {
  const { FEATURE_SLIDES } = useContent();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((index: number) => {
    setActive(((index % FEATURE_SLIDES.length) + FEATURE_SLIDES.length) % FEATURE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => go(active + 1), SLIDE_MS);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [active, paused, go]);

  return (
    <div
      className="group relative flex min-h-[500px] overflow-hidden border-y border-foreground/10 bg-black transition-all duration-700"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* ambient backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        <CarouselBackdrop />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 bg-black p-8 lg:p-12">
        <div className="relative z-10 h-full">
          {FEATURE_SLIDES.map((slide, index) => {
            const isActive = index === active;
            return (
              <div
                key={slide.index}
                aria-hidden={!isActive}
                className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {slide.index}
                </span>
                <h3 className="mt-4 mb-6 font-display text-3xl transition-transform duration-500 lg:text-4xl">
                  {slide.title}
                </h3>
                <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                  {slide.body}
                </p>
                <div>
                  <span className="font-display text-5xl lg:text-6xl">
                    {slide.stat}
                  </span>
                  <span className="mt-2 block font-mono text-sm text-muted-foreground">
                    {slide.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* pipeline visual (desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-16 right-[10%] left-[46%] z-10 hidden items-center transition-all duration-700 lg:flex"
      >
        <PipelineCard />
      </div>

      {/* progress segments */}
      <div
        role="slider"
        aria-label="Feature showcase"
        aria-valuemin={1}
        aria-valuemax={FEATURE_SLIDES.length}
        aria-valuenow={active + 1}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(active + 1);
          if (event.key === "ArrowLeft") go(active - 1);
        }}
        className="absolute right-0 bottom-0 left-0 z-20 grid h-2 cursor-ew-resize touch-none grid-cols-3 bg-foreground/25 focus-visible:outline-white"
      >
        {FEATURE_SLIDES.map((slide, index) => (
          <button
            key={slide.index}
            type="button"
            tabIndex={-1}
            aria-label={`Show ${slide.title}`}
            onClick={() => go(index)}
            className="relative cursor-ew-resize overflow-hidden"
          >
            {index === active && (
              <span
                key={active}
                className="feature-progress-brush absolute inset-y-0 left-0 w-full origin-left"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
