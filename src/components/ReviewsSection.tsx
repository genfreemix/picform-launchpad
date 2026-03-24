import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александра",
    text: "Занимаюсь третий месяц. Пришла после долгого перерыва — не могла выполнить базовые упражнения. Сейчас делаю комплексы наравне с группой. Тренер сразу определил слабые места и подобрал подводящие упражнения.",
    source: "VK",
  },
  {
    name: "Денис",
    text: "За первые 8 недель вырос в приседе на 20 кг, стал увереннее в рывке. Тренер контролирует технику и корректирует программу под уровень. Зал оснащён всем необходимым — приходишь и работаешь.",
    source: "Яндекс Карты",
  },
  {
    name: "Максим",
    text: "4 месяца тренировок. Сила и выносливость выросли заметно. Группы маленькие — тренер видит каждого. Сергей знает дело и умеет объяснить технику.",
    source: "Яндекс Карты",
  },
  {
    name: "Александр",
    text: "2 месяца занятий. Тренировки каждый раз разные, но чувствуется система — нагрузка растёт плавно и контролируемо. Результат уже есть.",
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
          Что говорят те, кто уже тренируется
        </h2>
        <p
          className="text-muted-foreground/70 text-center text-sm max-w-md mx-auto mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Конкретные результаты, а не общие слова
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-foreground font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    {review.name}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {review.text}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-3">
                Источник: {review.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
