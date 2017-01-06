<template>
	<div class="we-contain">
		<div class="weui-navbar">
			<div class="weui-navbar__item" v-for="(item, index) in weeks"
				v-bind:class="day === index ? 'weui-bar__item_in' : ''" 
				@click='changeTime(index)'>
				{{item}}
			</div>
		</div>
		<div id="myChart" :style="{width: '100%', height: '350px' }"></div>
		<div v-if="reportData">
			<div class="typeBtn page" v-if="Object.keys(reportData).length > 4">
				<div class="we-flex">
					<div class="weui-flex__item bigitem" v-for="(item, key) in reportData">
						<div class="placeholder" v-bind:class="state === key ? 'weui-bar__item_in' : ''" 
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
				   <div class="weui-flex__item smallitem" v-for="(item, key) in reportData">
						<div class="placeholder" v-bind:class="state === key ? 'weui-bar__item_in' : ''"
						@click='changeType(key)'>
							<span>{{allType[key]}}</span>
							<span>{{item}}</span>
						</div>
					</div>
					<div class="clearBoth"></div>
				</div>
			</div>
		</div>
		<div class="white-block"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
	require('echarts/lib/chart/line')
	// 配置文件
	const weeks = ['昨天', '最近七天', '上周', '本月', '上月']
	const allType = {
		showNum: '展现量',
		clickNum: '点击量',
		clickRate: '点击率',
		allCost: '花费',
		costPrice: '千次展现成本',
		clickPrice: '点击单价'
	}
	export default {
		state: 'allCost',
		option: '',
		props: ['nowType'],
		myChart: '',
		reportData: '',
		data () {
			return {
				day: 0, // 时间单位
				state: this.state || 'allCost', // 推广维度
				option: this.option, // 图表数据
				reportData: this.reportData, // 推广信息
				weeks: weeks,
				allType: allType,
				myChart: this.myChart
			}
		},
		watch: {
			'$route' (to, from) {
				this.getReport()
			}
		},
		mounted () {
			this.myChart = echarts.init(document.getElementById('myChart'))
			this.getReport()
			this.getLineData()
		},
		methods: {
			getReport: function () {
				this.getData('dsp/getReportData', 'reportData', {
					day: this.day,
					type: this.$route.params.type
				})
			},
			getLineData: function () { // 图表方法
				this.getData('/dsp/lineChart', 'option', {
					type: this.$route.params.type,
					day: this.day,
					state: this.state
				}, this.setOptions)
			},
			setOptions: function (data) { // 设置Echarts
				let x = []
				let y = []
				let that = this;
				this.option.forEach(function (item, index) {
					x.push(item.xAxis)
					y.push(item.yAxis)
				})
				this.myChart.setOption({
					title: {},
					tooltip: {},
					xAxis: {
						data: x
					},
					grid: {
						left: '12%'
					},
					yAxis: {
						axisLabel: {
							formatter: function (val) {
								if (that.state === 'showNum') {
									return ((val / 10000) + 'w' )
								}
								return val
							}
						}
					},
					series: [{
						smooth: true,
						name: '销量',
						type: 'line',
						data: y,
						lineStyle: {
							normal: {
								color: '#4e8df5'
							}
						}
					}]
				})
			},
			changeTime: function (item) {
				this.day = item
				this.getReport()
				this.getLineData()
			},
			changeType: function (type) {
				this.state = type
				this.getLineData()
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
		span{
			color: #4e8df5!important;
		}
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
				margin:5px 10px;
				height: 80px;
				line-height: 80px;
				text-align: center;
				span{
					display: block;
					height: 20px;
					line-height: 20px;
					color: #333333;
				}
				span:nth-child(1) {
					color: #666666;
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