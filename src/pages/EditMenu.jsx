import React, { useEffect, useState } from 'react';
import { Link } from "react-router";
import useMenuStore from '../data/menuStore';
import "./EditMenu.css";

const EditMenu = () => {
    const {menuItems, loadMenuItems, removeMenuItem} = useMenuStore();

	useEffect(() => {
		loadMenuItems();
		// console.log(menuItems)
	}, []);

	const handleRemove = (id) => {
		removeMenuItem(id)
	};

    return (
        <section className="edit-menu">
            <button className="back-button">TILLBAKA</button>
            <div className="menu-list">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <p>{item.title}</p>
                        <div className="menu-actions">
                            <button onClick={() => console.log(item.id, "edit")}>Ändra</button>
                            <button onClick={() => handleRemove(item.id)}>Ta bort</button>
                        </div>
                    </div>
                ))}
            </div>
			<Link to="/AddMenuItem">
            <button className="add-button">
                Lägg till ny rätt
            </button>
			</Link>
        </section>
    );
};

export default EditMenu;