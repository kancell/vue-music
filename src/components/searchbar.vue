<template>
    <div>
        <div id='search-bar'>
            <div class="ret" @click="previous">
                <img src="../assets/icon-back.png">
            </div>
            <div class="set">
                <div @click="like">
                    <img src="../assets/icon-list.png">
                </div>		
                <div @click="search">
                    <img src="../assets/icon-search.png">
                </div>
            </div>
        </div>
        <div class="sub-bar"></div>
    </div>
</template>
<script>
export default {
    name: 'searchbar',
    data () {
        return {
            
        }
    },
    methods: {
        previous () {
            this.$router.go(-1)
        },
        search () {
            this.$router.push({name:'search'})
        },
        like () {
            this.$router.push({name:'likelist'})
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
	background: whitesmoke
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