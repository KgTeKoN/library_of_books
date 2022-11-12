const port = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();
app.use(jsonParser);

app.listen(port, () => console.log('The server has started'));
