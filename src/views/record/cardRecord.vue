<template>
  	<div id="Record">
		<div class="operate">
			<ul class="operate-ul">
				<li v-for="(item, index) in operate.list" :key="index" @click="item.function">
					<div class="left">
						<i class="iconfont" :class="item.icon"></i>
					</div>
					<div class="right" v-text="item.title"></div>
				</li>
			</ul>
		</div>
		<div class="recordList">
			<p class="title" v-text="data.title"></p>
			<div class="list">

			</div>
		</div>
  	</div>
</template>
<script>
	import Public from '../../until/public/until';
	export default {
		data() {
			return {
				operate: {
					list: [{
						icon: 'icon-huafei',
						title: '话费账单',
						function: this.QueryBill
					}, {
						icon: 'icon-weibiaoti2fuzhi18',
						title: '油卡账单',
						function: this.QueryFuel
					}]
				},
				data: {
					title: '话费账单',
					arr: [{
						"id": "1",
						"title": "充值话费100元",
						"time": "2017-02-20 星期一",
						"state": "1"
					}, {
						"id": "2",
						"title": "充值话费50元",
						"time": "2017-09-30 星期二",
						"state": "1"
					}, {
						"id": "3",
						"title": "充值话费200元",
						"time": "2017-12-16 星期三",
						"state": "1"
					},{
						"id": "33",
						"title": "充值话费200元",
						"time": "2017-12-21 星期三",
						"state": "1"
					}, {
						"id": "4",
						"title": "充值话费100元",
						"time": "2017-10-19 星期一",
						"state": "1"
					}, {
						"id": "5",
						"title": "充值话费100元",
						"time": "2017-01-15 星期四",
						"state": "1"
					},{
						"id": "6",
						"title": "充值话费100元",
						"time": "2016-08-20 星期六",
						"state": "1"
					}, {
						"id": "7",
						"title": "充值话费50元",
						"time": "2016-07-30 星期一",
						"state": "1"
					}, {
						"id": "8",
						"title": "充值话费200元",
						"time": "2016-06-16 星期日",
						"state": "1"
					}, {
						"id": "9",
						"title": "充值话费100元",
						"time": "2016-10-19 星期二",
						"state": "1"
					}, {
						"id": "10",
						"title": "充值话费100元",
						"time": "2016-05-15 星期一",
						"state": "1"
					}]
				}
			};
		},
		mounted() {
			
		},
		methods: {
			QueryBill() {
				console.log('话费账单');
				this.data.title = '话费账单';
			},
			QueryFuel() {
				console.log('油卡账单');
				this.data.title = '油卡账单';
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/record/card.less";
</style>
