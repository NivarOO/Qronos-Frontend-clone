import { SchedulerSidebar } from "@/src/components/features/SchedulerSidebar";
import { InsightsDashboard } from "@/src/components/insights/InsightsDashboard";
import { MobileSummary } from "@/src/components/insights/MobileSummary";
import { Reveal } from "@/src/components/Reveal";
import { SectionHeader } from "@/src/components/SectionHeader";
import { useContent } from "@/src/lib/content";

/**
 * #insights: real-time monitoring header plus the agent-insights
 * dashboard panel (sidebar + live dashboard on desktop,
 * compact summary on mobile).
 */
export function InsightsSection() {
  const { INSIGHTS_INTRO } = useContent();
  return (
    <section
      id="insights"
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 mb-8 lg:mx-5 lg:mb-12">
          <SectionHeader
            title={INSIGHTS_INTRO.title}
            description={INSIGHTS_INTRO.description}
          />
          <Reveal offset="none" delay={200} duration={1000}>
            <div
              className="features-panel-mask relative mt-8 aspect-[1.05] w-full overflow-hidden rounded-xl border border-card-border shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)] lg:aspect-video"
              style={{ background: "var(--gradient-insights-bg)" }}
            >
              <div className="h-full w-full lg:hidden">
                <MobileSummary />
              </div>
              <div className="hidden h-full w-full lg:flex">
                <SchedulerSidebar insightsTab />
                <div className="h-full w-[82%] p-[5px]">
                  <InsightsDashboard />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
