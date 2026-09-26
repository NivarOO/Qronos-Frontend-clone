import { ChevronDown } from "lucide-react";
import { useContent } from "@/src/lib/content";

/** Disabled policy selector mock (observed as non-interactive). */
function PolicySelect() {
  return (
    <button
      type="button"
      disabled
      aria-label="Policy (preview only)"
      className="flex h-9 w-36 shrink-0 items-center justify-between gap-2 rounded-[5px] border border-foreground/30 bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span className="line-clamp-1" />
      <ChevronDown size={16} className="opacity-50" aria-hidden="true" />
    </button>
  );
}

/** Open policy menu mock anchored to the first row's control. */
function PolicyMenu() {
  const { GUARDRAIL_OPTIONS } = useContent();
  return (
    <div className="absolute top-[calc(100%+6px)] right-0 z-30 hidden w-36 rounded-[10px] border border-white/[0.14] bg-[#0b0b0d] p-2 shadow-[0_14px_50px_rgba(0,0,0,0.55)] md:block">
      <div className="rounded-lg border border-white/[0.14] bg-white/[0.05] px-2 py-1.5 text-[10px] font-medium text-white/90">
        Require approval
      </div>
      <div className="mt-2 space-y-1 border-t border-white/[0.08] pt-2 text-[9px]">
        {GUARDRAIL_OPTIONS.map((option) => {
          const selected = option === "Require approval";
          return (
            <div
              key={option}
              className={`flex items-center justify-between rounded px-1.5 py-1 ${
                selected ? "bg-white/[0.08] text-white/90" : "text-white/45"
              }`}
            >
              <span>{option}</span>
              {selected && (
                <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 text-emerald-300">
                  <circle cx="6" cy="6" r="5" fill="currentColor" />
                  <path
                    d="m3.5 6.1 1.6 1.6 3.5-3.4"
                    fill="none"
                    stroke="#07110c"
                    strokeWidth="1.45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Guardrails card: six policy rows with disabled selectors,
 * open-menu mock on the first row, light beam traveling the frame.
 */
export function GuardrailsCard() {
  const { GUARDRAIL_ROWS } = useContent();
  return (
    <div className="guardrail-frame relative w-full overflow-hidden rounded-[12px] border border-white/[0.18] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] shadow-[-18px_22px_36px_rgba(0,0,0,0.55)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[1.125rem] z-30 h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2px] z-[15] rounded-[12px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))]"
      />
      <div className="relative z-20 rounded-[10px] bg-[linear-gradient(145deg,rgba(19,19,21,1),rgba(7,7,8,1))] p-3">
        <div className="flex flex-col gap-5 px-3">
          {GUARDRAIL_ROWS.map((row, index) => (
            <div
              key={row.name}
              className={`flex-col justify-between gap-4 md:flex-row md:items-center ${
                index === 0 ? "relative flex" : "flex"
              } ${index >= 4 ? "hidden md:flex" : ""}`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {row.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {row.body}
                </span>
              </div>
              <PolicySelect />
              {index === 0 && <PolicyMenu />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
