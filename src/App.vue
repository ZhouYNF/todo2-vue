<template>
  <div id="todo-wrap ">
    <TodoHeader :addTodo="addTodo"/>
    <router-view/>
    <TodoFooter :todos="todos" :deleteCompeteTodos="deleteCompeteTodos"   :selectAllTodos="selectAllTodos" />
    <div id="nav" v-show="this.todos.length" class="nav-link">
      <router-link to="/all">All</router-link> |
      <router-link to="/active">Active</router-link> |
      <router-link to="/comleted">Comleted</router-link>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoFooter from './components/TodoFooter'

export default {
  name:"app",
  data() {
      return{
      }
    },
    components:{
      TodoHeader,
      TodoFooter
      
    },
    methods:{
      //添加
      addTodo(todo){
         this.$store.commit('addTodo', todo)
      },
      //删除所有选中的todo
      deleteCompeteTodos(){
       this.$store.commit('deleteCompeteTodos')
      },
      //全选/全不选
      selectAllTodos(check){
        this.$store.commit('selectAllTodos',check)
      },
    },
    computed:{
      todos (){
        return this.$store.state.todos
      }
    }
}
</script>


<style>
.nav-link {
        width: 800px;
        /* height: 900px; */
        margin: 0 auto;
        text-align: center;
        background-color: rgb(245, 245, 245);
        padding: 24px 0;
    }
div router-link {
  display: inline-block;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 1px 4px;
        margin: 0 2px;
}

</style>
