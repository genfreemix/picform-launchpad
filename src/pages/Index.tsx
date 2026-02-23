import HeroSection from "@/components/HeroSection";
import TrainerSection from "@/components/TrainerSection";
import { useSparkEffect } from "@/hooks/useSparkEffect";

const Index = () => {
  const { triggerSpark, SparkLayer } = useSparkEffect();

  return (
    <main className="bg-background min-h-screen" onClick={triggerSpark}>
      <SparkLayer />
      <HeroSection />
      <TrainerSection />
    </main>
  );
};

export default Index;
