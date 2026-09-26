
import { useState } from "react";
import { CheckCheck } from "lucide-react";
import { BillingToggle } from "@/src/components/pricing/BillingToggle";
import { StarButton } from "@/src/components/StarButton";
import type { PricingPlan } from "@/src/lib/types";

/**
 * Tier card: double-frame shell with top light wash, name + optional
 * billing toggle, price (swaps to annual when toggled), CTA, checklist.
 */
export function PricingCard({ plan }: { plan: PricingPlan }) {
  const [annual, setAnnual] = useState(false);
  const price = annual && plan.annualPrice ? plan.annualPrice : plan.price;

  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-card-border bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.7)]">
      <div className="relative mb-4 overflow-hidden rounded-[8px] border border-card-border bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{ background: "var(--gradient-card-top-wash)" }}
        />
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            {plan.name}
          </div>
          {plan.billingToggle && (
            <BillingToggle
              id={plan.billingToggle.id}
              label={plan.billingToggle.label}
              checked={annual}
              onChange={setAnnual}
            />
          )}
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-3 flex items-end gap-1">
            <span
              key={price}
              className="text-3xl font-extrabold tracking-tight tabular-nums"
            >
              {price}
            </span>
            {plan.period && (
              <span className="pb-1 text-sm text-foreground/80">
                {plan.period}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">{plan.description}</p>

        {plan.featured ? (
          <div className="mt-4 w-full">
            <StarButton
              size="md"
              className="w-full"
              onClick={() => {
                window.location.hash = "#";
              }}
            >
              {plan.cta}
            </StarButton>
          </div>
        ) : (
          <a
            href="#"
            className="mt-4 inline-flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-4 py-2 text-sm font-medium whitespace-nowrap text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all hover:bg-white/[0.1] hover:text-foreground focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
          >
            {plan.cta}
          </a>
        )}
      </div>

      <div className="flex flex-col gap-6 p-3">
        <ul className="flex flex-col gap-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCheck
                size={16}
                className="shrink-0 text-foreground"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
