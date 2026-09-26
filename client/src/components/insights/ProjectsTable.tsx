import { MessageSquareText } from "lucide-react";
import { useContent } from "@/src/lib/content";

/**
 * Project × agent workload table with agent column headers.
 * Agent glyphs are original initial discs (no vendor artwork).
 */
export function ProjectsTable() {
  const { AGENT_COLUMNS, PROJECT_ROWS } = useContent();
  return (
    <div className="insights-gradient-border flex min-h-0 flex-col gap-0 overflow-hidden rounded-lg bg-card py-0 text-card-foreground shadow-none">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 border-b border-white/[0.06] px-4 py-4 lg:px-5">
        <div className="text-xs font-normal text-white/55 lg:text-sm">
          Projects agents are working on
        </div>
      </div>
      <div className="min-h-0 overflow-hidden px-0 pb-0">
        <div className="relative w-full overflow-x-auto">
          <table className="w-full table-fixed caption-bottom text-[9px] lg:text-xs">
            <colgroup>
              <col className="w-[38%]" />
              <col className="w-[14%]" />
              <col className="w-[16%]" />
              <col className="w-[16%]" />
              <col className="w-[16%]" />
            </colgroup>
            <thead className="text-white/40 [&_tr]:border-b">
              <tr className="border-b border-white/[0.06] transition-colors">
                <th className="h-7 px-4 text-left align-middle font-normal whitespace-nowrap text-foreground lg:px-5">
                  Project
                </th>
                <th className="h-7 border-l border-white/[0.06] px-2 text-left align-middle font-normal whitespace-nowrap text-foreground">
                  Tasks
                </th>
                {AGENT_COLUMNS.map((agent) => (
                  <th
                    key={agent}
                    className="h-7 border-l border-white/[0.06] px-2 text-left align-middle font-normal whitespace-nowrap text-foreground"
                  >
                    <span className="flex items-center gap-1">
                      <span
                        aria-hidden="true"
                        className="flex size-3 items-center justify-center rounded-full bg-white/[0.08] text-[7px] font-semibold text-white/70"
                      >
                        {agent.charAt(0)}
                      </span>
                      {agent}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {PROJECT_ROWS.map((row) => (
                <tr
                  key={row.project}
                  className="border-b border-white/[0.06] transition-colors hover:bg-white/[0.025]"
                >
                  <td className="h-7 max-w-0 truncate px-4 align-middle whitespace-nowrap text-white/75 lg:h-8 lg:px-5">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <MessageSquareText
                        size={11}
                        strokeWidth={1.5}
                        className="shrink-0 text-white/45"
                        aria-hidden="true"
                      />
                      <span className="truncate">{row.project}</span>
                    </span>
                  </td>
                  <td className="border-l border-white/[0.06] p-2 align-middle whitespace-nowrap text-white/75">
                    {row.tasks}
                  </td>
                  {row.agents.map((count, index) => (
                    <td
                      key={`${row.project}-${AGENT_COLUMNS[index]}`}
                      className="border-l border-white/[0.06] p-2 align-middle whitespace-nowrap text-white/75"
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
