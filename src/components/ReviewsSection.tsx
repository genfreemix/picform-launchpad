import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александра",
    text: "Отличное место! Очень рекомендую! У меня традиция в каждом городе, куда я путешествую, ходить на тренировку по кроссфиту. CF62 — уникальный клуб. Душевная, заряженная и очень добрая команда. Тренер-профессионал своего дела. Сразу увидел мои проблемные места и показал подводящие упражнения!",
    source: "VK",
  },
  {
    name: "Денис",
    text: "Отличные, опытные тренера, профессионалы своего дела! Очень хороший зал, есть всё необходимое для результативных тренировок! Рекомендую.",
    source: "Яндекс Карты",
  },
  {
    name: "Максим",
    text: "Очень крутое место. Занимаюсь несколько месяцев, хороший результат. Увеличил силу, выносливость. Рекомендую к посещению. Тренер Сергей — лучший в своём деле!",
    source: "Яндекс Карты",
  },
  {
    name: "Александр",
    text: "Очень хорошее место, тренировки проходят разнообразно и полезно!",
    source: "VK",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Отзывы
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Отзывы наших клиентов
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
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
