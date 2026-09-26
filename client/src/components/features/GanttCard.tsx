import type { GanttRow } from "@/src/lib/types";
import { useContent } from "@/src/lib/content";

const MONTHS = ["AUG", "SEP"];
const DATES = ["03", "10", "17", "24", "31", "07", "14"];

/** Dashed vertical grid backdrop (original recreation). */
function GridBackdrop() {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 700 1000"
      className="pointer-events-none absolute inset-0 z-0 size-full"
    >
      {[0, 100, 200, 300, 400, 500, 600].map((x) => (
        <line
          key={x}
          x1={x}
          x2={x}
          y1={0}
          y2={1000}
          stroke="rgba(255,255,255,0.04)"
          strokeDasharray="3 4"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function ScheduleRow({ row }: { row: GanttRow }) {
  return (
    <div className="relative min-h-0 flex-1">
      <div
        className="absolute top-[13%] flex items-center gap-2"
        style={{ left: `${row.left}%` }}
      >
        <span className={`size-1.5 rounded-sm ${row.dot}`} aria-hidden="true" />
        <span className="text-[11px] font-medium tracking-[-0.01em] text-white/70">
          {row.name}
        </span>
        <span className="font-mono text-[8px] text-white/25">
          {row.trigger}
        </span>
      </div>
      <div
        className="absolute top-[40%] h-[24px] rounded-md border border-white/[0.09] bg-gradient-to-b from-white/[0.045] to-white/[0.018] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
        style={{ left: `${row.left}%`, width: `${row.width}%` }}
      >
        {row.tail && (
          <span
            aria-hidden="true"
            className="absolute inset-y-[-1px] right-[-1px] rounded-r-md border-y border-r border-dashed border-rose-300/30"
            style={{
              width: "20%",
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, rgba(244, 63, 94, 0.09) 28%, rgba(244, 63, 94, 0.09) 100%)",
            }}
          />
        )}
        {row.milestones.map((milestone) => (
          <span
            key={milestone.label}
            className="absolute inset-y-0"
            style={{ left: `${milestone.at}%` }}
          >
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-0 size-1 -translate-x-1/2 -translate-y-1/2 rotate-45 border ${
                milestone.alert
                  ? "border-rose-400/90 bg-rose-500/25 shadow-[0_0_5px_rgba(244,63,94,0.35)]"
                  : "border-white/35 bg-[#101112]"
              }`}
            />
            <span className="absolute top-[29px] left-0 hidden -translate-x-1/2 text-[8px] whitespace-nowrap text-white/25 min-[500px]:block">
              {milestone.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Gantt chart card: month/date header, 6 staggered schedule rows
 * with milestone diamonds over a dashed grid.
 */
export function GanttCard() {
  const { GANTT_ROWS } = useContent();
  return (
    <section
      aria-label="Busy agent schedule Gantt chart"
      className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[#101112] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]"
    >
      <GridBackdrop />
      <header className="relative z-10 h-[70px] shrink-0">
        <div className="absolute inset-x-0 top-0 grid h-8 grid-cols-7 items-end pb-1 text-[10px] font-medium tracking-[0.06em] text-white/30">
          <span className="col-span-5 pl-4">{MONTHS[0]}</span>
          <span className="col-span-2 pl-4">{MONTHS[1]}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 grid h-9 grid-cols-7 font-mono text-[9px] text-white/25">
          {DATES.map((date) => (
            <div key={date} className="flex items-center pl-4">
              {date}
            </div>
          ))}
        </div>
      </header>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        {GANTT_ROWS.map((row) => (
          <ScheduleRow key={row.name} row={row} />
        ))}
      </div>
    </section>
  );
}
