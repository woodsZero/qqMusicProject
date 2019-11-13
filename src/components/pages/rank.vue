<template>
     <div class="mod_topic">
                <ul>
                    <li class="topic_item" v-for='(item) in contentList' :key='item.id'>
                        <div class="topic_main">
                            <a href="javascript:;" class="top_media">
                                <img :src="item.coverImgUrl" alt="">
                                
                                <span class="listen_count">
                                    <i class="icon_listen"></i>
                                    {{item.playCount}}万
                                </span>
                            </a>
                            <div class="topic_info">
                                <div class="topic_cont">
                                    <h3 class="topic_tit">{{item.name}}</h3>
                                    <p v-for='(ite,idx) in item.tracks' :key='ite.idx'> {{idx+1}}<span class="textname">{{ite.first}}</span>{{ite.second}}</p>
                                  <!--   <p>2<span class="textname">{{item.top2}}</span> {{item.singer2}}</p>
                                    <p>3<span class="textname">{{item.top3}}</span>{{item.singer3}}</p> -->
                                </div>
                                <i class="topic_arrow"></i>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
</template>
<script>
export default {
    data(){
            return{
                contentList:[],
             
            }
    },
    mounted(){
        this.$axios({
            url:this.$api.toplist
        })
        .then(res=>{
            this.contentList=res.data.list
            console.log(res,'我是排行榜中的接口响应')
        })
        .catch(err=>{
            console.log(err,'我是排行榜中的错误信息')
        })
    }
}
</script>
<style lang="" scoped>
    .mod_topic {
  margin: 0.1rem;
  padding-bottom: 0.55rem;
}
.mod_topic li {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.mod_topic li .topic_main {
  display: -webkit-box;
  background: #fff;
}
.mod_topic li .top_media {
  position: relative;
  width: 1rem;
  height: 1rem;
  display: block;
}
.mod_topic li .top_media img {
  display: block;
  width: 1rem;
  height: 1rem;
  color: #ccc;
}
.mod_topic li .top_media .listen_count {
  left: 0.05rem;
  bottom: 0.07rem;
  line-height: 0.12rem;
  color: #fff;
  opacity: .6;
  font-size: 0.09rem;
  z-index: 10;
  position: absolute;
  display: block;
}
.mod_topic li .top_media .listen_count .icon_listen {
  display: block;
  float: left;
  width: 0.1rem;
  height: 0.1rem;
  background-position: 0 -0.50rem;
  margin-right: 0.03rem;
  background-image: url(../../assets/images/list_sprite.png);
  background-repeat: no-repeat;
  background-size: 0.24rem 0.6rem;
  z-index: 10;
}
.mod_topic li .topic_info {
  position: relative;
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.mod_topic li .topic_info .topic_cont {
  -webkit-box-flex: 1;
  margin: 0 0.1rem 0 0.15rem;
}
.mod_topic li .topic_info .topic_cont .topic_tit {
  font-size: 0.16rem;
  color: #000;
  font-weight: 400;
  margin-bottom: 0.05rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mod_topic li .topic_info .topic_cont p {
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.5);
  height: 0.21rem;
  line-height: 0.21rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mod_topic li .topic_info .topic_cont p .textname {
  color: #000;
  margin-left: 0.08rem;
  margin-right: 0.05rem;
}
.mod_topic li .topic_info .topic_arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -0.04rem;
  width: 6px;
  height: 6px;
  border-right: 1px solid #b2b2b2;
  border-bottom: 1px solid #b2b2b2;
  transform: rotate(-45deg);
}
</style>