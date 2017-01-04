<template>
	<div class="we-contain">
		<div class="user" v-if="users"><!-- 由于找不到数据会报错所以在调用user时加入if判断 -->
			<div class="header">
				<div class="user-detail">
					<img class="avatar" :src="require('../assets/avatar.png')" alt="">
					<div class="user-name">
						<div>{{users.name}}</div>
						<div class="user-level">
							<img :src="vip[users.grading]" alt="">
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
		            <div class="weui-cell__hd"><img :src="images[key]" alt="" style="width:20px;margin-right:5px;display:block"></div>
		            <div class="weui-cell__bd">
		                <p>{{mapping[key]}}</p>
		            </div>
		            <div class="weui-cell__ft">{{value}}</div>
		        </div>
	        </div>
	        <div class="info-service">
	        	<div class="weui-cell" v-for="(value, key) in users.service">
		            <div class="weui-cell__hd">
		            	<img :src="images[key]" alt="" style="width:20px;margin-right:5px;display:block">
		            </div>
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
	const mapping = {
		company: '企业名称',
		siteName: '网站名称',
		domain: '网站地址',
		serviceName: '服务顾问',
		servicePhone: '联系方式',
		serviceMail: '邮箱地址'
	}
	const userState = ['账户未通过审核', '账户审核通过', '待审核']
	let users
	export default {
		data () {
			return {
				mappding: {
					company: '企业名称',
					siteName: '网站名称',
					domain: '网站地址',
					serviceName: '服务顾问',
					servicePhone: '联系方式',
					serviceMail: '邮箱地址'
				},
				images: {
					company: require('../assets/comName@3x.png'),
					siteName: require('../assets/pc@3x.png'),
					domain: require('../assets/address@3x.png'),
					serviceName: require('../assets/servise@3x.png'),
					servicePhone: require('../assets/contact@3x.png'),
					serviceMail: require('../assets/email@3x.png')
				},
				users: users,
				mapping: mapping,
				userState: userState
			}
		},
		mounted () {
			// 异步获取数据
			this.$http.get(this.baseUrl + 'dsp/getOwnerDetail')
			.then((data) => {
				this.$set(this, 'users', data.data.result)
			}, (data) => {
				console.log('系统出错!')
            })
		}
	}
</script>
<style lang='less'>
	.user{
		height: 100%;
		.header{
			background-image: url(../assets/user_bg.png);
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
							height: 14px;
							color: white;
							line-height: 14px;
							margin-left: 10px;
							font-weight: normal;
							font-size: 14px;
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
		  		height: 2.3em;
				bottom: 0;
				&.page{
					.weui-flex__item{
						.placeholder{
							height: 100%;
							line-height: 2.6em;
						}
					}
					.weui-flex__item + .weui-flex__item{
						border-left: 1px solid black;
					}
				}
		  	}
		}
		.info-service{
			margin-top: 10px;
			background-color: #fff;
		}
	}
</style>
