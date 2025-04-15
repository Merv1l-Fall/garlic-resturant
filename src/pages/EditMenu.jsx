import React, { useState } from 'react';
import "./EditMenu.css"

const EditMenu = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Vitlöksräkor' },
        { id: 2, name: 'Vitlöksräkor' },
        { id: 3, name: 'Vitlöksräkor' },
        { id: 4, name: 'Vitlöksräkor' },
    ]);

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
                        <p>{item.name}</p>
                        <div className="menu-actions">
                            <button onClick={() => handleEdit(item.id)}>Ändra</button>
                            <button onClick={() => handleRemove(item.id)}>Ta bort</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-button" onClick={handleAddNew}>
                Lägg till ny rätt
            </button>
        </section>
    );
};

export default EditMenu;