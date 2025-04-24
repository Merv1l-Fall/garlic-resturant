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
		setConfirmRemove(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setFormData(item);
		setErrors({});
		setTimeout(() => {
			setShouldRenderEditForm(false);
		}, 300);
	};

	const handleSave = () => {
		//Joi doesn't expect id so id is excluded from verification
		const { id, ...dataToValidate } = formData;

		// Validate
		const { error } = addMenuItemSchema.validate(dataToValidate, {
			abortEarly: false,
		});
		if (error) {
			console.log(error);
			const validationErrors = {};
			error.details.forEach((detail) => {
				validationErrors[detail.path[0]] = detail.message;
			});
			setErrors(validationErrors);
			return;
		}

		onEdit(formData);
		setErrors({});
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
		if (confirmRemove) {
			onRemove(item.id);
			clearTimeout(removeTimeout);
		} else {
			setConfirmRemove(true);
			const timeout = setTimeout(() => {
				setConfirmRemove(false);
			}, 3000);
			setRemoveTimeout(timeout);
		}
	};

	return (
		<div className={`menu-item ${isEditing ? "editing" : ""}`}>
			{shouldRenderEditForm ? (
				<div className={`edit-form ${isEditing ? "open" : "close"}`}>
					<label htmlFor="title">Titel</label>
					<input
						id="title"
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.title && <p className="error">{errors.title}</p>}
					</div>
					
					<label htmlFor="description">Beskrivning</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.description && <p className="error">{errors.description}</p>}
					</div>
					
					<label htmlFor="ingredients">Ingredienser</label>
					<textarea
						id="ingredients"
						name="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.ingredients && <p className="error">{errors.ingredients}</p>}
					</div>
					
					<label htmlFor="price">Pris</label>
					<input
						id="price"
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.price && <p className="error">{errors.price}</p>}
					</div>
					
					<label htmlFor="img">Bild URL</label>
					<input
						id="img"
						type="text"
						name="img"
						value={formData.img}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.img && <p>{errors.img}</p>}
					</div>
					
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
							className={confirmRemove ? "confirm-remove" : ""}
							onClick={handleRemoveClick}
						>
							{confirmRemove ? "Är du säker?" : "Ta bort"}
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default MenuItem;
