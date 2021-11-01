require('newrelic');
const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var controllers = require('./controllers');

app.get(`/products/:product_id`, controllers.products.getOne);

app.get(`/products/:product_id/related`, controllers.related.getAll);

app.get(`/products/:product_id/styles`, controllers.styles.getStyles);

app.get('/products', controllers.products.getAll);

app.listen(3000, console.log('the server is running now on port 3000 .... '));
