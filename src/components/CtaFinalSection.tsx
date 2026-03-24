const CtaFinalSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p
          className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 font-body"
        >
          Следующий шаг
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Узнай свой текущий уровень формы
        </h2>
        <p
          className="text-muted-foreground text-base md:text-lg mb-8 font-body max-w-lg mx-auto"
        >
          Покажем, с чего начать и как выйти на результат
        </p>
        <a
          href="#contacts"
          className="inline-block bg-accent text-accent-foreground font-semibold text-base md:text-lg px-10 py-4 rounded-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Пройти тест формы
        </a>
        <p className="text-muted-foreground/50 text-xs mt-4 font-body">
          Займёт 2 минуты, без обязательств
        </p>
      </div>
    </section>
  );
};

export default CtaFinalSection;
