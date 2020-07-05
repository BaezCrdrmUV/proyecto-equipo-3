const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes/list-routes');

dotenv.config();

app.use(express.json());


app.use(routes);

const PORT = process.env.PORT || 4000;



mongoose.set('useFindAndModify', false);
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log("conexión creada");
      app.listen(PORT, function(){
        console.log("server running on: "+ PORT);
    });

  }).catch(Error => {
      console.log("mongo error", Error);
  });