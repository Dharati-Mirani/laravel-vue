import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
import MainApp from './MainApp';
Vue.use(Router);

const scrollBehavior = () => {
  return {
    x: 0,
    y: 0,
  };
};
const router = new Router({
  base: '/',
  scrollBehavior,
  routes,
  mode: 'history'
});

// eslint-disable-next-line no-new
const app = new Vue({
  el: '#app',
  router,
  components: {
    MainApp,
  },
  template: '<MainApp/>',
});

