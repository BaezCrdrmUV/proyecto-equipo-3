const express = require('express');
const app = express();
const path = require('path');
global.songDir = path.resolve('../songs');
const routes = require('./routes/streaming-routes.js')

// app.use(express.json());
// app.use(routes);

// const PORT = 3000;

// var mongoose = require("mongoose");
// mongoose.set('useFindAndModify', false);
// mongoose
// .connect("mongodb://localhost:27017/songs", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//     console.log("conexión creada");
//     app.listen(PORT, function(){
//       console.log("server running");
//   });
// }).catch(Error => {
//     console.log("mongo error", Error);
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.static(path.join(songDir)));

app.listen(3000);
console.log('Listening on Port 8000');