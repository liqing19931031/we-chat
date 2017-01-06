import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from './router.js'
Vue.use(VueResource)
// 全局常量
Vue.prototype.baseUrl = 'http://wx.adyun.com/'
Vue.prototype.vip = [
  '',
  require('./assets/vip1.png'),
  require('./assets/vip2.png'),
  require('./assets/vip3.png'),
  require('./assets/vip4.png')
]
Vue.prototype.$dialog = function(msg) {
  const el = document.createElement('div')
  el.setAttribute('class', 'dialog')
  const el2 = el.cloneNode(false)
  el.appendChild(el2)
  el2.textContent = msg
  document.body.appendChild(el)
  el.addEventListener('click', function(){
    document.body.removeChild(el)
  })
}
Vue.prototype.isloadding = false
Vue.prototype.colors = [
        '',
        'success',
        'warning',
        'stop',
        'error'
      ]
// 对原异步请求方式进行再封装 1: 请求地址 2: 要设置的变量 3: 请求变量 4: 回调方法 或者是递增数组
Vue.prototype.getData = function (url, myparam, params, myFun) {
  this.isloadding = true
  this.$http.get(this.baseUrl + url, { params: params ? params : '' })
  .then((data) => {
    if (data.data.code === 1) {
      if (myFun === 1) {
        this.$set(this, myparam, this[myparam].concat(data.data.result))
      } else {
        this.$set(this, myparam, data.data.result)
        if (typeof (myFun) === 'function') {
          myFun()
        }
      }
    } else {
      console.log(data.data.msg)
    }
    this.isloadding = false
  }, (data) => {
    this.isloadding = false
    console.log('留空-报错信息')
  })
}
const app = new Vue({
	router: Router,
	render: h => h(App)
}).$mount('#app')
