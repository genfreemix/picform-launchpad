import { useState, useCallback, useRef, useEffect } from "react";
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
}

const SPARK_COLORS = [
  "hsl(50 100% 80%)",
  "hsl(40 100% 70%)",
  "hsl(30 100% 65%)",
  "hsl(20 90% 60%)",
  "hsl(0 80% 55%)",
  "hsl(60 100% 90%)",
];

const HeroSection = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [flash, setFlash] = useState(false);
  const sparkIdRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  const handleSpark = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Flash
    setFlash(true);
    setTimeout(() => setFlash(false), 150);

    // Sparks
    const newSparks: Spark[] = Array.from({ length: 28 }, () => {
      sparkIdRef.current += 1;
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 120;
      return {
        id: sparkIdRef.current,
        x,
        y,
        tx: x + Math.cos(angle) * dist,
        ty: y + Math.sin(angle) * dist + Math.random() * 40,
        size: 2 + Math.random() * 5,
        duration: 0.4 + Math.random() * 0.4,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
      };
    });
    setSparks((prev) => [...prev, ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.includes(s)));
    }, 900);

    // Canvas arc flash
    drawArc(x, y, rect.width, rect.height);
  }, []);

  const drawArc = (cx: number, cy: number, w: number, h: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const maxFrames = 12;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      if (frame > maxFrames) return;

      const opacity = 1 - frame / maxFrames;
      // Draw 3-4 lightning branches
      for (let b = 0; b < 3 + Math.floor(Math.random() * 2); b++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        let px = cx, py = cy;
        const steps = 4 + Math.floor(Math.random() * 4);
        const angle = Math.random() * Math.PI * 2;
        for (let i = 0; i < steps; i++) {
          px += Math.cos(angle + (Math.random() - 0.5) * 2) * (10 + Math.random() * 20);
          py += Math.sin(angle + (Math.random() - 0.5) * 2) * (10 + Math.random() * 20);
          ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `hsla(40, 100%, 85%, ${opacity})`;
        ctx.lineWidth = 1 + Math.random() * 2;
        ctx.shadowColor = `hsla(30, 100%, 70%, ${opacity})`;
        ctx.shadowBlur = 15;
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    cancelAnimationFrame(animFrameRef.current);
    animate();
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight cursor-pointer select-none relative overflow-visible"
          onClick={handleSpark}
        >
          {/* Flash overlay */}
          {flash && (
            <span className="absolute inset-0 rounded-lg pointer-events-none spark-flash" />
          )}
          {/* Canvas for lightning arcs */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 20 }}
          />
          Раскрой свой <span className="neon-text">предел силы</span>
          {sparks.map((spark) => (
            <span
              key={spark.id}
              className="spark-particle"
              style={{
                left: spark.x,
                top: spark.y,
                width: spark.size,
                height: spark.size,
                background: spark.color,
                boxShadow: `0 0 8px 3px ${spark.color}, 0 0 20px 6px hsl(30 100% 60% / 0.4)`,
                '--spark-tx': `${spark.tx - spark.x}px`,
                '--spark-ty': `${spark.ty - spark.y}px`,
                animationDuration: `${spark.duration}s`,
              } as React.CSSProperties}
            />
          ))}
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
