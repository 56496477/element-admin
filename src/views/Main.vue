<template>
  <el-container class="n-container">
    <el-aside width="200px">
      <div class="n-logo">
        <div class="logo"></div>
      </div>
      <sidebarMenu :menuList="menuList"></sidebarMenu>
    </el-aside>
    <el-container class="n-main">
      <el-header>
        <div class="n-header">
          <span class="el-icon-won-n-menu"></span>
          <div class="menu">
            <span>首页 /</span>
            <span>组件</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer height="30px"></el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
  import sidebarMenu from './components/sidebarMenu.vue'
  
  export default {
    components: {
      sidebarMenu
    },
    data() {
      return {};
    },
    computed: {
      menuList(){
        return this.$store.state.menuList;
      }
    },
    methods: {
      
    }
  };
</script>

<style lang="scss">
  .n-container {
    height: 100%;
    width: 100%;
  }
  .el-header{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  .n-header{
    width: 100%;
    height: 30px;
    line-height: 30px;
    .el-icon-won-n-menu{
      font-size: 15px;
      cursor: pointer;
      font-weight: 500;
    }
    .menu{
      display: inline-block;
      font-size: 15px;
      margin-left: 15px;
      color: #ababab;
    }
  }
  .n-main {
    height: 100%;
    width: 100%;
    position: fixed;
    transition: all 0.3s ease-in-out;
    padding-left: 200px;
  }
  .el-aside {
    background: rgb(73, 80, 96);
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
  }
  .el-menu {
    width: 200px;
  }
  .n-logo{
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo{
      height: 45px;
      width: 160px;
      text-align: center;
      line-height: 45px;
      background-color: #6db4ff;
      border-radius: 5px;
      color: #fff;
      letter-spacing: 2px;
      font-size: 15px;
    }
  }
</style>