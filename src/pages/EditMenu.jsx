import React, { useEffect, useState } from 'react';
import "./EditMenu.css"

import { saveMenu, loadMenu } from '../data/fetchMenu';

const EditMenu = () => {
    const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		loadMenu(setMenuItems);
		// console.log(menuItems)
	}, []);

    const handleEdit = (id) => {
        console.log(`Edit item with id: ${id}`);
        // Add logic for editing the item
    };

    const handleRemove = (id) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    const handleAddNew = () => {
        console.log('Add new dish');
        // Add logic for adding a new dish
    };

    return (
        <section className="edit-menu">
            <button className="back-button">TILLBAKA</button>
            <div className="menu-list">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <p>{item.title}</p>
                        <div className="menu-actions">
                            <button onClick={() => handleEdit(item.id)}>Ändra</button>
                            <button onClick={() => handleRemove(item.id)}>Ta bort</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-button" onClick={saveMenu}>
                Lägg till ny rätt
            </button>
        </section>
    );
};

export default EditMenu;