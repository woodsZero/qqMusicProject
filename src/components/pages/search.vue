<template>
<div>

  <div class="mod_search">
    <div class="search_bar_cont">
      <form action="#" method="get">
        <input
          type="text"
          v-model="val"
          class="search_input"
          placeholder="搜索歌曲、歌单、专辑"
          @focus="isShow=true"
          @keydown.enter='goSearch(val)'
        />
        <span class="icon icon_search">搜索</span>
        <span class="icon icon_delete" v-show="val!=''" @click="val=''" >删除</span>
      </form>
    </div>
    <div class="search-text" v-show="isShow" @click="change()">取消</div>
  </div>
     <div class="hotSearch" v-show='!isShow'>
            <h3>热门搜索</h3>
            <div class="result_tags">
                <a href="#" v-for='(item,index) in name' :class="[index==0?'tag_hot':'']" :key='item.index' @click='goSearch(item.first)'>{{item.first}}</a>
            </div>
      </div>
      <h2>搜索到结果：</h2>{{songnum}}
         <audio controls autoplay :src="songUrl.url"></audio>
      <ul class="searchList">
          <li v-for='item in songList' :key='item.id' @click='playMusic(item.id)'>{{item.name}}</li>
      </ul>
   
</div>
</template>
<script>
export default {
     data() {
            return {
                isShow: false,
                val: '',
                 name:[
                ],
                songList:[],
                songnum:0,
                songUrl:[]
            }
        },
        methods:{
            change(){
              this.isShow=false
              this.val='';
            },
              // 点击搜索词调用根据关键字搜索音乐的接口
            goSearch(name){
              this.$axios({
              url:this.$api.searchMusic,
              params:{
                keywords:name
              }
            })
            .then(res=>{
              console.log(res,'点击热门搜索词的res')
              this.songList=res.data.result.songs
              this.songnum=res.data.result.songCount
            })
            .catch(err=>{
              console.log(err,'点击热门搜索词的err')
            })
            },
            // 点击播放音乐
            playMusic(songUrl){
              this.$axios({
                url:this.$api.songUrl,
                params:{
                  id:songUrl
                }
              })
              .then(res=>{
                this.songUrl=res.data.data[0]
                console.log(res,'我是点击播放音乐的音乐地址响应')
              })
              .catch(err=>{
                console.log(err,'我是播放音乐的错误')
              })
            }
        },
        mounted() {
          // 调用搜索词的接口
          this.$axios({
            url:this.$api.hotSearch,

          })
          .then(res=>{
            this.name=res.data.result.hots
            // console.log(res,'我是热门搜索词的接口res')
          })
          .catch(err=>{
            console.log(err,'我是热门关键词的错误信息')
          })
        },
}
</script>
<style lang="" scoped>
  .mod_search {
  background: #f4f4f4;
  padding: 0.1rem;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
}
.mod_search .search_bar_cont {
  position: relative;
  border-radius: 0.03rem;
  background: #fff;
  height: 0.2rem;
  padding: 0.08rem 0.12rem 0.08rem 0.35rem;
  -webkit-box-flex: 1;
}
.mod_search .search_bar_cont .search_input {
  height: 0.2rem;
  line-height: 0.2rem;
  color: rgba(0, 0, 0, 0.3);
  border: none;
  font-size: 0.14rem;
}
.mod_search .search_bar_cont .icon_search {
  position: absolute;
  top: 0.09rem;
  left: 0.1rem;
  width: 0.18rem;
  height: 0.18rem;
  background-image: url(../../assets/images/search.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-indent: -999px;
}
.mod_search .search_bar_cont .icon_delete {
  position: absolute;
  top: 0.09rem;
  right: 0.12rem;
  width: 0.18rem;
  height: 0.18rem;
  background: #b1b1b1;
  text-indent: -9999px;
  border-radius: 0.99rem;

}
.mod_search .search-text {
  padding-right: 0.10rem;
  padding-left: 0.10rem;
  font-size: 0.14rem;
  height: 0.36rem;
  line-height: 0.36rem;
}
.hotSearch {
  background: #fff;
  /* height: 100%; */
  padding: 0.15rem 0.15rem 0.1rem 0.15rem;
}
.hotSearch h3 {
  color: #555;
  margin-bottom: 0.08rem;
  
  font-size: 0.14rem;
  font-weight: bold;
}
.hotSearch .tag_hot {
  color: #fc4524;
  border-color: #fc4524;
}
.hotSearch a {
  display: inline-block;
  font-size: 0.14rem;
  padding: 0 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 0.99rem;
  word-break: keep-all;
  margin-bottom: 0.10rem;
  margin-right: 0.14rem;
}
</style>