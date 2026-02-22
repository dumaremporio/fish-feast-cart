import { Toradeira } from "@/components/ui/toradeira";
import { Toradeira as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Índice />} />
          <Route path="/b2b" element={<B2BRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
