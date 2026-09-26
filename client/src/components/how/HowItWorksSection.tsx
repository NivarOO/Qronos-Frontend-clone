import { GuardrailsCard } from "@/src/components/how/GuardrailsCard";
import { InboxCard } from "@/src/components/how/InboxCard";
import { PipelineLiveCard } from "@/src/components/how/PipelineLiveCard";
import { ScheduleCard } from "@/src/components/how/ScheduleCard";
import { ShowcaseArticle } from "@/src/components/how/ShowcaseArticle";
import { Reveal } from "@/src/components/Reveal";
import { SectionHeader } from "@/src/components/SectionHeader";
import { useContent } from "@/src/lib/content";

/**
 * #how-it-works: durable-autonomy header plus a 2×2 bordered showcase
 * panel — pipelines, scheduling, guardrails, inbox — each with a live
 * mock card, title, copy, and hover hairline.
 */
export function HowItWorksSection() {
  const { HOW_INTRO } = useContent();
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="mx-0 lg:mx-5">
          <SectionHeader
            title={HOW_INTRO.title}
            description={HOW_INTRO.description}
          />
        </div>

        <Reveal offset="md" delay={300} duration={1000}>
          <div
            className="mx-0 mt-8 grid overflow-hidden rounded-xl border border-white/[0.12] md:grid-cols-2 lg:mx-5"
            style={{ background: "var(--gradient-pipeline-bg)" }}
          >
            <ShowcaseArticle
              title="Multi-Agent Pipelines"
              body="Coordinate specialized agents with shared context, tools, and handoffs in one durable run."
              dividers="right-bottom"
              textPlacement="overlay-bottom"
            >
              <PipelineLiveCard />
            </ShowcaseArticle>

            <ShowcaseArticle
              title="Flexible scheduling"
              body="Start work on a cron, a webhook, a system event, or an agent-selected wake-up."
              dividers="bottom"
              textPlacement="flow-bottom"
            >
              <ScheduleCard />
            </ShowcaseArticle>

            <ShowcaseArticle
              title="Built-in guardrails"
              body="Budget caps and strict timeouts keep autonomous work focused, bounded, and safe."
              dividers="right"
              textPlacement="pulled-up"
            >
              <GuardrailsCard />
            </ShowcaseArticle>

            <ShowcaseArticle
              title="Agent Inbox"
              body="Review completed work, approval requests, and agent alerts in one focused queue."
              dividers="none"
              textPlacement="pulled-up"
            >
              <InboxCard />
            </ShowcaseArticle>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
