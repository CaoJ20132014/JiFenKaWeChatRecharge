<template>
  	<div id="Recharge" class="Code">
		<div class="top">
			<p class="big">
				<span>集分卡 · </span><span v-text="info.typeCn"></span><span>卡</span>
			</p>
			<p class="small">
				<span>JIFENKA · </span><span v-text="info.typeEn"></span><span> CARD RECHARGE</span>
			</p>
		</div>
		<div class="con">
			<div class="z-bot"></div>
			<div class="z-con"></div>
			<div class="z-top" ref="input">
				<div class="title">
					<span v-text="info.typeCn"></span>
					<span>卡 </span>
					<span>面值</span>
					<span v-text="info.worth"></span>
					<span>元</span>
				</div>
				<div class="input">
					<p class="info">
						<span>集分卡号：</span>
						<span v-text="info.card"></span>
					</p>
					<p class="info">
						<span>有效日期：</span>
						<span v-text="info.time"></span>
					</p>
					<van-cell-group>
						<van-field v-if="info.choose == 'fuel'" v-model="info.name" icon="close" placeholder="请输入姓名" @click-icon="info.name = ''" />
						<p v-if="info.choose == 'bill'">温馨提示：17开头的号段暂不支持充值。</p>
						<van-field v-model="info.tel" :maxLength="11" icon="close" placeholder="请输入手机号" @click-icon="info.tel = ''" />
						<p v-if="info.choose == 'fuel'">请注意：请仔细核对加油卡卡号，一旦充错不能退回。</p>
						<p v-if="info.choose == 'fuel'">只能对主卡进行充值，充值副卡将会导致失败。</p>
						<van-field v-if="info.choose == 'fuel'" v-model="info.fuelCard" icon="close" placeholder="请输入加油卡卡号" @click-icon="info.fuelCard = ''" />
						<p v-if="info.choose == 'fuel'">温馨提示：受理成功48小时候后，请至加油站圈存使用。</p>
					</van-cell-group>
				</div>
				<div class="relus">
					<van-checkbox v-model="info.checked">我已阅读并同意</van-checkbox>
					<span style="color: #a062e0;" @click="Read">《充值协议》</span>
				</div>
				<button class="confirm">立即充值</button>
			</div>
		</div>
		<div class="bot" :style="styles1">
			<img :style="styles2" src="../../assets/image/recharge/saosao.png" alt="">
			<p>扫一扫，有惊喜</p>
			<p>客服电话：0571-86572999</p>
		</div>
		<div v-show="maskShow" class="mask"></div>
		<transition name="van-fade">
			<div v-show="choose_alert" class="choose-alert">
				<p class="alert-top">请选择通用卡的充值类型！</p>
				<div class="alert-con">
					<van-radio name="bill" v-model="info.choose">充值话费</van-radio>
					<van-radio name="fuel" v-model="info.choose">充值加油卡</van-radio>
				</div>
				<p class="alert-bot" @click="ConfirmSureChose">确定</p>
			</div>
		</transition>
		<transition name="van-fade">
			<div v-show="recharge_alert" class="recharge-alert">
				<p class="alert-top">请确认您的充值信息！</p>
				<div class="alert-con">
					<div class="common">
						<p>卡号：</p>
						<p v-text="info.card"></p>
					</div>
					<div class="common">
						<p>姓名：</p>
						<p v-text="info.name"></p>
					</div>
					<div class="common">
						<p>手机号：</p>
						<p v-text="info.tel"></p>
					</div>
					<div class="common" v-if="info.choose == 'fuel'">
						<p>加油卡：</p>
						<p v-text="info.fuelCard"></p>
					</div>
					<div class="common">
						<p>面值：</p>
						<p v-text="info.worth">元</p>
					</div>
				</div>
				<p class="alert-bot" @click="ConfirmSureRecharge">确定</p>
			</div>
		</transition>
		<transition name="van-fade">
			<div v-show="rules_alert" class="rules-alert">
				<p class="alert-top">充值协议</p>
				<div class="alert-con">
					<p>
						为明确双方的权利和义务，规范双方业务行为，用户在关注集分卡微信公众服务号或使用本平台服务前，须仔细阅读本协议服务条款。本协议已对与您的权益有或可能具有重大关系的条款，及本公司具有或可能具有免责或限制责任的条款用粗体字予以标注，提请您注意。当您点击“已阅读并同意服务协议”按钮，即表示您已与杭州淘号科技有限公司（以下简称“淘号科技”）达成本协议，承诺接受并遵守本协议的约定，同意并接受全部服务条款及条件。
					</p>
					<p>1、集分卡充值服务：指本公司通过集分卡公众平台向用户提供的充值记录查询、充值兑换等用户服务，包括但不限于中集分卡的充值、查询业务。</p>
					<p>2、在账号与密码匹配的情况下所进行的操作（包括账户资金的分配、支付等相关财产的处分）将被视为用户本人之操作，由此产生法律后果将由用户自行承担。</p>
					<p>3、用户在同意本协议，并确认核对充值号码无误充值，如果由于用户行为充错号码，本平台概不负责。</p>
					<p>4、本卡仅限专属会员内部使用，可供移动、电信、联通三网及中石化用户兑换话费、流量及加油充值服务，详情可扫码关注微信公众平台；</p>
					<p>5、本卡不记名、不挂失，并严禁倒卖，如违反规定，本公司有权终止本卡使用权；</p>
					<p>6、请在有效期限截止日期前使用，有效截止日期：2019年3月1日；</p>
					<p>7、请避开系统维护期使用（每日22:00-次日02:00）；如遇服务高峰期（月初和月末）会有延迟，请耐心等待；</p>
					<p>8、客户服务热线：0571-86572999，客户服务时间：周一至周五9:00-18:00。</p>
					<p>9、用户不得在本平台发表包含以下违法内容的言论，其产生的法律责任由用户本人承担，在此情况下集分卡平台有权拒绝向其继续提供服务，并保留追究当事人法律责任的权利，包括但不限于以下内容：</p>
					（1）煽动、抗拒、破坏宪法和法律、行政法规实施的； <br>
					（2）煽动颠覆国家政权，推翻社会主义制度的；煽动、分裂国家，破坏国家统一的；煽动民族仇恨、民族歧视，破坏民族团结的； <br>
					（3）任何包含对种族、性别、宗教、地域内容等歧视的；<br>
					（4）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；  <br>
					（5）公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；损害国家机关信誉的；对服务进行歪曲事实的恶意攻击和诋毁；  <br>
					（6）其他违反宪法和法律行政法规的。<br>
					<p>10、对于用户在本网站作出的不当行为及言论，淘号科技有权在无须征得用户同意的前提下作出终止服务、删除言论等处理。淘号科技权对不符合业务流程要求的服务指令及订单进行撤销，并保留暂时或永久限制用户所使用的全部或部分服务功能。淘号科技有义务严格按照按本平台服务的业务流程及操作规定为用户提供的服务，并保证本平台所提供服务的合法性，并有义务在现有技术上维护整个平台服务及交易的正常运行。对于用户在使用本平台服务时遇到的问题以及异常情况，淘号科技应及时作出回复并协助处理。</p>
					<p>11、本平台保证不对外公开或向第三方提供用户信息及用户在使用网络服务时存储在本平台上的非公开内容，但下列情况除外：</p>
					（1）事先获得用户的明确授权； <br>
					（2）根据有关的法律法规要求； <br>
					（3）按照相关政府主管部门的要求；<br>
					（4）为维护社会公众的利益；<br>
					（5）为维护用户的合法权益； <br>
					（6）不可抗力所导致的用户信息公开；<br>
					（7）不能归咎于本站的客观情势，导致用户信息的公开；<br>
					（8）由于本平台的硬件和软件的能力限制，所导致用户信息的公开； <br>
					（9）符合用户利益要求的<br>
					<p>12、当用户点击"已阅读并同意接受用户协议"按钮时，即表示用户已与集分卡平台达成本协议，同意并接受全部服务条款及条件。用户承诺接受并遵守本协议约定。用户不同意本协议约定的，应立即停止注册或停止使用本平台服务。</p>
				</div>
				<p class="alert-bot" @click="Agree">同意</p>
			</div>
		</transition>
  	</div>
