
interface BillingToggleProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * Yearly billing switch: zinc track off, emerald on,
 * sliding white thumb, Yearly label + Save 20% pill.
 */
export function BillingToggle({ id, label, checked, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        id={id}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-zinc-500"
      >
        <span
          data-state={checked ? "checked" : "unchecked"}
          className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        />
      </button>
      <label
        htmlFor={id}
        className="cursor-pointer text-[10px] font-medium text-muted-foreground"
      >
        Yearly
      </label>
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0 text-[9px] leading-4 font-medium text-muted-foreground transition-colors">
        Save 20%
      </span>
    </div>
  );
}
