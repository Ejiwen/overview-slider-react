const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/styles', (req, res) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/25167/styles`,
      {
        headers: {
          Authorization: process.env.Authorization,
        },
      }
    )
    .then((result) => res.send(result.data));
});

app.get('/product', (req, res) => {
  axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/25167`, {
      headers: {
        Authorization: process.env.Authorization,
      },
    })
    .then((result) => res.send(result.data));
});

app.listen(3000, () => console.log('SERVER IS LISTENING NOW ... !!!'));
