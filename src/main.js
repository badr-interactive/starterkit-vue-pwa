// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://dev.badr.co.id/freedom/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
