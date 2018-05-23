<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
      <!-- <li v-for="user in myUsers" v-on:click = "user.show = !user.show"> -->
      <li v-for="user in myUsers">
        <h2>{{user.name}}</h2>
        <!-- <h3 v-show="user.show">{{user.position}}</h3> -->
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUser" type="button" name="button"></button>
  </div>
</template>
<!--
  传值：string number boolean
  引用：array object
-->
<script>
export default {
  name: 'users',
  // props:["myUsers"],//下面的写法是官方推荐的
  props:{
    myUsers:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
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
      // ]
    }
  },
  methods:{
    deleteUser:function(){
      this.myUsers.pop();
    }
  }
}
</script>

<!-- CSS的作用域，加上scoped则以下样式只能在Users.vue中使用 -->
<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;/**一行显示**/
    flex-wrap: wrap;/* li都在容器中，不会超出容器 */
    list-style-type: none;/*去掉前面的点*/
    padding: 0;
  }
  li{
    flex-grow: 1;/*如果一行有一个则会撑满整行*/
    flex-basis: 200px;/*每个是200px的宽度*/
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
