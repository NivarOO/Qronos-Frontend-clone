import { useContent } from "@/src/lib/content";

const SCALE_MAX = 180;
const TICKS = [180, 160, 140, 120, 100, 80, 60, 40, 20, 0];

function segments(total: number): [number, number, number] {
  // Observed split across the stack: slate ~26%, indigo ~57%, amber ~17%.
  return [total * 0.26, total * 0.57, total * 0.17];
}

/**
 * Stacked per-assignee volume chart with dashed scale lines.
 * Totals descend left → right as observed; segment ratios match the
 * reference stack (slate / indigo / amber).
 */
export function AssigneeChart() {
  const { ASSIGNEES } = useContent();
  return (
    <div className="insights-gradient-border flex min-h-0 flex-col gap-0 rounded-lg bg-card py-0 text-card-foreground shadow-none">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-4 py-4 lg:px-5">
        <div className="text-xs font-normal text-white/55 lg:text-sm">
          Agent tasks per assignee
        </div>
      </div>
      <div className="relative min-h-0 flex-1 px-4 pb-4 lg:px-5 lg:pb-5">
        <div className="absolute inset-x-4 top-3 bottom-12 flex flex-col justify-between lg:right-[1.875rem] lg:left-5 lg:top-4 lg:bottom-14">
          {TICKS.map((tick) => (
            <div
              key={tick}
              className="relative border-t border-dashed border-white/[0.09]"
            >
              <span className="absolute -top-2 -right-5 text-[8px] text-white/35 lg:text-[10px]">
                {tick}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-5 top-8 bottom-14 grid grid-cols-14 items-end justify-items-center gap-1.5 lg:right-[1.875rem] lg:left-5 lg:gap-2">
          {ASSIGNEES.map((assignee) => {
            const [top, mid, bot] = segments(assignee.total);
            return (
              <div
                key={assignee.initials}
                className="flex h-full w-1.5 flex-col justify-end lg:w-2"
              >
                <div
                  className="bg-slate-100/85"
                  style={{ height: `${(top / SCALE_MAX) * 100}%` }}
                />
                <div
                  className="bg-indigo-400/80"
                  style={{ height: `${(mid / SCALE_MAX) * 100}%` }}
                />
                <div
                  className="bg-amber-300/90"
                  style={{ height: `${(bot / SCALE_MAX) * 100}%` }}
                />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-x-5 bottom-2 grid grid-cols-14 justify-items-center gap-1.5 lg:right-[1.875rem] lg:left-5 lg:gap-2">
          {ASSIGNEES.map((assignee) => (
            <span
              key={assignee.initials}
              className="relative flex size-3.5 shrink-0 overflow-hidden rounded-full border border-white/20 lg:size-5"
            >
              <span
                className={`flex size-full items-center justify-center rounded-full text-[5px] font-medium text-white lg:text-[7px] ${assignee.tint}`}
              >
                {assignee.initials}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
