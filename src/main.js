// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入vueResource
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Usesrs from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter) //使用路由
Vue.use(VueResource) //使用VueResource

//配置路由
const router = new VueRouter({
  routes:[
      {path:"/",component:Home},
      {path:"/helloword",component:HelloWorld}
  ],
  mode:"history" //浏览器中去掉 #
})

//注册组件的两种方式
//1.全局注册,可以在任何地方调用 users 标签
// Vue.component("users",Users);
//2.局部注册，详见App.vue
/* eslint-disable no-new */
new Vue({
  router,//使用路由
  el: '#app',
  template: '<App/>',
  components: { App }
})

//index.html -> main.js -> App.vue
