import { Bell, Check, Pause, Plus, Search, type LucideIcon } from "lucide-react";
import type { InboxMessage } from "@/src/lib/types";
import { useContent } from "@/src/lib/content";

const BADGE_ICONS: Record<string, LucideIcon> = {
  check: Check,
  bell: Bell,
  pause: Pause,
};

function MessageRow({ message }: { message: InboxMessage }) {
  const BadgeIcon = BADGE_ICONS[message.badgeIcon] ?? Check;
  return (
    <div
      className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-3 py-3.5 ${
        message.highlight ? "bg-white/[0.045]" : "bg-transparent"
      }`}
    >
      <div className="relative">
        <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
          <span
            className={`flex size-full items-center justify-center rounded-full border text-[11px] font-semibold ${message.tint}`}
          >
            {message.initials}
          </span>
        </span>
        <span className="absolute -right-0.5 -bottom-0.5">
          <span
            className={`flex size-4 items-center justify-center rounded-full text-black shadow-[0_0_0_2px_rgba(7,7,8,0.95)] ${message.badge}`}
          >
            <BadgeIcon size={10} strokeWidth={2.75} aria-hidden="true" />
          </span>
        </span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-white/85">
          {message.title}
        </p>
        <p className="mt-0.5 truncate text-xs text-white/40">{message.body}</p>
      </div>
      <time className="text-xs text-white/30 tabular-nums">{message.time}</time>
    </div>
  );
}

/**
 * Agent inbox card: header with actions, four alert rows with
 * tinted initial avatars and status badges.
 */
export function InboxCard() {
  const { INBOX_MESSAGES } = useContent();
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0"
      />
      <div className="overflow-hidden rounded-[10px]">
        <div className="flex min-h-16 items-center justify-between gap-4 px-5 py-4">
          <div className="text-base font-medium text-white/90">Inbox</div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Search inbox"
              className="rounded-md p-2 text-white/45 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              <Search size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="New message"
              className="rounded-md p-2 text-white/45 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div aria-hidden="true" className="h-px w-full shrink-0 bg-white/[0.08]" />

        <div className="flex flex-col gap-1 p-3">
          {INBOX_MESSAGES.map((message) => (
            <MessageRow key={message.initials} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
