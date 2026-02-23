import { useState, useCallback, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-pikform.png";

interface Spark {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  duration: number;
  color: string;
  trail: boolean;
}

const SPARK_COLORS = [
  "#fffbe6", "#ffe066", "#ffb833", "#ff8c1a",
  "#ff4d4d", "#ffffff", "#ffee99",
];

const HeroSection = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [flashPos, setFlashPos] = useState<{ x: number; y: number } | null>(null);
  const sparkIdRef = useRef(0);

  const handleSpark = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    // Bright flash
    setFlashPos({ x, y });
    setTimeout(() => setFlashPos(null), 200);

    // Generate sparks
    const newSparks: Spark[] = [];
    for (let i = 0; i < 35; i++) {
      sparkIdRef.current += 1;
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 150;
      newSparks.push({
        id: sparkIdRef.current,
        x,
        y,
        tx: x + Math.cos(angle) * dist,
        ty: y + Math.sin(angle) * dist + 30 * Math.random(),
        size: 2 + Math.random() * 6,
        duration: 400 + Math.random() * 500,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        trail: Math.random() > 0.5,
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);
    const ids = newSparks.map((s) => s.id);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !ids.includes(s.id)));
    }, 1000);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Кроссфит зал ПИКФОРМ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Spark & Flash Layer - fixed to viewport */}
      {flashPos && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          {/* Central flash */}
          <div
            style={{
              position: "absolute",
              left: flashPos.x,
              top: flashPos.y,
              width: 300,
              height: 300,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(255,255,230,0.9) 0%, rgba(255,200,50,0.5) 30%, rgba(255,100,0,0.2) 60%, transparent 80%)",
              borderRadius: "50%",
              animation: "electric-flash 0.2s ease-out forwards",
            }}
          />
          {/* Inner bright core */}
          <div
            style={{
              position: "absolute",
              left: flashPos.x,
              top: flashPos.y,
              width: 60,
              height: 60,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #fff 0%, rgba(255,240,180,0.8) 50%, transparent 100%)",
              borderRadius: "50%",
              animation: "electric-flash 0.15s ease-out forwards",
            }}
          />
        </div>
      )}

      {/* Spark particles - fixed to viewport */}
      {sparks.length > 0 && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
          {sparks.map((spark) => (
            <div
              key={spark.id}
              style={{
                position: "absolute",
                left: spark.x,
                top: spark.y,
                width: spark.size,
                height: spark.trail ? spark.size * 3 : spark.size,
                borderRadius: spark.trail ? "50% 50% 50% 50% / 30% 30% 70% 70%" : "50%",
                background: spark.color,
                boxShadow: `0 0 ${spark.size * 2}px ${spark.size}px ${spark.color}`,
                animation: `spark-move ${spark.duration}ms ease-out forwards`,
                "--spark-end-x": `${spark.tx - spark.x}px`,
                "--spark-end-y": `${spark.ty - spark.y}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="ПИКФОРМ логотип"
            className="w-48 md:w-64 lg:w-72 drop-shadow-2xl"
          />
        </div>

        {/* UTP - Neon glow + sparks on click */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight cursor-pointer select-none"
          onClick={handleSpark}
        >
          Раскрой свой <span className="neon-text">предел силы</span>
        </h1>

        {/* UTP 2 - Glitch */}
        <p className="glitch-text text-xl md:text-2xl lg:text-3xl font-display font-bold uppercase tracking-widest mb-4" data-text="ПИКФОРМ — ультрановая система поэтапной трансформации тела и характера">
          ПИКФОРМ — ультрановая система поэтапной трансформации тела и характера
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body">
          Единственный премиальный кроссфит зал с персональным подходом к каждому атлету
        </p>

        {/* Offer */}
        <div className="inline-block bg-primary/20 border border-primary/40 rounded-lg px-6 py-3 mb-8">
          <p className="text-primary-foreground font-display text-lg md:text-xl tracking-wide">
            🔥 Первая тренировка — <span className="text-gradient-fire font-bold">БЕСПЛАТНО</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#trainer"
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-display text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            Записаться на тренировку
          </a>
          <a
            href="#trainer"
            className="border border-foreground/30 text-foreground hover:bg-foreground/10 font-display text-lg px-8 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider"
          >
            Узнать больше
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "500+", label: "Атлетов" },
            { value: "10+", label: "Лет опыта" },
            { value: "24/7", label: "Доступ" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-fire">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
