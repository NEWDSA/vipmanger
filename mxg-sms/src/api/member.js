import request from '@/utils/request'

export default {
  // 獲取會員列表數據
  getList () {
    return request({
      url: '/member/list',
      method: 'get'
    })
  }
}
