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
    imageUrl: Joi.string()
        .uri({ scheme: ['http', 'https'] })
        // .regex(/\.(jpeg|jpg|gif|png)$/i)
        .required()
        .messages({
            'string.empty': 'Bildlänk är obligatoriskt.',
            'string.uri': 'Bildlänk måste vara en giltig URL.',
            // 'string.pattern.base': 'Bildlänk måste vara en URL till en bild (jpeg, jpg, gif, png).',
        }),
});

export default addMenuItemSchema;