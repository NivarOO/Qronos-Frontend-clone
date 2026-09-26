import type { ReactNode } from "react";

interface ShowcaseArticleProps {
  title: string;
  body: string;
  /** divider edges: which hairline borders this cell carries. */
  dividers?: "right-bottom" | "bottom" | "right" | "none";
  /** text-block placement variant observed per article. */
  textPlacement?: "overlay-bottom" | "flow-bottom" | "pulled-up";
  children: ReactNode;
}

const DIVIDER_STYLES: Record<NonNullable<ShowcaseArticleProps["dividers"]>, string> = {
  "right-bottom": "border-b border-white/[0.12] md:border-r md:border-white/[0.12]",
  bottom: "border-b border-white/[0.12]",
  right: "md:border-r md:border-white/[0.12]",
  none: "",
};

const TEXT_STYLES: Record<NonNullable<ShowcaseArticleProps["textPlacement"]>, string> = {
  "overlay-bottom": "lg:mt-auto lg:-translate-y-5 lg:pt-8",
  "flow-bottom": "mt-auto -translate-y-5 pt-8",
  "pulled-up": "-mt-5",
};

/**
 * One showcase cell: demo visual centered in the flexible area,
 * title + copy below, gradient hairline that sweeps in on hover.
 */
export function ShowcaseArticle({
  title,
  body,
  dividers = "none",
  textPlacement = "pulled-up",
  children,
}: ShowcaseArticleProps) {
  return (
    <article
      className={`group relative flex min-h-[620px] flex-col overflow-hidden px-[15px] py-5 lg:p-10 ${DIVIDER_STYLES[dividers]}`}
    >
      <div className="flex flex-1 items-center">{children}</div>
      <div className={TEXT_STYLES[textPlacement]}>
        <h3 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-white/50">
          {body}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-slate-300/0 via-slate-200/90 to-slate-300/0 transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}
