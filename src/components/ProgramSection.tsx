import silhouetteImg from "@/assets/silhouette-program.png";

const ProgramSection = () => {
  return (
    <section className="section-dark py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <img
            src={silhouetteImg}
            alt="ПИКФОРМ.СИЛУЭТ — Программа силовой эстетики"
            className="w-full rounded-2xl border border-border"
            style={{
              filter:
                "brightness(1.15) contrast(1.1) drop-shadow(0 0 8px hsla(0, 90%, 55%, 0.9)) drop-shadow(0 0 20px hsla(0, 85%, 50%, 0.6)) drop-shadow(0 0 50px hsla(0, 80%, 50%, 0.35))",
              animation: "silhouette-glow 3s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
