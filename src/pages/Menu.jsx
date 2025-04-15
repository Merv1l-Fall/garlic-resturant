// import { menuItems } from "../data/menuItems";
import './Menu.css';
import { Link, useParams } from 'react-router'

const Menu = () => {
  return (
	<div className="menu">
	  <h1>Menu</h1>
	  <ul>
	  {menuItems.map((item) => (
		  <li key={item.id}>
			<div className="text-content">
			<h2>{item.title}</h2>
			<p>{item.ingredients}</p>
			<Link to={`/menu/${item.id}`} className="details-link">Tryck för mer info</Link>
			</div>
			<div className="img-content">
			<p className="price">{item.price} kr</p>
			<img src={item.img} alt={item.title} />	
			</div>
		  </li>
		))}
	  </ul>
	</div>
  );
}


export default Menu;