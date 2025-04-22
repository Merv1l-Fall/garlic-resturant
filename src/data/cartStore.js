import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],  // tom varukorg

  // Lägg till varor i varukorgen
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Om varan finns, öka antalet
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

  // Ta bort från varukorgen
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  // Öka antal i varukorgen
  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // Minska antal i varukorgen
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0), // Ta bort produkt om man klickar bort alla
    })),
}));

export { useCartStore };
