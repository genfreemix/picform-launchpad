import HeroSection from "@/components/HeroSection";
import TrainerSection from "@/components/TrainerSection";
import ProgramSection from "@/components/ProgramSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import { useSparkEffect } from "@/hooks/useSparkEffect";

const Index = () => {
  const { triggerSpark, SparkLayer } = useSparkEffect();

  return (
    <main className="bg-background min-h-screen" onClick={triggerSpark}>
      <SparkLayer />
      <HeroSection />
      <TrainerSection />
      <ProgramSection />
      <ArchitectureSection />
    </main>
  );
};

export default Index;
