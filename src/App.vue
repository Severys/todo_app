<template>
  <div id="app">
    <addTodo/>
    <filterTodo/>
    <todoList/>
  </div>
</template>

<script>
import addTodo from './components/todo-add.vue';
import todoList from './components/todo-list.vue';
import filterTodo from './components/filter-todo.vue';

export default {
  name: 'App',
  components: {
    addTodo,
    todoList,
    filterTodo
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e0e0e0;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
		padding: 8px;
		background-color:#4db9e8 ;
		border: 1px solid #4db9e8;
		border-radius: 5px;
		color: white;

		&:hover{
			background-color: white;
			border: 1px solid #3b8bad;
			color: #3b8bad;
		}
}
</style>
