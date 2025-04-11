import { menuItems } from "../data/menuItems";
import './Menu.css';

const Menu = () => {
  return (
	<div className="menu">
	  <h1>Menu</h1>
	  <ul>
	  {menuItems.map((item) => (
		  <li key={item.id}>
			<h2>{item.title}</h2>
			<p>{item.ingredients}</p>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default Menu;