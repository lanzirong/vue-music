import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决路由重复点击保存问题
VueRouter.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

//组件懒加载
//发现页面
const discover = ()=> import('views/discover/Discover') // 发现页面组件


//个人页面
const myMessage = ()=> import('views/myMessage/MyMessage')//个人页面组件


//云村页面
const cloudVillage = ()=> import('views/cloudVillage/CloudVillage') // 云村页面组件


//视频页面
const video = ()=> import('views/video/Video') // 视频页面组件

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },//重定向至发现组件
  {
    path: '/discover',
    component: discover,
  },//发现组件
  {
    path: '/myMessage',
    component: myMessage,
  },//个人页面组件
  {
    path: '/cloudVillage',
    component: cloudVillage,
  },//云村组件
  {
    path: '/video',
    component: video,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
