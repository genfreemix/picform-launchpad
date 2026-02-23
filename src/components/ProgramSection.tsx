import silhouetteImg from "@/assets/silhouette-program.png";

const ProgramSection = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <img
          src={silhouetteImg}
          alt="ПИКФОРМ.СИЛУЭТ — Программа силовой эстетики"
          className="w-full max-w-5xl mx-auto rounded-2xl border border-border"
        />
      </div>
    </section>
  );
};

export default ProgramSection;
