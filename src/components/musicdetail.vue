<template>
	<div id="music-detail">
		<p @click="detailChange">返回</p>
		<div class="music-ctrl">
			<ul>
				<li>
					<img src="../assets/icon-like.png">
				</li>
				<li>
					<img src="../assets/icon-shangyiqu.png">
				</li>
				<li>
					<img :src="playState?iconPause:iconPlay">
				</li>
				<li>
					<img src="../assets/icon-xiayiqu.png">
				</li>
				<li>
					<img src="../assets/icon-list.png">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
	name: "musicdetail",
	data () {
		return {
			iconPlay: require('../assets/icon-play.png'),
			iconPause: require('../assets/icon-pause.png'),
		};
	},
	computed: {
		...mapGetters(['nowPlaySrc','nowPlayInfo','playState']),
	},
	created () {

	},
	methods: {
		detailChange () {
			this.$store.state.detailShow = false
		}
	}
}
</script>
<style lang="css" scoped>
#music-detail {
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
}
</style>