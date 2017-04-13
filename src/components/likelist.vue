<template>
	<div id="music-list">
		<returnbar string="我的最爱"></returnbar>
		<ul>
			<li class="music-item"
				v-for="(item, index) in likeList"
				@click="musicSelect(item, index)"
				>
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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import returnbar from './returnbar.vue'
export default {
	name: "likelist",
	data () {
		return {

		};
  	},
	components: {
		returnbar
	},
	computed: {
		...mapState({
			likeList: state => state.likeList
		}),
		//数据预备存储进localstorage中
	},
	methods: {
		musicSelect(item, index){
			this.$store.state.nowPlaying = item
			this.$store.state.nowIndex = index
			this.$store.state.playList = this.likeList
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
#music-list p {
	margin: 6px;
	font-size: 14px;
}
#music-list .music-item{
	margin: 5px 0 0 5px;
}
#music-list li:nth-child(2n){
	background: gainsboro
}
.music-info {
	font-size: 14px;
}
.music-singer {
	font-size: 5px;
}
</style>