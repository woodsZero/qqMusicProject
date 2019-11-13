// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import './assets/css/reset.css'
// 引入axios模块
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// 挂载接口模块到原型链
import api from './common/api'
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
