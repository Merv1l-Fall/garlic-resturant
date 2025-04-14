import React, { useState } from 'react';
import "./AddMenuItem.css";

const AddMenuItem = () => {
    const [formData, setFormData] = useState({
        title: 'Maträtt',
        description: 'En beskrivining av maträtten och vad man kan förvänta sig',
        ingredients: 'Maträttens Ingredienser',
        price: 0,
        imageUrl: 'URL till bild',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New dish added:', formData);
        // TODO send data to the API
    };

    const handleCancel = () => {
        console.log('Cancelled adding new dish');
        // TODO navigate back or reset the form
    };

	return (
		<section className="add-menu-item">
			<h1>Ny maträtt</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">
					Titel
				</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleChange}
				/>

				<label htmlFor="description">
					Beskrivning:
				</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>

				<label htmlFor="ingredients">
					Ingredienser:
				</label>
				<textarea
					id="ingredients"
					name="ingredients"
					value={formData.ingredients}
					onChange={handleChange}
				/>

				<label htmlFor="price">
					Pris:
				</label>
				<input
					type="number"
					id="price"
					name="price"
					value={formData.price}
					onChange={handleChange}
				/>

				<label htmlFor="imageUrl">
					Bildlänk:
				</label>
				<input
					type="text"
					id="imageUrl"
					name="imageUrl"
					value={formData.imageUrl}
					onChange={handleChange}
				/>

				<div className="form-actions">
					<button type="button" className='cancel-button' onClick={handleCancel}>
						ångra
					</button>
					<button type="submit" className='submit-button'>
						Lägg till
					</button>
				</div>
			</form>
		</section>
	);
};

export default AddMenuItem;