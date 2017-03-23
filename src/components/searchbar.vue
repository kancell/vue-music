<template>
    <div>
        <div id='search-bar'>
            <div class="ret" @click="previous">
                <img src="../assets/icon-back.png">
            </div>
            <div class="set">
                <div>
                    <img src="../assets/icon-list.png">
                </div>		
                <div @click="search">
                    <img src="../assets/icon-search.png">
                </div>
                <input type="text" v-show="searchShow">
            </div>
        </div>
        <div class="sub-bar"></div>
        <div class="search-info" v-show="searchShow">
            {{hotkey}}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'searchbar',
    data () {
        return {
            hotkey:'',
        }
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
    methods: {
        previous () {
            this.$router.go(-1)
        },
        search () {
            this.$store.commit('searchShow')
        }
    }
}
</script>

<style lang="css" scoped>
#search-bar {
	display: flex;
    position: fixed;

    top: 0;
    z-index: 10;
    justify-content: space-between;
	background: -webkit-linear-gradient(#f9f9f9, #f3f3f3);
	background: -moz-linear-gradient(#f9f9f9, #f3f3f3);
	background: -o-linear-gradient(#f9f9f9, #f3f3f3);
	background: linear-gradient(#f9f9f9, #f3f3f3);
}  
#search-bar div {
    display: flex;
    flex-direction:row-reverse;
} 
#search-bar .set img{
	width: 25px;
	height: 25px;
	margin: 4px;	
} 
#search-bar .ret img{
	width: 16px;
	height: 16px;
	margin: 6px;	
}
.sub-bar{
	height: 35px;
}  
</style>