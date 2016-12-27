<template>
	<div class="report we-contain">
		<div class="weui-navbar">
            <div class="weui-navbar__item"
                v-bind:class="nowList === 1 ? 'weui-bar__item_on' : ''" 
                @click='changeList(1)'>
                昨天
            </div>
            <div class="weui-navbar__item"
                v-bind:class="nowList === 2 ? 'weui-bar__item_on' : ''" 
                @click='changeList(2)'>
                最近七天
            </div>
            <div class="weui-navbar__item"
                v-bind:class="nowList === 3 ? 'weui-bar__item_on' : ''" 
                @click='changeList(3)'>
                上周
            </div>
            <div class="weui-navbar__item"
                v-bind:class="nowList === 4 ? 'weui-bar__item_on' : ''" 
                @click='changeList(4)'>
                本月
            </div>
            <div class="weui-navbar__item"
                v-bind:class="nowList === 5 ? 'weui-bar__item_on' : ''" 
                @click='changeList(5)'>
                三月
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
                nowList: 1
			}
		},
        methods: {
            changeList: function(item){
                this.nowList = item;
            }
        }
	}
</script>
<style>
	
</style>