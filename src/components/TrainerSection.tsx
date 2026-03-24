import trainerImg from "@/assets/trainer.png";

const TrainerSection = () => {
  return (
    <section id="trainer" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-display text-sm tracking-[0.3em] mb-2 uppercase">
            Наш тренер
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Твой путь к <span className="text-gradient-fire">результату</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Trainer image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={trainerImg}
                alt="Тренер ПИКФОРМ"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-foreground font-display">
                  Шевченко Сергей Станиславович
                </h3>
                <p className="text-primary font-display tracking-wider text-sm">
                  Главный тренер
                </p>
              </div>
            </div>
          </div>

          {/* Trainer info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Дипломированный тренер по функциональному многоборью (СВГУ «Физкультура и спорт»). 10 лет тренерского стажа, 19 организованных соревнований разного масштаба.
            </p>

            <div className="space-y-4">
              {[
                { title: "Председатель Федерации", desc: "Прошел путь председателя Федерации по функциональному многоборью Магаданской области" },
                { title: "Участник ЧР 2022", desc: "Участник чемпионата России и первенства по функциональному многоборью 2022 года" },
                { title: "Призёр соревнований", desc: "Призер и победитель региональных соревнований по функциональному многоборью" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-display text-foreground text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground font-display text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wider mt-4"
            >
              Записаться к тренеру
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
