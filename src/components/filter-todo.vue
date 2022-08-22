<template>
  <div class="filterTodo">
	<ul class="filterTodo_list">
		<li 
			v-for="filter in filters"
			:key="filter.index"
			class="filterTodo_list_item"
			:class="{active : filter.selected}"
		>
			{{filter.variant}}
		</li>
	</ul>
  </div>
</template>

<script>
export default {
	name: 'filterTodo',
	data(){
		return{
			filters:[
				{
					variant: 'Все',
					selected: true
				},
				{
					variant: 'Выполненные',
					selected: false
				}
			]
		}
	}

}
</script>

<style lang="scss" scoped>
.filterTodo {
	align-self: start;
	&_list{
		display: flex;
		list-style-type: none;
		gap: 10px;
	}
}
.active{
	text-decoration: underline;
}
</style>