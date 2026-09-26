import type { ButtonHTMLAttributes, ReactNode } from "react";

type StarButtonSize = "sm" | "md";

interface StarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: StarButtonSize;
  children: ReactNode;
}

const SIZE_STYLES: Record<StarButtonSize, string> = {
  // Header CTA: h-8, text-xs, fully rounded bar pill.
  sm: "h-8 px-4 text-xs rounded-3xl",
  // Hero / section CTA: h-10, text-sm, full pill.
  md: "h-10 px-4 py-2 text-sm rounded-full",
};

/**
 * Outline pill with a light beam traveling its border ring.
 * Beam: one revolution per --duration-star (3s), linear, infinite.
 * Reuses the audit's --star-* tokens; see src/styles/navbar-hero.css.
 */
export function StarButton({
  size = "md",
  children,
  className = "",
  ...rest
}: StarButtonProps) {
  return (
    <button
      type="button"
      className={`star-button ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-1 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}
