// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import axios from 'axios'

axios.create({
  baseURL: 'https://dev.badr.co.id/freedom/'
})
Vue.prototype.$http = axios;
// Vue.use(VueResource);

// Vue.http.options.root = 'https://dev.badr.co.id/freedom/';
// Vue.http.options.emulateJSON = true;
// Vue.http.options.emulateHTTP = true;

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
