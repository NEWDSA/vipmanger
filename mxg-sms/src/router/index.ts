import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/components/Layout.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login', // 路由名称
    component: Login // 组件对象
  },
  {
    path: '/',
    name: 'layout', // 路由名稱
    component: Layout // 組件對象
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
