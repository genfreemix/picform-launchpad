const ReviewsCtaSection = () => {
  return (
    <section className="section-dark pt-4 pb-8 md:pt-6 md:pb-10">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <p className="text-muted-foreground text-sm font-body mb-1">
          Разница не в мотивации — в системе.
        </p>
        <p className="text-muted-foreground text-sm font-body mb-3">
          Чтобы начать, нужно понять свой уровень.
        </p>
        <p
          className="text-foreground text-base md:text-lg font-semibold mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          С чего начать именно тебе
        </p>
        <a
          href="#contacts"
          className="inline-block bg-accent text-accent-foreground font-semibold text-sm md:text-base px-8 py-3 rounded-lg uppercase tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Узнать свой уровень
        </a>
      </div>
    </section>
  );
};

export default ReviewsCtaSection;
