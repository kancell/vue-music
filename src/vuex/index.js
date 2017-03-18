import Vue from 'vue'
import Vuex from 'vuex'
import actions from './apiService.js'
Vue.use(Vuex)

const state = {
    NewsLatest: {},
    NewsDetail: {},
	NewsLatestMore: [],
    Themes:{},
    lol:5515
}
//state,mutations,action等分模块处理
export default new Vuex.Store({
    state,
    actions   
})
