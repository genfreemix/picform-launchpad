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

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight select-none"
        >
          <span className="neon-text">Верни форму и силу</span>{" "}
          <span className="neon-text">за 8 недель</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-6 font-body leading-relaxed">
          Системные тренировки с контролем прогресса<br className="hidden md:block" />
          в окружении людей, которые работают на результат
        </p>

        {/* Offer */}
        <div className="inline-block bg-primary/20 border border-primary/40 rounded-lg px-6 py-3 mb-6">
          <p className="text-primary-foreground font-display text-lg md:text-xl tracking-wide">
            🔥 Первая тренировка — <span className="text-gradient-fire font-bold">БЕСПЛАТНО</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
            Узнать свой уровень
          </a>
        </div>

        {/* Micro-benefits */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12">
          {["Без перегруза", "Под твой уровень", "С понятным прогрессом"].map((b) => (
            <span key={b} className="text-muted-foreground text-sm font-body flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
              {b}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "10+", label: "Лет опыта тренера" },
            { value: "до 6", label: "Человек в группе" },
            { value: "8", label: "Недель до результата" },
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
