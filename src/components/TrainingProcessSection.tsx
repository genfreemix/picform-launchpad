const steps = [
  {
    number: "1",
    title: "Разминка",
    description:
      "Подготовка суставов и мышц к нагрузке. Суставная разминка, массажный ролл, лёгкое кардио.",
  },
  {
    number: "2",
    title: "Разминочный комплекс",
    description:
      "Включение основных мышечных групп. Работа со своим весом или лёгким инвентарём.",
  },
  {
    number: "3",
    title: "Силовой комплекс",
    description:
      "Развитие базовой силы. Жимы, приседания, тяги, толчки, рывки — с контролем техники.",
  },
  {
    number: "4",
    title: "WOD — тренировка дня",
    description:
      "Основная работа: высокоинтенсивные комплексы AMRAP, EMOM, AFAP, Tabata. Именно здесь растёт выносливость.",
  },
  {
    number: "5",
    title: "Закрепляющий комплекс",
    description:
      "Дополнительная проработка целевых мышц для закрепления нагрузки.",
  },
  {
    number: "6",
    title: "Заминка",
    description:
      "Восстановление: кардио, растяжка и МФР. Тело возвращается в спокойный режим.",
  },
];

const TrainingProcessSection = () => {
  return (
    <section id="training-process" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Система тренировок
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Каждая тренировка — по плану
        </h2>
        <p
          className="text-muted-foreground text-center max-w-xl mx-auto mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Группы до{" "}
          <span className="text-accent font-semibold">6 человек</span>,
          продолжительность ~{" "}
          <span className="text-accent font-semibold">2 часа</span>
        </p>
        <p
          className="text-muted-foreground/70 text-center text-sm max-w-lg mx-auto mb-14"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Каждый элемент — часть системы, которая ведёт к измеримому результату
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 group"
            >
              <span className="absolute top-4 right-4 text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                {step.number}
              </span>
              <h3
                className="text-lg font-bold text-foreground mb-2 pr-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingProcessSection;
