import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Адрес", value: "г. Москва, ул. Спортивная, 12" },
  { icon: Phone, label: "Телефон", value: "+7 (999) 123-45-67" },
  { icon: Mail, label: "Email", value: "info@pikform.ru" },
  { icon: Clock, label: "Режим работы", value: "Пн–Сб: 7:00–22:00, Вс: 9:00–20:00" },
];

const ContactsSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 text-center font-body">
          Связаться с нами
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Контакты
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
              Оставить заявку
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
              Отправить
            </button>
          </form>
        </div>

        <h2
          className="neon-text text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-16 uppercase tracking-wider"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Время сильных решений
        </h2>
      </div>
    </section>
  );
};

export default ContactsSection;
