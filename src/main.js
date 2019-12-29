import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueHead)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
