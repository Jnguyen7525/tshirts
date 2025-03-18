"use client";

import { create } from "zustand";

// Define types
type CartItem = {
  productId: string;
  name: string;
  price: string;
  selectedSize: string | null;
  selectedColor: string | null;
  quantity: number; // Added quantity field
};

type StoreState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (productId: string, quantity: number) => void; // Update quantity function
  removeFromCart: (productId: string) => void;
};

// Create Zustand store
const useCartStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // Check if the product is already in the cart
      const existingItem = state.cart.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItem) {
        // If already in the cart, update its quantity
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.productId === item.productId
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      } else {
        // If not, add the new item
        return {
          cart: [...state.cart, item],
        };
      }
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    })),
}));

export { useCartStore };
