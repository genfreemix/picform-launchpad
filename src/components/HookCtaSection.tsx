const HookCtaSection = () => {
  return (
    <section className="section-dark py-8 md:py-10">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <p
          className="text-foreground text-base md:text-lg font-semibold mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Узнать свой уровень — первый шаг к результату
        </p>
        <p className="text-muted-foreground text-sm font-body mb-1.5">
          Покажем, с чего начать и как выстроить тренировки под тебя
        </p>
        <p className="text-muted-foreground text-sm font-body mb-5">
          Подберём формат тренировок под твой уровень
        </p>
        <a
          href="#contacts"
          className="inline-block bg-accent text-accent-foreground font-semibold text-sm md:text-base px-8 py-3 rounded-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Пройти тест формы
        </a>
        <p className="text-muted-foreground/50 text-xs mt-3 font-body">
          Займёт 2 минуты · Без обязательств
        </p>
      </div>
    </section>
  );
};

export default HookCtaSection;
