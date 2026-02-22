import { HashRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import B2BRegister from "./pages/B2BRegister"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/b2b" element={<B2BRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
