import React, { useState } from 'react';
import Joi from 'joi';
import addMenuItemSchema from '../validation';
import "./AddMenuItem.css";

const AddMenuItem = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        price: '',
        imageUrl: '',
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
        const validationErrors = validateForm();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        console.log('New dish added:', formData);
        // TODO: Send data to the API
    };

    const handleCancel = () => {
        console.log('Cancelled adding new dish');
        // TODO: Navigate back or reset the form
    };

    return (
        <section className="add-menu-item">
            <h1>Ny maträtt</h1>
            <form onSubmit={handleSubmit}>
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
                    <button type="button" onClick={handleCancel}>
                        ångra
                    </button>
                    <button type="submit">Lägg till</button>
                </div>
            </form>
        </section>
    );
};

export default AddMenuItem;