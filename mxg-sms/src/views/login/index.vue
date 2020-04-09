<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      size="mini"
      class="login-form"
    >
      <h2 class="login-title">LC会员管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from '@/api/login'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '賬號不能為空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密碼不能為空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          // 提交表單給後臺進行驗證是否正確
          login(this.form.username, this.form.password).then(res => {
            const resp = res.data
            console.log(resp, resp.flag, resp.data.token, resp.message)
            if (resp.flag) {
              // 驗證成功,通過token去獲取用戶信息
              getUserInfo(resp.data.token).then(res => {
                const respUser = res.data
                if (respUser.flag) {
                  // 獲取到了用戶的數據
                  console.log('userInfo', respUser.data)
                  // 1.保存token,用戶信息
                  localStorage.setItem('luciano-msg-token', resp.data.token)
                  localStorage.setItem(
                    'luciano-msm-user',
                    JSON.stringify(respUser.data)
                  ) // 轉換為json字符串
                  // 前往首頁
                  this.$router.push('/')
                } else {
                  this.$message({
                    // 未通過驗證，彈出警告
                    message: resp.message,
                    type: 'warning'
                  })
                }
              })
              // console.log(resp.data);
            }
          })
        } else {
          console.log('驗證失敗')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scope>
.login-form {
  width: 350px;
  /*上下间距 160px,左右自动居中 */
  margin: 160px auto;
  background-color: rgb(255, 255, 255);
  padding: 25px;
  border-radius: 20px;
}
.login-container {
  position: absolute; //绝对定位
  background: url("../../assets/bg.jpeg");
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-title {
  color: #303133;
  text-align: center;
}
</style>
