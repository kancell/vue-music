<template>
    <div>
        <searchbar></searchbar>
        <router-link :to="{name:'likelist'}">
            <div class="likelist">
                tests
            </div>
        </router-link>
    </div>
</template>
<script>
import searchbar from './searchbar.vue'
export default {
	name: "user",
	data () {
		return {
		};
	},
    components: {
        searchbar
    }
}
</script>
<style lang="css" scoped>
</style>