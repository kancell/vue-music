<template>
	<div id = "recommand">
		<div class="hot-list">
			<div class="list-item" 
				v-for="(item,index) in songList"
				>
				<router-link :to="{name: 'musiclist', params:{id: item.dissid}}">
					<!--命名路由，通过route.params获取参数，通过name属性定位，不能用path-->
					<div class="list-img">
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
    export default {
		name: 'recommand',
        data () {
            return {
                songList:[]
            }
        },
		mounted () {
			this.$store.dispatch('getRecommands').then((res) => {
				this.songList = res.data.data.hotdiss.list
			})
		}
    }
</script>
