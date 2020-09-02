"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vuex = require("vuex");

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _LoginToken = _interopRequireDefault(require("../views/LoginToken.vue"));

var _Forum = _interopRequireDefault(require("../views/Forum.vue"));

var _Admin = _interopRequireDefault(require("../views/Admin.vue"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '../store'
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: _Home["default"]
}, {
  path: '/login/token/:token',
  name: 'login-token',
  component: _LoginToken["default"]
}, {
  path: '/forum',
  name: 'forum',
  component: _Forum["default"]
}, {
  path: '/admin',
  name: 'admin',
  component: _Admin["default"],
  beforeEnter: function beforeEnter(to, from, next) {
    if (_store["default"].getters.isLoggedIn) {
      next();
    } else {
      next({
        name: 'home'
      });
    }
  }
}];
var router = new _vueRouter["default"]({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;