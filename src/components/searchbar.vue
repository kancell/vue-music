<template>
    <div>
        <div id='search-bar'>
            <div class="ret">
                <p @click="like">我的</p>
                <p @click="main">乐库</p>
            </div>
            <div class="set">
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
            this.$router.push({name:'user'})
        },
        main () {
             this.$router.push({name:'main'})
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
    background: #fff;
	border-bottom: 1px solid ghostwhite;
}  
#search-bar div {
    display: flex;
    flex-direction:row-reverse;
} 
#search-bar .set {
    margin-right: 12px;
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
#search-bar .ret {
    display: flex;
    width: 33%;
    justify-content: space-around;
    align-items: center;
}
#search-bar .ret p {
    color: gray;
    font-size: 15px;
}
.sub-bar{
	height: 34px;
}  
</style>