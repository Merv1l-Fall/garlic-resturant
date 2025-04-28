import useMenuStore from '../data/menuStore';
import { useLoginStore } from "../data/loginStore.js";
import MenuItem from "../components/EditMenuItem";
import "./EditMenu.css";

const EditMenu = () => {
    const {menuItems, removeMenuItem, editMenuItem} = useMenuStore();
    const toggleAdmin = useLoginStore((state) => state.toggleAdmin);
    const toggleAdd = useLoginStore((state) => state.toggleAdd);

	const handleEdit = (updatedItem) => {
        editMenuItem(updatedItem);
    };

	const handleRemove = (id) => {
		removeMenuItem(id)
	};

    const handleLogOut = ()=>{
        toggleAdmin();
    }

    const handleAddNew = () =>{
        toggleAdd()
        console.log("toggladeadd")
    }

	return (
        <section className="edit-menu">
                <button className="add-button" onClick={handleAddNew}>Lägg till ny rätt</button>
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
            <button className="back-button" onClick={handleLogOut}>LOGGA UT</button>
        </section>
    );
};

export default EditMenu;