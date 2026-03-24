import { LayoutList, Eye, CalendarCheck, Users } from "lucide-react";

const cards = [
  {
    icon: LayoutList,
    title: "Понятная система",
    text: "Ты не думаешь, что делать — есть структура",
  },
  {
    icon: Eye,
    title: "Контроль нагрузки",
    text: "Тренер следит за техникой и прогрессом",
  },
  {
    icon: CalendarCheck,
    title: "Регулярность",
    text: "Формат, в котором проще не выпадать",
  },
  {
    icon: Users,
    title: "Среда",
    text: "Люди вокруг работают на результат",
  },
];

const WhyItWorksSection = () => {
  return (
    <section className="section-dark py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Без случайностей
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Почему здесь получается
        </h2>
        <p className="text-muted-foreground text-sm md:text-base text-center max-w-lg mx-auto mb-12 font-body">
          держать результат
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card/40 border border-border/50 rounded-xl p-6 hover:border-accent/25 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="text-base font-bold text-foreground mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
