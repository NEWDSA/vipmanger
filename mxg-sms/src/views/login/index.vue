<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" size="mini" class="login-form">
      <h2 class="login-title">LC会员管理系统</h2>
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username:'',
        password:''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" scope>
.login-form{
  width:350px;
  /*上下间距 160px,左右自动居中 */
  margin:160px auto;
  background-color: rgb(255, 255, 255);
  padding: 25px;
  border-radius: 20px;
}
.login-container{
  position: absolute;  //绝对定位
  background: url('../../assets/bg.jpeg');
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-title{
  color:#303133;
  text-align: center;
}
</style>
