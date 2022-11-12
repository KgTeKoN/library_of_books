const Joi = require('joi');

const signUpSchema = Joi.object({
    username: Joi.string().min(3).max(40).required(),
    password: Joi.string().min(6).max(64).required(),
    first_name: Joi.string().alphanum().min(6).max(64).required(),
    last_name: Joi.string().alphanum().min(6).max(64).required(),
})

const signInSchema = Joi.object({
    username: Joi.string().min(3).max(40).required(),
    password: Joi.string().min(6).max(64).required()
});

module.exports = { signUpSchema, signInSchema };
