// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import axios from 'axios'
import auth from '@/services/auth.js'

axios.defaults.baseURL = 'https://dev.badr.co.id/freedom/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
if (auth.user.profile && auth.user.profile.token) {
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.user.profile.token;
  axios.defaults.headers.common['Authorization'] = auth.user.profile.token;
}
axios.defaults.headers.common['Content-Type'] = 'application/json';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
