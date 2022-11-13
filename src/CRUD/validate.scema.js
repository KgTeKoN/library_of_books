const Joi = require('joi');

const updateUserSchema = Joi.object({
    username: Joi.string().min(3).max(40),
    password: Joi.string().min(6).max(64),
    first_name: Joi.string().alphanum().min(3).max(64),
    last_name: Joi.string().alphanum().min(3).max(64)
})

const createBookSchema = Joi.object({
    title: Joi.string().min(1).max(100).required(),
    author: Joi.string().min(1).max(64).required(),
    year: Joi.number().min(-2022).max(2022).required()
})

const updateBookSchema = Joi.object({
    title: Joi.string().min(1).max(100),
    author: Joi.string().min(1).max(64),
    year: Joi.number().min(-2022).max(2022)
})

module.exports = { updateUserSchema, createBookSchema, updateBookSchema };
