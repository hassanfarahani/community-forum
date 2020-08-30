"use strict";

// all of the queries associated with users table
var Joi = require('joi');

var db = require('../db');

var schema = Joi.object().keys({
  display_name: Joi.string().required(),
  email: Joi.string().email(),
  google_id: Joi.string().required(),
  // banned: Joi.boolean().required(),
  image_url: Joi.string().uri({
    scheme: [/https/]
  }),
  role_id: Joi.number().integer()
});
module.exports = {
  findByEmail: function findByEmail(email) {
    // database, grab the users table where the email is this given email & grab the first one
    // returns a promise
    return db('users').where('email', email).first();
  },
  update: function update(id, user) {
    return db('users').where('id', id).update(user);
  },
  insert: function insert(user) {
    // https://joi.dev/api/?v=17.2.1
    var _schema$validate = schema.validate(user),
        error = _schema$validate.error,
        value = _schema$validate.value;

    try {
      return db('users').insert(value);
    } catch (error) {
      Promise.reject(error);
    }
  }
};