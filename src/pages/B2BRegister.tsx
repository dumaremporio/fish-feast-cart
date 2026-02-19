import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ESTADOS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

const TIPOS_NEGOCIO = [
  "Restaurante",
  "Peixaria",
  "Hotel",
  "Buffet",
  "Supermercado",
  "Bar / Pub",
  "Food Service",
  "Outro",
];

const B2BRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cnpj: "",
    nome: "",
    email: "",
    tipoNegocio: "",
    nomeEstabelecimento: "",
    cidade: "",
    estado: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `Novo cadastro B2B - DuMar Empório

CNPJ: ${form.cnpj}
Nome: ${form.nome}
E-mail: ${form.email}
Tipo de Negócio: ${form.tipoNegocio}
Nome do Estabelecimento: ${form.nomeEstabelecimento}
Cidade: ${form.cidade}
Estado: ${form.estado}
WhatsApp: ${form.whatsapp}`;

    const mailtoLink = `mailto:contato@dumaremporio.com.br?subject=${encodeURIComponent("Cadastro B2B - " + form.nomeEstabelecimento)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      window.open("https://wa.me/5511914867940", "_blank");
    }, 500);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-primary/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/60 transition-colors";
  const selectClass =
    "w-full px-4 py-3 rounded-lg bg-primary/20 border border-primary-foreground/30 text-primary-foreground focus:outline-none focus:border-primary-foreground/60 transition-colors appearance-none";

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-ocean-gradient min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar
          </button>

          <div className="bg-primary rounded-2xl p-8 shadow-xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-2">
              Ao enviar os dados, você será redirecionado para o WhatsApp:
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                name="cnpj"
                placeholder="CNPJ"
                value={form.cnpj}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <div className="relative">
                <select
                  name="tipoNegocio"
                  value={form.tipoNegocio}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="" disabled className="text-muted-foreground">Tipo de negócio</option>
                  {TIPOS_NEGOCIO.map(t => (
                    <option key={t} value={t} className="text-foreground bg-background">{t}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/60 pointer-events-none">◇</span>
              </div>
              <input
                name="nomeEstabelecimento"
                placeholder="Nome do Estabelecimento"
                value={form.nomeEstabelecimento}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="cidade"
                  placeholder="Cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <div className="relative">
                  <select
                    name="estado"
                    value={form.estado}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled className="text-muted-foreground">Estado</option>
                    {ESTADOS.map(uf => (
                      <option key={uf} value={uf} className="text-foreground bg-background">{uf}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/60 pointer-events-none">◇</span>
                </div>
              </div>
              <input
                name="whatsapp"
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={handleChange}
                required
                className={inputClass}
              />

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-ocean-deep text-primary-foreground font-bold text-lg rounded-lg hover:bg-ocean-medium transition-colors tracking-wider uppercase"
              >
                Enviar Cadastro
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BRegister;
