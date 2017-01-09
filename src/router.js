import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home/home.vue'
import login from './login/login.vue'
import user from './user/user.vue'
import pop from './pop/pop.vue'
import detail from './pop/detail.vue'
import lists from './pop/lists.vue'
import report from './report/report.vue'

let weixinTile = function(title) {
	let $body = document.body;
	document.title = title;
	var $iframe = createDom('<iframe src="/favicon.ico"></iframe>');
    $iframe.addEventListener('load', load);
    $body.appendChild($iframe);
    function load(){
        setTimeout(function() {
            $iframe.removeEventListener('load', load);
            $body.removeChild($iframe);
        }, 0);
    }

    function createDom(htmlStr){
        var tmp = document.createElement('div');
        tmp.innerHTML = htmlStr;
        var children = tmp.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType ===1 ) {
                return children[i];
            }
        }
        return;
    }
}
const myArray = {
	report: ['', '全景', '网盟', '移动'],
	pop: ['', '网盟', '移动']
}
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/wxdsp/',
			redirect: '/wxdsp/login'
		},
		{
			path: '/wxdsp/home',
	      	component: home,
	      	name: '首页'
	    },
	    {
	      	path: '/wxdsp/login',
	      	component: login,
	      	name: '登录'
	    },
	    {
			path: '/wxdsp/user',
	      	component: user,
	     	name: '账户'
	    },
	    {
	      	path: '/wxdsp/pop/:type',
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
	      path: '/wxdsp/report/:type',
	      component: report,
	      name: '推广报告'
	    }
	]
})
router.afterEach((to, from, next) => {
	let myName
	myName = to.name
	if (to.params.type) {
		if (to.path.indexOf('report') > 0) {
			myName = myArray.report[to.params.type] + myName
		} else {
			myName = myArray.pop[to.params.type] + myName
		}
	}
  	weixinTile(myName)
})

export default router
