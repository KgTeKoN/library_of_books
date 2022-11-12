const port = require('./config.js');
const express = require('express');
const routes = require('./index.routes.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();
app.use(jsonParser);
app.use(routes);

app.listen(port, () => console.log('The server has started'));
