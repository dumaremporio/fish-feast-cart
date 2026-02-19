import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-gradient backdrop-blur-md border-b border-ocean-medium/30">
      <div className="container mx-auto flex items-center justify-end px-4 py-5">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-ocean-medium/50 hover:bg-gold/20 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-primary-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden p-2 text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ocean-deep/95 border-t border-ocean-medium/30 px-4 py-4 space-y-3">
          {["Sobre", "Categorias", "Produtos"].map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="block w-full text-left text-primary-foreground/80 hover:text-gold transition-colors py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
