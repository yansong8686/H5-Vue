<template>
  <header v-on:click="changeTitle">
    <h1>{{title1}}{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      title1:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle:function(){
      // this.title="changed";
      this.$emit("titleChanged","子向父组件传值"); //注册事件(自定义事件，在父组件中使用 v-on:titleChanged，同时传值要使用$event)
    }
  },
  beforeCreate:function(){
    // alert("beforeCreated组件实例化之前执行的函数...");
  },
  created:function(){
    // alert("created组件实例化完毕，但页面还未显示...");
  },
  beforeMount:function(){
    // alert("beforeMount组件挂载前，页面仍未展示，但虚拟DOM已经配置...");
  },
  mounted:function(){
    // alert("mounted组件挂载后，此方法执行后，页面显示...");
  },
  beforeUpdate:function(){
    // alert("beforeUpdate组件更新前，页面仍未更新，但虚拟DOM已经配置...");
  },
  updated:function(){
    // alert("updated组件更新,此方法执行后，页面显示...");
  },
  beforeDestory:function(){
    // alert("beforeDestory组件销毁前...");
  },
  destoryed:function(){
    // alert("destoryed组件销毁...");
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #22;
  text-align: center;
}
</style>
