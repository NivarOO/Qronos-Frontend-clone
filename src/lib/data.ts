/**
 * Section content lives here once sections are built.
 * Kept empty during the foundation phase so tokens are verified first.
 * See docs/component-map.md for the content contracts per section.
 */

export const NAV_LINKS = [
  { label: "About", href: "#features" },
  { label: "Features", href: "#how-it-works" },
  { label: "Insights", href: "#insights" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#customers" },
] as const;

export const FEATURES_INTRO = {
  title: ["Stateful execution.", "Qronos keeps agents in motion."] as [
    string,
    string,
  ],
  description:
    "Qronos is the stateful runtime for autonomous work\u2014preserving memory, tools, and context across every governed run.",
} as const;

export interface GanttMilestone {
  label: string;
  at: number;
  alert?: boolean;
}

export interface GanttRow {
  name: string;
  trigger: string;
  dot: string;
  left: number;
  width: number;
  milestones: GanttMilestone[];
  tail?: boolean;
}

export const GANTT_ROWS: GanttRow[] = [
  {
    name: "Daily intelligence",
    trigger: "Cron \u00b7 08:30",
    dot: "bg-cyan-400/75",
    left: 10,
    width: 47,
    milestones: [
      { label: "Research", at: 36 },
      { label: "Brief", at: 71, alert: true },
    ],
    tail: true,
  },
  {
    name: "Lead response",
    trigger: "Webhook",
    dot: "bg-emerald-400/70",
    left: 2,
    width: 55,
    milestones: [
      { label: "Enrich", at: 30 },
      { label: "Qualify", at: 65, alert: true },
    ],
  },
  {
    name: "Customer health",
    trigger: "Hourly",
    dot: "bg-amber-300/80",
    left: 22,
    width: 50,
    milestones: [
      { label: "Score", at: 28 },
      { label: "Review", at: 55 },
      { label: "Escalate", at: 82, alert: true },
    ],
  },
  {
    name: "Research agents",
    trigger: "Adaptive",
    dot: "bg-violet-400/80",
    left: 8,
    width: 44,
    milestones: [
      { label: "Gather", at: 35 },
      { label: "Synthesize", at: 70 },
    ],
  },
  {
    name: "Invoice follow-up",
    trigger: "Event-driven",
    dot: "bg-sky-400/75",
    left: 30,
    width: 52,
    milestones: [
      { label: "Review", at: 25 },
      { label: "Send", at: 60, alert: true },
    ],
  },
  {
    name: "Memory maintenance",
    trigger: "Agent-set",
    dot: "bg-rose-400/75",
    left: 15,
    width: 48,
    milestones: [
      { label: "Summarize", at: 40 },
      { label: "Persist", at: 75 },
    ],
  },
];

export const FEATURE_MINI_ROWS = [
  {
    icon: "timer",
    title: "Schedule on signal.",
    body: "Start work from a cron, webhook, or an agent-selected wake-up.",
  },
  {
    icon: "sparkles",
    title: "Resume with context.",
    body: "Restore memory, tools, and durable state on every new run.",
  },
  {
    icon: "shield",
    title: "Run with guardrails.",
    body: "Use budget caps, logs, and timeouts to govern every job.",
  },
] as const;

export interface FeatureSlide {
  index: string;
  title: string;
  body: string;
  stat: string;
  caption: string;
}

export const FEATURE_SLIDES: FeatureSlide[] = [
  {
    index: "01",
    title: "Stateful agent runs",
    body: "Schedule recurring agents with persistent memory, tool access, and context across separate execution runs.",
    stat: "99.7%",
    caption: "successful runs",
  },
  {
    index: "02",
    title: "Event-driven wakeups",
    body: "Wake agents instantly from webhooks, file uploads, or database changes without polling or brittle scripts.",
    stat: "50+",
    caption: "trigger sources",
  },
  {
    index: "03",
    title: "Adaptive scheduling",
    body: "Let agents assess their output, set the next wake-up time, and keep recurring work on track automatically.",
    stat: "15m",
    caption: "strict timeout",
  },
];

export const PIPELINE_STATS = [
  { label: "RUNS TODAY", value: "28,491", tone: "default" },
  { label: "SUCCESS", value: "99.7%", tone: "default" },
  { label: "BUDGET LEFT", value: "$12.40", tone: "warn" },
] as const;

export const HOW_INTRO = {
  title: ["Durable autonomy.", "Every run resumes in context."] as [
    string,
    string,
  ],
  description:
    "Qronos gives autonomous agents durable context, flexible execution, and controls built for production.",
} as const;

export interface ScheduleRow {
  name: string;
  trigger: string;
  bar: string;
  left: number;
  width: number;
}

export const SCHEDULE_ROWS: ScheduleRow[] = [
  {
    name: "Daily intelligence",
    trigger: "CRON \u00b7 08:30",
    bar: "var(--gradient-bar-cyan)",
    left: 8,
    width: 43,
  },
  {
    name: "Lead response",
    trigger: "WEBHOOK",
    bar: "var(--gradient-bar-emerald)",
    left: 30,
    width: 50,
  },
  {
    name: "Memory maintenance",
    trigger: "ADAPTIVE",
    bar: "var(--gradient-bar-violet)",
    left: 5,
    width: 38,
  },
];

export interface GuardrailRow {
  name: string;
  body: string;
}

export const GUARDRAIL_ROWS: GuardrailRow[] = [
  { name: "Daily API budget", body: "Prevent runaway model spend" },
  { name: "Run timeout", body: "Stop stalled agent jobs" },
  { name: "Sensitive tools", body: "Hold destructive actions" },
  { name: "Failure retries", body: "End repeated error loops" },
  { name: "Concurrency limits", body: "Prevent overlapping agent runs" },
  { name: "Tool access", body: "Restrict agents to approved tools" },
];

export const GUARDRAIL_OPTIONS = ["Monitor", "Require approval", "Block"] as const;

export interface InboxMessage {
  initials: string;
  tint: string;
  badge: string;
  badgeIcon: string;
  title: string;
  body: string;
  time: string;
  highlight?: boolean;
}

export const INBOX_MESSAGES: InboxMessage[] = [
  {
    initials: "RA",
    tint: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    badge: "bg-emerald-300",
    badgeIcon: "check",
    title: "Research brief ready",
    body: "Research agent completed the competitor scan",
    time: "8m",
    highlight: true,
  },
  {
    initials: "SA",
    tint: "border-yellow-300/20 bg-yellow-300/10 text-yellow-100",
    badge: "bg-yellow-300",
    badgeIcon: "bell",
    title: "Approval required",
    body: "Support agent wants to issue a refund",
    time: "1h",
  },
  {
    initials: "FA",
    tint: "border-red-300/20 bg-red-300/10 text-red-100",
    badge: "bg-red-400",
    badgeIcon: "pause",
    title: "Budget threshold reached",
    body: "Finance agent paused the nightly run",
    time: "4h",
  },
  {
    initials: "OA",
    tint: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
    badge: "bg-emerald-300",
    badgeIcon: "check",
    title: "Memory sync complete",
    body: "Ops agent saved context for its next wake-up",
    time: "1d",
  },
];

export const PIPELINE_LIVE_STATS: {
  label: string;
  value: string;
  align?: "right";
}[] = [
  { label: "RUNS TODAY", value: "1,247" },
  { label: "SUCCESS", value: "99.9%" },
  { label: "HANDOFFS", value: "342ms" },
  { label: "RUNTIME", value: "Qronos mesh", align: "right" },
];

export const INSIGHTS_INTRO = {
  title: ["Track agent insights", "in real time."] as [string, string],
  description:
    "Monitor every agent task as it progresses, with live status, activity, and the context your team needs to keep work moving.",
} as const;

export const INSIGHT_STATS = [
  { label: "Agent tasks completed", value: "3,389" },
  { label: "Agent tasks in progress", value: "1,128" },
  { label: "Agent tasks in review", value: "729" },
] as const;

export const BUDGET = {
  spent: "$6,840",
  total: "$10,000",
  percent: 68.4,
  caption: "68.4% allocated across active runs",
} as const;

export interface AssigneeDatum {
  initials: string;
  tint: string;
  total: number;
}

export const ASSIGNEES: AssigneeDatum[] = [
  { initials: "AM", tint: "bg-rose-400/70", total: 146 },
  { initials: "JT", tint: "bg-amber-300/70", total: 128 },
  { initials: "RK", tint: "bg-emerald-400/70", total: 116 },
  { initials: "SL", tint: "bg-sky-400/70", total: 112 },
  { initials: "MP", tint: "bg-violet-400/70", total: 98 },
  { initials: "DN", tint: "bg-cyan-400/70", total: 86 },
  { initials: "KC", tint: "bg-orange-400/70", total: 78 },
  { initials: "RB", tint: "bg-indigo-400/70", total: 66 },
  { initials: "EA", tint: "bg-teal-400/70", total: 58 },
  { initials: "NW", tint: "bg-fuchsia-400/70", total: 46 },
  { initials: "CV", tint: "bg-violet-400/70", total: 40 },
  { initials: "HF", tint: "bg-emerald-400/70", total: 32 },
  { initials: "IO", tint: "bg-orange-400/70", total: 24 },
  { initials: "LG", tint: "bg-sky-400/70", total: 15 },
];

export interface ProjectRow {
  project: string;
  tasks: number;
  agents: [number, number, number];
}

export const PROJECT_ROWS: ProjectRow[] = [
  { project: "Daily intelligence", tasks: 239, agents: [81, 76, 82] },
  { project: "Lead response", tasks: 181, agents: [25, 151, 5] },
  { project: "Customer health", tasks: 95, agents: [22, 44, 29] },
  { project: "Support queue", tasks: 88, agents: [0, 12, 76] },
  { project: "Research agents", tasks: 72, agents: [59, 13, 0] },
  { project: "Invoice follow-up", tasks: 51, agents: [0, 51, 0] },
  { project: "Memory maintenance", tasks: 50, agents: [3, 0, 47] },
  { project: "Outbound follow-up", tasks: 45, agents: [18, 21, 6] },
  { project: "Pipeline review", tasks: 43, agents: [12, 24, 7] },
  { project: "Revenue operations", tasks: 38, agents: [14, 8, 16] },
];

export const AGENT_COLUMNS = ["Gemini", "Codex", "Claude"] as const;

export const PRICING_INTRO = {
  title: ["Pricing that grows", "with your agents."] as [string, string],
  description:
    "Start small, then scale reliable autonomous work across every operation.",
} as const;

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  annualPrice?: string;
  period: string;
  description: string;
  cta: string;
  featured?: boolean;
  billingToggle?: { id: string; label: string };
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    period: "/ month",
    description: "For exploring dependable autonomous work.",
    cta: "Get Started",
    features: [
      "3 active agent jobs",
      "1,000 runs per month",
      "Durable run history",
      "One team member",
      "Standard wake-up rules",
      "Community support",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    price: "$19",
    annualPrice: "$15.20",
    period: "/ month",
    description: "For growing workflows and lightweight team operations.",
    cta: "Get Started",
    billingToggle: { id: "basic-annual-billing", label: "Bill Basic yearly" },
    features: [
      "All Starter features +",
      "10 active agent jobs",
      "10,000 runs per month",
      "Scheduled and webhook wake-ups",
      "Shared workspace",
      "Seven-day execution logs",
      "Email support",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "$15",
    annualPrice: "$12",
    period: "/ seat / month",
    description: "For teams putting recurring operations on autopilot.",
    cta: "Get Started",
    featured: true,
    billingToggle: { id: "team-annual-billing", label: "Bill Team yearly" },
    features: [
      "All Basic features +",
      "25 active agent jobs",
      "50,000 runs per month",
      "Shared workspaces and audit trails",
      "Priority support",
      "Custom scheduling rules",
      "Ten team members",
      "Full execution logs",
      "Budget caps and safeguards",
      "Private tool access",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For production systems with dedicated safeguards.",
    cta: "Contact Sales",
    features: [
      "All Team features +",
      "Unlimited active agent jobs",
      "Private deployment options",
      "Custom wake-up policies",
      "Dedicated support and SLA",
      "Single sign-on and role controls",
      "Unlimited execution history",
      "Advanced budget governance",
      "Dedicated runtime capacity",
      "Onboarding and solution design",
    ],
  },
];

export const TESTIMONIALS_INTRO = {
  title: ["Teams moving faster", "with autonomous work."] as [string, string],
  description:
    "See how operations teams turn recurring work into agent-led systems that stay responsive, governed, and in context.",
} as const;

export interface TestimonialMetric {
  icon: string;
  label: string;
}

export interface Testimonial {
  id: string;
  company: string;
  wordmarkStyle: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  metrics: [TestimonialMetric, TestimonialMetric];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "meridian-research",
    company: "Meridian",
    wordmarkStyle: "tracking-[0.28em] font-semibold",
    quote:
      "Qronos gave our research agents a dependable rhythm. Every brief starts with the context and tools from the run before it.",
    name: "Moustachia Balding",
    role: "CTO, Meridian Labs",
    initials: "MB",
    metrics: [
      { icon: "timer", label: "80% of recurring intelligence automated" },
      { icon: "activity", label: "One durable run history for every agent" },
    ],
  },
  {
    id: "monolyth-dev",
    company: "Monolyth",
    wordmarkStyle: "tracking-tight font-extrabold",
    quote:
      "We replaced brittle polling jobs with agents that wake on real signals, follow through, and stay inside the budget we set.",
    name: "Dani Raulisa",
    role: "VP Engineering, Monolyth Dev",
    initials: "DR",
    metrics: [
      { icon: "activity", label: "10× faster response to customer events" },
      { icon: "timer", label: "0 missed handoffs across active workflows" },
    ],
  },
];

export const FINAL_CTA = {
  title: ["Stop babysitting agents.", "Let them own the work."] as [
    string,
    string,
  ],
  description:
    "Turn every recurring task, signal, and handoff into reliable work that carries its context forward.",
  avatars: ["G", "C", "C", "C", "+"],
} as const;

export const FOOTER_BLURB =
  "AI agent scheduling with durable state. Automate recurring work across every tool, trigger, and run.";

export const FOOTER_SOCIALS = ["Twitter", "GitHub", "LinkedIn"] as const;

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string; badge?: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Scheduling patterns", href: "#features" },
      { label: "How scheduling works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Connected systems", href: "#integrations" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "Scheduler SDK", href: "#" },
      { label: "API Reference", href: "#developers" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#security" },
    ],
  },
];
