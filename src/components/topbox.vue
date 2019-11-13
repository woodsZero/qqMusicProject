<template>
<!-- 头部 -->
<div class="top_box">
    <div class="header">
        <img src="../assets/images/logo_ch.svg" alt="QQ音乐" class="logo" />
        <a href="#" class="top_box__btn">下载APP</a>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
.top_box {
  background: #fff;
  width: 3.2rem;
  padding-top: 0.8rem;
}
.header {
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 3rem;
  box-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, 0.02);
  background: #fff;
  height: 0.8rem;
  padding: 0 0.1rem;
  display: -webkit-box;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
}
.header .logo {
  display: block;
  height: 0.35rem;
}
.header .top_box__btn {
  display: block;
  min-width: 0.4rem;
  height: 0.25rem;
  line-height: 0.25rem;
  padding: 0 0.1rem;
  text-align: center;
  font-size: 0.14rem;
  color: #000;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
}
    
</style>