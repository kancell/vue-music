<template>
	<div>
		<div id="play-bar" v-show="1">
			<audio id="music"
				ref="music"
				:src='nowPlaySrc'
				@timeupdate="updateTime"
				@ended="playContinue">
			</audio>
			<div class="play-bar-image-container"
				@click="detailChange">
				<img class="play-bar-image" :src="defImg || nowPlayInfo[1]">
			</div>
			<p class="play-bar-text">{{nowPlayInfo[0]}}</p>
			<img class="play-bar-button"
				:src="playState?iconPause:iconPlay"
				@click="tapButton">
			<img class="play-bar-button"
				@click="playNext"
				:src="next">
		</div>
		<div class="sub-bar"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
export default {
	data () {
		return {
			defImg: require('../assets/Vue_Music_Blur.png'),
			iconPlay: require('../assets/icon-play.png'),
			iconPause: require('../assets/icon-pause.png'),
			next: require('../assets/icon-xiayiqu.png')
        }
	},
	computed: {
		...mapGetters(['nowPlaySrc','nowPlayInfo','playState']),
		...mapMutations(['play', 'pause']),
		...mapState({
				detailShow: state => state.detailShow,
				nowPlaying: state => state.nowPlaying
		}),
		//将vuex中属性映射至组件中，通过getter获取状态，mutations更改状态
	},
	mounted () {
		/*this.$store.dispatch('getRecommands').then((response) => {
			 console.log(response)
		})*/
	},
	watch: {
		nowPlaySrc: function (){
			this.defImg = false
			setTimeout(() => {
					this.$store.commit('play')
					this.$refs.music.play()
			},0)
		}
		//监听aduio src 即nowPlaySrc的信息，若改动则从新播放
		//怀疑watch回调函数触发早于aduio src改变刷新，导致$refs.music.play失效
		//setTimeout 0将watch回调置于下一个周期触发
	},
	methods: {
		detailChange(event) {
			this.$store.state.detailShow = true
		},
		updateTime(event) {
		//	console.log(event.target.currentTime)
		},
		playContinue(event){
			this.$store.commit('pause')
			this.$store.commit('play')
			this.$refs.music.play()
		},
		tapButton(event){		
			if(this.playState){
				this.$refs.music.pause()
				this.$store.commit('pause')
			}
			else{		
				this.$refs.music.play()
				this.$store.commit('play')
			}		
		},
		playNext (){
			this.$store.commit('playNext')
			this.$store.dispatch('albummid' ,this.nowPlaying.mid)
		}
	}	
}
</script>

<style lang="css" scoped>
#play-bar {
	position: fixed;
	bottom: 0;
	height: 50px;
	background: -webkit-linear-gradient(top, #f9f9f9, #f3f3f3);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
}
.sub-bar{
	height: 50px;
}
.play-bar-image-container {
	width: 37.5px;
	height: 37.5px;
	padding-left: 15px;
	cursor: pointer;
}
.play-bar-image {
	width: 37.5px;
	height: 37.5px;
	border-radius: 5px;
	display: inline-block;
}
.play-bar-text {
	flex-grow: 1;
	padding-left: 10px;
	cursor: pointer;
}
.play-bar-button {
	width: 20px;
	height: 20px;
	padding-right: 15px;
	cursor: pointer;
}
</style>