</template>
<script>
	export default {
		data() {
			return {
				info: {
					card: '12121221212',			// 充值卡卡号
					pwd: '',			// 充值卡密码
					typeCn: '通用',		// 充值卡类型，通用、话费、油卡
					typeEn: 'CURRENCY',	// 充值卡类型，通用、话费、油卡
					worth: '100',		// 充值卡面值
					name: '',			// 用户姓名
					tel: '',			// 用户手机号码
					fuelCard: '',		// 加油卡卡号
					checked: '',		// 是否阅读充值协议
					time: '2020-12-31',			// 有效日期
					choose: 'fuel',		// 用户选择充值类型，bill话费，fuel油卡
					notice: '1'			// 1正确，2卡号错误，3密码错误
				},
				choose_alert: false,
				recharge_alert: false,
				maskShow: false,
				rules_alert: false,
				styles1: {
					"height": 477 + 'px'
				},
				styles2: {
					"margin-top": 300 + 'px'
				}
			};
		},
		mounted() {
			this.styles1.height = this.$refs.input.clientHeight + 170 + 'px';
			this.styles2['margin-top'] = this.$refs.input.clientHeight + 'px';
		},
		methods: {
			ConfirmSureChose() {
				this.inputShow = true;
				this.maskShow = false;
				this.choose_alert = false;
			},
			ConfirmSureRecharge() {

			},
			Read() {
				this.maskShow = true;
				this.rules_alert = true;
			},
			Agree() {
				this.maskShow = false;
				this.rules_alert = false;
				this.info.checked = true;
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../../style/less/recharge/code.less";
</style>
