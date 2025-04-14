import React from 'react';
import './Header.css';
import GarlicIcon from './lucide-lab_garlic.png'; 

const Header = () => {
  return (
    <header className="header">
      <img src={GarlicIcon} alt="Garlic Icon" className="garlic-icon" />
      <h1>KLYFTAN</h1>
    </header>
  );
};

export default Header;


