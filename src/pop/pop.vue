<template>
	<div class="page navbar js_show pop">
	    <div class="page__bd" style="height: 100%;">
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
	            <div class="weui-tab__panel">
            		<div class="we-list" v-for="(item, index) in dataList">
	            		<list :dataList="item"></list>
	            	</div>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
let dataList = [];
for (let a = 1; a < 10 ; a ++ ) {
	let object = {
		id: a,
		name: '计划' + a,
		cost: a + '000',
		showNum: a + '00',
		clickNum: a + '0000',
		state: parseInt(a%3, 10)
	}
	dataList.push(object)
}
import list from './list.vue'
export default {
	data () {
		return {
			nowList: 1,
			dataList: dataList
		}
	},
	components: {
		list: list
	},
	methods: {
		changeList: function(item){
			console.log(item);
			this.nowList = item;
		}
	}
}
</script>
<style lang='less'>
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