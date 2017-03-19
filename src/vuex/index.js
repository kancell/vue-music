import Vue from 'vue'
import Vuex from 'vuex'
import actions from './apiService.js'
Vue.use(Vuex)

const state = {
    playState: false,
    nowPlaying: '',
    playList: []
}

const mutations = {
    play (state) {
        state.playState = true
    },
    pause (state) {
        state.playState = false
    },
    CDList(state, data){
        console.log(data)
    }
}

const getters = {
    nowPlaying: state => {
        return `http://ws.stream.qqmusic.qq.com/${state.nowPlaying.id}.m4a?fromtag=46`
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
