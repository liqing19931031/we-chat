<template>
	<div class="we-contain">
		<div class="weui-navbar">
            <div class="weui-navbar__item" v-for="(item, index) in weeks"
                v-bind:class="nowTime === index ? 'weui-bar__item_in' : ''" 
                @click='changeTime(index)'>
                {{item}}
            </div>
        </div>
        <div id="myChart" :style="{width: '100%', height: '350px' }"></div>
        <div class="typeBtn page" v-if="Object.keys(data).length > 4">
            <div class="we-flex">
                <div class="weui-flex__item bigitem" v-for="(item, key) in data">
                    <div class="placeholder" v-bind:class="nowType === key ? 'weui-bar__item_in' : ''" 
                    @click='changeType(key)'>
                        <span>{{allType[key]}}</span>
                        <span>{{item}}</span>
                    </div>
                </div>
                <div class="clearBoth"></div>
            </div>
        </div>
        <div class="typeBtn page" v-else>
            <div class="we-flex">
               <div class="weui-flex__item smallitem" v-for="(item, key) in data">
                    <div class="placeholder" v-bind:class="nowType === key ? 'weui-bar__item_in' : ''"
                    @click='changeType(key)'>
                        <span>{{allType[key]}}</span>
                        <span>{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="white-block"></div>
	</div>
</template>
<script>
    import echarts from 'echarts'
    require('echarts/lib/chart/line');
    let weeks = ['昨天', '最近七天', '上周', '本月', '上月'];
    let myChart;
    let allType = {
        showNum: '展现量',
        clickNum: '点击量',
        clickRate: '点击率',
        allCost: '花费',
        costPrice: '千次展现成本',
        averagePrice: '平均点击单价'
    }
    let data = {
        showNum: 12000,
        clickNum: 5000,
        clickRate: 100,
        allCost: 1000,
    }
    let option = {
        title: { },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }
	export default {
		data () {
			return {
                nowTime: 1,
                nowType: 'showNum',
                option: option,
                data: data,
                weeks: weeks,
                allType: allType,
                myChart: myChart
			}
		},
        mounted () {
            myChart = echarts.init(document.getElementById('myChart'));
            this.viewChart();
        },
        created: function(){
            this.getData();
        },
        methods: {
            getData: function(){
                this.$http.get(this.baseUrl + 'dsp/getReportData',function(data){
                    console.log(data);
                })
            },
            viewChart: function() {
                myChart.setOption(this.option);
            },
            changeTime: function(item){
                console.log(this);
                this.nowTime = item;
            },
            changeType: function(type){
                this.nowType = type;
            }
        }
	}
</script>
<style  lang='less'>
	#myChart{
        height: 250px;
        margin-bottom: 10px;
    }
    .weui-bar__item_in{
        border-bottom: 2px solid #4e8df5;
        color: #4e8df5;
    }
    .typeBtn{
        background-color: white;
        .weui-flex{
            padding: 0;
        }
        .weui-flex__item{
            float: left;
            .placeholder{
                box-sizing: border-box;
                margin:5px 20px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                span{
                    display: block;
                    height: 20px;
                    line-height: 20px;
                }
                span:nth-child(1) {
                    padding-top: 20px;
                }
            }
            &.bigitem{
                width: 33.33333333%;
            }
            &.smallitem{
                width: 50%;
            }
        }
    }
</style>