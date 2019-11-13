import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Commend from '../components/pages/commend'
import Rank from '../components/pages/rank'
import Search from '../components/pages/search'
import songList from '@/components/songList'
Vue.use(Router)
export default new Router({
  model:'history',
  routes: [
      {
        path:'/index',
        component:Index,
        children:[
          {
            path:'/commend',
            component:Commend
          },
          {
            path:'/rank',
            component:Rank
          },
          {
            path:'/search',
            component:Search
          }
        ]
      },
      {
        path:'/songlist',
        component:songList
      },
      {
        path:'*',
        redirect:'/commend'
      } 
  ]
})
