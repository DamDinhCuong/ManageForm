import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import DataForm from './components/DataForm.vue'
import Notifications from 'vue-notification'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Notifications)
const router = new VueRouter({
  routes: [
    { path: '/data-form', component: DataForm },
  ]
})
new Vue({
  el: '#app',
  router, // thêm router vào Vue instance
  render: h => h(App)
})
