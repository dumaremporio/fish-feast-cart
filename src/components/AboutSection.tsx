import logoImg from "@/assets/logo-dumar.png";

const AboutSection = () => (
  <section id="sobre" className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={logoImg}
          alt="Logo DuMar Empório do Mar"
          className="w-48 h-48 object-contain flex-shrink-0"
        />
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Nós
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A DuMar é uma ideia antiga, que nasce da união de duas paixões: a profissão e adoração
            pela cozinha e o fanatismo por tudo que vem do mar!
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nosso objetivo é facilitar o dia a dia com peixes e frutos do mar frescos ou congelados,
            e também algumas preparações pré-prontas da casa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nossos produtos são entregues diariamente, respeitando a sazonalidade dos pescados.
            Entregamos todos os dias, em toda São Paulo, e o frete é cotado conforme o endereço.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
