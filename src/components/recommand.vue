<template>
	<div id="recommand">	
		<searchbar></searchbar>
		<div class="hot-list">
			<div class="list-item" 
				v-for="(item,index) in songList"
				>
				<router-link :to="{name: 'musiclist', params:{id: item.dissid}}">
					<!--命名路由，通过route.params获取参数，通过name属性定位，不能用path-->
					<div class="list-img"
						@click="scrollbar">
						<img :src="item.imgurl">
						<div class="listen-count">
							<img src="../assets/icon-erji.svg" alt="">
							<span>{{item.listennum}}</span>
						</div>
					</div>
					<div class="list-info">
						<p class="">{{item.author}}</p>
						<p class="">{{item.dissname}}</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
//import { mapGetters } from 'vuex'
import searchbar from './searchbar.vue'
export default {
	name: 'recommand',
	data () {
		return {
			songList:[]
		}
	},
	components: {
		searchbar
	},
	created () {
		this.$store.dispatch('getRecommands').then((res) => {
			this.songList = res.data.data.hotdiss.list
		})
	},
	activated () {
		document.body.scrollTop = this.$store.state.scrollbar
	},
	methods: {
		scrollbar () {
			this.$store.state.scrollbar = document.body.scrollTop
		}
	}
	//滚动条进度存入vuex中，返回时读取并使用，因为冒泡，点击事件必须写在具体元素中
}
</script>
<style lang="css" scoped>
.hot-list {
	display: flex;
	background: #fff;
	margin-top: 10px;
	box-shadow: 0 0 10px #DDD;
	width: 100%;
	margin: 0 auto;
	flex-wrap:wrap
}
/*
.hotlist .list-title{
	height: 50px;
	text-align: center;
	line-height: 50px;
}
.hotlist .list-content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}*/
.hot-list  .list-item {
	display: flex;
	width: 50%;
	cursor: pointer;
}
.hot-list .list-item .list-img{
	position: relative;
}
.hot-list .list-item .list-img img{
	width: 100%;
}
.hot-list .list-item .listen-count {
	position: absolute;
	bottom: 5px;
	left: 5px;
	color: #fff;
	font-size: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
}   
.hot-list .list-item .listen-count img{
	width: 15px;
	height: 15px;
	display: inline-block;
	margin-right: 3px;
}    
.hot-list .list-info {
	padding: 0 5px;
	font-weight: 300;
	font-size: 14px;
	margin-bottom: 10px;
}  
</style>