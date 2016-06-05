import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import App from './components/App.vue'
import store from './vuex/store'
import { getLoginStatus } from './vuex/getters'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
routerMap(router)
router.beforeEach(function (transition) {
    var login = getLoginStatus(store.state)
    if (transition.to.name == 'login') {
        transition.next()
    } else {
        if (login) {
            transition.next()
        } else {
            transition.redirect({ name: 'login'})
        }
    }
})
router.start(App, '#app')