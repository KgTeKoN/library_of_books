const express = require('express');
const routes = express.Router();
const { getStatus, changeStatus } = require('./status.controller');

routes.get('/get-status', getStatus);
routes.patch('/change-status', changeStatus);

module.exports = routes;
