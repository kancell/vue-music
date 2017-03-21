<template>
	<div id="music-list">
		<div class="previous" @click="previous" ref="previous">

		</div>
		<ul>
			<li class="music-item"
				v-for="(item, index) in musicList.songlist"
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
import { mapGetters } from 'vuex'
export default {
	name: "musiclist",
	data () {
		return {
			musicList:[]
		}
	},
	beforeCreated () {
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
		})		
		document.body.scrollTop = 0
	},
	destroyed () {
	},
	activated () {
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
		})
		document.body.scrollTop = 0
	},
	//activated 用于重新进行事件响应，不被keep-alive缓存
	methods: {
		previous (){
			this.$router.push('/')
		},
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
#music-list {
	background: #fff;
}
#music-list .music-item{
	margin: 5px 0 0 5px;
}
#music-list li:nth-child(2n){
	background: gainsboro
}
.previous{
	height: 20px;
}
</style>