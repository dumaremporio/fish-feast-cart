import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();

  const buildWhatsAppMessage = () => {
    let msg = "Olá! Gostaria de fazer um pedido:\n\n";
    items.forEach(item => {
      const price = item.variant.price ? formatPrice(item.variant.price) : "Consultar";
      msg += `• ${item.product.name} (${item.variant.label}) x${item.quantity} - ${price}/${item.variant.unit}\n`;
    });
    msg += `\nTotal estimado: ${formatPrice(totalPrice)}`;
    return encodeURIComponent(msg);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border bg-ocean-gradient">
          <h2 className="font-serif text-lg font-bold text-primary-foreground">Seu Pedido</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-1 text-primary-foreground/70 hover:text-primary-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="font-serif text-lg mb-2">Carrinho vazio</p>
              <p className="text-sm">Adicione produtos do nosso cardápio</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={`${item.product.id}-${item.variant.label}`}
                className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-card-foreground truncate">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">{item.variant.label} • {item.variant.price ? formatPrice(item.variant.price) : "Consulte"}/{item.variant.unit}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, item.variant.label, item.quantity - 1)}
                    className="p-1 rounded border border-border hover:bg-muted">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.variant.label, item.quantity + 1)}
                    className="p-1 rounded border border-border hover:bg-muted">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button onClick={() => removeItem(item.product.id, item.variant.label)}
                    className="p-1 text-destructive hover:bg-destructive/10 rounded ml-1">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-serif font-semibold text-foreground">Total estimado:</span>
              <span className="text-xl font-bold text-gold">{formatPrice(totalPrice)}</span>
            </div>
            <a
              href={`https://wa.me/5511999999999?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Enviar Pedido via WhatsApp
            </a>
            <button onClick={clearCart} className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
