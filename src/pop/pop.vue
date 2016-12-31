<template>
	<div class="page navbar js_show">
	    <div class="page__bd" style="height: 100%;" v-if="details === ''">
	        <div class="weui-tab">
	            <div class="weui-navbar">
	                <div class="weui-navbar__item" 
	                	v-bind:class="nowList === 1 ? 'weui-bar__item_on' : ''" 
	                	@click='changeList(1)'>
	                    推广计划
	                </div>
	                <div class="weui-navbar__item" 
	                	v-bind:class="nowList === 2 ? 'weui-bar__item_on' : ''" 
	                	@click='changeList(2)'>
	                    推广单元
	                </div>
	                <div class="weui-navbar__item" 
	                	v-bind:class="nowList === 3 ? 'weui-bar__item_on' : ''" 
	                	@click='changeList(3)'>
	                    推广创意
	                </div>
	            </div>
	            <div class="weui-tab__panel" v-if='dataList'>
            		<div class="we-list" v-for="(item, index) in dataList">
	            		<list 	:list="item" 
	            				:colors="colors"
	            				v-on:selectDetail="changeDetail"></list>
	            	</div>
	            </div>
	        </div>
	    </div>
		<detail v-else :details="details"
    		:colors="colors">
    	</detail>	    	
	</div>
</template>
<script>
import list from './list.vue'
import detail from './detail.vue'
export default {
	data () {
		return {
			nowList: 1,
			dataList: '',
			details: '',
			colors: [
				'',
				'success',
				'warning',
				'stop',
				'error'
			]
		}
	},
	watch: {
		'$route' (to, from) {
			this.getList()
		}
	},
	components: {
		list: list,
		detail: detail
	},
	methods: {
		changeList: function (item) {
			this.nowList = item
			this.getList()
		},
		getList: function () {
			this.getData('dsp/getDataList', 'dataList', { type: this.nowList, popType: this.$route.params.type || 1 })
		},
		getDetail: function (myId) {
			this.getData('/dsp/getDataDetail', 'details', { type: this.nowList, id: myId })
		},
		changeDetail: function (myId) {
			this.getDetail(myId)
		}
	},
	mounted () {
		this.getList()
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