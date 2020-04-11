import request from '@/utils/request'

export default {
  // 獲取會員列表數據
  getList () {
    return request({
      url: '/member/list',
      method: 'get'
    })
  },

  // 分页搜索方法
  // page 当前页码,size每页查询条数,searchMap条件查询的条件值
  search (page, size, searchMap) {
    return request({
      url: `/member/list/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  }
}
