const express = require('express');
const routes = express.Router();
const { registration, generateToken, logout, refresh, activate } = require('./authorization.controller');
const { signUpValidator, signInValidator } = require('./validate.inputData');
const { accessTokenVerification, refreshTokenVerification } = require('./jwt.middleware')

routes.post('/auth/sign-up', signUpValidator, registration);
routes.post('/auth/sign-in', signInValidator, generateToken);
routes.get('/auth/logout', accessTokenVerification, logout);
routes.get('/auth/refresh', refreshTokenVerification, refresh)
routes.get('/auth/activate', accessTokenVerification, activate)

module.exports = routes
