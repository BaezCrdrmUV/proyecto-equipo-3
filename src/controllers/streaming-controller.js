
var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs')


const getSong = async(req, res) =>{
   var file = path.join(songDir, 'GimmeLove', 'GimmeLove' + '.m3u8');
   console.log(file);
   res.writeHead(200, {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
      'Content-Type': 'application/vnd.apple.mpegurl'
    });
    fs.createReadStream(file).pipe(res);
};


module.exports = {getSong};
