
// cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],  // tom varukorg
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Om produkten redan finns, uppdatera kvantiteten
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        // Om produkten inte finns, lägg till den
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
}));

export { useCartStore };
