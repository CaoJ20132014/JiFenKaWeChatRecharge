<template>
  	<div id="App">
    	<router-view/>
  	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>

<style scoped>
	#App{
		width: 10rem;
		background-color: #f4f4f4;
		padding-top: .2rem;
	}
</style>