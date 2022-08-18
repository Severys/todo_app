<template>
  <div id="app">
    <addTodo/>
    <todoList/>
  </div>
</template>

<script>
import addTodo from './components/todo-add.vue';
import todoList from './components/todo-list.vue';

export default {
  name: 'App',
  components: {
    addTodo,
    todoList
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
