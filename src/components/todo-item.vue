<template>
  <div class="todoItem">
	<label class="todoItem_check">
		<input type="checkbox" value="value-1">
		<span>{{ description }}</span>
	</label>
	<button 
		class="todoItem_delete btn" 
	>
		Удалить
	</button>
</div>
</template>

<script>

export default {
	name: 'todoItem',
	props:[
		'description',
	]
}
</script>

<style lang="scss">
	.todoItem {
		display: flex;
		width: 500px;
		justify-content: space-between;
		align-items: center;
		
		&_check{
			width: 50px;
			padding: 5px;
		}
		&_text{
			flex-grow: 1;
			padding-left: 20px;
		}
		
		&_delete{
			margin-right: 5px;
		}
	}
	.todoItem_check{
		>input {
			position: absolute;
			z-index: -1;
			opacity: 0;
		}
		>span {
		display: inline-flex;
		align-items: center;
		user-select: none;
		}
		>span::before {
			content: '';
			display: inline-block;
			width: 1em;
			height: 1em;
			flex-shrink: 0;
			flex-grow: 0;
			border: 1px solid #3b8bad;
			border-radius: 0.25em;
			margin: 0.5em;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 50% 50%;
		}
		>input:checked+span::before {
			border-color: #4db9e8;
			background-color: #4db9e8;
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
		}
		>input:checked+span{
			text-decoration: line-through;
		}
	}
</style>>


