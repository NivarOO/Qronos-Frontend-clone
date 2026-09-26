import { AssigneeChart } from "@/src/components/insights/AssigneeChart";
import { ProjectsTable } from "@/src/components/insights/ProjectsTable";
import { StatsRow } from "@/src/components/insights/StatsRow";

/**
 * Desktop insights dashboard: header strip, stat trio + budget meter,
 * assignee chart beside the project workload table.
 */
export function InsightsDashboard() {
  return (
    <section
      aria-label="Agent insights dashboard"
      className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#101112] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
    >
      <header className="flex h-11 shrink-0 items-center gap-2 border-b border-white/[0.06] px-5 text-sm">
        <span className="font-medium text-white/90">Agent insights</span>
        <span aria-hidden="true" className="text-amber-300">
          ★
        </span>
        <span aria-hidden="true" className="text-white/35">
          •••
        </span>
      </header>
      <div className="grid min-h-0 flex-1 grid-rows-[auto_1fr] gap-3 p-3 lg:gap-4 lg:p-4">
        <StatsRow />
        <div className="grid min-h-0 grid-cols-[1fr_1.02fr] gap-3 lg:gap-4">
          <AssigneeChart />
          <ProjectsTable />
        </div>
      </div>
    </section>
  );
}
