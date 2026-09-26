import { useContent } from "@/src/lib/content";

/**
 * Stat trio + live daily-budget meter with traveling scan beam.
 */
export function StatsRow() {
  const { BUDGET, INSIGHT_STATS } = useContent();
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.25fr)] gap-3 lg:gap-4">
      {INSIGHT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="insights-gradient-border flex flex-col gap-0 rounded-lg bg-card py-0 text-card-foreground shadow-none"
        >
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-3 py-3 lg:px-4">
            <div className="text-[10px] font-normal text-white/45 lg:text-xs">
              {stat.label}
            </div>
          </div>
          <div className="px-3 pb-3 lg:px-4 lg:pb-4">
            <p className="text-xl font-light tracking-tight text-white lg:text-2xl">
              {stat.value}
            </p>
          </div>
        </div>
      ))}

      <div className="flex min-w-0 items-center border-l border-white/[0.07] pl-3 lg:pl-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] text-white/45 lg:text-xs">Daily budget</p>
            <span className="flex items-center gap-1 text-[9px] text-emerald-300/75">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-300" />
              Live
            </span>
          </div>
          <p className="mt-1 text-lg font-light tracking-tight text-white lg:text-xl">
            {BUDGET.spent}{" "}
            <span className="text-xs text-white/40">/ {BUDGET.total}</span>
          </p>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={BUDGET.percent}
            aria-label="Daily budget used"
            className="budget-scan relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.12]"
          >
            <div
              className="h-full w-full flex-1 bg-[linear-gradient(90deg,#575b61_0%,#d7dbe0_45%,#727780_100%)] shadow-[0_0_7px_rgba(255,255,255,0.25)] transition-all"
              style={{ transform: `translateX(-${100 - BUDGET.percent}%)` }}
            />
          </div>
          <p className="mt-1.5 text-[9px] text-white/40 lg:text-[10px]">
            {BUDGET.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
