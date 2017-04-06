import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import VueResource from 'vue-resource'
import API from '../config/api'
Vue.use(VueResource)
function apiService(api){
    return (id = null) => Vue.http.jsonp(api.url, {
        params: api.params(id),
        jsonp: api.jsonp
    })
}
//axios不支持jsonp，我也很绝望啊
//处理异步请求，第一个参数为api，第二个参数为id，传入箭头函数中，默认为null
const actions = {
    test ({commit}) {
        console.log('ok')
    },
    getRankSongs ({commit}, id){
        return apiService(API.rank_songs)(id)
    },
    getRecommands ({commit}){
        return apiService(API.first_page_data)()
    },
    getCDList ({commit}, id){
        return apiService(API.cd)(id)
    },
    albummid ({commit}, mid) {
        Vue.http.jsonp('http://120.27.93.97/weappserver/get_music_info.php', {
            params: {
                mid: mid
            },
            jsonp: 'callback'
        }).then((response) => {
            commit('albummid', response.data.albummid)
        }, (err) => {
             console.log(err)
        })  
    },
    //提交入mutations中以备再次处理
    getHotKey({commit}){
        return apiService(API.hotkey)()
    },
    search({}, key){
        return apiService(API.search)(key)
    },
}

export default actions