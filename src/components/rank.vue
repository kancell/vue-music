<template>
    <div>
        <andank></andank>
        <ul>
            <li v-for="item in topList">
                <div>
                    <img :src="item.picUrl">
                    <p>{{item.topTitle}}</p>
                </div>
                <div>
                    <p v-for="(song,index) in item.songList">
                        {{index+1}}
                        {{song.songname}}
                        <span>{{song.singername}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import andank from './andank.vue'
export default {
	name: "rank",
	data () {
		return {
            topList: ''
		};
	},
    components: {
        andank
    },
    created () {
        this.$store.dispatch('getRankList').then((res) => {
            this.topList = res.body.data.topList
            console.log(res.data.data.topList)
        })
    }
}
</script>
<style lang="css" scoped>
</style>