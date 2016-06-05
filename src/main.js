import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import App from './components/App.vue'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()
routerMap(router)

router.start(App, '#app')