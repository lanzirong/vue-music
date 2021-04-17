import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//
import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
//
import 'assets/mui/css/mui.css'
import mui from "assets/mui/js/mui.min.js"; // 引入 mui js 文件
//
import "assets/css/base.css"  // 全局css样式
import "./assets/icon/Common.css"  // 公共字体图标
import "./assets/icon/Login.css"  // 登录页面字体图标

Vue.config.productionTip = false

//解决移动端300ms延迟(fastClick)
fastClick.attach(document.body);
//使用懒加载插件(vue-lazyload)
Vue.use(VueLazyLoad,{
  // preLoad: 1.3,   //预加载的宽高比
  // error: 'dist/error.png',//图片加载失败时使用的图片源
  loading: './assets/default.png',//图片加载的路径
  // loading:require('./assets/mo.png'),
  // attempt: 1,
  listenEvents:['scroll','wheel','mousewheel','resize','animationend','transitionend','touchmove']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
