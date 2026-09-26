
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** translate distance preset: 32px default (translate-y-8), 16px for copy. */
  offset?: "md" | "sm" | "none";
  /** stagger delay in ms — audit values: 150 / 200 / 300 / 500. */
  delay?: 0 | 150 | 200 | 300 | 500;
  /** transition length — audit: 1000ms headlines, 700ms copy/CTAs. */
  duration?: 700 | 1000;
  className?: string;
}

/**
 * IntersectionObserver reveal matching the reference contract:
 * initial opacity-0 + translate, 700–1000ms ease-out transition, fired once.
 */
export function Reveal({
  children,
  offset = "md",
  delay = 0,
  duration = 1000,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration === 700
      ? {
          transitionDuration: "var(--duration-reveal), var(--duration-reveal)",
        }
      : {}),
  };

  return (
    <div
      ref={ref}
      data-offset={offset}
      style={style}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
