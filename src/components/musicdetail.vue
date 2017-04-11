<template>
	<div id="music-detail">
		<div @click="detailChange" class="ret">
			<img src="../assets/icon-back.png">
		</div>
		<div class="img-detail">	
			<img :src="defImg || nowPlayInfo[1]">
		</div>
		<p class="music-name">{{nowPlayInfo[0]}}</p>
		<div class="music-ctrl">
			<ul>
				<li>
					<img src="../assets/icon-like.png"
						@click="like">
				</li>
				<li>
					<img src="../assets/icon-shangyiqu.png"
						@click="playBefore">
				</li>
				<li>
					<img :src="playState?iconPause:iconPlay"
						@click="tapButton">
				</li>
				<li>
					<img src="../assets/icon-xiayiqu.png"
						@click="playNext">
				</li>
				<li>
					<router-link :to="{name: 'likelist'}">
						<img src="../assets/icon-list.png"
						@click="change">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
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
		...mapState({
				nowPlaying: state => state.nowPlaying
		}),
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
		detailChange (){
			this.$store.state.detailShow = false
		},
		tapButton (event){		
			if(this.playState){
				this.$store.commit('pause')
			}
			else{		
				this.$store.commit('play')
			}		
		},
		like (){
			this.$store.state.likeList.push(this.nowPlaying)
			console.log(this.$store.likeList)
		},
		playNext (){
			this.$store.commit('playNext')
			this.$store.dispatch('albummid' ,this.nowPlaying.mid)
		},
		playBefore (){
			this.$store.commit('playBefore')
			this.$store.dispatch('albummid' ,this.nowPlaying.mid)
		},
		change (){
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
.ret img{
	width: 24px;
	height: 24px;
	margin: 9px;	
}
</style>