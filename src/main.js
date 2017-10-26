import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import nprogress from 'nprogress'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import store from './store'
import {routes} from './router'


Vue.prototype.$nprogress = nprogress;
Vue.use(Element)
Vue.use(VueRouter);
Vue.use(Vuex);

const Rconfig = {
  routes:routes
}

const router =new VueRouter(Rconfig);//创建路由实列

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created(){
    this.$store.commit('UPDATEMENULIST');
    console.log(this.$store.state.menuList)
  }
})
