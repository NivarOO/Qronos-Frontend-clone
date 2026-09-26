"use client";

import { ChevronsRight } from "lucide-react";
import { ParticleField } from "@/src/components/cta/ParticleField";
import { StarButton } from "@/src/components/StarButton";
import { FINAL_CTA } from "@/src/lib/data";

/**
 * Closing call-to-action: particle backdrop, overlapping agent avatars,
 * two-line headline (solid + headline gradient), supporting copy,
 * StarButton + white demo pill. Entrance is static on the reference;
 * only the canvas and button beam loop.
 */
export function FinalCta() {
  const scrollToPricing = () => {
    document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[calc(100%-2rem)] max-w-[1344px] -translate-x-1/2 overflow-hidden opacity-60 lg:w-[calc(100%-3.5rem)]"
      >
        <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
          <ParticleField />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="mx-0 px-0 py-20 text-center lg:mx-5 lg:px-6 lg:py-28">
          <div className="relative z-10 mx-auto max-w-3xl">
            <div
              aria-label="Teams building with Qronos"
              className="mb-5 flex justify-center"
            >
              {FINAL_CTA.avatars.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  className="-ml-2 size-9 rounded-full border border-white/12 bg-black p-[5px] first:ml-0"
                >
                  <span className="flex size-full items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-white">
                    {letter}
                  </span>
                </span>
              ))}
            </div>

            <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
              <span className="block text-foreground">
                {FINAL_CTA.title[0]}
              </span>
              <span className="text-gradient-headline mt-1 block lg:mt-2">
                {FINAL_CTA.title[1]}
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {FINAL_CTA.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <StarButton
                size="md"
                className="rounded-full border border-slate-200/50"
                onClick={() => {
                  document
                    .querySelector("#features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                GET STARTED
                <ChevronsRight size={14} strokeWidth={1.8} aria-hidden="true" />
              </StarButton>
              <a
                href="#pricing"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToPricing();
                }}
                className="pill-button relative isolate inline-flex h-10 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white px-5 text-sm font-medium whitespace-nowrap text-black hover:bg-white hover:text-black"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-950/0 via-neutral-500 to-neutral-950/0"
                />
                <span className="relative z-10">REQUEST A DEMO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
