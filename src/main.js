import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import store from './store'
import nprogress from 'nprogress'

Vue.prototype.$nprogress = nprogress;

Vue.use(Element)
Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.use(nprogress);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
