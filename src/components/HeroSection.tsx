import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-pikform.png";

const HeroSection = () => {
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight select-none"
        >
          <span className="neon-text">Раскрой свой</span> <span className="neon-text">предел</span>
        </h1>

        {/* UTP 2 - Glitch */}
        <p className="glitch-text text-base md:text-xl lg:text-2xl font-display font-bold uppercase tracking-widest mb-4 whitespace-nowrap" data-text="Ультрановая система поэтапной трансформации тела и характера">
          Ультрановая система поэтапной трансформации тела и характера
        </p>

        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-4 font-body">
          Единственный кроссфит зал с персональным подходом к каждому клиенту
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
