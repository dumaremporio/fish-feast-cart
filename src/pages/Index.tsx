import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductList from "@/components/ProductList";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(prev => (prev === categoryId ? null : categoryId));
    setTimeout(() => {
      document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CategoryGrid onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
        <ProductList selectedCategory={selectedCategory} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
