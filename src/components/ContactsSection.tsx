import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Адрес", value: "Рязань, Заводской проезд 1, подъезд 8, цокольный этаж" },
  { icon: Phone, label: "Телефон", value: "+7 (900) 604-44-33" },
  { icon: Mail, label: "Email", value: "peakform62@mail.ru" },
  { icon: Clock, label: "Режим работы", value: "Пн–Пт: 09:00–20:00, Сб: 10:00–17:00, Вс: выходной" },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Начать
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Записаться на тренировку
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3
              className="text-xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Записаться на первую тренировку
            </h3>
            <input
              type="text"
              placeholder="Ваше имя"
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <textarea
              placeholder="Сообщение"
              rows={4}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Send className="w-4 h-4" />
              Записаться
            </button>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
              {["Ответим в течение дня", "Можно просто задать вопрос", "Без обязательств"].map((t) => (
                <span key={t} className="text-muted-foreground/60 text-xs font-body">{t}</span>
              ))}
            </div>
          </form>
        </div>

        <h2
          className="neon-text text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-16 uppercase tracking-wider"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Первый шаг — самый важный
        </h2>

        {/* Яндекс Карта */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?pt=39.7029854,54.6328553&z=16&l=map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            title="Карта проезда к залу Пик Форм"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
