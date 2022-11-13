const express = require('express');
const routes = express.Router();
const auth = require('./src/authorization/authorization.routes')
const CRUD = require('./src/CRUD/crud.routes')

routes.use('/api/v1', auth, CRUD);

module.exports = routes;
