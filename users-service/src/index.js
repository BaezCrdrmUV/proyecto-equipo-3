const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/user-routes');

dotenv.config();

app.use(express.json());


app.use(routes);

const PORT = process.env.POR || 3000;



mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log("conexión creada");
      app.listen(PORT, function(){
        console.log("server running");
    });

  }).catch(Error => {
      console.log("mongo error", Error);
  });
