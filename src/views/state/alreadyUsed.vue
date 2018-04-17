<template>
    <div id="Recharge" class="already">
		<div class="already-top">
			<div class="icons">
                <div v-if="type == 'LT'">
                    <i class="iconfont LT">&#xe605;</i>
                    <p>中国联通</p>
                </div>
                <div v-else-if="type == 'DX'">
                    <i class="iconfont DX">&#xe666;</i>
                    <p>中国电信</p>
                </div>
                <div v-else-if="type == 'YD'">
                    <i class="iconfont YD">&#xe604;</i>
                    <p>中国移动</p>
                </div>
                <div v-else-if="type == 'SH'">
                    <i class="iconfont SH">&#xe62d;</i>
                    <p>中国石化</p>
                </div>
                <div v-else-if="type == 'SY'">
                    <i class="iconfont SY">&#xe611;</i>
                    <p>中国石油</p>
                </div>
            </div>
		</div>
		<div class="already-con">
			<div class="z-bot"></div>
			<div class="z-con"></div>
			<div class="z-top">
                <div>充值记录</div>
				<p>集分卡号：{{info.card}}</p>
				<p v-if="rechargeType == 'bill'">手机号码：{{info.tel}}</p>
				<p v-else-if="rechargeType == 'fuel'">加油卡号：{{info.fuel}}</p>
				<p>充值订单：{{info.order}}</p>
				<p>充值时间：{{info.time}}</p>
				<p>充值面值：{{info.worth}}元</p>
				<p>订单状态：{{info.state}}</p>
			</div>
		</div>
		<div class="already-bot">
			<img src="../../assets/image/recharge/saosao.png" alt="">
			<p>扫一扫，有惊喜</p>
			<p>客服电话：0571-86572999</p>
		</div>
  	</div>
</template>
<script>
    export default {
        data () {
            return {
                type: 'DX',
                info: {
                    card: "12121212121212",
                    order: "54454f454fdqdfqf",
                    time: "2018-04-16 13:51",
                    state: "充值成功",
                    worth: "100.00",
                    tel: "15617858292",
                    fuel: "1525251265233556356532"
                },
                rechargeType: "bill"
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../style/less/var/var.less";
    @font-face{
        font-family:iconfont;src:url();
        src:url(../../icons/icon/iconfont.eot) format('embedded-opentype'),url(../../icons/icon/iconfont.woff) format('woff'),url(../../icons/icon/iconfont.ttf) format('truetype'),url(../../icons/icon/iconfont.svg) format('svg')}
    .already{
        width: 10rem;
        background-color: white;
        position: relative;
        font-size: 0;
        &-top{
            width: 100%;
            height: 4.533333rem;
            background: linear-gradient(to right, #6952bc, @color-purple);
            .icons{
                display: flex;
                justify-content: center;
                div{
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    border: 4px solid #9b74d9;
                    background-color: white;  
                    text-align: center;
                    margin-top: 10px;
                    .iconfont{
                        font-size: 40px;
                    }
                    p{
                        font-size: .32rem;
                        color: @fc-89;
                    }
                    .LT{
                        color: #FF8247;
                    }     
                    .DX{
                        color: #286193;
                    }    
                    .YD{
                        color: #9cc813;
                    }
                    .SH{
                        color: red;
                    }
                    .SY{
                        color: red;
                    }
                }
            }
        }
        &-con{
            width: 8.666667rem;
            position: absolute;
            top: 3.233333rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .z-bot{
                width: 7.866667rem;
                height: .293333rem;
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
                background-color: #f5f5f5;
            }
            .z-con{
                width: 8.266667rem;
                height: .303333rem;
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
                background-color: #f5f5f5;
            }
            .z-top{
                width: 8.666667rem;
                border-radius: 4px;
                background-color: white;
                padding-bottom: 10px;
                div{
                    font-size: .4rem;
                    text-align: center;
                    line-height: 1.266667rem;
                    border-bottom: 1px solid #f4f4f4;
                    margin-bottom: 10px;
                }
                p{
                    font-size: .346667rem;
                    line-height: .8rem;
                    padding-left: 15px;
                    color: @fc-89;
                }
            }
        }
        &-bot{
            width: 10rem;
            height: 15.333333rem;
            background-color: #f4f4f4;
            text-align: center;
            img{
                width: 2rem;
                height: 2rem;
                margin-top: 6.533333rem;
            }
            p{
                font-size: .32rem;
                color: #999999;
                &:last-child{
                    padding-top: 40px;
                }
            }
        }
    }
</style>