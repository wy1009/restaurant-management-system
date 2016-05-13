import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import App from './components/App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
var router = new VueRouter()
routerMap(router)
// router.beforeEach(function (transition) {
//  window.scrollTo(0, 0);
//  window.system = 'CRM';
//  window.user_role = 'admin'; // 暂时写死
//  if (window.user_role) {
//      transition.next();
//  } else {
//      // 请求api，将信息用window.user_info储存起来
//      // succ_callback中，如仍旧没有role，则跳转登录页面
//  }
// });
router.start(App, '#app')