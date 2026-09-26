import { useContent } from "@/src/lib/content";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * Flexible-scheduling card: queued header, 7-day grid backdrop,
 * trigger rows with gradient duration bars, reliability footer.
 */
export function ScheduleCard() {
  const { SCHEDULE_ROWS } = useContent();
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] py-0 shadow-none">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0"
      />
      <div className="flex min-h-16 grid-cols-[1fr_auto] items-center gap-4 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="text-base font-medium text-white/90">Schedule</div>
          <span className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase">
            Next 7 days
          </span>
        </div>
        <span className="ml-auto rounded-full border border-white/[0.1] bg-white/[0.04] px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-white/45 uppercase">
          12 queued
        </span>
      </div>

      <div aria-hidden="true" className="h-px w-full shrink-0 bg-white/[0.08]" />

      <div className="relative p-5">
        <div
          aria-hidden="true"
          className="absolute inset-x-5 top-5 bottom-5 grid grid-cols-7"
        >
          {WEEKDAYS.map((day) => (
            <span
              key={day}
              className="border-l border-white/[0.055] first:border-l-0"
            />
          ))}
        </div>

        <div className="relative flex items-center justify-between font-mono text-[9px] tracking-[0.12em] text-white/30 uppercase">
          {WEEKDAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="relative mt-5 flex flex-col gap-4">
          {SCHEDULE_ROWS.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2"
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white/80">
                  {row.name}
                </p>
                <p className="mt-0.5 font-mono text-[9px] tracking-[0.08em] text-white/35">
                  {row.trigger}
                </p>
              </div>
              <span className="font-mono text-[9px] text-white/30">LIVE</span>
              <div className="relative col-span-2 h-2 overflow-hidden rounded-full bg-white/[0.045]">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 rounded-full"
                  style={{
                    left: `${row.left}%`,
                    width: `${row.width}%`,
                    background: row.bar,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3 font-mono text-[9px] tracking-[0.08em] text-white/35">
          <span>3 trigger types</span>
          <span>99.99% run reliability</span>
        </div>
      </div>
    </div>
  );
}
