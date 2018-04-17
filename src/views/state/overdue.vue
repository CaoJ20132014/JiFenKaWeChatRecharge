<template>
    <div id="overdue">
        <i class="iconfont icon-yiguoqi"></i>
        <p>该卡已过期！！！</p>
        <button class="home" @click="goHome">返回首页</button>
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
            }
        }
    }
</script>
<style lang="less" scoped>
    #overdue{
        width: 10rem;
        text-align: center;
        padding-top: 6.666667rem;
        background-color: white;
        .iconfont.icon-yiguoqi{
            width: 100%;
            color: red;
            font-size: 50px;
        }
        p{
            font-size: .4rem;
            padding-top: 0.533333rem;
        }
        button{
            width: 2rem;
            height: .8rem;
            border: 0;
            outline: none;
            border-radius: 3px;
            margin-top: .533333rem;
        }
        .home{
            background-color: #a062e0;
            border: 1px solid #a062e0;
            color: white;
        }
    }
</style>