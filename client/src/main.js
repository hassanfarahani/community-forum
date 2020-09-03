import Vue from 'vue';
import 'bootswatch/dist/cosmo/bootstrap.css';
import App from './App.vue';
import CategoryList from '@/components/CategoryList.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('category-list', CategoryList)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
