import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "5 000",
    period: "мес",
    features: [
      "2 тренировки в неделю",
      "8 тренировок в месяц",
      "Группы до 6 человек",
      "Контроль техники от тренера",
    ],
    highlighted: false,
  },
  {
    name: "Оптимальный",
    price: "7 000",
    period: "мес",
    features: [
      "3 тренировки в неделю",
      "12 тренировок в месяц",
      "Группы до 6 человек",
      "Контроль техники + рекомендации",
      "Оптимальный темп для прогресса за 8 недель",
    ],
    highlighted: true,
  },
  {
    name: "Безлимитный",
    price: "9 000",
    period: "мес",
    features: [
      "Свободное посещение",
      "Без ограничений по количеству тренировок",
      "Группы до 6 человек",
      "Контроль техники + приоритетная запись",
      "Максимальный прогресс за месяц",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Участие в системе
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Формат участия
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-4" style={{ fontFamily: "var(--font-body)" }}>
          Разовое посещение — <span className="text-accent font-semibold">1 500 ₽</span>, консультация бесплатна
        </p>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          Абонемент — это не просто доступ в зал. Это системные тренировки с контролем прогресса и коррекцией нагрузки.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-accent/10 border-2 border-accent shadow-[0_0_40px_-10px_hsl(var(--accent)/0.4)] scale-[1.03]"
                  : "bg-card border border-border hover:border-accent/40"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Оптимальный для результата
                </span>
              )}
              <h3
                className="text-xl font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm mb-1">₽ / {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80" style={{ fontFamily: "var(--font-body)" }}>
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25"
                    : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Начать систему
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
