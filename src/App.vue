<template>
  	<div id="App">
    	<transition :name="transitionName">   
      		<router-view></router-view>
    	</transition>
  	</div>
</template>

<script>
	export default {
		name: "App",
		data () {
			return {
				transitionName: ''
			}
		},
		watch: {										//使用watch 监听$router的变化
			$route(to, from) {
				if(to.meta.index > from.meta.index){	//如果to索引大于from索引,判断为前进状态,反之则为后退状态
					this.transitionName = 'slide-left';
				} else {
					this.transitionName = 'slide-right';
				}
			}
		}
	};
</script>

<style lang="less" scoped>
	#App{
		width: 10rem;
		height: 100%;
		background-color: #f4f4f4;
		.slide-right-enter-active,
		.slide-right-leave-active,
		.slide-left-enter-active,
		.slide-left-leave-active {
			will-change: transform;
			transition: all 500ms;
			position: absolute;
		}
		.slide-right-enter {
			opacity: 0;
			transform: translate3d(-100%, 0, 0);
		}
		.slide-right-leave-active {
			opacity: 0;
			transform: translate3d(100%, 0, 0);
		}
		.slide-left-enter {
			opacity: 0;
			transform: translate3d(100%, 0, 0);
		}
		.slide-left-leave-active {
			opacity: 0;
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>