import { create } from "zustand";

const useLoginStore = create((set) => ({
    admin: false,
    addNew:false,
    toggleAdmin: () => set((state) => ({ admin: !state.admin })),
    toggleAdd: () => set((state) => ({ addNew: !state.addNew })),
}));

export { useLoginStore };
