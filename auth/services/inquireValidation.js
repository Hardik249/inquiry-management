console.log('services loginValidation')
const Joi = require('joi')
const inquireSchema = require('../schema/inquireSchema');


const loginValidation = async (req, res, next) => {
	const joiSchema = Joi.object({
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
	})
	try {
	    const value = await joiSchema.validate(req.body);
	    return value;
	}
	catch (error) {
		return error;
	}
}
module.exports = loginValidation;