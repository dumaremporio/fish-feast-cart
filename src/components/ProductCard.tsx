import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const formatPrice = (price: number | null) => {
  if (price === null) return "Consulte";
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const variant = product.variants[selectedVariant];

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
                onClick={() => setSelectedVariant(i)}
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
      </div>

      <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
        <div>
          <span className="text-lg font-bold text-foreground">
            {formatPrice(variant.price)}
          </span>
          {variant.price && (
            <span className="text-muted-foreground text-xs ml-1">
              /{variant.unit === "kg" ? "kg" : variant.unit === "duz" ? "dúzia" : "uni"}
            </span>
          )}
        </div>
        {variant.price !== null && (
          <button
            onClick={() => addItem(product, variant, 1)}
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
