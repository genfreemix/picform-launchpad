import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "3 900",
    period: "мес",
    features: [
      "Доступ в зал без ограничений",
      "Раздевалка и душ",
      "Базовая консультация тренера",
      "Доступ к групповым занятиям",
    ],
    highlighted: false,
  },
  {
    name: "Про",
    price: "6 900",
    period: "мес",
    features: [
      "Всё из «Базового»",
      "Персональная программа тренировок",
      "Коррекция питания",
      "4 персональные тренировки",
      "Доступ к закрытому чату",
    ],
    highlighted: true,
  },
  {
    name: "Элит",
    price: "12 900",
    period: "мес",
    features: [
      "Всё из «Про»",
      "8 персональных тренировок",
      "Еженедельный разбор прогресса",
      "Приоритетная связь с тренером",
      "Индивидуальный план питания",
      "Доступ к VIP-зоне",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Абонементы
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Выбери свой план
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14" style={{ fontFamily: "var(--font-body)" }}>
          Начни трансформацию уже сегодня — подбери абонемент под свои цели и уровень подготовки
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
                  Популярный
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
                Выбрать план
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
