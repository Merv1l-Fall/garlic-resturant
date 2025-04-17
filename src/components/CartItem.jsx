
// CartItem.js
import { useCartStore } from '../data/cartStore'; // inam dorost
import './CartItem.css';

function CartItem({ item }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-600">
          {(item.quantity || 1)} × {item.price} kr
        </p>
      </div>
          {/*<button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:underline text-sm"
          >
          Ta bort
          </button>
          */}

    </div>
  );
}

export default CartItem;
