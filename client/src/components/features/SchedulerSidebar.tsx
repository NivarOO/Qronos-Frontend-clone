import {
  Activity,
  Bot,
  CalendarDays,
  ChevronDown,
  Eye,
  FlaskConical,
  History,
  Inbox,
  LayoutDashboard,
  MoreHorizontal,
  Newspaper,
  Search,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  focus?: boolean;
}

/**
 * Workspace sidebar mock (desktop only): brand row, tool nav,
 * Workspace group with focused Schedules row, Favorites group.
 */
const TOOL_NAV: SidebarItem[] = [
  { icon: Inbox, label: "Inbox" },
  { icon: Bot, label: "My agents" },
  { icon: History, label: "Run history" },
  { icon: Activity, label: "Pulse" },
];

const WORKSPACE_NAV: SidebarItem[] = [
  { icon: Bot, label: "Agents" },
  { icon: CalendarDays, label: "Schedules", focus: true },
  { icon: MoreHorizontal, label: "More" },
];

const FAVORITES_NAV: SidebarItem[] = [
  { icon: Newspaper, label: "Daily briefing" },
  { icon: FlaskConical, label: "Research agents" },
  { icon: Eye, label: "Budget watch" },
];

function SidebarRow({ icon: Icon, label, focus = false }: SidebarItem) {
  if (focus) {
    return (
      <div className="-mx-2 flex items-center gap-2 rounded-md bg-white/[0.08] py-1 pr-2 pl-4 text-white">
        <Icon
          size={16}
          strokeWidth={1.5}
          className="shrink-0 text-white/55"
          aria-hidden="true"
        />
        <span className="truncate">{label}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <Icon
        size={16}
        strokeWidth={1.5}
        className="shrink-0 text-white/45"
        aria-hidden="true"
      />
      <span className="truncate">{label}</span>
    </div>
  );
}

export function SchedulerSidebar({
  insightsTab = false,
}: {
  insightsTab?: boolean;
}) {
  const toolNav: SidebarItem[] = insightsTab
    ? [
        { icon: Inbox, label: "Inbox" },
        { icon: LayoutDashboard, label: "Insights" },
        ...TOOL_NAV.slice(1),
      ]
    : TOOL_NAV;
  return (
    <aside
      aria-label="Agent scheduler sidebar preview"
      className="sticky top-0 h-full w-[18%] shrink-0 self-start overflow-hidden px-3 py-4 text-sm text-white/70 lg:px-5 lg:py-5"
    >
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 font-medium text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/qronos-logo.svg"
            alt=""
            aria-hidden="true"
            className="size-5 shrink-0 rounded-sm object-contain"
          />
          <span className="truncate text-sm">Qronos</span>
          <ChevronDown
            size={12}
            className="shrink-0 text-white/45"
            aria-hidden="true"
          />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Search
            size={16}
            strokeWidth={1.5}
            className="text-white/45"
            aria-hidden="true"
          />
          <SlidersHorizontal
            size={16}
            strokeWidth={1.5}
            className="text-white/45"
            aria-hidden="true"
          />
        </div>
      </div>

      <nav aria-label="Scheduler tools" className="space-y-1">
        {toolNav.map((item) => (
          <SidebarRow key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-7">
        <p className="mb-2 flex items-center gap-1 text-[10px] font-medium text-white/35">
          Workspace
          <ChevronDown size={10} aria-hidden="true" />
        </p>
        <nav aria-label="Workspace" className="space-y-1">
          {WORKSPACE_NAV.map((item) => (
            <SidebarRow key={item.label} {...item} />
          ))}
        </nav>
      </div>

      <div className="mt-7">
        <p className="mb-2 text-[10px] font-medium text-white/35">Favorites</p>
        <nav aria-label="Favorites" className="space-y-1">
          {FAVORITES_NAV.map((item) => (
            <SidebarRow key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
