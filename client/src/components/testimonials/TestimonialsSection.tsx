import { TestimonialCard } from "@/src/components/testimonials/TestimonialCard";
import { useContent } from "@/src/lib/content";

/**
 * #customers: static header (no entrance animation observed on the
 * reference) plus the two-up customer story grid.
 */
export function TestimonialsSection() {
  const { TESTIMONIALS, TESTIMONIALS_INTRO } = useContent();
  return (
    <section
      id="customers"
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-14">
        <div className="relative mx-0 lg:mx-5">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[37px] leading-[0.95] tracking-tight lg:text-[48px]">
                <span className="block text-foreground">
                  {TESTIMONIALS_INTRO.title[0]}
                </span>
                <span className="mt-1 block text-muted-foreground lg:mt-3">
                  {TESTIMONIALS_INTRO.title[1]}
                </span>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-4">
              {TESTIMONIALS_INTRO.description}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {TESTIMONIALS.map((story) => (
              <TestimonialCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
