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
      path: '/report',
      component: report
    }
	]
})

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')