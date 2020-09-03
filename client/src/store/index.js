import Vue from 'vue';
import Vuex from 'vuex';

import { getAllCategories, createCategory } from '../API'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
    categories: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = JSON.parse(user)
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    pushCategory(state, category) {
      state.categories.push(category)
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
    isAdmin({ state }) {
      return state.user.role_id === 3
    },
    async loadCategories({ commit }) {
      const categories = await getAllCategories()
      commit('setCategories', categories)
    },
    async addCategory({ commit }, newCategory) {
      const category = await createCategory(newCategory)
      commit('pushCategory', category)
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
