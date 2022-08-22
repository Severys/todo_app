import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {
        id: 0,
        description: 'Описание',
        complete: false
      }
    ],
    filteredTodos:[]
  },
  getters: {
  },
  mutations: {
    addTodo(state,curTodo){
      state.todos.push(curTodo)
    },
    deleteTodo(state,idTodo){
      state.todos = state.todos.filter(item => item.id !== idTodo);
    },
    completeTodo(state,index){
      state.todos[index].complete = !state.todos[index].complete
    },
    filterTodo(state,id){
      if(id === 1) state.filteredTodos = state.todos
      else state.filteredTodos = state.todos.filter(el => el.complete === true) 
    }
  },
  actions: {
  },
  modules: {
  }
})
