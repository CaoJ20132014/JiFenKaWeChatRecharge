<template>
  	<div id="Home">
		<div class="recharge">
			<div class="title">充值服务</div>
			<div class="operate">
				<ul class="operate-ul">
					<li v-for="(item, index) in operate.list1" :key="index" @click="item.function">
						<img :src="item.img" alt="">
						<p v-text="item.title"></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="record">
			<div class="title">账单服务</div>
			<div class="operate">
				<ul class="operate-ul">
					<li v-for="(item, index) in operate.list2" :key="index" @click="item.function">
						<img :src="item.img" alt="">
						<p v-text="item.title"></p>
					</li>
				</ul>
			</div>
		</div>
  	</div>
</template>
<script>
	import card from '../../assets/image/home/icon_wx_menu_1_kmcz.png';
	import code from '../../assets/image/home/icon_wx_menu_2_smcz.png';
	import cardRecord from '../../assets/image/home/icon_wx_menu_4_kmzd.png';
	import codeRecord from '../../assets/image/home/icon_wx_menu_5_smzd.png';
	export default {
		data() {
			return {
				operate: {
					list1: [{
						img: card,
						title: '卡密充值',
						function: this.cardRecharge
					}, {
						img: code,
						title: '扫码充值',
						function: this.codeRecharge
					}],
					list2: [{
						img: cardRecord,
						title: '卡密账单',
						function: this.cardRecord
					}, {
						img: codeRecord,
						title: '扫码账单',
						function: this.codeRecord
					}]
				}
			}
		},
		mounted() {

		},
		methods: {
			cardRecharge() {
				this.$router.push({
					name: 'cardRecharge'
				});
			},
			codeRecharge() {
				console.log('扫码充值');
			},
			cardRecord() {
				this.$router.push({
					name: 'cardRecord'
				});
			},
			codeRecord() {
				this.$router.push({
					name: 'codeRecord'
				});
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/index/home.less";
</style>