<template>
	<div class="contain">
		<div class="we-cell" style="margin-bottom: 10px">
			<div class="weui-cell">
		    	<div class="weui-cell__bd">
		      		<div class="list-name">{{details.name}}</div>
		      		<div class="state" :class="colors[details.state]">{{stats[details.state]}}</div>
		      		<div class="clearBoth"></div>
		    	</div>
		  	</div>
		  	<div class="weui-cell" v-if="details.popType">
	            <div class="weui-cell__bd">
	                <p>推广类型</p>
	            </div>
	            <div class="weui-cell__ft">{{details.popType === 1? '网盟推广' : '移动推广'}}</div>
	        </div>
	        <a class="weui-cell weui-cell_access" href="javascript:;" v-if="details.unitNum">
	            <div class="weui-cell__bd">
	                <p>下属单元</p>
	            </div>
	            <div class="weui-cell__ft">{{details.unitNum}}个</div>
	        </a>
	        <a class="weui-cell weui-cell_access" href="javascript:;" v-if="details.unitNum">
	            <div class="weui-cell__bd">
	                <p>下属单元</p>
	            </div>
	            <div class="weui-cell__ft">{{details.unitNum}}个</div>
	        </a>
		</div>
		<div class="we-cell" style="margin-bottom: 10px">
			<div class="weui-cell" v-if="details.budget">
	            <div class="weui-cell__bd">
	                <p>推广类型</p>
	            </div>
	            <div class="weui-cell__ft">￥{{details.budget}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.sdate">
	            <div class="weui-cell__bd">
	                <p>开始时间</p>
	            </div>
	            <div class="weui-cell__ft">{{details.sdate}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.edate">
	            <div class="weui-cell__bd">
	                <p>结束时间</p>
	            </div>
	            <div class="weui-cell__ft">{{details.edate}}</div>
	        </div>
		</div>
		<div class="we-cell">
			<div class="weui-cell" v-if="details.showNum">
	            <div class="weui-cell__bd">
	                <p>展现量</p>
	            </div>
	            <div class="weui-cell__ft">{{details.showNum}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.clickNum">
	            <div class="weui-cell__bd">
	                <p>点击量</p>
	            </div>
	            <div class="weui-cell__ft">{{details.clickNum}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.clickRate">
	            <div class="weui-cell__bd">
	                <p>点击率</p>
	            </div>
	            <div class="weui-cell__ft">{{details.clickRate}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.clickPrice">
	            <div class="weui-cell__bd">
	                <p>点击单价</p>
	            </div>
	            <div class="weui-cell__ft">{{details.clickPrice}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.cost">
	            <div class="weui-cell__bd">
	                <p>花费</p>
	            </div>
	            <div class="weui-cell__ft">{{details.cost}}</div>
	        </div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['details', 'colors'],
	data () {
		return {
			stats: [
				'',
				'有效',
				'暂停',
				'未在投放时间段',
				'审核中',
				'审核拒绝',
				'删除'
			]
		}
	}
}
</script>
<style lang='less' scoped>
	.contain{
		background-color: #f8f8f8;
		height: 100%;
	}
	.list-name{
		float: left;
		font-size: 16px;
	}
	.we-cell{
		background-color: #fff;
	}
	.weui-cell{
		font-size: 14px;
	}
	.weui-cell__bd{
		color: #333333;
	}
	.state{
		margin-left: 5px;
		margin-top: 2px;
		padding: 0 4px;
		font-size: 14px;
		border-radius: 6px;
		color: white;
		float: left;
	}
</style>