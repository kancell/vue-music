<template>
  	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<playBar></playBar>
  	</div>
</template>

<script>
import recommand from './components/recommand.vue'
import playBar from './components/playbar.vue'
export default {
	data () {
		return {

        }
	},
	components: {
		playBar,
		recommand
	},
	created () {

	},
	mounted () {
		this.$store.dispatch('getRecommands').then((response) => {
			 
		})
	},
	methods: {
		
	}	
}
</script>

<style>

</style>
