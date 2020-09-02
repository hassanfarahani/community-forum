import Vue from 'vue';
import Vuex from 'vuex';

import { isAdmin } from '../API'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = JSON.parse(user)
    }
  },
  actions: {
    login({ commit }, token) {
      if (token) {
        commit('setToken', token)
        localStorage.setItem('token', token)
        // decode the token in order to grab the user data stored in it.
        // we need to take the second section of the token, which is payload
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const user = window.atob(base64)
        commit('setUser', user)
      } else {
        commit('setToken', '')
        commit('setUser', null)
      }
    },
    isAdmin({ commit, state }) {
      return state.user.role_id === 3
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user ? true : false
    }
  },
  modules: {
  },
});
