import React from 'react';
import './Header.css';
import GarlicIcon from './lucide-lab_garlic.png';
import CartIcon from './cart.png';
import { Link, useLocation } from 'react-router';
import { useCartStore } from "../data/cartStore";  

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const location = useLocation();
  const showCartCount = location.pathname === "/menu" || location.pathname === "/cart";

  const isSticky = location.pathname === "/menu"; //bara sticky på menu

  return (
    <header className={`header ${isSticky ? "sticky-header" : ""}`}>
      <div className="header-left">
        <Link to="/" className="logo-link">  
          <img src={GarlicIcon} alt="Garlic Icon" className="garlic-icon" />
          <h1>KLYFTAN</h1>
        </Link>
      </div>

      <Link to="/cart" className="cart-link">
        <img src={CartIcon} alt="Cart Icon" className="cart-icon" />
        {showCartCount && totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </Link>
    </header>
  );
};

export default Header;
