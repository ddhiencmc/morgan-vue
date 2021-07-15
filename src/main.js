import Vue from 'vue'
import App from './App.vue'
import formData from './data/formData'
import '@/utils/validation.js'
import '@/styles/style.scss'
import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.config.productionTip = false

Vue.prototype.$formData = formData

new Vue({
  render: h => h(App),
}).$mount('#app')
