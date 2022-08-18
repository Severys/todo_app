<template>
  <div class="todoList">
	<ul class="todoList_list" >
		<li 
			v-for="todo in this.todos"
			:key="todo.index"
			class="todoList_list_item" 
		>
			<todoItem 
				:description="todo.description"
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
		...mapState(['todos'])
	}
}
</script>

<style lang="scss">
.todoList{
	max-width: 500px;
	border: 1px solid #4db9e8;
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