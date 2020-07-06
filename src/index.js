const express = require('express');
const app = express();
const path = require('path');
global.songDir = path.resolve('../songs');
global.imagesDir = path.resolve('../images');

const PORT = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');	
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');	
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');	
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');	
  next();	
});
app.use(express.static(songDir));
app.use(express.static(imagesDir));


app.listen(PORT, function(){
  console.log('Listening on port: ' + PORT);
});