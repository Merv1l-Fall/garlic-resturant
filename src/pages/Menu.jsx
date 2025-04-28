import useMenuStore from "../data/menuStore";
import "./Menu.css";
import { useState } from "react";
import { useCartStore } from "../data/cartStore";


const Menu = () => {
	const {menuItems, loadMenuItems, removeMenuItem} = useMenuStore();
	const addToCart = useCartStore((state) => state.addToCart);
	const [selectedItem, setSelectedItem] = useState(null);
	


    const handleClick = (item) => {
        setSelectedItem(item); 
    };
	

    return (
        <div className="menu">
            <h1>MENY</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <div className="text-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
							<p className="price">{item.price} kr</p>
							<button onClick={() => addToCart(item)} className="order-button">Lägg till i beställning</button>
							<div className="ingredient-container">
							<button className="ingredient-button" onClick={() => handleClick(item)}>Tryck för mer info</button>
							{selectedItem?.id === item.id && (
                                <div className="item-details">
                                    <h2 className="ingredient-header">Ingredienser</h2>
                                    <p>{selectedItem.ingredients}</p>
									<button className="close-button" onClick={() => setSelectedItem(null)}>Stäng</button>
                                </div>
                            )}
							</div>
                        </div>
                        <div className="img-content">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
