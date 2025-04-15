import { menuItems } from "../data/menuItems";
import './Menu.css';
import { Link, useParams } from 'react-router'

const Menu = () => {
  return (
	<div className="menu">
	  <h1>Menu</h1>
	  <ul>
	  {menuItems.map((item) => (
		  <li key={item.id}>
			<h2>{item.title}</h2>
			<p>{item.ingredients}</p>
			<p className="price">{item.price} kr</p>
			<Link to={`/menu/${item.id}`} className="details-link">Details</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default Menu;