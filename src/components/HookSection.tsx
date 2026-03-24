import { Target } from "lucide-react";

const pairs = [
  {
    question: "Ходишь в зал, но результата нет",
    answer: "Нет системы — нет прогресса",
  },
  {
    question: "Начинаешь тренироваться — и быстро сливаешься",
    answer: "Нет структуры, которая держит тебя в процессе",
  },
  {
    question: "Форма уже не та, что раньше",
    answer: "Нужен понятный путь, а не хаотичные тренировки",
  },
];

const HookSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative bg-gradient-to-b from-card/70 to-card/30 border border-accent/20 rounded-2xl p-10 md:p-14">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-6 h-6 text-accent" />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Знакомо?
          </h2>

          <div className="space-y-8 mb-10">
            {pairs.map((p) => (
              <div key={p.question} className="text-center">
                <p className="text-muted-foreground text-sm md:text-base font-body mb-2">
                  {p.question}
                </p>
                <p
                  className="text-foreground text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="h-px bg-accent/20 max-w-xs mx-auto mb-8" />

          <p
            className="text-lg md:text-xl font-bold text-foreground mb-3 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Решение — не в мотивации
          </p>
          <p className="text-muted-foreground text-sm md:text-base font-body max-w-md mx-auto text-center">
            А в системе тренировок и контроле прогресса
          </p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
