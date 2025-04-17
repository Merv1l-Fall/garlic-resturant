import React, { useState } from "react";
import addMenuItemSchema from "../validation";
import "./EditMenuItem.css";

const MenuItem = ({ item, onEdit, onRemove }) => {
    const [isEditing, setIsEditing] = useState(false);
	const [shouldRenderEditForm, setShouldRenderEditForm] = useState(false);
    const [formData, setFormData] = useState(item);
	const [errors, setErrors] = useState({});
	const [confirmRemove, setConfirmRemove] = useState(false);
    const [removeTimeout, setRemoveTimeout] = useState(null);

    const handleEditClick = () => {
		setIsEditing(true);
		setShouldRenderEditForm(true);
		setConfirmRemove(false)
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(item);
		setTimeout(() => {
			setShouldRenderEditForm(false);
		  }, 300);
    };

    const handleSave = () => {
		//Joi doesn't expect id so id is excluded from verification
		const {id, ...dataToValidate} = formData;
        // Validate
        const { error } = addMenuItemSchema.validate(dataToValidate, { abortEarly: false });
        if (error) {
			console.log(error)
            const validationErrors = {};
            error.details.forEach((detail) => {
                validationErrors[detail.path[0]] = detail.message;
            });
            setErrors(validationErrors);
            return;
        }
        onEdit(formData);
        setIsEditing(false);
        setTimeout(() => {
            setShouldRenderEditForm(false);
        }, 300);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

	const handleRemoveClick = () => {
		if(confirmRemove) {
			onRemove(item.id)
			clearTimeout(removeTimeout)
		} else {
			setConfirmRemove(true)
			const timeout = setTimeout(() => {
				setConfirmRemove(false);
			}, 3000);
			setRemoveTimeout(timeout);
		}
	}

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
                    {errors.title && <p className="error">{errors.title}</p>}
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                    />
                    {errors.ingredients && <p className="error">{errors.ingredients}</p>}
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                    />
                    {errors.img && <p className="error">{errors.img}</p>}
                    <div className="menu-actions">
                        <button className="save-btn" onClick={handleSave}>
                            Spara
                        </button>
                        <button className="cancel-btn" onClick={handleCancel}>
                            Avbryt
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <p>{item.title}</p>
                    <div className="menu-actions">
                        <button onClick={handleEditClick}>Ändra</button>
                        <button
						className={confirmRemove ?  "confirm-remove" : ""}
						onClick={handleRemoveClick}>
							{confirmRemove ? "Är du säker?" : "Ta bort"}
						</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MenuItem;