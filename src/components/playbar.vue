<template>
    <div id="play-bar" v-show="1">
        <audio id="music"
            ref="music"
            :src='nowPlaying'
            @timeupdate="updateTime"
            @ended="playContinue"
            ></audio>
        <!--<div class="play-bar-image-container" @touchstart="showPlayPage" @click="showPlayPage">
        <img class="play-bar-image" v-lazy="coverImgUrl">
        </div>
        <p class="play-bar-text" @touchstart="showPlayPage" @click="showPlayPage">{{song.name}}</p>-->
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
		...mapGetters(['nowPlaying','playState']),
		...mapMutations(['play', 'pause'])
		//将vuex中属性映射至组件中，通过getter获取状态，mutations更改状态

	},
	mounted () {
		/*this.$store.dispatch('getRecommands').then((response) => {
			 console.log(response)
		})*/
	},
	watch: {
		nowPlaying: function (){
			setTimeout(() => {
					this.$store.commit('play')
					this.$refs.music.play()
			},0)
		}
		//监听aduio src 即nowplaying的信息，若改动则从新播放
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

</style>