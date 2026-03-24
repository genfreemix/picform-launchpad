import { Activity, Zap, Timer, CalendarCheck, BarChart3 } from "lucide-react";

const results = [
  {
    icon: Activity,
    title: "Форма",
    description: "Тело начинает работать как единая система — подвижность, тонус, осанка.",
  },
  {
    icon: Zap,
    title: "Сила",
    description: "Рост рабочих весов и уверенность в базовых движениях.",
  },
  {
    icon: Timer,
    title: "Выносливость",
    description: "Больше энергии на тренировке и в повседневной жизни.",
  },
  {
    icon: CalendarCheck,
    title: "Регулярность",
    description: "Расписание и группа формируют привычку, которая держит.",
  },
  {
    icon: BarChart3,
    title: "Контроль",
    description: "Ты видишь прогресс — тренер фиксирует динамику и корректирует нагрузку.",
  },
];

const ResultSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Что ты получаешь
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Результат системы
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {results.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-3 bg-card/30 border border-border/40 rounded-xl px-5 py-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] hover:border-accent/25 transition-all duration-300"
            >
              <r.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3
                  className="text-sm font-bold text-foreground mb-0.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-muted-foreground text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
