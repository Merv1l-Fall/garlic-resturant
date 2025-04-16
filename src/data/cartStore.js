
// cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [
    {
      id: 1,
      title: "Vitlöksräkor (Gambas al Ajillo)",
      ingredients:
        "Spanska räkor stekta i olivolja med massor av vitlök, chili och persilja. Serveras ofta som tapas med bröd att doppa i den vitlöksdoftande oljan.",
      price: 109,
      img: "https://vivavinomat.se/wp-content/uploads/gambas-picantes.jpg",
      quantity: 1
    },
    {
      id: 2,
      title: "Vitlökssoppa (Sopa de Ajo)",
      ingredients:
        "En rustik spansk soppa gjord på rostad vitlök, buljong, bröd och ibland ägg. Mustig, värmande och full av smak.",
      price: 105,
      img: "https://vegomagasinet.se/wp-content/uploads/2025/03/56.jpg",
      quantity: 1
    },
  ],
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export { useCartStore };
