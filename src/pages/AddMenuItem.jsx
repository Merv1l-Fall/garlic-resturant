import React, { useState } from 'react';
import addMenuItemSchema from '../validation';
import "./AddMenuItem.css";
import useMenuStore from '../data/menuStore';
// import { saveMenu } from '../data/fetchMenu';

const AddMenuItem = () => {
	const {addMenuItem} = useMenuStore()
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		ingredients: '',
		price: '',
		img: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateForm = () => {
		const { error } = addMenuItemSchema.validate(formData, { abortEarly: false });
		if (!error) return null;

		const validationErrors = {};
		error.details.forEach((detail) => {
			validationErrors[detail.path[0]] = detail.message;
		});
		return validationErrors;
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        addMenuItem(formData); // Add the new item to the store
        setFormData({
            title: '',
            description: '',
            ingredients: '',
            price: '',
            img: '',
            id: Crypto.randomUUID(),
        });
    };

	const handleCancel = () => {
		console.log('Cancelled adding new dish');
		// TODO: Navigate back or reset the form
	};

	return (
		<section className="add-menu-item">
			<h1>Ny maträtt</h1>
			<form>
				<label>
					Titel
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
					{errors.title && <p className="error">{errors.title}</p>}
				</label>
				<label>
					Beskrivning:
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
					{errors.description && <p className="error">{errors.description}</p>}
				</label>
				<label>
					Ingredienser:
					<textarea
						name="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
					/>
					{errors.ingredients && <p className="error">{errors.ingredients}</p>}
				</label>
				<label>
					Pris:
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
					/>
					{errors.price && <p className="error">{errors.price}</p>}
				</label>
				<label>
					Bildlänk:
					<input
						type="text"
						name="imageUrl"
						value={formData.imageUrl}
						onChange={handleChange}
					/>
					{errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
				</label>
				<div className="form-actions">
					<button className='cancel-button' type="button" onClick={handleCancel}>
						ångra
					</button>
					<button className='submit-button' type="submit" onClick={handleSubmit}>Lägg till</button>
				</div>
			</form>
		</section>
	);
};

export default AddMenuItem;