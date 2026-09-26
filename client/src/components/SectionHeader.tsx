import { Reveal } from "@/src/components/Reveal";

interface SectionHeaderProps {
  title: [string, string];
  description: string;
}

/**
 * Shared section heading: 12-col split (title 7 / copy 5),
 * 37px → 48px display title, xl muted sub. Reveal on scroll.
 */
export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="grid items-end gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Reveal offset="md" duration={1000}>
          <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
            <span className="block text-foreground">{title[0]}</span>
            <span className="mt-1 block text-muted-foreground lg:mt-3">
              {title[1]}
            </span>
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-5 lg:pb-4">
        <Reveal offset="sm" delay={200} duration={1000}>
          <p className="text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
