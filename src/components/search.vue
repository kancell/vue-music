<template>
	<div id="search">
		<div class="search-input">
			<img src="./../assets/icon-search.png" alt="搜索">
			<form>
			<input type="text"
					placeholder="搜索 歌曲/专辑/歌手"
					>
			</form>
		</div>
		<div class="hotkey">
			<ul>
				<li v-for="(item,index) in hotkey">
					<span class="hotkey-index">{{index +1}}</span>
					<span class="hotkey-k">{{item.k}}</span>
					<span>{{item.n}}</span>
				</li>
			</ul>
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
		};
	},
	computed: {
		...mapGetters(['searchShow'])
	},
	created () {
		this.$store.dispatch('getHotKey').then((response) => {
			this.hotkey = response.data.data.hotkey.slice(0, 5)
			console.log(this.hotkey)
		})
	},
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
	width: 100%;
	background: #eee;
	border-radius: 5px;
	margin: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
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
.hotkey {
	margin-bottom: 50px;
	background: #eeeeee;
	display: flex;
	flex-direction: column;
	width: 100%;
}

.hotkey ul {
	list-style: none;
	background: #fff;
	display: flex;
	flex-direction: column;
}
.hotkey ul li {
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 0 10px;
	cursor: pointer;
}
.hotkey ul li .hotkey-index {
	padding-right: 10px;
}
.hotkey ul li .hotkey-k {
	flex-grow: 1;
}
</style>