import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from './router.js'
Vue.use(VueResource)
// 全局常量
Vue.prototype.baseUrl = 'http://wx.test.com/'
Vue.prototype.vip = [
  '',
  require('./assets/vip1.png'),
  require('./assets/vip2.png'),
  require('./assets/vip3.png'),
  require('./assets/vip4.png')
]
Vue.prototype.colors = [
        '',
        'success',
        'warning',
        'stop',
        'error'
      ]
// 对原异步请求方式进行再封装
Vue.prototype.getData = function (url, myparam, params, clllback) {
  this.$http.get(this.baseUrl + url, { params: params ? params : '' })
  .then((data) => {
    this.$set(this, myparam, data.data.result)
    if (clllback) {
      clllback()
    }
  }, (data) => {
    console.log('留空-报错信息')
  })
}
const app = new Vue({
	router: Router,
	render: h => h(App)
}).$mount('#app')
