import React, { useState } from 'react';
import addMenuItemSchema from '../validation';
import "./AddMenuItem.css";
import useMenuStore from '../data/menuStore';
import { Link } from "react-router";
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
	const [touched, setTouched] = useState(false);
	const [ isItemAdded, setIsItemAdded] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFocus = () => {
        setTouched(true); // Set touched to true when any input is focused
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
			id: crypto.randomUUID(),
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
		setIsItemAdded(true)
		setTouched(false)
		const timeout = setTimeout(() => {
			setIsItemAdded(false)
		}, 5000)
	};

	const handleCancel = () => {
		console.log('Cancelled adding new dish');
		setFormData({
			title: '',
			description: '',
			ingredients: '',
			price: '',
			img: '',
		})
		setTouched(false)
	};

	return (
		<section className="add-menu-item">
			
			{isItemAdded ? (
				<div className='show-confirm'>
					<h1>Maträtt sparad!</h1>
					<button onClick={() => setIsItemAdded(false)} className='add-more-button'>Skapa en till?</button>
				</div>
			) : (
			<div className='show-form'>

			<h1>Ny maträtt</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>
					Titel
					<input
						id='title'
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<div className='error-message'>
					{errors.title && <p className="error">{errors.title}</p>}
					</div>
				</label>
				<label htmlFor='description'>
					Beskrivning:
					<textarea
						id='description'
						name="description"
						value={formData.description}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<div className='error-message'>
					{errors.description && <p className="error">{errors.description}</p>}
					</div>
				</label>
				<label htmlFor='ingredients'>
					Ingredienser:
					<textarea
						id='ingredients'
						name="ingredients"
						value={formData.ingredients}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<div className='error-message'>
					{errors.ingredients && <p className="error">{errors.ingredients}</p>}
					</div>
				</label>
				<label htmlFor='price'>
					Pris:
					<input
						id='price'
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<div className='error-message'>
					{errors.price && <p className="error">{errors.price}</p>}
					</div>
				</label>
				<label htmlFor='img'>
					Länk till en bild:
					<input
						id='img'
						type="text"
						name="img"
						value={formData.img}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<div className='error-message'>
					{errors.img && <p>{errors.img}</p>}
					</div>
				</label>
				<div className="form-actions">
					<button className='cancel-button' type="button" onClick={handleCancel} disabled={!touched}>
						Rensa
					</button>
					<button
					 className='submit-button'
					  type="submit"
					   disabled={!touched}>
						Lägg till
					   </button>
				</div>
			</form>
			</div>)}
			
			<Link to="/edit-menu">
			<button className='return-button'>Tillbaka till admin-menyn</button>
			</Link>
		</section>
	);
};

export default AddMenuItem;