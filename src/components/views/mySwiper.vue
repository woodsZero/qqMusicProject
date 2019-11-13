<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-if='index<5' v-for='(item,index) in roll' :key="item.id">
        <img :src="item.imageUrl" alt />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
// console.log(this,'我是用来测试axios的')
    import '../../../node_modules/swiper/js/swiper.min.js'
    import Swiper from 'swiper'
    export default {
        data(){
            return{
                 roll:[]
            }
        },
        methods: {
          mySwiper(){
              var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
          }
        },
        mounted(){
          console.log(this,'我是挂载中的this')
            this.$axios({
              url:this.$api.banner
            })
            .then(res=>{
                this.roll=res.data.banners
                console.log(this,'我是轮播图里面的this')
                this.$nextTick(()=>{
                this.mySwiper();
              })
              // console.log(this.roll)
              // console.log(res,'我是轮播图里面的rres')
            })
            .catch(err=>{
              console.log(err,'我是轮播图组件的错误信息')
            })
        }
    };
</script>
<style lang="" >
@import '../../../node_modules/swiper/css/swiper.min.css';
.swiper-container {
  width: 3.2rem;
  height: 1.28rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.14rem;
}
.swiper-container .swiper-pagination-bullet-active {
  background-color: #ffffff;
}
.swiper-slide {
  text-align: center;
  font-size: 0.18rem;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.swiper-slide img {
  display: block;
  width: 3.2rem;
  height: 1.28rem;
}
</style>