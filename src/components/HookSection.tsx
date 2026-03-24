import { Target } from "lucide-react";

const pairs = [
  {
    question: "Ходишь в зал, но результата нет",
    answer: "Сложно выйти на стабильный прогресс без системы",
  },
  {
    question: "Начинаешь тренироваться — и быстро сливаешься",
    answer: "Нужна структура, которая помогает держаться в процессе",
  },
  {
    question: "Форма уже не та, что раньше",
    answer: "Нужен понятный путь вместо хаотичных тренировок",
  },
];

const HookSection = () => {
  return (
    <section className="section-dark py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="relative bg-gradient-to-b from-card/60 to-card/25 border border-accent/15 rounded-2xl p-8 md:p-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Target className="w-5 h-5 text-accent" />
          </div>

          <h2
            className="text-2xl md:text-4xl font-bold text-foreground mb-6 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Знакомо?
          </h2>

          <div className="space-y-5 mb-8">
            {pairs.map((p) => (
              <div key={p.question} className="text-center">
                <p className="text-muted-foreground text-sm font-body mb-1.5">
                  {p.question}
                </p>
                <p
                  className="text-foreground text-base md:text-lg font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-accent/15 max-w-[200px] mx-auto mb-6" />

          <p
            className="text-base md:text-lg font-semibold text-foreground mb-2 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Решение — не в мотивации
          </p>
          <p className="text-muted-foreground text-sm font-body max-w-sm mx-auto text-center">
            А в системе тренировок и контроле прогресса
          </p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
