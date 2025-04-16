import useMenuStore from "../data/menuStore";
import "./Menu.css";
import { useState, useRef, useEffect } from "react";
import { useCartStore } from "../data/cartStore";


const Menu = () => {
	const {menuItems, loadMenuItems, removeMenuItem} = useMenuStore();
	const addToCart = useCartStore((state) => state.addToCart);
	const [selectedItem, setSelectedItem] = useState(null);
	//const detailsRefs = useRef({});


    const handleClick = (item) => {
		console.log("Clicked item:", item); 
        setSelectedItem(item); // Sätt det valda objektet i state
		console.log("Selected item state:", item); 
    };
	/*
	const handleOutsideClick = (event) => {
		if (
			selectedItem &&
			detailsRefs.current[selectedItem.id] &&
			detailsRefs.current[selectedItem.id].contains &&
			!detailsRefs.current[selectedItem.id].contains(event.target)
		) {
			setSelectedItem(null); // Stäng detaljerna om klicket är utanför
		}
	};
	
	


	useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [selectedItem]); */

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
							<button onClick={() => addToCart(item)} className="ingredient-button">Lägg till i beställning</button>
							<div>
							<button onClick={() => handleClick(item)}>Tryck för mer info</button>
							{selectedItem?.id === item.id && (
                                <div
                                    className="item-details"
                                   /* ref={(el) => (detailsRefs.current[item.id] = el)}*/
                                >
                                    <h2>Ingredienser</h2>
                                    <p>{selectedItem.ingredients}</p>
									
									<button className="ingredient-button">Stäng</button>
									
									
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
