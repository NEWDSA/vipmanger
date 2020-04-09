import axios from 'axios'
const request = axios.create({
  // baseURL: '/',
  // baseURL: '/dev-api',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 请求超时,5000毫秒
})
// 请求拦截
request.interceptors.request.use(config => {
  // 请求拦截
  return config
}, error => {
  // 出现异常
  return Promise.reject(error)
})
// 响应拦截
request.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})
// axios.get('/db.json').then(res => {
//     console.log(res.data)
// })

export default request // 导出自定义创建 axios 对象
