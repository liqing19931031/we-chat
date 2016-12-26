<template>
	<div class="we-contain">
		<div class="we-content">
			<div class="weui-panel__ft">
                <a href="" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看详情</div>
                    <span class="weui-cell__ft"></span>
                </a>
                <div class="we-content">
                	<div class="we-content_lf">
                		
                	</div>
                </div> 
            </div>
		</div>
	</div>
</template>
<script>
var user = {
	balance: 1000,
	budget: 1000,
	planNum: 8000,
	name: '盘石宇宙网盟'
}
var pcData = {
	allCost: 1000,
	showNum: 12000,
	clickNum: 5000,
	clickPrice: 3000,
	averagePrice: 1200
}
var mbData = {
	allCost: 1000,
	showNum: 12000,
	clickNum: 5000,
	clickPrice: 3000,
	averagePrice: 1200
}
export default {
	data () {
		return {
			user: user,
			pcData: pcData,
			mbData: mbData
		}
	}
}
</script>
<style lang='less'>
	.we-contain{
		height: 100%;
		background-color: #f8f8f8;
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
		}
	}
</style>