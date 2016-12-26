<template>
	<div class="user">
		<div class="weui-flex">
            <div class="weui-flex__item">
	            <div class="weui-cell__ft text-center">账户余额:{{users.total}}</div>
            </div>
            <div class="weui-flex__item">
	            <div class="weui-cell__ft text-center">账户积分:{{users.balance}}</div>
            </div>
        </div>
        <div style="margin-top: 20px">
        	<div class="weui-cell" v-for="(value, key) in users.info">
	            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
	            <div class="weui-cell__bd">
	                <p>{{mapping[key]}}</p>
	            </div>
	            <div class="weui-cell__ft">{{value}}</div>
	        </div>
        </div>
        <div style="margin-top: 20px">
        	<div class="weui-cell" v-for="(value, key) in users.servce">
	            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
	            <div class="weui-cell__bd">
	                <p>{{mapping[key]}}</p>
	            </div>
	            <div class="weui-cell__ft">{{value}}</div>
	        </div>
        </div>
        <div class="button-sp-area" style="margin: 30px 15px">
        	<a href='/login' class="weui-btn weui-btn_default">退出登录</a>
        </div>
	</div>
</template>
<script>
	var mapping = {
		companyName: '企业名称',
		webSite: '网站名称',
		url: '网站地址',
		servceName: '服务顾问',
		contact: '联系方式',
		email: '邮箱地址'
	}
	var users = {
		name: '陈水扁网盟系统',
		state: 1,
		balance: '2000',
		total: '2000',
		info: {
			companyName: '浙江盘石宇宙联盟',
			webSite: 'adyun.com',
			url: 'http://www.baidu.com',
		},
		servce: {
			servceName: '张大炮',
			contact: '15757104968',
			email: '666666666@qq.com'
		}

	}
	export default {
		data () {
			return {
				users: users,
				mapping: mapping
			}
		}
	}
</script>
<style lang='less'>
	.user{
	  height: 100%;
	  background-color: white;
	}
</style>
