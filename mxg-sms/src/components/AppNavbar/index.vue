 <template>
  <div class="navbar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
       <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首頁</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-custom"></i>
        <span slot="title">會員管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供應商管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-shop"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-user-solid"></i>
        <span slot="title">員工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
