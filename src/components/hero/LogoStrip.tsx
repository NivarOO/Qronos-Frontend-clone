import {
  Box,
  Cloud,
  Command,
  Cpu,
  Database,
  Globe,
  Hexagon,
  Layers,
  Triangle,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Integration {
  icon: LucideIcon;
  label: string;
}

/**
 * Generic integration slots (original stand-ins — no vendor artwork).
 * 10 unique marks × 4 loops, 42px gap, 30s linear loop, edge-faded mask.
 */
const INTEGRATIONS: Integration[] = [
  { icon: Hexagon, label: "Acme" },
  { icon: Triangle, label: "Nimbus" },
  { icon: Box, label: "Hexlab" },
  { icon: Globe, label: "Quantia" },
  { icon: Database, label: "Drift" },
  { icon: Zap, label: "Parsec" },
  { icon: Layers, label: "Lumen" },
  { icon: Cpu, label: "Forge" },
  { icon: Cloud, label: "Ozone" },
  { icon: Command, label: "Kortex" },
];

const LOOPS = 4;

export function LogoStrip() {
  return (
    <div className="logo-marquee-mask mx-auto w-[calc(100%-2rem)] max-w-[1344px] overflow-hidden py-0 lg:w-[calc(100%-3.5rem)]">
      <div className="overflow-hidden">
        <div className="logo-track" aria-hidden="true">
            {Array.from({ length: LOOPS }).map((_, loop) =>
              INTEGRATIONS.map(({ icon: Icon, label }) => (
                <span
                  key={`${loop}-${label}`}
                  className="pointer-events-none flex h-8 shrink-0 items-center gap-2 opacity-75 text-white select-none md:h-10"
                >
                  <Icon
                    className="size-[18px] md:size-5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
                    {label}
                  </span>
                </span>
              ))
            )}
        </div>
      </div>
    </div>
  );
}
