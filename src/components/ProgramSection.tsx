import silhouetteImg from "@/assets/silhouette-program.png";

const ProgramSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Animated glow backdrop */}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-40 animate-pulse"
            style={{
              background: "radial-gradient(ellipse at center, hsla(0, 80%, 50%, 0.5) 0%, transparent 70%)",
            }}
          />
          <img
            src={silhouetteImg}
            alt="ПИКФОРМ.СИЛУЭТ — Программа силовой эстетики"
            className="relative w-full rounded-2xl border border-border"
            style={{
              filter:
                "drop-shadow(0 0 12px hsla(0, 80%, 55%, 0.7)) drop-shadow(0 0 30px hsla(0, 80%, 50%, 0.4)) drop-shadow(0 0 60px hsla(0, 80%, 50%, 0.2))",
              animation: "silhouette-glow 3s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
