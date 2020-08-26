"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('role').del());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(knex.raw('ALTER SEQUENCE role_id_seq restart with 3;'));

        case 4:
          return _context.abrupt("return", knex('role').insert([{
            id: 1,
            name: 'user'
          }, {
            id: 2,
            name: 'moderator'
          }, {
            id: 3,
            name: 'administrator'
          }]));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};