<template>
  <div>
    <AppHeader/>
    <AppNavbar/>
    <AppMain/>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppMain from '@/components/AppMain'
import AppNavbar from '@/components/AppNavbar'
export default {
  components: {
    AppHeader,
    AppMain,
    AppNavbar
  }
}
</script>
<style lang="scss" scoped>
/*頭部區域 */
.header{
    position: relative; //絶對定位，脫離文檔流
    line-height: 50px;
    top:0px;
    left:0px;
    right:0px;
    background-color: #2d3a4b;
}
.navbar{
    position:absolute; //絶對定位，脫離文檔流
    width: 230px;
    top:50px;
    left: 0px;
    bottom: 0px;
    overflow-y:auto;
    background-color:#545c64;
}
.main{
    position: absolute; //絶對定位，脫離文檔流
    top:50px;
    left:230px;
    right: 0px;
    bottom: 0px;
    padding: 10px;
    overflow-y:auto;
    // background-color:red;
}
</style>
