<template>
	<div >
		<div class="return" @click="previous">
			<img src="../assets/icon-back.png">
			<p>{{string}}</p>
		</div>
		<div class="subbar"></div>
	</div>
</template>
<script>
export default {
	name: "returnbar",
	props: ["string"],
	data () {
		return {
		};
	},
	methods: {
		previous (){
			this.$router.go(-1)
		},
	}
}
</script>
<style lang="css" scoped>
.return {
	display: flex;
	height: 32px;
	position: fixed;
	border-bottom: 1px solid ghostwhite;
	align-items: center;
	background: #fff;
}
.return p{
	font-size: 14px;
	color: gray;
}
.return img {
	width: 16px;
	height: 16px;
	margin: 6px 
}
.subbar {
	height: 32px;
}

</style>