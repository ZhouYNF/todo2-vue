<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" v-show="this.defaultShow || (this.whichShow?todo.complete:!todo.complete)" >
   <div>
    <a-checkbox v-model="todo.complete"  :class='{hidd:todo.complete}' >
        <label class="content_main" @dblclick="toEdit('show')"  v-if="visible" >
          {{todo.title}}
          <a-icon slot="suffix" type="close-circle" @click='deleteItem' v-show="isShow" />
        </label>
        <a-input 
        v-model="todo.title" 
        v-todofocus
        style="width:400px"  @blur="toEdit('hide')"  v-else>
            <a-icon slot="suffix" type="close-circle" @click='deleteItem' v-show="isShow" />
        </a-input>
    </a-checkbox>
    
   </div>
  </li>
</template>

<script>
    export default {
        props:{
          todo: Object,
          index: Number,
          deleteTodo:Function,
          defaultShow: Boolean,
          whichShow: Boolean
        },
      data(){
          return{
            bgColor:'white',  //默认的背景颜色
            isShow: false,     //按钮默认是否显示
            visible:true,      //是否可以编辑
          }
      },
      methods:{
        toEdit(value) {
            this.visible = !(value === 'show')
            // document.getElementById("ainput").focus()
		    },
        handleEnter(isEnter){
          if(isEnter){
            this.bgColor = '#aaaaaa'
            this.isShow = true
          }else{
            this.bgColor = 'white'
            this.isShow = false
          }
        },
        deleteItem(){
          const {todo,index,deleteTodo} = this
          if(window.confirm(`确认删除${todo.title}吗？`)){
            deleteTodo(index)     //调用函数更新
          }
        }
      },
        directives: { //自定义focus指令
            "todofocus": function (el, binding) {
                if (binding.value) {
                    el.focus()
                }
            }
        }
    }
</script>

<style>
    li{
        list-style: none;
    }

    .content_main {
        flex: 1;
        text-align: left;
        margin-left: 16px;
        font-size: 20px;
        padding: 6px 0;
    }
    label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .hidd label {
	  color: #ccc;
	  text-decoration: line-through;
}
</style>


