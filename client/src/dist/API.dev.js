"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = isAdmin;
var API_URL = 'https://community-forum-api.vercel.app';

if (window.location.hostname === 'localhost') {
  API_URL = 'http://localhost:3000';
}

function isAdmin() {
  var response;
  return regeneratorRuntime.async(function isAdmin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "/auth/isAdmin")));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}