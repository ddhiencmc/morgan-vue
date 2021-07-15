import Vue from 'vue'
import App from './App.vue'
import formData from './data/formData'
import state from './data/state'
import '@/utils/validation.js'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.prototype.$formData = formData
Vue.prototype.$state = state

new Vue({
  render: h => h(App),
}).$mount('#app')
