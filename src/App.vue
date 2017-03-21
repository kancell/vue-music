<template>
  	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<playBar></playBar>
  	</div>
</template>

<script>
import { mapGetters } from 'vuex'
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
	/*computed: {
		...mapGetters(['showState'])
	},*/
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
* {
	margin: 0;
	padding: 0;
}
@media screen and (min-width: 68vh){
	#play-bar, body {
    width: 68vh;
	margin: 0 auto
	}
}
html {
	overflow-x: hidden;
	background: #EEEEEE;
}
body {
	display: flex;
	overflow-x: hidden;
}
#app {
	font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
	width: 100%;
	height: 100%;
}
#app a {
	color: #42b983;
	text-decoration: none;
}
</style>
