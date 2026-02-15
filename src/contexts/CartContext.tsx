import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product, ProductVariant } from "@/data/products";

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  weight?: number; // kg for weight-based items
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, quantity: number, weight?: number) => void;
  removeItem: (productId: string, variantLabel: string) => void;
  updateQuantity: (productId: string, variantLabel: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product: Product, variant: ProductVariant, quantity: number, weight?: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.variant.label === variant.label);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.variant.label === variant.label
            ? { ...i, quantity: i.quantity + quantity, weight: weight || i.weight }
            : i
        );
      }
      return [...prev, { product, variant, quantity, weight }];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, variantLabel: string) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.variant.label === variantLabel)));
  }, []);

  const updateQuantity = useCallback((productId: string, variantLabel: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variantLabel);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId && i.variant.label === variantLabel
          ? { ...i, quantity }
          : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => {
    if (!i.variant.price) return sum;
    const multiplier = i.variant.unit === "kg" ? (i.weight || 1) : i.quantity;
    return sum + i.variant.price * (i.variant.unit === "kg" ? multiplier : i.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
