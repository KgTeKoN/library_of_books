const express = require('express');
const routes = express.Router();
const { controllerSignUp, generateToken } = require('./authorization.controller');
const { signUpValidator, signInValidator } = require('./validate.inputData');

routes.post('/v1/auth/sign-up', signUpValidator, controllerSignUp);
routes.post('/v1/auth/sign-in', signInValidator, generateToken)

module.exports = routes
