<template>
	<div class="lyric">
		<p v-for="item in lyric">{{item}}</p>
	</div>
</template>
<script>
import Base64 from '../utils/base64'
import { mapGetters } from 'vuex'
export default {
	name: "lyric",
	data () {
		return {
			lyric: '',
		};
	},
	props: ['songid'],
	computed: {
		//...mapGetters(['nowPlaySrc','nowPlayInfo','playState']),
	},
	watch: {
		songid: function () {
			this.$store.dispatch('getLyric', this.songid).then((res) => {
				this.lyric = Base64.decode(res.data.lyric)
				.split('[')
				.slice()
				.map(str => {
					let t = str.split(']')
					return {[t[0]]: t[1]}
				})
				.reduce((a, b) => {
					return {...a, ...b}
				})
			})
		}
	},
	methods: {
		
	}
}
</script>
<style lang="css" scoped>
.lyric {
	display: flex;
	flex-direction: column;
}
.lyric p{
	text-align: center;
	font-size: 14px;
	padding-top: 5px;
}
</style>