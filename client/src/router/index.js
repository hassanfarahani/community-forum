import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store'
import { mapState } from 'vuex'
import Home from '../views/Home.vue';
import LoginToken from '../views/LoginToken.vue';
import Forum from '../views/Forum.vue';
import Admin from '../views/Admin.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login/token/:token',
    name: 'login-token',
    component: LoginToken
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next()
      } else {
        next({name: 'home'})
      }
    }
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
