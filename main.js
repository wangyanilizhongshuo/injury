import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import request from './common/ajax.js'
Vue.prototype.$App = request
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
