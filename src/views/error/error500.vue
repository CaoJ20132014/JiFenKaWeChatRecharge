<template>
    <div class="BOX">
        <h3>集分卡充值中心</h3>
        <div class="inside">
            <img src="../../assets/image/error/500.png" alt="">
            <div class="right">
                <b>啊，服务器失联！</b>
                <p>请稍等或刷新重试！</p>
                <button class="home" @click="goHome">返回首页</button>
                <button class="prev" @click="Prev">返回上一页</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            goHome(){
                this.$router.push({
                    name: 'home'
                });
            },
            Prev(){
                let query = this.$route.query;
                this.$router.push({
                    path: query.redirect
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .BOX{
        width: 10rem;
        height: 100%;
        h3{
            padding: .266667rem 0;
            text-align: center;
            color: white;
            background-color: #a062e0;
        }
        .inside{
            width: 8rem;
            height: 3.133333rem;
            position: fixed;
            top: 35%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            img{
                vertical-align: top;
                width: 3.226667rem;
            }
            .right{
                padding-top: .666667rem;
                b{
                    font-size: .346667rem;
                }
                p{
                    font-size: .32rem;
                    padding-top: 5px;
                    padding-bottom: 50px;
                }
                button{
                    width: 2rem;
                    height: .8rem;
                    border: 0;
                    outline: none;
                    border-radius: 3px;
                }
                .home{
                    background-color: #a062e0;
                    border: 1px solid #a062e0;
                    color: white;
                }
                .prev{
                    background-color: white;
                    margin-left: .133333rem;
                    border: 1px solid #a062e0;
                    color: #a062e0;
                }
            }
        }
    }
</style>
