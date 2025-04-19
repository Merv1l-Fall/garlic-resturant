

import { useCartStore } from '../data/cartStore'; 
import './CartItem.css';

function CartItem({ item }) {
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const increaseQuantity = useCartStore((state) => state.increaseQuantity);
	const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  
	return (
	  <div className="cart-item">
		<div>
		  <h2 className="cart-item-title">{item.title}</h2>
		  <p className="cart-item-info">{item.price} kr/st</p>
		  <div className="quantity-controls">
			<button onClick={() => decreaseQuantity(item.id)}>-</button>
			<span>{item.quantity || 1}</span>
			<button onClick={() => increaseQuantity(item.id)}>+</button>
		  </div>
		</div>
		<button onClick={() => removeFromCart(item.id)} className="remove-button">
		  Ta bort
		</button>
	  </div>
	);
  }
  
  export default CartItem;