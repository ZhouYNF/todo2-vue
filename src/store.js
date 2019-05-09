import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        todos: [
            {title:'asd',complete:false},
            {title:'dsf',complete:true},
            {title:'zczxc',complete:false}
          ]
            
    },
    mutations:{
         //添加
      addTodo(state,todo){
        state.todos.unshift(todo)
      },
      //删除所有选中的todo
      deleteCompeteTodos(state){
        //过滤出false的留下 todo.complete取反
        state.todos = state.todos.filter(todo=>!todo.complete)
      },
      //全选/全不选
      selectAllTodos(state,check){
        state.todos.forEach(todo => todo.complete = check)
      },
       //删除
       deleteTodo(state,index){
        state.todos.splice(index,1)
      }
    }
})