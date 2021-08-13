// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'
//导入路由配置目录，自动寻找路由配置文件
import router from './router'

Vue.config.productionTip = false
//Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //导入路由
  router,
  components: { App },
  template: '<App/>'
})
