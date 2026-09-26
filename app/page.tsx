import { GridLines } from "@/src/components/GridLines";
import { Hero } from "@/src/components/hero/Hero";
import { HowItWorksSection } from "@/src/components/how/HowItWorksSection";
import { InsightsSection } from "@/src/components/insights/InsightsSection";
import { PricingSection } from "@/src/components/pricing/PricingSection";
import { FinalCta } from "@/src/components/cta/FinalCta";
import { Footer } from "@/src/components/Footer";
import { TestimonialsSection } from "@/src/components/testimonials/TestimonialsSection";
import { Navbar } from "@/src/components/Navbar";
import { SectionDivider } from "@/src/components/SectionDivider";
import { FeaturesSection } from "@/src/components/features/FeaturesSection";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <GridLines />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <InsightsSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <FinalCta />
      <SectionDivider />
      <Footer />
    </main>
  );
}
