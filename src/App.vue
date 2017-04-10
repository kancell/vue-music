<template>
  	<div id="app">
		<keep-alive >
			<router-view  v-show="!detailShow"></router-view>
		</keep-alive>
		<musicdetail v-show="detailShow"></musicdetail>
		<playBar v-show="!detailShow"></playBar>
  	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import recommand from './components/recommand.vue'
import playBar from './components/playbar.vue'
import musicdetail from './components/musicdetail.vue'
export default {
	data () {
		return {

        }
	},
	components: {
		playBar,
		recommand,
		musicdetail
	},
	computed: {
		...mapState({
				detailShow: state => state.detailShow
		})
	},
	created () {

	},
	mounted () {

	},
	methods: {
		detailChange(event) {
			this.detailShow = true
		},
	}	
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}

@media screen and (min-width: 68vh) {
	#play-bar, #search-bar, body, #app, #music-detail, html{
		width: 68vh;
		margin: 0 auto
	}
}
@media screen and (max-width: 67vh) {
	#play-bar, #search-bar {
		width: 67vh;
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

}
#app a {
	color: #42b983;
	text-decoration: none;
}
</style>
