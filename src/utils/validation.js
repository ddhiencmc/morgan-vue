import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  })
})

extend('phoneNumber', {
  validate: value => {
    var phoneRegex = /^\d{10}$/

    if (value.match(phoneRegex)) {
      return true
    }
    return false
  },
  message: 'Please enter valid phone number.',
})

extend('checked', {
  validate: value => {
    if (value !== true) {
      return false
    }
    return true
  },
  message: 'Please tick the checkbox.',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
