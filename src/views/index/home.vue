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
		<img src="../../assets/image/recharge/c_shuoming.png" alt="" class="intrduce" width="100%">
  	</div>
</template>
<script>
	const WX = require('weixin-js-sdk');		// 引入weixin-js-sdk
	import card from '@/assets/image/home/icon_wx_menu_1_kmcz.png';
	import code from '@/assets/image/home/icon_wx_menu_2_smcz.png';
	import cardRecord from '@/assets/image/home/icon_wx_menu_4_kmzd.png';
	import codeRecord from '@/assets/image/home/icon_wx_menu_5_smzd.png';
	import { GetToken, CodeValidate } from '@/until/http/request';
	import Public from '../../until/public/until'
	export default {
		data() {
			return {
				operate: {
					list1: [{
						img: card,
						title: '卡密充值',
						function: this.CardRecharge
					}, {
						img: code,
						title: '扫码充值',
						function: this.CodeRecharge
					}],
					list2: [{
						img: cardRecord,
						title: '卡密账单',
						function: this.CardRecord
					}, {
						img: codeRecord,
						title: '扫码账单',
						function: this.CodeRecord
					}]
				}
			}
		},
		mounted() {
			window.location.href = "https://a.91jfk.com/WeChat/WeChatApi/index";
			let data = {
				url: "https://a.91jfk.com/weixin/#/"			// 用于获取签名，不能为空，为空的时候会导致签名错误
			}
			this.wxInit(data);
			this.Share();
		},
		methods: {
			CardRecharge() {
				this.$router.push({
					name: 'cardRecharge'
				});
			},
			CodeRecharge() {
                let _that = this;
				WX.scanQRCode({
					needResult: 1, 						// 默认为0，扫描结果由微信处理，1则直接返回扫描结果
					scanType: ["qrCode", "barCode"], 	// 可以指定扫二维码还是一维码，默认二者都有
					success: function(res) {
						let result = res.resultStr; 	// 当needResult 为 1 时，扫码返回的结果
						let query = Public.getQueryParam(result);
						_that.Validate(query);
					}
				});
				// let query = Public.getQueryParam("http://a.91jfk.com/Code/recharge?cardid=1170220001001&pass=aW6aaWCTa5U=&type=3");
				// _that.$router.push({
				// 	name: 'codeRecharge',
				// 	params: {
				// 		cardid: query.cardid,
				// 		pass: query.pass,
				// 		type: query.type
				// 	}
				// });
			},
			CardRecord() {
				this.$router.push({
					name: 'cardRecord',
					params: {
						type: '1'
					}
				});
			},
			CodeRecord() {
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
							jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', "onMenuShareQQ", "onMenuShareQZone", "scanQRCode"]
						});
					}
				}).catch(err => {});
			},
			Validate(data) {
				let _that = this;
				CodeValidate(data).then(respose => {
					alert(response.code);
					if (response.code == '301') {			// 未激活
						_that.$router.push({
							name: 'notActive'
						});
					} else if (response.code == '302') {	// 正常
						_that.$router.push({
							name: 'codeRecharge',
							params: {
								cardid: data.cardid,
								pass: data.pass,
								type: data.type
							}
						});
					} else if (response.code == '303') {	// 已经使用过了
						_that.$router.push({
							name: 'alreadyUsed',
							params: {
								cardid: data.cardid,
								pass: data.pass,
								type: data.type
							}
						});
					} else if (response.code == '304') {	// 过期
						_that.$router.push({
							name: 'overdue'
						});
					} else if (response.code == '305') {	// 冻结
						_that.$router.push({
							name: 'freeze'
						});
					}
				}).catch(error => {});
			},
			Share() {
				WX.ready(function() {
					WX.onMenuShareAppMessage({											// 分享朋友
						title: "集分卡充值中心",										 // 分享标题
						desc: "充话费、冲流量、充油卡...",								  // 分享描述
						link: "https://a.91jfk.com/weixin/",							// 分享链接
						imgUrl: "http://a.91jfk.com/Public/Product/img/shngcheng.png",	// 分享图标
						type: 'link', 													//分享类型
						dataUrl: '',
						success: function(res) {
							alert('分享成功...');
						},
						cancel: function(res) {
							alert('取消分享...');
						}
					});
					WX.onMenuShareTimeline({											// 分享朋友圈
						title: '集分卡充值中心',										 // 分享标题
						link: 'https://a.91jfk.com/weixin/',							// 分享链接
						imgUrl: 'http://a.91jfk.com/Public/Product/img/shngcheng.png',	// 分享图标
						success: function(res) {
							alert('分享成功...');
						},
						cancel: function(res) {
							alert('取消分享...');
						}
					});
					WX.onMenuShareQQ({													// 分享到QQ好友
						title: '集分卡充值中心', 										 // 分享标题
						desc: '充话费、冲流量、充油卡...', 				   				  // 分享描述
						link: 'https://a.91jfk.com/weixin/', 							// 分享链接
						imgUrl: 'http://a.91jfk.com/Public/Product/img/shngcheng.png', 	// 分享图标
						success: function() {
							alert('分享成功...');
						},
						cancel: function() {
							alert('取消分享...');
						}
					});
					WX.onMenuShareQZone({												// 分享QQ空间
						title: '集分卡充值中心', 										 // 分享标题
						desc: '充话费、冲流量、充油卡...', 								  // 分享描述
						link: 'https://a.91jfk.com/weixin/', 							// 分享链接
						imgUrl: 'http://a.91jfk.com/Public/Product/img/shngcheng.png',  // 分享图标
						success: function() {
							alert('分享成功...');
						},
						cancel: function() {
							alert('取消分享...');
						}
					});
				});
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/index/home.less";
</style>
