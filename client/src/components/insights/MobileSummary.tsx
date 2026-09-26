import { useContent } from "@/src/lib/content";

/**
 * Compact mobile dashboard preview (original implementation —
 * no reference raster assets): header, stat trio, budget meter,
 * mini assignee volume strip, condensed project workload table.
 */
export function MobileSummary() {
  const { ASSIGNEES, BUDGET, INSIGHT_STATS, PROJECT_ROWS } = useContent();
  return (
    <div className="flex h-full flex-col gap-2.5 overflow-hidden p-4">
      <p className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-white/90">
        Agent insights
        <span aria-hidden="true" className="text-amber-300">
          ★
        </span>
        <span aria-hidden="true" className="text-white/35">
          •••
        </span>
      </p>

      <div className="grid shrink-0 grid-cols-3 gap-2">
        {INSIGHT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="insights-gradient-border rounded-lg bg-card px-2.5 py-2"
          >
            <p className="truncate text-[8px] text-white/45">{stat.label}</p>
            <p className="mt-0.5 text-base font-light tracking-tight text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="insights-gradient-border shrink-0 rounded-lg bg-card px-2.5 py-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[9px] text-white/45">Daily budget</p>
          <span className="flex items-center gap-1 text-[8px] text-emerald-300/75">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-300" />
            Live
          </span>
        </div>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={BUDGET.percent}
          aria-label="Daily budget used"
          className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.12]"
        >
          <div
            className="h-full bg-[linear-gradient(90deg,#575b61_0%,#d7dbe0_45%,#727780_100%)]"
            style={{ width: `${BUDGET.percent}%` }}
          />
        </div>
        <p className="mt-1 text-[8px] text-white/40">
          {BUDGET.spent} / {BUDGET.total} · {BUDGET.caption}
        </p>
      </div>

      <div className="insights-gradient-border flex min-h-0 flex-1 gap-2.5 overflow-hidden rounded-lg bg-card p-2.5">
        <div className="flex w-[38%] shrink-0 flex-col">
          <p className="text-[8px] text-white/45">Tasks / assignee</p>
          <div className="mt-1.5 grid min-h-0 flex-1 grid-cols-14 items-end gap-[3px]">
            {ASSIGNEES.map((assignee) => (
              <div
                key={assignee.initials}
                className="flex h-full w-full flex-col justify-end"
                title={`${assignee.initials}: ${assignee.total}`}
              >
                <div
                  className="bg-slate-100/85"
                  style={{ height: `${(assignee.total * 0.26) / 1.8}%` }}
                />
                <div
                  className="bg-indigo-400/80"
                  style={{ height: `${(assignee.total * 0.57) / 1.8}%` }}
                />
                <div
                  className="bg-amber-300/90"
                  style={{ height: `${(assignee.total * 0.17) / 1.8}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[8px] text-white/45">Top projects</p>
          <table className="mt-1.5 w-full table-fixed text-[8px]">
            <thead>
              <tr className="text-white/40">
                <th className="pb-1 text-left font-normal">Project</th>
                <th className="w-8 pb-1 text-right font-normal">Tasks</th>
                <th className="w-6 pb-1 text-right font-normal">G</th>
                <th className="w-6 pb-1 text-right font-normal">C</th>
                <th className="w-6 pb-1 text-right font-normal">C</th>
              </tr>
            </thead>
            <tbody>
              {PROJECT_ROWS.slice(0, 7).map((row) => (
                <tr
                  key={row.project}
                  className="border-t border-white/[0.06] text-white/75"
                >
                  <td className="max-w-0 truncate py-1 pr-1">{row.project}</td>
                  <td className="py-1 text-right tabular-nums">{row.tasks}</td>
                  {row.agents.map((count, index) => (
                    <td
                      key={index}
                      className="py-1 text-right text-white/50 tabular-nums"
                    >
                      {count}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
