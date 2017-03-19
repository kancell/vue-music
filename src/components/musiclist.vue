<template>
	<div>sdaa</div>
</template>
<script>
export default {
	name: "musiclist",
	data () {
		return {

		}
	},
	mounted	() {
		console.log(this.$route.params.id)
		this.$store.dispatch('getCdList', this.$route.params.id).then((res) => {
			console.log(res)
		})
	}
}
</script>
<style lang="css" scoped>
</style>