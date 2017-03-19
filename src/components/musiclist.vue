<template>
	<div id="music-list">
		<ul>
			<li v-for="(item, index) in musicList.songlist"
				@click="musicSelect(item)"
				>
				<div class="music-info">
					<div class="music-name">
						{{item.name}}
					</div>
					<div class="music-singer">
						<span v-for="(sub, index) in item">
							{{sub.title}}
						</span>
						<span>{{item.subtitle}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "musiclist",
	data () {
		return {
			musicList:[]
		}
	},
	created	() {
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
		})		
	},
	methods: {
		musicSelect(item){
			this.$store.state.nowPlaying = item
			this.$store.commit('play')
		}
	}
}
</script>
<style lang="css" scoped>
</style>