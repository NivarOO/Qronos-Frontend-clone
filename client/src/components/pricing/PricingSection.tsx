import { PricingCard } from "@/src/components/pricing/PricingCard";
import { useContent } from "@/src/lib/content";

/**
 * #pricing: static header (no entrance animation observed on the
 * reference) plus the 1 → 2 → 4 tier grid. Billing toggles swap
 * Basic/Team prices to their annual equivalents.
 */
export function PricingSection() {
  const { PRICING_INTRO, PRICING_PLANS } = useContent();
  return (
    <section
      id="pricing"
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">
                  {PRICING_INTRO.title[0]}
                </span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">
                  {PRICING_INTRO.title[1]}
                </span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-4">
              {PRICING_INTRO.description}
            </p>
          </div>

          <section className="py-0 md:py-0">
            <div className="mx-auto max-w-none px-0">
              <div className="mt-8 grid gap-6 md:mt-8 md:grid-cols-2 xl:grid-cols-4">
                {PRICING_PLANS.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
