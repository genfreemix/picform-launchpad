import { Check } from "lucide-react";

const fears = [
  "Можно начать с базового уровня",
  "Нагрузка подбирается под тебя",
  "Не нужно быть в форме заранее",
];

const CtaFinalSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-muted-foreground text-sm md:text-base font-body mb-6 max-w-md mx-auto">
          Разница между теми, кто получает результат, и теми, кто нет — не в мотивации. А в системе.
        </p>

        <h2
          className="text-2xl md:text-4xl font-bold text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Узнай свой уровень и начни
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8 font-body max-w-lg mx-auto">
          Начни с первого шага
        </p>

        <a
          href="#contacts"
          className="inline-block bg-accent text-accent-foreground font-semibold text-base md:text-lg px-10 py-4 rounded-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Записаться на тренировку
        </a>
        <p className="text-muted-foreground/50 text-xs mt-4 mb-10 font-body">
          Займёт 2 минуты, без обязательств
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground text-sm font-body">
          {fears.map((f) => (
            <span key={f} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent/60" />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
