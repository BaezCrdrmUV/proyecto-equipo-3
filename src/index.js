const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/upload-routes');
global.songDir = path.resolve('/home/davisbd/Escritorio/proyecto-equipo-3/songs');


app.use(express.json());
app.use(routes);

const PORT = 3000;


console.log("conexión creada");
app.listen(PORT, function(){
  console.log("server running");
});
