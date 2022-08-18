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
    ]
  },
  getters: {
  },
  mutations: {
    addTodo(state,curTodo){
      state.todos.push(curTodo)
    }
  },
  actions: {
  },
  modules: {
  }
})
