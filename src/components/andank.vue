<template>
    <div class="list-title">
        <p>热门歌单</p>	
        <img src="../assets/icon-back.png" @click="andankChange">
    </div>
</template>
<script>
export default {
	name: "andank",
	data () {
		return {
		};
	},
    methods: {
		andankChange () {
			this.$store.state.andankShow = !this.$store.state.andankShow
		}
    }
}
</script>
<style lang="css" scoped>
.list-title {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.list-title p{
	margin: 4px 0 4px 16px;
	font-size: 14px;
	color: gray;
}
.list-title img {
	width: 15px;
	height: 15px;
	margin: 4px 16px 4px 0;
}
</style>