import { Users, Dumbbell, Gift } from "lucide-react";

const steps = [
  {
    icon: Users,
    number: "01",
    title: "Расскажи другу",
    description: "Расскажи тому, с кем хочешь тренироваться вместе",
  },
  {
    icon: Dumbbell,
    number: "02",
    title: "Он приходит на тренировку",
    description: "Он приходит на первую тренировку и оценивает формат",
  },
  {
    icon: Gift,
    number: "03",
    title: "Получите по 1 000 ₽",
    description: "Тебе и твоему другу — скидка 1 000 ₽ на следующий абонемент",
  },
];

const ReferralSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Окружение решает
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Тренируйся с теми, кому доверяешь
        </h2>
        <p
          className="text-muted-foreground text-center max-w-xl mx-auto mb-14"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Приведи друга — получите по <span className="text-accent font-semibold">1 000 ₽</span> на абонемент
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-accent/40 transition-all duration-300 group"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 text-xs font-bold text-muted-foreground/40 tracking-wider">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <step.icon className="w-6 h-6 text-accent" />
              </div>

              <h3
                className="text-lg font-bold text-foreground mb-2"
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

              {/* Connector arrow (between cards on md+) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-accent/50">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card border border-accent/30 rounded-2xl p-8 shadow-[0_0_40px_-12px_hsl(var(--accent)/0.2)]">
            <p
              className="text-2xl md:text-3xl font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Правильное окружение — половина результата
            </p>
            <p
              className="text-muted-foreground text-sm mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Тренируйтесь вместе — скидка обоим
            </p>
            <a
              href="#contacts"
              className="inline-block py-3 px-8 rounded-lg bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Узнать подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
