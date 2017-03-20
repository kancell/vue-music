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
	activated () {
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
		})
	},
	//activated 用于重新进行事件响应，不被keep-alive缓存
	methods: {
		musicSelect(item){
			//直接修改state是否合适？
			this.$store.state.nowPlaying = item
			this.$store.commit('play')
			this.$store.dispatch('albummid' ,item.mid)
		}
	}
}
</script>
<style lang="css" scoped>
</style>