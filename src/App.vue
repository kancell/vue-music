<template>
  	<div id="app">
		<router-view></router-view>
		<playBar></playBar>
  	</div>
</template>

<script>
import playBar from './components/playbar.vue'
export default {
	data () {
		return {

        }
	},
	components: {
		playBar
	},
	created () {

	},
	methods: {
		
	}	
}
</script>

<style>

</style>
