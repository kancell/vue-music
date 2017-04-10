<template>
	<div id="music-detail">
		<p @click="detailChange">返回</p>
		<div class="img-detail">	
			<img :src="defImg || nowPlayInfo[1]">
		</div>
		<p class="music-name">{{nowPlayInfo[0]}}</p>
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
			defImg: require('../assets/Vue_Music_Blur.png'),
			iconPlay: require('../assets/icon-play.png'),
			iconPause: require('../assets/icon-pause.png'),
		};
	},
	computed: {
		...mapGetters(['nowPlaySrc','nowPlayInfo','playState']),
	},
	created () {

	},
	watch: {
		nowPlaySrc: function (){
			this.defImg = false
		}
		//获得图片后，替换初始图片
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
	background: -webkit-linear-gradient(top, #f9f9f9, #f3f3f3);
    z-index: 5;
	display: flex;
	flex-direction: column;
	justify-content: space-between
}
#music-detail .music-ctrl {
	display: flex;
}
#music-detail .music-ctrl ul {
	display: flex;
	margin: 0 auto;
	justify-content: space-around;
	width: 100%;
}
#music-detail .music-ctrl ul li {
	list-style: none;
}
#music-detail .music-ctrl ul li img {
	width: 40px;
}
#music-detail .music-name {
	margin: 0 auto
}
#music-detail .img-detail {
	width: 100%;
	display: flex;
}
#music-detail .img-detail img {
	width: 59%;
	height: 59%;
	margin: 0 auto;
	border-radius: 50%;
	animation:rotating 50s linear infinite
}
@keyframes rotating {
	from {transform: rotate(0)}
	to {transform: rotate(360deg)}
}
</style>