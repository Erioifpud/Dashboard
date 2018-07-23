import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$ax = axios
Vue.config.productionTip = false
require('./mock/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
