import { useCartStore } from "../data/cartStore"; 
import CartItem from "../components/CartItem"; 
import { Link } from "react-router"; 
import './cart.css'; 

function Cart() { 
  const cart = useCartStore((state) => state.cart); 
  const increaseQuantity = useCartStore((state) => state.increaseQuantity); 
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity); 
  const removeFromCart = useCartStore((state) => state.removeFromCart); 

  const total = cart.reduce( 
    (sum, item) => sum + (item.price * (item.quantity || 1)), 
    0 
  ); 

  const handleIncrease = (itemId) => { 
    increaseQuantity(itemId); 
  }; 

  const handleDecrease = (itemId) => { 
    decreaseQuantity(itemId); 
  }; 

  const handleRemove = (itemId) => { 
    removeFromCart(itemId); 
  }; 

  return ( 
    <div className="cart-container"> 
      <h1 className="cart-title">Din beställning</h1> 

      {cart.length === 0 ? ( 
        <p className="empty-cart">En tom korg luktar inte mycket — använd tillbaka-knappen för att slänga i lite vitlök.</p> 
      ) : ( 
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <CartItem item={item} />
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button className="remove-item" onClick={() => handleRemove(item.id)}>
                  Ta bort
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      {cart.length > 0 && (
        <div className="cart-total">
          Totalt: {total} kr
        </div>
      )}

    <div className="cart-buttons">
      {cart.length > 0 && (
        <Link to="/checkout" className="button-style order-link">Beställ</Link>
      )}
      <Link to="/menu" className="button-style back-link">Tillbaka</Link>
    </div>


      {/*<p className="thank-you">Tack för din beställning!</p>*/}
      
    </div>
  ); 
}

export default Cart;

