import { Activity, Timer, type LucideIcon } from "lucide-react";
import type { Testimonial } from "@/src/lib/types";

const METRIC_ICONS: Record<string, LucideIcon> = {
  timer: Timer,
  activity: Activity,
};

/** Hairline edge with corner tick marks framing the story card. */
function StoryFrame() {
  const edges = [
    "top-0 left-0 h-px w-full -translate-y-1/2 -top-3",
    "bottom-0 left-0 h-px w-full translate-y-1/2 -bottom-3",
    "top-0 left-0 h-full w-px -translate-x-1/2 -left-3",
    "top-0 right-0 h-full w-px translate-x-1/2 -right-3",
  ];
  const ticks = [
    "-left-3 -top-3 -translate-x-1/2 -translate-y-1/2",
    "-right-3 -top-3 translate-x-1/2 -translate-y-1/2",
    "-left-3 -bottom-3 -translate-x-1/2 translate-y-1/2",
    "-right-3 -bottom-3 translate-x-1/2 translate-y-1/2",
  ];
  return (
    <>
      {edges.map((position, index) => (
        <div
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute ${position} ${
            index < 2
              ? "bg-[linear-gradient(to_right,transparent_0%,var(--color-border)_6.5%,var(--color-border)_93.5%,transparent_100%)]"
              : "bg-[linear-gradient(to_bottom,transparent_0%,var(--color-border)_6.5%,var(--color-border)_93.5%,transparent_100%)]"
          }`}
        />
      ))}
      {ticks.map((position) => (
        <div
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute z-10 size-3 ${position} [mask-image:radial-gradient(circle_at_center,black_15%,transparent_75%)] before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25`}
        />
      ))}
    </>
  );
}

/**
 * Customer story card: wordmark, quote, author, two metric cells.
 * Logos, portraits, and metric glyphs are original local equivalents.
 */
export function TestimonialCard({ story }: { story: Testimonial }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-card-border bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]">
      <section aria-label="Customer stories" className="mx-auto w-full max-w-none px-0 py-0 lg:py-0">
        <div className="relative mx-auto w-full max-w-none" style={{ touchAction: "pan-y" }}>
          <StoryFrame />
          <div className="testimonial-enter relative overflow-hidden rounded-[8px] border border-card-border bg-card bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
            <div className="flex flex-col items-center px-8 pt-12 pb-10 lg:px-12 lg:pt-16">
              <div aria-label={story.company} className="text-sm text-foreground">
                <span aria-hidden="true" className={story.wordmarkStyle}>
                  {story.company}
                </span>
              </div>
              <p className="mt-10 min-h-32 text-center text-lg text-balance text-foreground before:mr-1 before:font-serif before:content-['\201C'] after:ml-1 after:font-serif after:content-['\201D'] md:min-h-28">
                {story.quote}
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="aspect-square size-11 overflow-hidden rounded-xl border border-transparent bg-gradient-to-br from-white/[0.14] to-white/[0.03] shadow-sm shadow-black/15 ring-1 ring-foreground/10">
                  <span
                    aria-hidden="true"
                    className="flex size-full items-center justify-center text-sm font-semibold text-white/80"
                  >
                    {story.initials}
                  </span>
                </div>
                <div className="space-y-0.5 text-left">
                  <p className="text-sm font-medium text-foreground">
                    {story.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{story.role}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 border-t border-card-border sm:grid-cols-2">
              {story.metrics.map((metric, index) => {
                const Icon = METRIC_ICONS[metric.icon] ?? Activity;
                return (
                  <div
                    key={metric.label}
                    className={`flex flex-col items-center gap-3 px-6 py-8 text-center ${
                      index === 1 ? "border-t border-card-border sm:border-t-0 sm:border-l" : ""
                    }`}
                  >
                    <div aria-hidden="true" className="text-muted-foreground [&_svg]:size-5">
                      <Icon strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-balance text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
