import HeroSection from "@/components/HeroSection";
import HookSection from "@/components/HookSection";
import HookCtaSection from "@/components/HookCtaSection";
import TrainerSection from "@/components/TrainerSection";
import ProgramSection from "@/components/ProgramSection";
import FormatsSection from "@/components/FormatsSection";
import TrainingProcessSection from "@/components/TrainingProcessSection";
import ResultSection from "@/components/ResultSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PricingSection from "@/components/PricingSection";
import ReferralSection from "@/components/ReferralSection";
import ReviewsSection from "@/components/ReviewsSection";
import ReviewsCtaSection from "@/components/ReviewsCtaSection";
import ContactsSection from "@/components/ContactsSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import LampDivider from "@/components/LampDivider";
import { useSparkEffect } from "@/hooks/useSparkEffect";

const Index = () => {
  const { triggerSpark, SparkLayer } = useSparkEffect();

  return (
    <main className="bg-background min-h-screen" onClick={triggerSpark}>
      <SparkLayer />
      <HeroSection />
      <HookSection />
      <HookCtaSection />
      <LampDivider />
      <TrainerSection />
      <LampDivider />
      <ProgramSection />
      <FormatsSection />
      <LampDivider />
      <TrainingProcessSection />
      <LampDivider />
      <ResultSection />
      <LampDivider />
      <WhyItWorksSection />
      <LampDivider />
      <ArchitectureSection />
      <LampDivider />
      <PricingSection />
      <LampDivider />
      <ReferralSection />
      <LampDivider />
      <ReviewsSection />
      <ReviewsCtaSection />
      <LampDivider />
      <ContactsSection />
      <CtaFinalSection />
    </main>
  );
};

export default Index;
