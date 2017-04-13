<template>
    <div>
        <searchbar></searchbar>
        <recommand></recommand>
    </div>
</template>
<script>
import searchbar from './searchbar.vue'
import recommand from './recommand.vue'
export default {
	name: "main",
	data () {
		return {
		};
	},
    components: {
        searchbar,
        recommand
    }
}
</script>
<style lang="css" scoped>
</style>