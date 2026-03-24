import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александра",
    result: "-6 кг, вернулась в форму",
    period: "3 месяца",
    text: "Пришла после долгого перерыва. Тренер подобрал подводящие, адаптировал нагрузку. Сейчас работаю наравне с группой.",
    source: "VK",
  },
  {
    name: "Денис",
    result: "+20 кг в приседе",
    period: "8 недель",
    text: "Стал увереннее в рывке. Тренер контролирует технику и корректирует нагрузку под уровень.",
    source: "Яндекс Карты",
  },
  {
    name: "Максим",
    result: "+15 кг в становой, стабильная выносливость",
    period: "4 месяца",
    text: "Группы маленькие — тренер видит каждого. Сергей знает дело и умеет объяснить технику.",
    source: "Яндекс Карты",
  },
  {
    name: "Александр",
    result: "Регулярные тренировки 3 раза в неделю",
    period: "2 месяца",
    text: "Раньше бросал через 2 недели. Здесь чувствуется система — нагрузка растёт плавно. Появилась энергия.",
    source: "VK",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Результаты участников
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Конкретные результаты, а не обещания
        </h2>
        <p
          className="text-muted-foreground/70 text-center text-sm max-w-md mx-auto mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Реальные отзывы с указанием сроков
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card/50 border border-border/60 rounded-xl p-4 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                    {review.name[0]}
                  </div>
                  <p className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {review.name}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_: unknown, j: number) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-accent font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {review.result}
                </span>
                <span className="text-muted-foreground/60 text-xs">
                  — {review.period}
                </span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
