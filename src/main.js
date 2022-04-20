import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$baseUrl = 'http://127.0.0.1:8000'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  data: { baseUrl: 'http://127.0.0.1:8000' }
}).$mount('#app')
