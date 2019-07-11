import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import privilegeMenu from '../dist/vue-privilege-menu'

Vue.use(privilegeMenu)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: new VueRouter(),
  render: h => h(App)
})
