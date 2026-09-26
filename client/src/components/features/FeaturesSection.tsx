import { ShieldCheck, Sparkles, Timer, type LucideIcon } from "lucide-react";
import { GanttCard } from "@/src/components/features/GanttCard";
import { FeatureCarousel } from "@/src/components/features/FeatureCarousel";
import { SchedulerSidebar } from "@/src/components/features/SchedulerSidebar";
import { Reveal } from "@/src/components/Reveal";
import { SectionHeader } from "@/src/components/SectionHeader";
import { useContent } from "@/src/lib/content";

const MINI_ICONS: Record<string, LucideIcon> = {
  timer: Timer,
  sparkles: Sparkles,
  shield: ShieldCheck,
};

function MiniRows() {
  const { FEATURE_MINI_ROWS } = useContent();
  return (
    <div className="mx-0 mt-12 grid gap-8 md:grid-cols-3 lg:mx-5 lg:gap-12">
      {FEATURE_MINI_ROWS.map((row) => {
        const Icon = MINI_ICONS[row.icon] ?? Sparkles;
        return (
          <div
            key={row.title}
            className="max-w-sm text-base leading-relaxed text-muted-foreground"
          >
            <p className="flex items-center gap-2 font-medium text-foreground">
              <Icon
                size={16}
                strokeWidth={1.5}
                className="shrink-0"
                aria-hidden="true"
              />
              {row.title}
            </p>
            <p className="mt-2">{row.body}</p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * #features: intro header, scheduler overview panel
 * (sidebar + Gantt on desktop, compact Gantt on mobile),
 * capability trio, auto-advancing 01–03 showcase with pipeline visual.
 */
export function FeaturesSection() {
  const { FEATURES_INTRO } = useContent();
  return (
    <section id="features" className="relative overflow-hidden pt-24 pb-0 lg:pt-32">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <SectionHeader
            title={FEATURES_INTRO.title}
            description={FEATURES_INTRO.description}
          />

          <Reveal offset="md" duration={1000}>
            <div
              className="features-panel-mask relative mx-0 mt-8 aspect-[1.05] w-full overflow-hidden rounded-xl border border-card-border shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)] lg:mx-5 lg:aspect-video lg:w-[calc(100%-2.5rem)]"
              style={{ background: "var(--gradient-insights-bg)" }}
            >
              <div className="h-full w-full p-2 lg:hidden">
                <GanttCard />
              </div>
              <div className="hidden h-full w-full lg:flex">
                <SchedulerSidebar />
                <div className="h-full w-[82%] p-[5px]">
                  <GanttCard />
                </div>
              </div>
            </div>
          </Reveal>

          <MiniRows />
        </div>
      </div>

      <Reveal offset="md" duration={700} className="mt-12 lg:mt-16">
        <FeatureCarousel />
      </Reveal>
    </section>
  );
}
