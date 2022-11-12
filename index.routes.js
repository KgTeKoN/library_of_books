const express = require('express');
const routes = express.Router();
const auth = require('./src/authorization/authorization.routes')

routes.use('/api/v1', auth);

module.exports = routes;
