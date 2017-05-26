var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var conne=require('./connections/dbconnection');
var dba=conne.con1.connection;
dba.on('error', console.error.bind(console, 'connection error:'));
dba.once('open', function() {
console.log('connection open from mongoose1');
});
var dbb=conne.con2.connection;
dbb.on('error', console.error.bind(console, 'connection error:'));
dbb.once('open', function() {
console.log('connection open from mongoose2');
});
var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', api);
app.use('/', index);



module.exports = app;
