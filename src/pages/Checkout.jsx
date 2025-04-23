import "./checkout.css";
import { useCartStore } from "../data/cartStore"; 
import { useState } from "react";
import { useNavigate } from "react-router";


const Checkout = () => {
    const navigate = useNavigate();
    const cart = useCartStore((state) => state.cart);
    let total = cart.reduce( 
        (sum, item) => sum + (item.price * (item.quantity || 1)), 
        0 
      ); 
    let moms = total * 0.25;
    let subtotal = total - moms;

    // SÄTT DENNA I KNAPPEN PÅ CART!!!
    const [orderNr, setOrderNr] = useState(Math.floor(Math.random()*100))


    const handleNewOrder = () => {
        useCartStore.setState({ cart: [] });
        navigate("/menu");
    }
        
    return (
        <div className="checkout">
            <div className="receipt">

                <h2>Tack för din beställning</h2>
                <h4>Ditt Ordernummer:</h4>
                <h1>{orderNr}</h1>
                <div className="items">
                    <div className="items-header">
                        <p>Beställning</p>
                        <p>Antal</p>
                        <p>Pris</p>
                    </div>
                    {cart.map(item=>(                    
                    <div className="item" key={item.title}>
                        <p>{item.title}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price*item.quantity}</p>
                    </div>))}

                </div>
                <div className="total">
                    <div>
                        <p>subtotal: {subtotal}kr</p>
                        <p>moms: {moms}kr</p>
                    </div>
                    <h3>Total: {total}kr</h3>
                </div>
                <button onClick={handleNewOrder}>Ny beställning</button>
            </div>
        </div>
    );
};

export default Checkout;
