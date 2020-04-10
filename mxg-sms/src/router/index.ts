import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/components/Layout.vue'
import Home from '@/views/home/index.vue'
import Member from '@/views/member/index.vue'
import Supplier from '@/views/supplier/index.vue'
import Goods from '@/views/goods/index.vue'
import Staff from '@/views/staff/index.vue'
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
    component: Layout, // 組件對象
    redirect: '/home', // 重定向
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          title: '首页'
        }
      }

    ]
  },
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Member,
        meta: { title: '会员管理' }
      }
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Supplier,
        meta: { title: '供应商管理' }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Goods,
        meta: { title: '商品管理' }
      }
    ]
  },
  {
    path: '/staff',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Staff,
        meta: { title: '员工管理' }
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Member
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    children: [
      {
        path: '/', // /member/
        component: Member
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
