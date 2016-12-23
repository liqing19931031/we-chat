<template>
	<div class="user">
		<div class="weui-cell">
            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                <p>账户余额</p>
            </div>
            <div class="weui-cell__ft">{{users.total}}</div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                <p>账户积分</p>
            </div>
            <div class="weui-cell__ft">{{users.balance}}</div>
        </div>
        <div class="weui-cell" v-for="(value, key) in users.info">
            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                <p>{{mapping[key]}}</p>
            </div>
            <div class="weui-cell__ft">{{value}}</div>
        </div>
        <div class="weui-cell" v-for="(value, key) in users.servce">
            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                <p>{{mapping[key]}}</p>
            </div>
            <div class="weui-cell__ft">{{value}}</div>
        </div>
        <div class="button-sp-area">
        	<a href='/login' class="weui-btn weui-btn_warn">退出登录</a>
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
		balance: '1588',
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
