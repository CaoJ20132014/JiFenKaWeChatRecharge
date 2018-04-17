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
			<p class="title" v-text="data.title"></p>
		</div>
		<div class="recordList">
			<div class="list">
				<div class="item" v-for="(item, index) in data.listBill" :key="index">
					<div class="top">
						<p><span v-text="item.create_time"></span>&nbsp;&nbsp;<span v-text="item.weekDay"></span></p>
						<div class="right">
							<i class="iconfont" :class="item.icon"></i>
							<span v-text="item.state"></span>
						</div>
					</div>
					<div class="con">
						<p>
							<span>集分卡号码：</span>
							<span v-text="item.cid"></span>
						</p>
					</div>
					<div class="bot">
						<div class="left">
							<span>话费</span>
							<span v-text="item.worth"></span>
							<span>元&nbsp;&nbsp;充值号码：</span>
							<span v-text="item.tel"></span>
						</div>
					</div>
				</div>
				<div class="item" v-for="(item, index) in data.listFuel" :key="index">
					<div class="top">
						<p><span v-text="item.create_time"></span>&nbsp;&nbsp;<span v-text="item.weekDay"></span></p>
						<div class="right">
							<i class="iconfont" :class="item.icon"></i>
							<span v-text="item.state"></span>
						</div>
					</div>
					<div class="con">
						<p>
							<span>集分卡号码：</span>
							<span v-text="item.cid"></span>
						</p>
					</div>
					<div class="bot">
						<div class="left">
							<span>油卡</span>
							<span v-text="item.worth"></span>
							<span>元&nbsp;&nbsp;充值号码：</span>
							<span v-text="item.card"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
	import Public from '@/until/public/until';
	import { CodeRecord } from '@/until/http/request';
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
					title: '扫码话费账单',
					weeks: new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六") ,
					type: '1',
					listBill: [],
					listFuel: []
				}
			};
		},
		mounted() {
			let data = {
				type: this.$route.params.type
			};
			this.Get(data);
		},
		methods: {
			QueryBill() {
				this.data.title = '扫码话费账单';
				this.data.type = '1';
				let data = {
					type: '1'
				}
				this.Get(data);
			},
			QueryFuel() {
				this.data.title = '扫码油卡账单';
				this.data.type = '3';
				let data = {
					type: '3'
				}
				this.Get(data);
			},
			Get(data) {
				CodeRecord(data).then(res => {
					if (res.code == '1') {
						this.DataHandle(res.list);
					} else {
						this.data.listFuel = [];
						this.data.listBill = [];
					}
				}).catch(err => {});
			},
            DataHandle(params) {
                params.sort((a, b) => {
                    return a.create_time < b.create_time;
                });
                params.forEach(item => {
                    item["worth"] = item.worth.slice(0, item.worth.indexOf("."));
                    if (Public.judgePhone() === "IOS") {
                        item["weekDay"] = this.data.weeks[new Date(item.create_time.slice(0, 10).replace(/-/g,'/')).getDay()];
                    } else if (Public.judgePhone() === "Android") {
                        item["weekDay"] = this.data.weeks[new Date(item.create_time).getDay()];
                    } else {
                        item["weekDay"] = this.data.weeks[new Date(item.create_time).getDay()];
                    };
                    if(item.state == "充值成功"){
                        item["icon"] = "icon-chenggong";
                    } else if (item.state == "受理成功"){
                        item["icon"] = "icon-jinzhitishi";
                    } else if (item.state == "受理失败"){
                        item["icon"] = "icon-shibai1";
                    } else if (item.state == "充值失败"){
                        item["icon"] = "icon-shibai1";
                    }
                });
                if (this.data.type == '1') {
                    this.data.listFuel = [];
                    this.data.listBill = params;
                } else if (this.data.type == '3') {
                    this.data.listBill = [];
                    this.data.listFuel = params;
                }
            }
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/record/record.less";
</style>
