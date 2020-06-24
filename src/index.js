const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
global.songDir = path.resolve('../songs');

const PORT = 3000;

app.use(cors);
app.use(express.static(songDir));

app.listen(PORT, function(){
  console.log('Listening on port: ' + PORT);
});