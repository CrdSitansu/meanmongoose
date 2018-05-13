var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var path = require("path");
var http = require("http");
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      var filename = file.originalname;
      var filenameparts = filename.split('.');
      cb(null, file.fieldname + '-' + Date.now() + '.' +filenameparts[1])
    }
  });
var upload = multer({ storage: storage }).single('files');



var api = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/',api);

app.get('*'), (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => console.log("server is running"));