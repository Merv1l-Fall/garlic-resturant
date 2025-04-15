import React, { useState } from 'react';
import addMenuItemSchema from '../validation';
import "./AddMenuItem.css";
import useMenuStore from '../data/menuStore';
// import { saveMenu } from '../data/fetchMenu';

const AddMenuItem = () => {
	const {saveMenuItem} = useMenuStore()
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
	
		// Validate the form before submitting
		const validationErrors = validateForm();
		if (validationErrors) {
			setErrors(validationErrors);
			console.log("failed to add item", validationErrors)
			return;
		}
	
		// Add the new item to the store or API
		const newMenuItem = {
			...formData,
			id: crypto.randomUUID(), // Generate a unique ID for the new item
		};
	
		saveMenuItem(newMenuItem);
	
		// Reset the form after submission
		setFormData({
			title: '',
			description: '',
			ingredients: '',
			price: '',
			img: '',
		});
	
		setErrors({});
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
					<div className='error-message'>
					{errors.title && <p className="error">{errors.title}</p>}
					</div>
				</label>
				<label>
					Beskrivning:
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.description && <p className="error">{errors.description}</p>}
					</div>
				</label>
				<label>
					Ingredienser:
					<textarea
						name="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.ingredients && <p className="error">{errors.ingredients}</p>}
					</div>
				</label>
				<label>
					Pris:
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.price && <p className="error">{errors.price}</p>}
					</div>
				</label>
				<label>
					Bildlänk:
					<input
						type="text"
						name="img"
						value={formData.img}
						onChange={handleChange}
					/>
					<div className='error-message'>
					{errors.img && <p>{errors.img}</p>}
					</div>
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