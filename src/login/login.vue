<template>
	<div class="login">
		<img :src="require('../assets/login.png')" alt="">
		<div class="login-form">
			<input type="text" placeholder="账户名/手机号码" name="username" v-model='params.username'>
			<input type="password" placeholder="密码" name="key" v-model='params.key'>
			<!-- <div class="remember-me" @click='remember'>
				<i v-bind:class="[ isremember ? 'weui-icon-circle' : 'weui-icon-success' ]" class="we-success"></i> 记住我
			</div> -->
			<div class="login-btn">
				<div class="btn" @click='goLogin'>
					立即登录
				</div>
			</div>
			<div class="clearBoth"></div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			alert: false,
			isremember: true,
			params: {
				username: '',
				key: ''
			}
		}
	},
	methods: {
		remember () {
			this.isremember = !this.isremember
		},
		showAlert (msg) {
			this.$dialog(msg)
		},
		goLogin () {
			this.$http.post(this.baseUrl + 'wechat/login', this.params)
			.then((response) => {
				if (response.data.code === 1) {
					this.$router.push('/wxdsp/home')
				} else {
					this.showAlert(response.data.result)
				}
			})
			.catch((response) => {
				this.showAlert('网络出错!')
			})
		}
	}
}
</script>
<style lang="less">
	.login{
		background-image: url('../assets/loginbg.png');
		width: 100%;
		height: 100%;
		color: #999999;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		img{
			display: block;
			margin: 0 auto;
			padding-top: 80px;
			width: 131px;
			height: 50px;
		}
		.login-form{
			padding-top: 75px;
			width: 300px;
			margin: 0 auto;
			input{
				font-size: 16px;
				outline: none;
				border: none;
				margin: 0 auto;
				background-color: transparent;
				border-bottom: 1px solid #666666;
				border-radius: 0px;
				height: 25px;
				float: left;
				width: 300px;
			}
			input + input {
				margin-top: 50px;
			}
			.remember-me{
				font-size: 14px;
				float: left;
				height: 24px;
				width: 300px;
				margin: 25px auto;
				vertical-align: bottom;
				i{
					font-size: 16px;
					&.weui-icon-circle{
						color: #666666;
					}
					&.weui-icon-success{
						color: #4e8df5;
					}
				}
			}
			.login-btn{
				width: 300px;
				margin: 50px auto;
				float: left;
				.btn{
					box-sizing: border-box;
					width: 50%;
					margin-left: 25%;
				}
			}
		}
	}
</style>