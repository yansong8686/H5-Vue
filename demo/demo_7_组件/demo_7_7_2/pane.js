Vue.component('pane',{
  name: 'pane',
  template: '\
    <!-- pane需要控制标签页内容的显示与隐藏 -->\
    <div class="pane" v-show="show">\
      <slot></slot>\
    </div>\
  ',
  props:{
    name:{
      type:String
    },
    label:{
      type:String,
      default:''
    }
  },
  data:function(){
    return {
      show:true
    }
  },
  methods:{
    updateNav:function(){//$parent指的是父组件 tabs
      this.$parent.updateNav();
    }
  },
  watch:{
    label(){
      this.updateNav();
    }
  },
  mounted(){
    this.updateNav();
  }
})
