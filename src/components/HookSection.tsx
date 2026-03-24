import { Target } from "lucide-react";

const points = [
  "Потерял форму и не знаешь, с чего начать",
  "Тренируешься, но не видишь результата",
  "Нет системы — каждый раз случайная нагрузка",
  "Сложно держать регулярность в одиночку",
];

const HookSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card/40 border border-border/50 rounded-2xl p-8 md:p-10 text-center">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <Target className="w-6 h-6 text-accent" />
          </div>
          <p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Знакомо?
          </p>
          <div className="space-y-3 mb-6">
            {points.map((p) => (
              <p key={p} className="text-foreground/80 text-sm md:text-base font-body">
                {p}
              </p>
            ))}
          </div>
          <div className="h-px bg-border/40 max-w-xs mx-auto mb-6" />
          <p
            className="text-lg md:text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ты попал по адресу
          </p>
          <p className="text-muted-foreground text-sm mt-2 font-body">
            PIKFORM — система, которая возвращает форму через понятный процесс и контроль
          </p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
