<template>
	<div class="page navbar js_show">
	    <div class="page__bd" style="height: 100%;">
	        <router-view></router-view>
	    </div>
	</div>
</template>
<script>
export default {
	data () {
		return {
		}
	}
}
</script>
<style lang='less'>
	.page{
		height: 100%;
	}
	.success{
		background-color: #09bb07;
	}
	.warning{
		background-color: #ffbe00;
	}
	.stop{
		background-color: #cccccc;
	}
	.error{
		background-color: red;
	}
	.weui-bar__item_on{
		background-color: #4e8df5!important;
		color: white;
	}
	.we-list + .we-list{
		.weui-cell{
			border-top: 1px solid #cccccc;
		}
	}
	.pop{
		padding-bottom: 53px;
	}
</style>