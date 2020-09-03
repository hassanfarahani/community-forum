"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = isAdmin;
exports.getAllCategories = getAllCategories;
var BASE_URL = 'https://community-forum-api.vercel.app';

if (window.location.hostname === 'localhost') {
  BASE_URL = 'http://localhost:3000';
}

var API_URL = "".concat(BASE_URL, "/api/v1/");

function isAdmin() {
  var response;
  return regeneratorRuntime.async(function isAdmin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "/auth/isAdmin")));

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

function getAllCategories() {
  var response;
  return regeneratorRuntime.async(function getAllCategories$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(API_URL, "categories")));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.json());

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}