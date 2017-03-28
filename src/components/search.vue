
<template>
	<div id="search">
		<div class="search-input">
			<img src="./../assets/icon-search.png" alt="搜索">
			<form>
				<input type="text"
						placeholder="搜索 歌曲/专辑/歌手"
						v-model="key"
						>
			</form>		
		</div>
		<div class="search-cacel">
			<p @click="search">搜索</p>
			<p @click="cacel">取消</p>
		</div>
		<div class="hot-key" v-if="!searchState">
			<ul>
				<li v-for="(item,index) in hotkey">
					<span class="hotkey-index">{{index +1}}</span>
					<span class="hotkey-k">{{item.k}}</span>
					<span>{{item.n}}</span>
				</li>
			</ul>
		</div>
		<div v-if="searchState">
			<div class="hot-key">
				{{searchResult.song.name}}
				<ul>
					<li v-for="(item,index) in searchResult.song.itemlist">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="hot-key">
				{{searchResult.mv.name}}
				<ul>
					<li v-for="(item,index) in searchResult.mv.itemlist">
						{{item.name}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: "search",
	data () {
		return {
			hotkey:'',
			key:'',
			searchResult:'',
			searchState:false
		};
	},
	computed: {
		...mapGetters(['searchShow'])
	},
	created () {
		this.$store.dispatch('getHotKey').then((response) => {
			this.hotkey = response.data.data.hotkey.slice(0, 5)
		})
	},
	methods: {
		cacel () {
			this.$router.go(-1)
		},
		search () {
			this.$store.dispatch('search', this.key).then((res) => {
				this.searchResult = res.body.data
				this.searchState = !this.searchState
			}, (error) => {{
				this.searchResult = '！未找到'
			}})
		}
	}
}
</script>
<style lang="css" scoped>
#search {
	display: flex;
	background: #fff;
	margin-top: 10px;
	box-shadow: 0 0 10px #DDD;
	width: 100%;
	margin: 0 auto;
	flex-wrap:wrap
}
.search-input {
	flex-grow: 1;
	background: #eee;
	border-radius: 5px;
	margin: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.search-cacel {
	display: flex;
	align-items: center
}
.search-cacel p{
	margin: 5px 10px 5px 1px;
}
.search-input img {
	height: 30px;
	width: 30px;
	display: inline-block;
	margin: 0 5px;
}
.search-input form,
.search-input input {
	width: 100%;
	height: 100%;
	border: none;
	background: #eee;
	font-size: medium;
	flex-grow: 1;
	border-radius: 5px;
	outline: none;
}
.hot-key {
	margin-bottom: 50px;
	background: #eeeeee;
	display: flex;
	flex-direction: column;
	width: 100%;
}

.hot-key ul {
	list-style: none;
	background: #fff;
	display: flex;
	flex-direction: column;
}
.hot-key ul li {
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 0 10px;
	cursor: pointer;
}
.hot-key ul li .hotkey-index {
	padding-right: 10px;
}
.hot-key ul li .hotkey-k {
	flex-grow: 1;
}
</style>