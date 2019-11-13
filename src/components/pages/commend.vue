<template>
    <div>
        <my-swiper></my-swiper>
     <!-- 电台 -->
            <div class="mod_twocol">
            <h2 class="list_title">电台</h2>
            <ul class="list_container clearfix">
                <li v-for='(item,index) in radio' :key='item.id' v-if='index<2'>
                    <a href="#">
                        <div class="list-img">
                            <img :src="item.picUrl" alt="item.title">
                            <span class="icon-play"></span>
                        </div>
                        <h3 class="mod_title">{{item.name}}</h3>
                    </a>
                </li>
            </ul>
        </div>
          <!-- 底部 -->
     <footer class="mod_footer">
            <div class="version_tab">
                <a href="#">查看电脑版网页</a>
            </div>
            <div class="footer-logo">QQ音乐</div>
            <p class="copyright">
                Copyright © 1998 -
                <span>2019</span>
                Tencent. All Rights Reserved.
            </p>
            <p class="copyright">联系电话：0755-86013388 QQ群：55209235</p>
        </footer>
    </div>
  
</template>
<script>
import Swiper from '../views/mySwiper'
// console.log(Swiper,'1111111')
export default {
    components:{
        mySwiper:Swiper
    },
     data() {
            return {
              radio: [],
            }
        },
        mounted(){
          this.$axios({
            url:this.$api.djprogram,
          })
          .then(res=>{
              // console.log(res.data.result,'我是调用电台接口的响应')
              this.radio=res.data.result
          })
        }
       /*  components:{
            swiper
        } */
}
</script>
<style lang="" scoped>
    /* 电台 */
.mod_twocol {
  margin-bottom: 0.07rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.mod_twocol .list_title {
  font-size: 0.16rem;
  color: #000;
  margin-bottom: 0.11rem;
  font-weight: 400;
}
.mod_twocol .list_container {
  margin-right: -0.08rem;
}
.mod_twocol .list_container li {
  float: left;
  padding-right: 0.08rem;
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.mod_twocol .list_container li a {
  display: block;
  background: #fff;
}
.mod_twocol .list_container li a .list-img {
  position: relative;
  margin-bottom: 0.05rem;
}
.mod_twocol .list_container li a .list-img img {
  width: 1.46rem;
  height: 1.46rem;
}
.mod_twocol .list_container li a .list-img .icon-play {
  position: absolute;
  height: 0.24rem;
  bottom: 0.05rem;
  right: 0.05rem;
  width: 0.24rem;
  background-position: 0 0;
  background-image: url(../../assets/images/list_sprite.png);
  background-repeat: no-repeat;
  background-size: 0.24rem 0.6rem;
  z-index: 10;
}
.mod_twocol .list_container li  .mod_title {
  /* color:red; */
  padding: 0 0.07rem 0.05rem;
  width:1.32rem;
  /* height: 0.18rem; */
  line-height: 0.18rem;
  /* 强制不换行 */
  white-space: nowrap;

  /*自动换行 word-wrap: break-word; */
  color: #000;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}
/* 推荐底部 */
.mod_footer {
  padding: 0.15rem 0 0.7rem;
}
.mod_footer .version_tab {
  text-align: center;
  margin-bottom: 0.16rem;
}
.mod_footer .footer-logo {
  display: block;
  width: 0.82rem;
  height: 0.24rem;
  margin: 0 auto 0.1rem;
  background: url(../../assets/images/logo_footer.png) no-repeat;
  background-size: cover;
  text-indent: -9999px;
}
.mod_footer .copyright {
  font-size: 0.1rem;
  line-height: 0.18rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
</style>