<template>
  <div class="todo-all">
    <TodoList :todos="todos" :deleteTodo="deleteTodo" :whichShow="whichShow" :defaultShow="defaultShow" />
  </div>
</template>

<script>

  import TodoList from '../components/TodoList'
 
export default {
    name:"App",
    data() {
      return{
            dataStatus: ["All", "Active", "Completed"],
            dataStatusIndex: 0,
            whichShow: true,
            defaultShow: true
      }
    },
    components:{
      TodoList,
    },
    methods:{
      //删除
      deleteTodo(index){
      this.$store.commit('deleteTodo',index)
      }
    },
    computed:{
      todos (){
        return this.$store.state.todos
      }
    }
}
</script>
<style>
.todo-all {
        width: 800px;
        /* height: 900px; */
        margin: 0 auto;
        text-align: center;
        background-color: rgb(245, 245, 245);
        padding: 24px 0;
    }
</style>
