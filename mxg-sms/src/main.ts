import Vue from 'vue'
// 注意引入在 Vue的下面
// ElementUI 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 權限攔截
import './permission'
// 使用 ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = process.env.NODE_ENV === 'production'
console.log(process.env.vue_APP_SERVICE_URL) // 开发环境 development,生产环境 production
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
