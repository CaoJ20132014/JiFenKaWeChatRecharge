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
		height: 100%;
		background-color: #f4f4f4;
	}
</style>