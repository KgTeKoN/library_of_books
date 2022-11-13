const express = require('express');
const routes = express.Router();
const auth = require('./src/authorization/authorization.routes')
const CRUD = require('./src/CRUD/crud.routes')
const status = require('./src/Status/status.route')

routes.use('/api/v1', auth, CRUD, status);

module.exports = routes;
