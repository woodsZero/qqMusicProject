<template>
  <!-- 顶部导航栏 -->
  <div class="mod_nav">
    <router-link to='/commend' activeClass="current">推荐</router-link>
    <router-link to='/rank' activeClass="current">排行榜</router-link>
    <router-link to='/search' activeClass="current">搜索</router-link>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
  .mod_nav {
  display: -webkit-box;
  background: #fff;
}
.mod_nav a {
  -webkit-box-flex: 1;
  position: relative;
  display: block;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.16rem;
}
.mod_nav .current {
  color: #31c27c;
  border-bottom: 0.02rem solid #31c27c;
}  
</style>