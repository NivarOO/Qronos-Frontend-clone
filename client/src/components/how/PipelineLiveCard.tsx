import { useContent } from "@/src/lib/content";

/**
 * Live multi-agent pipeline (silver/blue variant): trigger, shared
 * context, orchestrator hub with handoff pulses, three agent pills,
 * received-message strip, four run-stat readouts.
 * SVG geometry is an original recreation of the observed layout.
 */
function PipelineLiveDiagram() {
  return (
    <svg
      viewBox="0 0 600 160"
      role="img"
      aria-label="Orchestrator routing work to research, support, and finance agents"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="qronos-pipeline-silver" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e4e4e7" />
          <stop offset="1" stopColor="rgba(228,228,231,0.15)" />
        </linearGradient>
        <linearGradient id="qronos-orchestrator-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(138,180,255,0.9)" />
          <stop offset="1" stopColor="rgba(228,228,231,0.25)" />
        </linearGradient>
      </defs>

      <path d="M 150 35 C 230 35, 230 88, 306 88" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.1" />
      <path d="M 150 72 C 225 72, 225 88, 306 88" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.1" />
      <path d="M 411 88 C 445 88, 445 50, 470 50" fill="none" stroke="url(#qronos-pipeline-silver)" strokeWidth="1.1" opacity="0.7" />
      <path d="M 411 88 C 445 88, 445 88, 470 88" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.1" />
      <path d="M 411 88 C 445 88, 445 126, 470 126" fill="none" stroke="url(#qronos-pipeline-silver)" strokeWidth="1.1" opacity="0.7" />

      <g>
        <rect x="18" y="18" width="132" height="34" rx="5" fill="#141414" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
        <text x="30" y="32" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace" letterSpacing="1">TRIGGER</text>
        <text x="30" y="45" fontSize="11" fill="rgba(255,255,255,0.72)" fontFamily="system-ui">Daily brief</text>
      </g>
      <g>
        <rect x="18" y="60" width="132" height="44" rx="5" fill="#141414" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" />
        <text x="30" y="74" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace" letterSpacing="1">SHARED CONTEXT</text>
        <text x="30" y="87" fontSize="11" fill="rgba(255,255,255,0.72)" fontFamily="system-ui">Memory loaded</text>
        <text x="30" y="99" fontSize="8.5" fill="rgba(255,255,255,0.35)" fontFamily="monospace">tools + history</text>
      </g>

      <g>
        <rect x="306" y="53" width="105" height="70" rx="10" fill="#000" stroke="url(#qronos-orchestrator-ring)" strokeWidth="2" />
        <text x="358" y="78" textAnchor="middle" fontSize="9.5" fill="rgba(138,180,255,0.9)" fontFamily="system-ui" letterSpacing="1">ORCHESTRATOR</text>
        <text x="358" y="97" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="system-ui" fontWeight="500">Routing work</text>
        <circle cx="346" cy="113" r="2.8" fill="url(#qronos-pipeline-silver)" className="pipeline-pulse" />
        <circle cx="358" cy="113" r="2.8" fill="url(#qronos-pipeline-silver)" className="pipeline-pulse" style={{ animationDelay: "0.35s" }} />
        <circle cx="370" cy="113" r="2.8" fill="url(#qronos-pipeline-silver)" className="pipeline-pulse" style={{ animationDelay: "0.7s" }} />
        <text x="358" y="139" textAnchor="middle" fontSize="8.5" fill="rgba(138,180,255,0.8)" fontFamily="monospace">handoffs active</text>
      </g>

      {[
        { y: 35, label: "Research agent", dot: "#22c55e" },
        { y: 73, label: "Support agent", dot: "#f59e0b" },
        { y: 111, label: "Finance agent", dot: "#f59e0b" },
      ].map((agent) => (
        <g key={agent.label}>
          <rect x="470" y={agent.y} width="112" height="30" rx="7" fill="#111111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
          <text x="512" y={agent.y + 19} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.62)" fontFamily="system-ui">{agent.label}</text>
          <circle cx="570" cy={agent.y + 8} r="3" fill={agent.dot} opacity={agent.dot === "#22c55e" ? 0.95 : 1} />
        </g>
      ))}
    </svg>
  );
}

export function PipelineLiveCard() {
  const { PIPELINE_LIVE_STATS } = useContent();
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(19,19,21,0.98),rgba(7,7,8,0.98))] p-[5px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_76%,transparent_100%)]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-[18px] py-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] tracking-[0.1em] text-white/30">
            MULTI-AGENT PIPELINE · LIVE
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/[0.18]">
          3 agents · 0 errors
        </span>
      </div>

      <div className="px-[18px] pt-3">
        <PipelineLiveDiagram />
      </div>

      <div className="h-[52px] border-t border-white/[0.06] px-[18px] py-[9px]">
        <div className="flex h-full items-start gap-2">
          <span aria-hidden="true" className="shrink-0 font-mono text-[13px] leading-[1.5] text-[#8ab4ff]/80">
            ›
          </span>
          <div className="relative h-full flex-1 overflow-hidden">
            <div className="pipeline-message-loop absolute inset-0 font-mono text-[11px] leading-[1.55] text-white/[0.42]">
              Received: &quot;Prepare the daily operations brief...&quot;
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[22px] border-t border-white/[0.06] px-[18px] py-[10px]">
        {PIPELINE_LIVE_STATS.map((stat) => (
          <div key={stat.label} className={stat.align === "right" ? "ml-auto text-right" : undefined}>
            <div
              className={`mb-[3px] text-[9px] tracking-[0.09em] ${stat.align === "right" ? "text-white/[0.18]" : "text-white/20"}`}
            >
              {stat.label}
            </div>
            <div
              className={`font-mono ${stat.align === "right" ? "text-[10px] text-white/[0.42]" : "text-[16px] text-white/[0.72]"}`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
