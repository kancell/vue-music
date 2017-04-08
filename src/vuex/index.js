import Vue from 'vue'
import Vuex from 'vuex'
import actions from './apiService.js'
Vue.use(Vuex)

const state = {
    playState: false,
    scrollbar: 0,
    nowPlaying: '',
    playList: [],
    detailShow: false,
    defImg: require('../assets/Vue_Music_Blur.png'),
    albumImg:null
}

const mutations = {
    play (state) {
        state.playState = true
    },
    pause (state) {
        state.playState = false
    },
    CDList (state, data) {
        console.log(data)
    },
    albummid (state, data) {
        state.albumImg = data
    },
}

const getters = {
    nowPlaySrc: state => {
        return `http://ws.stream.qqmusic.qq.com/${state.nowPlaying.id}.m4a?fromtag=46`
    },
    nowPlayInfo: state => {
        if(typeof state.nowPlaying == 'undefined'){
            return ['name' ,state.defImg, state.nowPlaying.id]
        }
		if(state.albumImg == undefined || null){
			return [state.nowPlaying.name, state.defImg, state.nowPlaying.id]
		}
        //可能出现null或undefined，都为错误，故不使用 ===
        return [state.nowPlaying.name, "https://y.gtimg.cn/music/photo_new/T002R500x500M000"+state.albumImg+".jpg", state.nowPlaying.id]
    },
    playState: state => {
        return state.playState
    }
}
//state,mutations,action等分模块处理
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions   
})
