const express = require('express');
const consign = require('consign');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//configurando Parser para futuros POSTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign().include('routes').into(app);

app.listen(port);
console.log('API FUNCIONANDO!');