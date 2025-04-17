import Joi from 'joi';

const addMenuItemSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Du måste ge maträtten en titel',
    }),
    description: Joi.string().required().messages({
        'string.empty': 'Du måste skriva en beskrivning',
    }),
    ingredients: Joi.string().required().messages({
        'string.empty': 'Du måste fylla i ingredienser.',
    }),
	price: Joi.alternatives().try(
		Joi.number().greater(0).messages({
			'number.base': 'Priset måste vara ett nummer.',
			'number.greater': 'Pris kan inte vara 0.',
		}),
		Joi.any().invalid('').messages({
			'any.invalid': 'Du måste fylla i ett pris'
		})
	).required(),
	img: Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .pattern(/\.(jpeg|jpg|gif|png|webp|svg)$/i)
    .required()
    .messages({
        'string.empty': 'Du måste länka en bild.',
        'string.uri': 'Länken måste vara en giltig URL.',
        'string.pattern.base': 'Länken måste gå till en bildfil (jpg, png, gif, etc).',
    }),
});

export default addMenuItemSchema;