<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="image">
        <img src="@/assets/logo.png" alt="" />
      </el-menu-item>
      <el-menu-item style="float: right">
        <i class="el-icon-location"></i>
        退出
      </el-menu-item>
      <el-submenu index="2" style="float: right">
        <template slot="title">个人中心</template>
        <el-menu-item index="2-1">基本资料</el-menu-item>
        <el-menu-item index="2-2">更换头像</el-menu-item>
        <el-menu-item index="2-3">重置密码</el-menu-item>
      </el-submenu>
    </el-menu>

    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <el-menu-item>
        <span slot="title"><i class="el-icon-location"></i>欢迎***</span>
      </el-menu-item>

        <el-menu-item @click="$router.push({path:'/echars'})" id="clickspan">
          <span slot="title" ><i class="el-icon-location"></i>首页</span>
        </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"
            ><i class="el-icon-location"></i>文章类别</el-menu-item
          >
          <el-menu-item index="1-2"
            ><i class="el-icon-location"></i>文章列表</el-menu-item
          >
          <el-menu-item index="1-3"
            ><i class="el-icon-location"></i>发布文章</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"
            ><i class="el-icon-location"></i>基本资料</el-menu-item
          >
          <el-menu-item index="2-2"
            ><i class="el-icon-location"></i>更换头像</el-menu-item
          >
          <el-menu-item index="2-3"
            ><i class="el-icon-location"></i>重置密码</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
   <router-view/>
  </div>
</template>

<script>
export default {
    mounted(){
        document.querySelector('#clickspan').click()
    }
};
</script>

<style scoped lang="less">
/deep/.el-menu-vertical-demo {
  float: left;
  width: 15%;
  height: 100vh;
  margin-top: -1px;
  .el-menu-item {
    background-color: #fff;
  }
}
.image {
  width: 200px;
}
</style>