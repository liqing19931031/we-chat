<template>
	<div class="we-contain">
		<div class="user">
			<div class="header">
				<div class="user-detail">
					<img class="avatar" src="" alt="">
					<div class="user-name">
						<div>{{users.name}}</div>
						<div class="user-level">
							<img :src="require('../assets/loginbg.png')" alt="">
							<div class="user-state" v-bind:class="'bg' + users.state">
								{{this.userState[users.state]}}
							</div>
						</div>
					</div>
				</div>
				<div class="weui-flex page nopadding">
		            <div class="weui-flex__item"><div class="placeholder text-center h6">账户余额:&nbsp&nbsp&nbsp<span>{{users.total}}</span></div></div>
		            <div class="weui-flex__item"><div class="placeholder text-center h6">账户积分:&nbsp&nbsp&nbsp<span>{{users.balance}}</span></div></div>
		        </div>
			</div>
	        <div class="info-service">
	        	<div class="weui-cell" v-for="(value, key) in users.info">
		            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
		            <div class="weui-cell__bd">
		                <p>{{mapping[key]}}</p>
		            </div>
		            <div class="weui-cell__ft">{{value}}</div>
		        </div>
	        </div>
	        <div class="info-service">
	        	<div class="weui-cell" v-for="(value, key) in users.service">
		            <div class="weui-cell__hd"><img :src="require('../assets/icon_tabbar.png')" alt="" style="width:20px;margin-right:5px;display:block"></div>
		            <div class="weui-cell__bd">
		                <p>{{mapping[key]}}</p>
		            </div>
		            <div class="weui-cell__ft">{{value}}</div>
		        </div>
	        </div>
	        <div class="button-sp-area" style="margin:30px 15px 0 15px">
	        	<a href='/login' class="weui-btn weui-btn_default">退出登录</a>
	        </div>
	        <div class="white-block"></div>
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
		gradding: 1,
		info: {
			companyName: '浙江盘石宇宙联盟',
			webSite: 'adyun.com',
			url: 'http://www.baidu.com',
		},
		service: {
			servceName: '张大炮',
			contact: '15757104968',
			email: '666666666@qq.com'
		}

	}
	let userState = ['账户未通过审核', '账户审核通过', '待审核']
	export default {
		data () {
			return {
				users: users,
				mapping: mapping,
				userState: userState
			}
		}
	}
</script>
<style lang='less'>
	.user{
		height: 100%;
		.header{
			background-image: url(../assets/index_bg.jpg);
			background-size: 100% 100%;
		  	height: 170px;
		  	background-color: white;
		  	position: relative;
		  	.user-detail{
		  		padding: 30px 18px;
		  		.avatar{
		  			width: 70px;
		  			height: 70px;
		  			display: block;
		  			float: left;
		  		}
		  		.user-name{
			  		float: left;
			  		font-size: 17px;
			  		font-weight: bold;
			  		color: #333333;
			  		margin-top: 10px;
			  		margin-left: 20px;
			  		.user-level{
			  			margin-top: 10px;
				  		float: left;
				  		img{
				  			float: left;
				  			width: 65px;
	    					height: 18px;
				  		}
				  		.user-state{
				  			float: left;
							border-radius: 6px;
							height: 18px;
							color: white;
							line-height: 16px;
							margin-left: 10px;
							font-weight: normal;
							font-size: 16px;
							padding: 2px 10px;
							&.bg0{
								background-color: #f82f30;
							}
							&.bg1{
								background-color: #09bb07;
							}
							&.bg2{
								background-color: #ffbe00;
							}
				  		}
				  	}
			  	}
		  	}
		  	.weui-flex{
		  		width: 100%;
		  		position: absolute;
				bottom: 0;
		  	}
		}
		.info-service{
			margin-top: 10px;
			background-color: #fff;
		}
	}
</style>
