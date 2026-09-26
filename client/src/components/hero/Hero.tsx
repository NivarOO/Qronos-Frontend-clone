
import { ChevronsRight } from "lucide-react";
import { HeroBackground } from "@/src/components/hero/HeroBackground";
import { LogoStrip } from "@/src/components/hero/LogoStrip";
import { Reveal } from "@/src/components/Reveal";
import { StarButton } from "@/src/components/StarButton";

/**
 * Hero: full-viewport centered statement over the particle field,
 * staggered entrance (title → sub → CTAs → marquee), marquee pinned low.
 */
export function Hero() {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-28 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <Reveal offset="md" delay={0}>
            <h1 className="hero-title max-w-[22rem] font-display text-balance text-white sm:max-w-none">
              <span className="block sm:whitespace-nowrap">
                The schedule management
              </span>
              <span className="text-gradient-headline block sm:whitespace-nowrap">
                system for autonomous agents
              </span>
            </h1>
          </Reveal>

          <Reveal offset="sm" delay={150} duration={700}>
            <p className="relative z-0 mb-8 max-w-[22rem] text-center text-sm leading-relaxed text-white sm:mb-10 sm:max-w-none sm:text-base lg:text-lg">
              <span className="block sm:whitespace-nowrap">
                Coordinate work across every system, trigger, and agent.
              </span>
              <span className="block sm:whitespace-nowrap">
                Durable context keeps every run informed and in control.
              </span>
            </p>
          </Reveal>

          <Reveal offset="sm" delay={200} duration={700}>
            <div className="flex w-full flex-col items-center justify-center gap-3 min-[390px]:flex-row">
              <StarButton size="md" onClick={() => scrollTo("#features")}>
                GET STARTED
                <ChevronsRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </StarButton>
              <button
                type="button"
                onClick={() => scrollTo("#pricing")}
                className="pill-button relative isolate inline-flex h-10 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white px-5 text-sm font-medium whitespace-nowrap text-black hover:bg-white hover:text-black"
              >
                REQUEST A DEMO
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal
        offset="sm"
        delay={500}
        duration={700}
        className="absolute right-0 bottom-12 left-0 z-10"
      >
        <LogoStrip />
      </Reveal>
    </section>
  );
}
