// here we are going to create routes to provide authentication
// It is going to have login route & the callback route, which will give you your credentials

const passport = require('passport')
const express = require('express')

const { create } = require('./utils')

const router = express.Router()

require('../passport/google')

// passport.authenticate middleware is used here to authenticate the request
// passport.authenticate attempts to authenticate with the given strategy on its first parameter, which is google
// (1) it sends the request to our Google app
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// The middleware receives the data from Google and runs the function on Strategy config
// (5): This is triggered by the callbackURL(cb), which Google will use to respond to the login request.
// custom callback from passport docs
// here we have custom access to what we get back ===> google
// (err, user) exactly matches up with cb(null, user) in google.js
router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }
    try {
      // create a JWT with the user & then redirect to the client side with that JWT (creating token & verifying token) --> create utils.js in auth folder
      const token = await create(user)
      res.json({ token })
    } catch(error) {
      next(error)
    }
  })(req, res, next);
});

module.exports = router