<template>
	<div>
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
export default {
	name: "likelist",
	data () {
		return {

		};
  	},
	computed: {
		...mapState({
			likeList: state => state.likeList
		}),
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
.music-info {
	font-size: 14px;
}
.music-singer {
	font-size: 5px;
}
</style>