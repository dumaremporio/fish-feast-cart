import logoImg from "@/assets/logo-dumar.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mov" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-base mb-4">
          Empório & Take Away
        </p>

        <img
          src={logoImg}
          alt="DuMar Empório do Mar"
          className="mx-auto h-40 md:h-56 object-contain mb-6"
        />

        <p className="text-primary-foreground/80 text-xl md:text-2xl max-w-xl mx-auto mb-10 leading-relaxed">
          Peixes e Frutos do Mar frescos, respeitando defeso e sazonalidade,
          para entregar diversidade!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("categorias")}
            className="px-8 py-3 bg-gold hover:bg-gold-light text-accent-foreground font-semibold rounded-lg transition-all hover:shadow-lg"
          >
            Para sua casa
          </button>

          <Link
            to="/b2b"
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded-lg transition-all inline-block text-center"
          >
            Para o seu Negócio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
