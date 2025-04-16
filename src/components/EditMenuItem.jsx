import React, { useState } from "react";
import "./EditMenuItem.css";

const MenuItem = ({ item, onEdit, onRemove }) => {
    const [isEditing, setIsEditing] = useState(false);
	const [shouldRenderEditForm, setShouldRenderEditForm] = useState(false);
	const [showViewMode, setShowViewMode] = useState(true);
    const [formData, setFormData] = useState(item);

    const handleEditClick = () => {
        setShowViewMode(false);
		setIsEditing(true);
		setShouldRenderEditForm(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(item);
		setTimeout(() => {
			setShouldRenderEditForm(false);
			setShowViewMode(true); // Wait for animation to finish
		  }, 300);
    };

    const handleSave = () => {
        onEdit(formData); // Pass updated data to parent
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={`menu-item ${isEditing ? "editing" : ""}`}>

            {shouldRenderEditForm ? (
                 <div className={`edit-form ${isEditing ? "open" : "close"}`}>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                    />
                    <div className="menu-actions">
                        <button className="save-btn" onClick={handleSave}>Spara</button>
                        <button className="cancel-btn" onClick={handleCancel}>Avbryt</button>
                    </div>
                <div/>
		</div>
            ) : (
                <>
                    <p>{item.title}</p>
                    <div className="menu-actions">
                        <button onClick={handleEditClick}>Ändra</button>
                        <button onClick={() => onRemove(item.id)}>Ta bort</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MenuItem;