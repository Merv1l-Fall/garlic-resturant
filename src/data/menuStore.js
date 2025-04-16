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

    saveMenuItem: async (newItem) => {
        try {
            // Fetch the latest menu items from the API
            const latestMenuItems = await loadMenu();

            // Add the new item to the latest menu items
            const updatedMenuItems = [...latestMenuItems, newItem];

            // Update the local state
            set({ menuItems: updatedMenuItems });

            // Save the updated menu items to the API
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