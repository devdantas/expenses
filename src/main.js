import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FirebaseVue from './firebase'
import './utils/directives'
import './assets/scss/app.scss'

Vue.use(FirebaseVue)
window.t = FirebaseVue
Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue({
  data: {
    expenses: []
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
