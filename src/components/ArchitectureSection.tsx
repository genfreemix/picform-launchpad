const gymPhotos = [
  {
    src: "https://optim.tildacdn.com/stor3833-6662-4362-b535-386166303838/-/resize/560x/-/format/webp/25542583.jpg.webp",
    alt: "Функциональная рама и кольца в спортзале для кроссфита",
  },
  {
    src: "https://optim.tildacdn.com/stor3066-6332-4164-b132-303430343564/-/resize/560x/-/format/webp/25542588.jpg.webp",
    alt: "Гребной тренажёр, аэробайк и волболы для занятий кроссфитом",
  },
  {
    src: "https://optim.tildacdn.com/stor3764-3539-4464-b437-656439353833/-/resize/560x/-/format/webp/25542589.jpg.webp",
    alt: "Плиометрические тумбы для занятий кроссфитом",
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
