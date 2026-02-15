import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const formatPrice = (price: number | null) => {
  if (price === null) return "Consulte";
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const WEIGHT_OPTIONS = [0.5, 1, 1.5, 2, 2.5, 3];
const CUT_OPTIONS = ["Filé inteiro", "Posta do filé", "Posta com osso", "Espalmado", "Manta", "Saku"];

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(1);
  const [selectedCut, setSelectedCut] = useState("");
  const variant = product.variants[selectedVariant];

  const isKg = variant.unit === "kg";
  const isFileInPescados = product.category === "pescados" && variant.label === "Filé";

  const handleAdd = () => {
    const cutNote = isFileInPescados && selectedCut ? ` (${selectedCut})` : "";
    const variantWithCut = isFileInPescados && selectedCut
      ? { ...variant, label: `${variant.label} - ${selectedCut}` }
      : variant;
    addItem(product, variantWithCut, isKg ? 1 : 1, isKg ? selectedWeight : undefined);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:shadow-ocean-deep/5 transition-all duration-300 flex flex-col">
      <div className="flex-1">
        <h3 className="font-serif font-semibold text-card-foreground text-base mb-1">{product.name}</h3>
        {product.description && (
          <p className="text-muted-foreground text-xs mb-3">{product.description}</p>
        )}

        {product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.variants.map((v, i) => (
              <button
                key={v.label}
                onClick={() => { setSelectedVariant(i); setSelectedCut(""); }}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  i === selectedVariant
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {isFileInPescados && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1.5">Tipo de corte:</p>
            <div className="flex flex-wrap gap-1.5">
              {CUT_OPTIONS.map(cut => (
                <button
                  key={cut}
                  onClick={() => setSelectedCut(prev => prev === cut ? "" : cut)}
                  className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                    selectedCut === cut
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {cut}
                </button>
              ))}
            </div>
          </div>
        )}

        {isKg && variant.price !== null && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1.5">Peso (kg):</p>
            <div className="flex flex-wrap gap-1.5">
              {WEIGHT_OPTIONS.map(w => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                    selectedWeight === w
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {w}kg
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
        <div>
          <span className="text-lg font-bold text-foreground">
            {isKg && variant.price ? formatPrice(variant.price * selectedWeight) : formatPrice(variant.price)}
          </span>
          {variant.price && (
            <span className="text-muted-foreground text-xs ml-1">
              {isKg ? `(${selectedWeight}kg)` : `/${variant.unit === "duz" ? "dúzia" : "uni"}`}
            </span>
          )}
        </div>
        {variant.price !== null && (
          <button
            onClick={handleAdd}
            className="p-2 rounded-full bg-gold hover:bg-gold-light text-accent-foreground transition-colors"
            aria-label={`Adicionar ${product.name}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
