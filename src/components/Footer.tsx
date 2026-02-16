import { MapPin, Clock, Phone } from "lucide-react";
import logoImg from "@/assets/logo-dumar.png";

const Footer = () => (
  <footer className="bg-ocean-gradient text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoImg} alt="DuMar" className="h-8 w-8 object-contain" />
            <span className="font-serif text-xl font-bold">DuMar</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Peixes e frutos do mar frescos ou congelados, e preparações pré-prontas da casa.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-serif font-semibold text-gold">Informações</h4>
          <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
            <MapPin className="h-4 w-4 mt-0.5 text-gold/70" />
            <span>Entregamos em toda São Paulo</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
            <Clock className="h-4 w-4 mt-0.5 text-gold/70" />
            <span>Entregas todos os dias</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
            <Phone className="h-4 w-4 mt-0.5 text-gold/70" />
            <span>Pedidos via WhatsApp</span>
          </div>
        </div>
        <div>
          <h4 className="font-serif font-semibold text-gold mb-3">Observações</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Produtos entregues diariamente, respeitando a sazonalidade dos pescados. Conchas sob encomenda com 2 dias de antecedência.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} DuMar Empório do Mar. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
