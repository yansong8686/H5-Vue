<!-- App.vue是一个组件，包含3个部分 -->
<!-- 1.模板：html结构 -->
<template>
  <!-- 此次有且只能有一个根标签，不能同时存在多个与div同级的标签 -->
  <div id="app">
     <!-- <h1>{{title}}</h1> -->
     <!-- <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header><!-- 传值 -->
     <!-- <users v-bind:myUsers="users"></users><!-- 传引用 -->
     <!--<users v-bind:myUsers="users"></users>
     <app-footer v-bind:title="title"></app-footer> -->
     <ul>
       <!-- <li><a href="/">Home</a></li>
       <li><a href="/helloword">Hello</a></li> -->
       <li>
         <router-link to="/">Home</router-link>
       </li>
       <li>
         <router-link to="/helloword">Hello</router-link>
       </li>
     </ul>
     <router-view></router-view> <!-- 使用路由 固定标签 -->
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
//局部注册组件
// import Users from './components/Users'
// import Header from './components/Header'
// import Footer from './components/Footer'
export default {
  name: 'app',
  data(){
    return {
      // title:"这是我的第一个Vue脚手架项目！"
      // users:[
      //   {name:"Herry1",position:"Web开发",show:false},
      //   {name:"Herry2",position:"Web开发",show:false},
      //   {name:"Herry3",position:"Web开发",show:false},
      //   {name:"Herry4",position:"Web开发",show:false},
      //   {name:"Herry5",position:"Web开发",show:false},
      //   {name:"Herry6",position:"Web开发",show:false},
      //   {name:"Herry7",position:"Web开发",show:false},
      //   {name:"Herry8",position:"Web开发",show:false},
      //   {name:"Herry9",position:"Web开发",show:false}
      // ],
      // title:"传递的是一个值，包括number string boolean..."
    }
  },
  methods:{
    // updateTitle(val){
    //   this.title = val;//等号左边的title是data中的title
    // }
  }//,
  //局部注册组件
  // components:{
  //   "users":Users,
  //   "app-header":Header, //注意此处使用app-header命名自定义组件，是为了区分当前标签header,不与之冲突
  //   "app-footer":Footer
  // }
}
</script>

<!-- 3.样式：解决样式 -->
<style scoped>
  h1{
    color:purple;
  }
</style>
