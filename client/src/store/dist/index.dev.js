"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _API = require("../API");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    token: '',
    user: null,
    categories: []
  },
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
    },
    setUser: function setUser(state, user) {
      state.user = JSON.parse(user);
    },
    setCategories: function setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    login: function login(_ref, token) {
      var commit = _ref.commit;

      if (token) {
        commit('setToken', token);
        localStorage.setItem('token', token); // decode the token in order to grab the user data stored in it.
        // we need to take the second section of the token, which is payload

        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var user = window.atob(base64);
        commit('setUser', user);
      } else {
        commit('setToken', '');
        commit('setUser', null);
      }
    },
    isAdmin: function isAdmin(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;
      return state.user.role_id === 3;
    },
    loadCategories: function loadCategories(_ref3) {
      var commit, categories;
      return regeneratorRuntime.async(function loadCategories$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref3.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _API.getAllCategories)());

            case 3:
              categories = _context.sent;
              commit('setCategories', categories);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return state.user ? true : false;
    }
  },
  modules: {}
});

exports["default"] = _default;