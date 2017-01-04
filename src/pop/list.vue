<template>
	<router-link :to="{ path: './detail', query: {id: list.id, nowList: nowList}}" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
    		<p>
    			<div class="list-name">{{list.name}}</div>
    			<div class="point" :class="colors[list.state]"></div>
    			<div class="clearBoth"></div>
    		</p>
            <div class="weui-flex nopadding">
	            <div class="weui-flex__item">
	            	<div class="placeholder">花费 {{list.cost}}</div>
	            </div>
	            <div class="weui-flex__item">
	            	<div class="placeholder">展现 {{list.showNum}}</div>
	            </div>
	            <div class="weui-flex__item">
	            	<div class="placeholder">点击 {{list.clickNum}}</div>
	            </div>
	        </div>
        </div>
        <div class="weui-cell__ft">
        </div>
    </router-link>
</template>
<script>
export default {
	props: ['list', 'nowList'],
	data () {
		return {
			a: 'aa'
		}
	}
}
</script>
<style scoped lang='less'>
	.weui-cell__bd{
		p{
			font-size: 16px;
			color: #333333;
			width: 100%;
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
		.list-name{
			float: left;
		}
		.point{
			position: relative;
			left: 5px;
			top: 5px; 
			float: left;
			height: 9px;
			display: block;
			border-radius: 50%;
			width: 9px;
		}
}
</style>