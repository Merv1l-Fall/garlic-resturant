import { create } from "zustand";
import { loadMenu, saveMenu } from "./fetchMenu";

const useMenuStore = create((set, get) => ({
	menuItems: [],

	loadMenuItems: async () => {
		try {
			await loadMenu((data) => set({ menuItems: data }));
		} catch (error) {
			console.error("fel vid laddning av meny " + error);
		}
	},

	AddMenuItem: async (newItem) => {
		set((state) => ({
			menuItems: [...state.menuItems, newItem],
		}));
		try {
			const { menuItems } = get();
			await saveMenu(menuItems);
		} catch (error) {
			console.error("fel vid sparande av meny " + error);
		}
	},

	removeMenuItem: async (id) => {
		set((state) => ({
			menuItems: state.menuItems.filter((item) => item.id !== id),
		}));
		try {
			const {menuItems} = get();
			await saveMenu(menuItems);
		} catch (error) {
			console.error("fel vid borttagning av meny " + error);
		}
	},

	saveMenuItems: async () => {
		try {
			const { menuItems } = get();
			await saveMenu(menuItems);
		} catch (error) {
			console.error("fel vid sparande av meny " + error);
		}
	},
}));

export default useMenuStore;