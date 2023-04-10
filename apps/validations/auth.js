const Joi = require('joi');

const registerValidator = (data) => {
    const rule = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        useremail: Joi.string().min(3).max(50).required().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
        fullname: Joi.string(),
    })

    return rule.validate(data);
}

module.exports.registerValidator = registerValidator;