import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index.js'

import Vuex from 'vuex'
Vue.use(Vuex)



new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
