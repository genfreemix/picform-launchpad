import architectureImg from "@/assets/architecture-transform.png";

const ArchitectureSection = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <img
          src={architectureImg}
          alt="Архитектура трансформации — 3 этапа системы ПИКФОРМ"
          className="w-full max-w-5xl mx-auto rounded-2xl border border-border"
        />
      </div>
    </section>
  );
};

export default ArchitectureSection;
