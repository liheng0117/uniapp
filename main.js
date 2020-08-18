import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$baseUrl="http://vueshop.glbuys.com/api"  //线上接口

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
