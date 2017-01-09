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
		  	<div class="weui-cell" v-if="details.unit">
	            <div class="weui-cell__bd">
	                <p>所属单元</p>
	            </div>
	            <div class="weui-cell__ft">{{details.unit.name}}</div>
	        </div>
		  	<div class="weui-cell" v-if="details.plan">
	            <div class="weui-cell__bd">
	                <p>所属计划</p>
	            </div>
	            <div class="weui-cell__ft">{{details.plan.name}}</div>
	        </div>
		  	<div class="weui-cell" v-if="details.popType">
	            <div class="weui-cell__bd">
	                <p>推广类型</p>
	            </div>
	            <div class="weui-cell__ft">{{details.popType === 1? '网盟推广' : '移动推广'}}</div>
	        </div>
	        <router-link class="weui-cell weui-cell_access" :to="{ path: './list', query: { planId: details.id}}" v-if="details.unitNum">
	            <div class="weui-cell__bd">
	                <p>下属单元</p>
	            </div>
	            <div class="weui-cell__ft">{{details.unitNum}}个</div>
	        </router-link>
	        <router-link class="weui-cell weui-cell_access" :to="{ path: './list', query: { unitId: details.id}}" v-if="details.ideaNum">
	            <div class="weui-cell__bd">
	                <p>下属创意</p>
	            </div>
	            <div class="weui-cell__ft">{{details.ideaNum}}个</div>
	        </router-link>
		</div>
		<div class="we-cell" style="margin-bottom: 10px">
			<div class="weui-cell" v-if="details.budget">
	            <div class="weui-cell__bd">
	                <p>日预算</p>
	            </div>
	            <div class="weui-cell__ft">￥{{details.budget}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.price">
	            <div class="weui-cell__bd">
	                <p>出价</p>
	            </div>
	            <div class="weui-cell__ft">￥{{details.price}}</div>
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
	        <div class="weui-cell" v-if="details.ideatype">
	            <div class="weui-cell__bd">
	                <p>创意类型</p>
	            </div>
	            <div class="weui-cell__ft">{{details.ideatype}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.size">
	            <div class="weui-cell__bd">
	                <p>创意尺寸</p>
	            </div>
	            <div class="weui-cell__ft">{{details.size}}</div>
	        </div>
	        <a class="weui-cell weui-cell_access" :href="details.clickLink" v-if="details.clickLink">
	            <div class="weui-cell__bd">
	                <p>创意链接</p>
	            </div>
	            <div class="weui-cell__ft">{{details.showLink}}</div>
	        </a>
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
	            <div class="weui-cell__ft">￥{{details.clickPrice}}</div>
	        </div>
	        <div class="weui-cell" v-if="details.cost">
	            <div class="weui-cell__bd">
	                <p>花费</p>
	            </div>
	            <div class="weui-cell__ft">￥{{details.cost}}</div>
	        </div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			stats: [
				'',
				'有效',
				'未在投放时间段',
				'暂停',
				'审核中',
				'审核拒绝',
				'删除'
			],
			colors: [
				'',
				'success',
				'warning',
				'stop',
				'error'
			],
			details: ''
		}
	},
	mounted () {
		this.getData('/dsp/getDataDetail', 'details', { type: this.$route.query.nowList, id: this.$route.query.id })
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