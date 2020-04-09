 <template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/logo.7156be27.png" alt srcset width="25px" />
      <span class="company">LC會員管理系統</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a" icon="el-icon-edit">修改密碼</el-dropdown-item>
        <el-dropdown-item command="b" icon="el-icon-circle-close">退出系統</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand (command) {
      this.$message(`點擊了${command}`)
    }
  }
}
</script>
 <style lang="scss" scoped>
.logo {
  vertical-align: middle;
  padding: 0px 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  float: right;
  margin-right: 40px;
}
</style>
