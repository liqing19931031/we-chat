import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './home/home.vue'
import login from './login/login.vue'
import user from './user/user.vue'
import pop from './pop/pop.vue'
import report from './report/report.vue'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
			path: '/user',
      component: user
    },
    {
      path: '/pop',
      component: pop
    },
    {
      path: '/report/:type',
      component: report
    }
	]
})
Vue.prototype.baseUrl = 'http://wx.test.com/'
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
	router: router,
	render: h => h(App)
}).$mount('#app')
