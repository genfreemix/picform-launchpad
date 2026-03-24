import { Flame, Dumbbell, PersonStanding } from "lucide-react";

const formats = [
  {
    icon: Flame,
    title: "CrossFit",
    description:
      "Высокоинтенсивные комплексы: сила, выносливость и скорость в одной тренировке. Основа системы PIKFORM.",
  },
  {
    icon: Dumbbell,
    title: "Функциональная гиря",
    description:
      "Работа с гирями для развития силовой выносливости, координации и укрепления кора.",
  },
  {
    icon: PersonStanding,
    title: "Собственный вес",
    description:
      "Гимнастика, подтягивания, отжимания, выходы силой. Контроль тела без дополнительного оборудования.",
  },
];

const FormatsSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Форматы тренировок
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Внутри системы
        </h2>
        <p
          className="text-muted-foreground text-center text-sm max-w-lg mx-auto mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Разные форматы комбинируются для стабильного прогресса
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {formats.map((f) => (
            <div
              key={f.title}
              className="bg-card/40 border border-border/50 rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="text-base font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </h3>
              <p
                className="text-muted-foreground text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
