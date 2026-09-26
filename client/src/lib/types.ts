/**
 * Shared content shapes. Values live in the API (server/src/seedData.js)
 * with a bundled fallback in ./fallback; components read them through
 * the content context (./content) so the UI works with or without a DB.
 */

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

export interface FeatureSlide {
  index: string;
  title: string;
  body: string;
  stat: string;
  caption: string;
}

export interface ScheduleRow {
  name: string;
  trigger: string;
  bar: string;
  left: number;
  width: number;
}

export interface GuardrailRow {
  name: string;
  body: string;
}

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

export interface AssigneeDatum {
  initials: string;
  tint: string;
  total: number;
}

export interface ProjectRow {
  project: string;
  tasks: number;
  agents: [number, number, number];
}

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

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string; badge?: string }[];
}

/** Full site content document served by GET /api/content. */
export interface SiteData {
  NAV_LINKS: { label: string; href: string }[];
  FEATURES_INTRO: { title: [string, string]; description: string };
  GANTT_ROWS: GanttRow[];
  FEATURE_MINI_ROWS: { icon: string; title: string; body: string }[];
  FEATURE_SLIDES: FeatureSlide[];
  PIPELINE_STATS: { label: string; value: string; tone: string }[];
  HOW_INTRO: { title: [string, string]; description: string };
  SCHEDULE_ROWS: ScheduleRow[];
  GUARDRAIL_ROWS: GuardrailRow[];
  GUARDRAIL_OPTIONS: string[];
  INBOX_MESSAGES: InboxMessage[];
  PIPELINE_LIVE_STATS: { label: string; value: string; align?: string }[];
  INSIGHTS_INTRO: { title: [string, string]; description: string };
  INSIGHT_STATS: { label: string; value: string }[];
  BUDGET: { spent: string; total: string; percent: number; caption: string };
  ASSIGNEES: AssigneeDatum[];
  PROJECT_ROWS: ProjectRow[];
  AGENT_COLUMNS: string[];
  PRICING_INTRO: { title: [string, string]; description: string };
  PRICING_PLANS: PricingPlan[];
  TESTIMONIALS_INTRO: { title: [string, string]; description: string };
  TESTIMONIALS: Testimonial[];
  FINAL_CTA: { title: [string, string]; description: string; avatars: string[] };
  FOOTER_BLURB: string;
  FOOTER_SOCIALS: string[];
  FOOTER_COLUMNS: FooterColumn[];
}
