"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('This is the DB!');
});
var port = process.env.PORT || 4444;
app.listen(port);