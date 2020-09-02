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
  findAdmins: function findAdmins() {
    return db('users').where('role_id', 3); // return an array
  },
  findByEmail: function findByEmail(email) {
    // database, grab the users table where the email is this given email & grab the first one
    // returns a promise
    return db('users').where('email', email).first();
  },
  update: function update(id, user) {
    var rows;
    return regeneratorRuntime.async(function update$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(db('users').where('id', id).update(user, '*'));

          case 2:
            rows = _context.sent;
            return _context.abrupt("return", rows[0]);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  insert: function insert(user) {
    var _schema$validate, error, value, rows;

    return regeneratorRuntime.async(function insert$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // https://joi.dev/api/?v=17.2.1
            _schema$validate = schema.validate(user), error = _schema$validate.error, value = _schema$validate.value;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(db('users').insert(value, '*'));

          case 4:
            rows = _context2.sent;
            return _context2.abrupt("return", rows[0]);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            Promise.reject(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }
};