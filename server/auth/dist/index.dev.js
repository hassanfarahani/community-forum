"use strict";

// here we are going to create routes to provide authentication
// It is going to have login route & the callback route, which will give you your credentials
require('../passport/google');

var passport = require('passport');

var express = require('express');

var router = express.Router(); // passport.authenticate middleware is used here to authenticate the request
// passport.authenticate attempts to authenticate with the given strategy on its first parameter, which is google
// (1) it sends the request to our Google app

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
})); // The middleware receives the data from Google and runs the function on Strategy config
// (5): This is triggered by the callbackURL, which Google will use to respond to the login request.

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login'
}), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});
module.exports = router;