import Joi from 'joi';

const addMenuItemSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Titel är obligatoriskt.',
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Beskrivning är obligatoriskt.',
    }),
    ingredients: Joi.string().required().messages({
        'string.empty': 'Ingredienser är obligatoriskt.',
    }),
    price: Joi.number().greater(0).required().messages({
        'number.base': 'Pris måste vara ett nummer.',
        'number.greater': 'Pris kan inte vara 0.',
        'any.required': 'Pris är obligatoriskt.',
    }),
    img: Joi.string().required().messages({
            'string.empty': 'Bildlänk är obligatoriskt.',
        }),
});

export default addMenuItemSchema;