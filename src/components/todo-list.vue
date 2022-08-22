<template>
  <div class="todoList">
	<ul class="todoList_list" >
		<li 
			v-for="(todo,index) in this.filteredTodos"
			:key="index"
			class="todoList_list_item" 

		>
			<todoItem 
				:description="todo.description"
				:idTodo="todo.id"
				:indexTodo="index"
			/>
		</li>
	</ul>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue'
import {mapState} from 'vuex'

export default {
	name: 'todoList',
	components: {
		TodoItem,
	},
	data() {
		return {

		}
	},
	methods: {
		
	},
	computed:{
		...mapState(['todos','filteredTodos'])
	}
}
</script>

<style lang="scss">
.todoList{
	max-width: 500px;
	&_list { 
	list-style: none;
	padding: 0px;
	}
	&_item{
	display: flex;
	margin-top: 20px;
	}
}
</style>