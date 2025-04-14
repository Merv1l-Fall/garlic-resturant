import React from 'react';
import './Header.css';
import GarlicIcon from './lucide-lab_garlic.png';
import CartIcon from './cart.png';  
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={GarlicIcon} alt="Garlic Icon" className="garlic-icon" />
        <h1>KLYFTAN</h1>
      </div>
      <Link to="/cart">
        <img src={CartIcon} alt="Cart Icon" className="cart-icon" />
      </Link>
    </header>
  );
};

export default Header;



