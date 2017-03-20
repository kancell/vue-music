<template>
    <div id="play-bar" v-show="1">
        <audio id="music"
            ref="music"
            :src='nowPlaySrc'
            @timeupdate="updateTime"
            @ended="playContinue"
            ></audio>
		<div class="play-bar-image-container">
        	<img class="play-bar-image" :src="nowPlayInfo[1]">
        </div>
        <p class="play-bar-text">{{nowPlayInfo[0]}}</p>
        <img class="play-bar-button"
            :src="playState?iconPause:iconPlay"
            @click="tapButton"
			>
  	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
	data () {
		return {
			iconPlay: require('../assets/icon-play.png'),
			iconPause: require('../assets/icon-pause.png'),
        }
	},
	computed: {
		...mapGetters(['nowPlaySrc','nowPlayInfo','playState']),
		...mapMutations(['play', 'pause'])
		//将vuex中属性映射至组件中，通过getter获取状态，mutations更改状态

	},
	mounted () {
		/*this.$store.dispatch('getRecommands').then((response) => {
			 console.log(response)
		})*/
	},
	watch: {
		nowPlaySrc: function (){
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
		updateTime(event) {
		//	console.log(event.target.currentTime)
		},
		playContinue(event){
			console.log(event.target.ended)
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
		}
	}	
}
</script>

<style>
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