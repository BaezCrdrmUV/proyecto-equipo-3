const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/download-routes');
const fs = require('fs');
global.songDir = path.resolve('../songs');


app.use(express.json());
app.use(routes);

const PORT = 3000;
app.listen(PORT, function(){
  console.log("server running");
});