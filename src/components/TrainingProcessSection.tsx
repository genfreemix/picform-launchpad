const steps = [
  {
    number: "1",
    title: "Оценка уровня",
    description:
      "Тренер определяет текущую форму, подвижность и слабые зоны. Нагрузка подбирается под тебя с первого дня.",
  },
  {
    number: "2",
    title: "Подготовка тела",
    description:
      "Суставная разминка, мобильность, лёгкое кардио. Тело включается в работу без риска травм.",
  },
  {
    number: "3",
    title: "Силовая база",
    description:
      "Жимы, приседания, тяги, рывки — базовые движения для роста силы. Тренер контролирует технику.",
  },
  {
    number: "4",
    title: "Интенсив (WOD)",
    description:
      "Высокоинтенсивные комплексы на выносливость. Здесь прогресс виден неделя к неделе.",
  },
  {
    number: "5",
    title: "Закрепление",
    description:
      "Дополнительная проработка мышц, которые работали в основном блоке. Фиксация нагрузки.",
  },
  {
    number: "6",
    title: "Восстановление",
    description:
      "Растяжка, МФР, кардио-заминка. Тело восстанавливается — это часть системы, а не опция.",
  },
];

const TrainingProcessSection = () => {
  return (
    <section id="training-process" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Понятная система
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Как ты приходишь к результату
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
          Каждый шаг решает конкретную задачу. Вместе они формируют систему, по которой ты двигаешься к результату.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-card/50 border border-border/60 rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group"
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
