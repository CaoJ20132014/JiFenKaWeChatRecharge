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
	const WX = require('weixin-js-sdk');		// 引入weixin-js-sdk
	import card from '@/assets/image/home/icon_wx_menu_1_kmcz.png';
	import code from '@/assets/image/home/icon_wx_menu_2_smcz.png';
	import cardRecord from '@/assets/image/home/icon_wx_menu_4_kmzd.png';
	import codeRecord from '@/assets/image/home/icon_wx_menu_5_smzd.png';
	import { GetToken } from '@/until/http/request';
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
			let data = {
				url: "https://a.91jfk.com/weixin/#/"			// 用于获取签名，不能为空，为空的时候会导致签名错误
			}
			this.wxInit(data);
		},
		methods: {
			cardRecharge() {
				this.$router.push({
					name: 'cardRecharge'
				});
			},
			codeRecharge() {
				WX.scanQRCode({
					needResult: 0, 						// 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
					scanType: ["qrCode", "barCode"], 	// 可以指定扫二维码还是一维码，默认二者都有
					success: function(res) {
						var result = res.resultStr; 	// 当needResult 为 1 时，扫码返回的结果
					}
				});
			},
			cardRecord() {
				this.$router.push({
					name: 'cardRecord',
					params: {
						type: '1'
					}
				});
			},
			codeRecord() {
				this.$router.push({
					name: 'codeRecord',
					params: {
						type: '1'
					}
				});
			},
			wxInit(data) {
				GetToken(data).then(res => {
					if (res.code == '1') {
						WX.config({
							debug: false,
							appId: res.list.appId,
							timestamp: res.list.timestamp,
							nonceStr: res.list.nonceStr,
							signature: res.list.signature,
							jsApiList: [
								'scanQRCode'
							]
						});
					}
				}).catch(err => {});
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/index/home.less";
</style>