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
					title: '话费账单'
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
	@import "../../style/less/record/code.less";
</style>
