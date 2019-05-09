<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" :deleteTodo="deleteTodo" :whichShow="whichShow" :defaultShow="defaultShow"  />
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
    export default {
      props:{
        todos:Array,
        deleteTodo: Function,
        whichShow: Boolean,
        defaultShow: Boolean  
      },
      components:{
        TodoItem,
      }
    }
</script>
<style>
 ul {
        list-style: none;
    }
</style>
