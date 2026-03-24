import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Александра, 29",
    result: "\u20135 кг за 2 месяца",
    was: "Ходила в зал без плана. Делала кардио и пресс, но ничего не менялось.",
    became: "Появился план, нагрузка стала расти. Тело начало меняться на третьей неделе.",
  },
  {
    name: "Денис, 31",
    result: "+20 кг в приседе за 8 недель",
    was: "Тренировался сам, техника хромала. Боялся увеличивать веса.",
    became: "Тренер поставил технику, начал добавлять вес каждую неделю. Без боли, без срывов.",
  },
  {
    name: "Максим, 36",
    result: "Вернул форму за 3 месяца",
    was: "После 30 забросил спорт. Пробовал бегать \u2014 хватало на 2 недели.",
    became: "Расписание и группа держат в процессе. Не приходится заставлять себя.",
  },
  {
    name: "Иван, 34",
    result: "3 тренировки в неделю \u2014 уже 4 месяца",
    was: "Покупал абонементы и бросал. Не понимал, зачем какое упражнение.",
    became: "Каждая тренировка понятная. Вижу, зачем делаю и куда двигаюсь.",
  },
];

const microReviews = [
  "\u00ABЗдесь не надо думать, что делать \u2014 приходишь и работаешь по плану\u00BB",
  "\u00ABПервый раз не бросил после первого месяца\u00BB",
  "\u00ABНагрузка понятная, тренер видит, когда тяжело\u00BB",
  "\u00ABНе чувствуешь себя новичком \u2014 все работают на своём уровне\u00BB",
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
          Было \u2014 стало
        </h2>
        <p
          className="text-muted-foreground/70 text-center text-sm max-w-md mx-auto mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Конкретные изменения за конкретный срок
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card/40 border border-border/50 rounded-xl p-4 hover:border-accent/25 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2">
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
                className="text-accent font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {review.result}
              </p>
              <p className="text-muted-foreground/60 text-xs leading-relaxed mb-1" style={{ fontFamily: "var(--font-body)" }}>
                {review.was}
              </p>
              <p className="text-foreground/80 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {review.became}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-muted-foreground text-sm text-center mb-5 font-body"
        >
          Почему не бросают? Структура и контроль делают тренировки понятными.
        </p>

        <div className="flex flex-col items-center gap-2.5 max-w-lg mx-auto">
          {microReviews.map((m, i) => (
            <div key={i} className="flex items-start gap-2 text-muted-foreground/70 text-xs font-body">
              <MessageCircle className="w-3.5 h-3.5 text-accent/40 shrink-0 mt-0.5" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
