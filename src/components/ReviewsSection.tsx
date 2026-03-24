import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александра, 29",
    result: "\u20135 кг за 2 месяца",
    text: "Стала тренироваться регулярно, появилась энергия. Нагрузка растёт плавно — не страшно начинать.",
  },
  {
    name: "Денис, 31",
    result: "+20 кг в приседе за 8 недель",
    text: "Тренер контролирует технику на каждом подходе. Стал увереннее в движениях, прогресс ощутимый.",
  },
  {
    name: "Максим, 36",
    result: "Вернул форму за 3 месяца",
    text: "Появилась система, стало легче держать режим. Группы маленькие — внимание к каждому.",
  },
  {
    name: "Иван, 34",
    result: "Стабильные тренировки 3 раза в неделю",
    text: "Раньше бросал через 2 недели. Здесь чувствуется структура — нагрузка понятная, прогресс виден.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Участники
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Результаты, которые можно увидеть
        </h2>
        <p
          className="text-muted-foreground/70 text-center text-sm max-w-md mx-auto mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Конкретные изменения за конкретный срок
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card/40 border border-border/50 rounded-xl p-4 hover:border-accent/25 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
                  {review.name[0]}
                </div>
                <p className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {review.name}
                </p>
                <div className="flex gap-0.5 ml-auto">
                  {[...Array(5)].map((_: unknown, j: number) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p
                className="text-accent font-semibold text-sm mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {review.result}
              </p>
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
