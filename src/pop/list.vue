<template>
	<a class="weui-cell weui-cell_access" href="">
        <div class="weui-cell__bd">
            <p>{{dataList.name}}</p>
            <div class="weui-flex nopadding">
	            <div class="weui-flex__item">
	            	<div class="placeholder">花费 ￥{{dataList.cost}}</div>
	            </div>
	            <div class="weui-flex__item">
	            	<div class="placeholder">展现 {{dataList.showNum}}</div>
	            </div>
	            <div class="weui-flex__item">
	            	<div class="placeholder">点击 {{dataList.clickNum}}</div>
	            </div>
	        </div>
        </div>
        <div class="weui-cell__ft">
        </div>
    </a>
</template>
<script>
	export default {
		props: ['dataList'],
		data () {
			return {
				a: 'aaa'
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang='less'>
	.weui-cell__bd{
		p{
			font-size: 16px;
			color: #333333;
		}
		.weui-flex{
			.weui-flex__item{
				color: #666666;
				.placeholder{
					padding: 0;
					margin: 0;
					height: 1.3em;
					font-size: 14px;
					line-height: 1.3em;
				}
			}
		}
	}
</style>