const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/upload-routes');
const queue = require('./queue.js')
const dotenv = require('dotenv');
global.songDir = path.resolve('../songs');
global.imageDir = path.resolve('../images');
const queueTime = 120000;

dotenv.config();

app.use(express.json());
app.use(routes);

const PORT = 3000;

var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
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

setInterval(queue.queueConvertion, queueTime);