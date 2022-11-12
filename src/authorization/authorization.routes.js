const express = require('express');
const routes = express.Router();
const { registration, generateToken } = require('./authorization.controller');
const { signUpValidator, signInValidator } = require('./validate.inputData');

routes.post('/auth/sign-up', signUpValidator, registration);
routes.post('/auth/sign-in', signInValidator, generateToken);

module.exports = routes
