<template>
	<div class="weui-tab">
	    <div class="weui-navbar">
	        <div class="weui-navbar__item" v-if="!this.$route.query.planId && !this.$route.query.unitId" 
	        	v-bind:class="nowList === 1 ? 'weui-bar__item_on' : ''" 
	        	@click='changeList(1)'>
	            推广计划
	        </div>
	        <div class="weui-navbar__item" v-if="!this.$route.query.unitId"
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
	    <div id="my-list" class="weui-tab__panel">
			<div class="we-list" v-for="(item, index) in dataList">
	    		<list 	:list="item" 
	    				:colors="colors"
	    				:nowList="nowList"></list>
	    	</div>
	    	<div class="white-block"></div>
	    </div>
	</div>
</template>
<script>
import list from './list.vue'
export default {
	data () {
		return {
			nowList: 1,
			dataList: '',
			details: '',
			page: 1
		}
	},
	watch: {
		'$route' (to, from) {
			this.getList(this.getParams())
		}
	},
	mounted () {
		document.getElementById('my-list').addEventListener('scroll', this.bindScroll)
		let myParams = {}
		if (this.$route.query.unitId) {
			this.nowList = 3
			myParams = { 'unitId': this.$route.query.unitId }
		} else {
			if (this.$route.query.planId) {
				this.nowList = 2
				myParams = { 'planId': this.$route.query.planId }
			} else {
				this.nowList = 1
			}
		}
		this.getList(myParams)
	},
	components: {
		list: list
	},
	methods: {
		changeList (item) {
			this.nowList = item
			this.page = 1
			this.getList(this.getParams())
		},
		getParams () {
			let myParams = {}
			if (this.$route.query.unitId) {
				myParams = { 'unitId': this.$route.query.unitId }
			} else {
				if (this.$route.query.planId) {
					myParams = { 'planId': this.$route.query.planId }
				}
			}
			return myParams
		},
		bindScroll () {
			let $myList = document.getElementById('my-list')
			let allHeight = $myList.clientHeight
			if ((allHeight + $myList.scrollTop) >= ($myList.scrollHeight - 1)) {
				this.page = this.page + 1
				this.getList (this.getParams(), 1)
			}
		},
		getList (myParams, myFun) {
			myParams = Object.assign(myParams, { page: this.page })
			myParams = Object.assign(myParams, { type: this.nowList })
			myParams = Object.assign(myParams, { pageItems: 10 })
			myParams = Object.assign(myParams, { popType: this.$route.params.type || 1 })
			this.getData('dsp/getDataList', 'dataList', myParams, myFun || '')
		}
	}
}
</script>
<style>
.weui-navbar{
	color: #333333;
}
</style>