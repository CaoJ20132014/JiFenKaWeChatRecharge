<template>
    <div class="holiday">
        <div class="holiday-top"></div>
        <div class="holiday-bot"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>
<style lang="less" scoped>
    .holiday{
        width: 10rem;
        height: 14.28rem;
        padding-top: 2rem;
        background-image: url('../../assets/image/maintain/beijing.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &-top{
            width: 7.573333rem;
            height: 7.266667rem;
            background-image: url('../../assets/image/maintain/tu.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin: 0 auto 0;
        }
        &-bot{
            width: 8.666667rem;
            height: 3.706667rem;
            background-image: url('../../assets/image/maintain/intrduce.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin: 1.333333rem auto 0;
        }
    }
</style>