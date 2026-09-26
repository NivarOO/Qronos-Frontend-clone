import { PIPELINE_STATS } from "@/src/lib/data";

const NODE_FILL = "#141111";
const NODE_STROKE = "rgba(255,255,255,0.12)";
const ROUTER_FILL = "#1b0c0b";
const OUTPUT_FILL = "#111010";

/**
 * Live pipeline mock: trigger / shared-state / orchestrator / router nodes
 * left, three agent pills right, curved handoffs with pulse dots.
 * Geometry is an original recreation of the observed layout.
 */
function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 640 170"
      role="img"
      aria-label="Multi-agent pipeline: orchestrator routing to research, support, and finance agents"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="qronos-pipeline-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(251,113,133,0.7)" />
          <stop offset="1" stopColor="rgba(251,113,133,0.1)" />
        </linearGradient>
      </defs>

      {/* connectors */}
      <path
        d="M 175 35 C 260 35, 260 85, 330 85"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.25"
      />
      <path
        d="M 175 70 C 250 70, 250 85, 330 85"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.25"
      />
      <path
        d="M 380 85 C 420 85, 420 50, 470 50"
        fill="none"
        stroke="url(#qronos-pipeline-flow)"
        strokeWidth="1.25"
      />
      <path
        d="M 380 85 C 420 85, 420 85, 470 85"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.25"
      />
      <path
        d="M 380 85 C 420 85, 420 122, 470 122"
        fill="none"
        stroke="url(#qronos-pipeline-flow)"
        strokeWidth="1.25"
      />

      {/* left nodes */}
      <g>
        <rect x="20" y="18" width="155" height="34" fill={NODE_FILL} stroke={NODE_STROKE} strokeWidth="0.8" rx="4" />
        <text x="32" y="32" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace" letterSpacing="1">TRIGGER</text>
        <text x="32" y="45" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="system-ui">Daily brief</text>
      </g>
      <g>
        <rect x="20" y="58" width="155" height="34" fill={NODE_FILL} stroke={NODE_STROKE} strokeWidth="0.8" rx="4" />
        <text x="32" y="72" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace" letterSpacing="1">SHARED STATE</text>
        <text x="32" y="85" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="system-ui">Context restored</text>
      </g>
      <g>
        <rect x="20" y="98" width="155" height="34" fill={ROUTER_FILL} stroke="rgba(251,113,133,0.45)" strokeWidth="0.8" rx="4" />
        <text x="32" y="112" fontSize="9" fill="rgba(251,113,133,0.8)" fontFamily="monospace" letterSpacing="1">ORCHESTRATOR</text>
        <text x="32" y="125" fontSize="11" fill="rgba(255,255,255,0.75)" fontFamily="system-ui">New request</text>
      </g>

      {/* router hub */}
      <g>
        <rect x="330" y="62" width="50" height="46" fill={ROUTER_FILL} stroke={NODE_STROKE} strokeWidth="0.8" rx="6" />
        <text x="355" y="80" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.55)" fontFamily="monospace">ROUTER</text>
        <circle cx="348" cy="96" r="2.7" fill="#fb7185" className="pipeline-pulse" />
        <circle cx="362" cy="96" r="2.7" fill="#fb7185" className="pipeline-pulse" style={{ animationDelay: "0.35s" }} />
        <circle cx="376" cy="96" r="2.7" fill="#fb7185" className="pipeline-pulse" style={{ animationDelay: "0.7s" }} />
        <text x="410" y="122" textAnchor="middle" fontSize="8.5" fill="rgba(251,113,133,0.62)" fontFamily="monospace">handoffs active</text>
      </g>

      {/* agent outputs */}
      {[
        { y: 35, label: "Research agent", dot: "#4ade80" },
        { y: 73, label: "Support agent", dot: "#f59e0b" },
        { y: 111, label: "Finance agent", dot: "#fb7185" },
      ].map((agent) => (
        <g key={agent.label}>
          <rect x="470" y={agent.y} width="150" height="32" fill={OUTPUT_FILL} stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" rx="4" />
          <text x="545" y={agent.y + 20} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="system-ui">{agent.label}</text>
          <circle cx={470 + 138} cy={agent.y + 9} r="3" fill={agent.dot} className="pipeline-status-dot" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Pipeline strip card: live header, SVG flow, message + run stats footer.
 */
export function PipelineCard() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/[0.12] bg-[#080707] font-sans shadow-[0_14px_50px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="pipeline-status-dot h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span className="font-mono text-[9px] tracking-[0.13em] text-white/40">
            MULTI-AGENT PIPELINE · LIVE
          </span>
        </div>
        <span className="font-mono text-[9px] text-white/25">
          state persisted
        </span>
      </div>

      <div className="px-4 pt-3">
        <PipelineDiagram />
      </div>

      <div className="flex h-[50px] items-start gap-2 overflow-hidden border-t border-white/[0.08] px-4 py-2.5">
        <span aria-hidden="true" className="font-mono text-sm leading-none text-orange-400/70">
          ›
        </span>
        <p className="pipeline-message font-mono text-[10px] leading-relaxed text-white/50">
          Pipeline started · research agent assigned
        </p>
      </div>

      <div className="flex items-center gap-5 border-t border-white/[0.08] px-4 py-2.5 font-mono">
        {PIPELINE_STATS.map((stat) => (
          <div key={stat.label}>
            <span className="block text-[8px] tracking-[0.1em] text-white/25">
              {stat.label}
            </span>
            <span
              className={`text-sm ${stat.tone === "warn" ? "text-orange-300/85" : "text-white/75"}`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
