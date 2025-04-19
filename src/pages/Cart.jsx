
import { useCartStore } from "../data/cartStore"; 
import CartItem from "../components/CartItem";
import { Link } from "react-router";




import './cart.css'; 

function Cart() {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Din beställning</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Din varukorg är tomt.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-total">
            Totalt: {total} kr
          </div>
		  <p className="thank-you">Tack för din beställning!</p>
		
         
        </>
      )}
    </div>
  );
}

export default Cart;
