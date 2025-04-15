import { create } from "zustand";

const useLoginStore = create((set) => ({
    admin: false,
    toggleAdmin: () => set((state) => ({ admin: !state.admin })),
}));

export { useLoginStore };
