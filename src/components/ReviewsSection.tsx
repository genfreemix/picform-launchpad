const reviews = [
  {
    name: "Александра, 29",
    result: "\u20135 кг за 2 месяца",
    before: "Раньше ходила без системы \u2014 ничего не менялось.",
    after: "Сейчас есть план и стабильные тренировки без срывов.",
  },
  {
    name: "Денис, 31",
    result: "+20 кг в приседе за 8 недель",
    before: "Тренировался сам \u2014 техника хромала, боялся веса.",
    after: "Сейчас понимает движения и уверенно добавляет нагрузку.",
  },
  {
    name: "Максим, 36",
    result: "Вернул форму за 3 месяца",
    before: "После 30 забросил спорт, не мог втянуться.",
    after: "Сейчас держит режим \u2014 без постоянных откатов.",
  },
  {
    name: "Иван, 34",
    result: "3 тренировки в неделю стабильно",
    before: "Покупал абонементы и бросал.",
    after: "Сейчас тренируется регулярно и понимает, что делает.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Результаты после 8 недель тренировок
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
              </div>
              <p
                className="text-accent font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {review.result}
              </p>
              <p className="text-muted-foreground/60 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {review.before}
              </p>
              <p className="text-foreground/80 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {review.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
