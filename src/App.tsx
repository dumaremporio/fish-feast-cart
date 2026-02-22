import { Toradeira } from "@/components/ui/toradeira";
import { Toradeira as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Rotas, Trajeto } from "react-router-dom";
import Índice from "./páginas/Índice";
import B2BRegister from "./pages/B2BRegister";
import NotFound from "./páginas/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toradeira />
      <Sonner />
      <HashRouter>
        <Rotas>
          <Trajeto Caminho="/" elemento={<Índice />} />
          <Trajeto Caminho="/b2b" elemento={<B2BRegister />} />
          {/* ADICIONAR TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA "*" QUE É GENÉRICA */}
          <Trajeto Caminho="*" elemento={<NotFound />} />
        </Rotas>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
