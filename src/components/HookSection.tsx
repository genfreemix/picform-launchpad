import { Target } from "lucide-react";

const points = [
  "Ходишь в зал, но результата нет",
  "Начинаешь тренироваться — и быстро сливаешься",
  "Не хватает системы и понятного плана",
  "Форма уже не та, что раньше",
];

const HookSection = () => {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="relative bg-gradient-to-b from-card/60 to-card/30 border border-accent/15 rounded-2xl p-10 md:p-14 text-center">
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-6 h-6 text-accent" />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Знакомо?
          </h2>

          <div className="space-y-4 mb-8">
            {points.map((p) => (
              <p key={p} className="text-foreground/70 text-base md:text-lg font-body">
                {p}
              </p>
            ))}
          </div>

          <div className="h-px bg-accent/15 max-w-xs mx-auto mb-8" />

          <p
            className="text-lg md:text-xl font-bold text-foreground mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Если ты узнал себя — тебе нужен не просто зал
          </p>
          <p className="text-muted-foreground text-sm font-body max-w-md mx-auto">
            А система тренировок с контролем, понятным планом и окружением, которое держит в тонусе
          </p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;
