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
	price: Joi.number().greater(0).messages({
		'number.base': 'Priset måste vara ett nummer.',
		'number.greater': 'Pris kan inte vara 0 eller mindre.',
		'any.reqired': 'Du måste fylla i ett pris',
	}),
	// img: Joi.string()
	// 	.uri({ scheme: [/https?/] })
	// 	.pattern(/\.(jpeg|jpg|gif|png|webp|svg)$/i)
	// 	.required()
	// 	.messages({
	// 		'string.empty': 'Du måste länka en bild.',
	// 		'string.uri': 'Länken måste vara en giltig URL.',
	// 		'string.pattern.base': 'Länken måste gå till en bildfil (jpg, png, gif, etc).',
	// 	}),
	img: Joi.string()
    .pattern(/^https?:\/\/.+/i)
    .pattern(/\.(jpeg|jpg|gif|png|webp|svg)$/i)
    .required()
    .messages({
        'string.empty': 'Du måste länka en bild.',
        'string.pattern.base': 'Länken måste börja med http eller https och gå till en bildfil (jpg, png, gif, etc).',
    }),
});

export default addMenuItemSchema;