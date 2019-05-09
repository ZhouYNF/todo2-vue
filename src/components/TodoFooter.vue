<template>
  <div class="todo-footer">
    
    <a-checkbox v-model="isAllCheck" v-show="todos.length">
          <span>已完成{{ completeSize }}</span> / 全部{{ todos.length }}
    </a-checkbox>
    <!-- <div class="data_status">
      <a href="#" :class="{active:index === dataStatusIndex}"
          v-for="(item,index) in dataStatus" 
          @click="swStatus(index)" :key="index">
          {{item}}
      </a>
    </div> -->
    <a-button type="primary" v-show="completeSize" @click="deleteCompeteTodos">清除已完成任务</a-button>
  </div>
</template>

<script>
    export default {
       props:{
         todos:Array,
        //  dataStatus:Array,
        //  dataStatusIndex: Number,
         deleteCompeteTodos: Function,
         selectAllTodos: Function,

        //  switchStatus: Function
       },
      computed: {
        completeSize() {
          return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
        },
        isAllCheck: {
          get(){
            return this.completeSize === this.todos.length && this.completeSize>0
          },
          set(value){
            this.selectAllTodos(value)
          }
        }
      },
      methods:{
        // swStatus(index) {
        //   this.switchStatus(index)
        // }
      }
    }
</script>

<style scoped>
  .todo-footer {
        width: 800px;
        /* height: 900px; */
        margin: 0 auto;
        text-align: center;
        background-color: rgb(245, 245, 245);
        padding: 24px 0;
  }
   
  .data_status a {
        display: inline-block;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 1px 4px;
        margin: 0 2px;
    }

  .data_status a:hover {
      border-color: #bbb;
  }

  .active {
    box-shadow: 0 0 1px black;
  }
</style>