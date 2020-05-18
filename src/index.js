const express = require('express');
const app = express();
const routes = require('./routes/upload-routes.js');


app.use(express.json());
app.use(routes);