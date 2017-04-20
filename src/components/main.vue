<template>
    <div>
        <searchbar></searchbar>
        <recommand v-show="!andankShow"></recommand>
        <rank v-show="andankShow"></rank>
    </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import searchbar from './searchbar.vue'
import recommand from './recommand.vue'
import rank from './rank.vue'
export default {
	name: "main",
	data () {
		return {
            
		};
	},
    computed: {
        ...mapGetters(['andankShow'])
    },
    components: {
        searchbar,
        recommand,
        rank
    }
}
</script>
<style lang="css" scoped>
</style>