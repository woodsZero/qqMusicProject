<template>
  <div class="bottom_bar">
    <a href="#">安装QQ音乐</a>
  </div>
</template>
<script>
    export default {  

    };
</script>
<style lang="" scoped>
    .bottom_bar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      z-index: 110;
      padding: 0.15rem 0;
    }
    .bottom_bar a {
      display: block;
      padding: 0 0.15rem;
      border-radius: 0.99rem;
      background-color: #30c27c;
      color: #fff;
      height: 0.33rem;
      line-height: 0.33rem;
      font-size: 0.14rem;
      text-align: center;
    }
</style>