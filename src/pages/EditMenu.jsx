import { Link } from "react-router";
import useMenuStore from '../data/menuStore';
import MenuItem from "../components/EditMenuItem";
import "./EditMenu.css";

const EditMenu = () => {
    const {menuItems, removeMenuItem, editMenuItem} = useMenuStore();

	const handleEdit = (updatedItem) => {
        editMenuItem(updatedItem);
    };

	const handleRemove = (id) => {
		removeMenuItem(id)
	};

	return (
        <section className="edit-menu">
            <Link to="/add-menu-item">
                <button className="add-button">Lägg till ny rätt</button>
            </Link>
            <h1>Meny</h1>
            <div className="menu-list">
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        onEdit={handleEdit}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
			<Link to="/#">
            	<button className="back-button">Logga ut</button>
			</Link>
        </section>
    );
};

export default EditMenu;