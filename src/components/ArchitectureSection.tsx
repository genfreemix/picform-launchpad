const gymPhotos = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Тренажёрный зал — силовые рамы и штанги",
  },
  {
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    alt: "Кроссфит-тренировка в зале",
  },
  {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80",
    alt: "Оборудование для функциональных тренировок",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Пространство силы
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Наш зал
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Оснащён всем необходимым инвентарём и оборудованием для занятий кроссфитом. Функциональные и силовые рамы, штанги, гантели, гири, гребные тренажёры, аэробайки и плиометрические тумбы.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gymPhotos.map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border group">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
