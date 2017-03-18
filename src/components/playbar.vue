<template>
    <div id="play-bar" v-show="1">
        <audio id="music"
            ref="music"
            :src="dataUrl"
            @timeupdate="updateTime"
            @ended="playContinue"
            autoplay
            ></audio>
        <!--<div class="play-bar-image-container" @touchstart="showPlayPage" @click="showPlayPage">
        <img class="play-bar-image" v-lazy="coverImgUrl">
        </div>
        <p class="play-bar-text" @touchstart="showPlayPage" @click="showPlayPage">{{song.name}}</p>-->
        <img class="play-bar-button"
            :src="playing?iconPause:iconPlay"
            @touchend="tapButton"
            @click="tapButton">
  	</div>
</template>

<script>
export default {
	data () {
		return {
			playing:true,
			iconPlay: require('../assets/icon-play.png'),
			iconPause: require('../assets/icon-pause.png'),
			dataUrl:'http://ws.stream.qqmusic.qq.com/' + 5029137 + '.m4a?fromtag=46'
        }
	},
	mounted () {
		this.$store.dispatch('getRecommands').then((response) => {
			 console.log(response)
		})
	},
	methods: {
		updateTime(event) {
		//	console.log(event.target.currentTime)
		},
		playContinue(event){
			this.playing = false
			console.log(event.target.ended)
		},
		tapButton(){
			if(this.playing){
				this.$refs.music.pause()
				this.playing = false
			}
			else{
				this.$refs.music.play()
				this.playing =true
			}
		}
	}	
}
</script>

<style>

</style>