"use strict";

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var _require = require('./middlewares'),
    notFound = _require.notFound,
    errorHandler = _require.errorHandler;

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to Community API!'
  });
});
app.use(notFound);
app.use(errorHandler);
module.exports = app;