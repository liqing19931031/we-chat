<template>
	<div class="we-contain">
		<div class="we-content page flex">
			<div class="we-home__header" v-if="user">
				<div class="weui-flex">
		            <div class="weui-flex__item">
		            	<div class="placeholder h0">{{user.name}}</div>
		            </div>
		        </div>
		        <div style="text-align:center">
		        	<img :src="vip[user.grading]" alt="">
		        </div>
		        <div class="weui-flex common-bottom">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h2">账户余额</div>
		        		<div class="placeholder h1">￥{{user.balance}}</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h2">有效计划个数</div>
		        		<div class="placeholder h1">{{user.budget}}个</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h2">有效日预算</div>
		        		<div class="placeholder h1">￥{{user.planNum}}</div>
		        	</div>
		        </div>
			</div>
	        <div class="weui-content" v-if="pcData">
	        	<div class="weui-flex">
		            <div class="weui-flex__item">
		            	<div class="placeholder h4">网站联盟推广</div>
		            </div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">总花费</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">展现总量</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">￥{{pcData.allCost}}</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">{{pcData.showNum}}</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">点击总量</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">点击单价</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">{{pcData.clickNum}}</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">￥{{pcData.clickPrice}}</div>
		        	</div>
		        </div>
				<div class="weui-panel__ft">
	                <a class="weui-cell weui-cell_access weui-cell_link" @click='gopop(1)'>
	                    <div class="weui-cell__bd">查看详情</div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	            </div>
	        </div>
	        <div class="weui-content" v-if="mbData">
	        	<div class="weui-flex">
		            <div class="weui-flex__item">
		            	<div class="placeholder h4">移动联盟推广</div>
		            </div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">总花费</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">展现总量</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">￥{{mbData.allCost}}</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">{{mbData.showNum}}</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">点击总量</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h3">千次展现成本</div>
		        	</div>
		        </div>
		        <div class="weui-flex">
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">{{mbData.clickNum}}</div>
		        	</div>
		        	<div class="weui-flex__item">
		        		<div class="placeholder h5">￥{{mbData.costPrice}}</div>
		        	</div>
		        </div>
				<div class="weui-panel__ft">
	                <a class="weui-cell weui-cell_access weui-cell_link" @click='gopop(2)'>
	                    <div class="weui-cell__bd">查看详情</div>
	                    <span class="weui-cell__ft"></span>
	                </a>
	            </div>
	        </div>
	        <div class="white-block"></div>
		</div>
	</div>
</template>
<script>
let user
let pcData
let mbData
export default {
	data () {
		return {
			user: user,
			pcData: pcData,
			mbData: mbData
		}
	},
	mounted () {
		this.getData('/dsp/getOwnerInfo', 'user')
		this.getData('/dsp/getReportData', 'pcData', { type: 1 })
		this.getData('/dsp/getReportData', 'mbData', { type: 2 })
	},
	methods: {
		gopop: function (index) {
			this.$router.push('/pop')
		}
	}
}
</script>
<style lang='less'>
	.we-contain{
		height: 100%;
		.we-home__header{
			padding-top: 10px;
			background-image: url(../assets/index_bg.jpg);
			background-size: 100% 100%;
			img{
				width: 65px;
				height: 18px;
			}
		}
		.weui-panel__ft{
			background-color: white;
			a{
				color: #666666;
			}
			.we-content{
				width: 100%;
				background-color: #f8f8f8;
				.we-content_lf{
					width: 50%;
					height: 150px;
				}
			}
			.we-company{
				font-size: 20px;
			}
		}
	}
	.weui-flex{
		padding: 0 15px;
	}
	.weui-content{
		background-color: #fff;
		.weui-flex:nth-child(4){
			padding-top: 10px;
		}
		.weui-flex:nth-child(5){
			padding-bottom: 10px;
		}
	}
	.weui-content{
		margin-top: 10px;
	}
	.common-bottom{
		padding:0 15px;
		margin-bottom: 5px;
	}
</style>