import { create } from "zustand";
import { loadMenu, saveMenu } from "./fetchMenu";

const useMenuStore = create((set, get) => ({
    menuItems: [],

    loadMenuItems: async () => {
        try {
			const data = await loadMenu();
			set({ menuItems: data });
		} catch (error) {
			console.error("fel vid laddning av meny " + error);
		}
	},

    saveMenuItem: async (newItem) => {
        try {
            const latestMenuItems = await loadMenu();

            const updatedMenuItems = [...latestMenuItems, newItem];

            set({ menuItems: updatedMenuItems });
			
            await saveMenu(updatedMenuItems);
        } catch (error) {
            console.error("fel vid sparande av meny " + error);
        }
    },

	editMenuItem: async (updatedItem) => {
		try {
			const latestMenuItems = await loadMenu();
			
			const updatedMenuItems = latestMenuItems.map((item) =>
				item.id === updatedItem.id ? updatedItem : item
			);
	
			set({ menuItems: updatedMenuItems });
			
			await saveMenu(updatedMenuItems);
		} catch (error) {
			console.error("fel vid uppdatering av meny " + error);
		}
	},

    removeMenuItem: async (id) => {
        set((state) => ({
            menuItems: state.menuItems.filter((item) => item.id !== id),
        }));
        try {
            const { menuItems } = get();
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