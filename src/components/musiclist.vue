<template>
	<div id="music-list">
		<returnbar string="歌单详情"></returnbar>
		<div class="loading" v-if="loading">
			<p>loading...</p>
		</div>
		<ul v-if="!loading">
			<li class="music-item"
				v-for="(item, index) in musicList.songlist"
				@click="musicSelect(item, index)">
				<div class="music-index">{{index+1}}</div>
				<div class="music-info">
					<div class="music-name">
						{{item.name}}
					</div>
					<div class="music-singer">
						<span v-for="(sub, index) in item.singer">
							{{sub.name}}
						</span>
						<span>-</span>
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
import returnbar from './returnbar.vue'
import { mapGetters } from 'vuex'
export default {
	name: "musiclist",
	data () {
		return {
			musicList:[],
			loading: true
		}
	},
	components: {
		returnbar
	},
	Created () {	
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
			this.loading = false
		})	
		document.body.scrollTop = 0
	},
	beforeRouteLeave (to, from, next) {
		this.loading = true
		next()
	},
	//过渡效果，离开组件时loading为true，进入组件，触发created钩子，数据处理完成后，
	//loading改为false，显示数据
	activated () {
		this.$store.dispatch('getCDList', this.$route.params.id).then((res) => {
			this.musicList = res.data.cdlist[0]
			this.loading = false
		})
		document.body.scrollTop = 0
	},
	//activated 用于重新进行事件响应，不被keep-alive缓存
	methods: {
		previous (){
			this.$router.go(-1)
		},
		musicSelect(item, index){
			//直接修改state是否合适？
			this.$store.state.nowPlaying = item
			this.$store.state.nowIndex = index
			this.$store.state.playList = this.musicList.songlist
			this.$store.commit('play')
			this.$store.dispatch('albummid' ,item.mid)
		}
	}
}
</script>
<style lang="css" scoped>
.loading {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100vh
}
.loading p {
	margin: 0 auto;
	padding-bottom: 39%;
}
#music-list {
	background: #fff;
}
#music-list .music-item {
	display: flex;
	margin: 5px 0 0 5px;
	border-bottom: 1px solid ghostwhite;
}

.music-info {
	font-size: 14px;
	text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.music-index {
	font-size: 9px;
	margin: 4px 10px 4px 10px
}
.music-singer {
	font-size: 5px;
	margin: 4px 4px 4px 0;
	text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>