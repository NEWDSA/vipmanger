<template>
  <!--數據列表-->
  <div>
    <el-table :data="list" border height="380" style="width: 100%">
      <!--type="index"獲取索引值,從1開始,label顯示標題，prop數據字段值,width列寬-->
      <el-table-column type="index" label="序號" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="會員卡號"></el-table-column>
      <el-table-column prop="name" width="78" label="會員姓名"></el-table-column>
      <el-table-column prop="birthday" label="會員生日"></el-table-column>
      <el-table-column prop="phone" label="手機號碼"></el-table-column>
      <el-table-column prop="integral" label="可用積分"></el-table-column>
      <el-table-column prop="money" label="開卡金額"></el-table-column>
      <el-table-column prop="payType" label="支付類型">
                <template slot-scope="scope">
                    <span>{{scope.row.payType | payTypeFilter}}</span>
                </template>
      </el-table-column>
      <el-table-column prop="address" label="會員地址"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import memberApi from '@/api/member'
// 支付類型
const payTypeOptions = [
  { type: '1', name :'現金' },
  { type: '2', name :'微信' },
  { type: '3', name :'支付寶' },
  { type: '4', name :'銀行卡' }
]
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    // 初始化獲取列表數據
    this.fetchData()
  },
  methods: {
    fetchData () {
      memberApi.getList().then(res => {
        const resp = res.data
        console.log(resp)
        this.list = resp.data
      })
    },
    // 編輯
    handleEdit (id) {
      console.log(`編輯${id}`)
    },
    // 刪除
    handleDelete (id) {
      console.log(`刪除${id}`)
    }
  },
  // 定義過濾器
  filters: {
    payTypeFilter (type) {

      // payTypeOptions.find(obj=>{
      //   obj.type===type
      // })
      //在過濾器當中不能引用當前實例 this
      const payObj = payTypeOptions.find(obj => obj.type === type)

      return payObj ? payObj.name : null
    }
  }
}
</script>
