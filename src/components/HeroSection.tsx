import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="DuMar Empório do Mar - Peixes e frutos do mar frescos"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Empório & Take Away</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Du<span className="text-gradient-gold">Mar</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
          Peixes e frutos do mar frescos, respeitando a sazonalidade dos pescados. Entregamos em toda São Paulo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("categorias")}
            className="px-8 py-3 bg-gold hover:bg-gold-light text-accent-foreground font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            Ver Cardápio
          </button>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-lg transition-all"
          >
            Pedir via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
