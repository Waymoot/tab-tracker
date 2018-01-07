// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vueitfy from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vueitfy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
