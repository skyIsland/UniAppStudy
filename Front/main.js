import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'http://localhost:9164/api/';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()