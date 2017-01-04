import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home/home.vue'
import login from './login/login.vue'
import user from './user/user.vue'
import pop from './pop/pop.vue'
import detail from './pop/detail.vue'
import lists from './pop/lists.vue'
import report from './report/report.vue'

Vue.use(VueRouter)
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
	      	component: home,
	      	name: '首页'
	    },
	    {
	      	path: '/login',
	      	component: login,
	      	name: '登录'
	    },
	    {
			path: '/user',
	      	component: user,
	     	name: '账户'
	    },
	    {
	      	path: '/pop/:type',
	      	component: pop,
	      	children: [
	      		{
		      		path: '/',
		      		redirect: 'list'
	      		},
	        	{
		          path: 'detail',
		          component: detail,
		          name: '推广详情'
		        },
		        {
		          path: 'list',
		          component: lists,
		          name: '推广列表'
		        }
	      	]
	    },
	    {
	      path: '/report/:type',
	      component: report,
	      name: '报告中心'
	    }
	]
})

router.afterEach((to, from, next) => {
  document.title = to.name
})

export default router
