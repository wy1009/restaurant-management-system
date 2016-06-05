import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: false,
        userInfo: {}
    },
    mutations: {
        loginSuccess (state, userInfo) {
            state.login = true
            state.userInfo = userInfo
        }
    }
})