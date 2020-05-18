const express = require('express');
const app = express();
const routes = require('./routes/upload-routes');


app.use(express.json());
app.use(routes);

const PORT = 3000;


console.log("conexión creada");
app.listen(PORT, function(){
  console.log("server running");
});
