import request from '@/utils/request'
// /dev-api
// const BASE_URI = process.env.VUE_APP_BASE_API
// request.get('/db.json').then(res => {
//     console.log(res.data)
// })

// request({
//     method: 'get',
//     url: '/db.json'
// }).then(res => {
//     console.log(res.data)
// })

export default {
  getList () {
    const req = request({
      method: 'get',
      // url: BASE_URI + '/db.json'
      url: '/db.json'
    })
    return req
  }
}
