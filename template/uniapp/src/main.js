import Vue from 'vue'
import App from './App'
import filter from './filter/index'

Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key])
})

import store from './store/index'
Vue.prototype.$store = store

import util from './utils/index'
Vue.prototype.$util = util

import Api from './request/api'
Vue.prototype.$api = Api

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
