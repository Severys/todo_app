<template>
  <div class="addTodo">
    <input 
      class="addTodo_input" 
      type="text" 
      alt=""
      v-model="curTodo.description"
      @keydown.enter="addnewTodo"
    >
    <button 
      class="addTodo_btn btn" 
      @click="addnewTodo"
    >
        Добавить заметку
    </button>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

let uniqId = 0;

export default {
  name: 'addTodo',
  data(){
    return {
      curTodo:{
        id: null,
        description:'',
        complete: false
      }
    }
  },
  methods:{
		...mapMutations(['addTodo']),
    addnewTodo(){
      uniqId++
      this.curTodo.id = uniqId
      this.addTodo({...this.curTodo})
      this.curTodo.description = ''
    }
  },
  computed:{
		...mapState(['currentTodo'])
  }
}
</script>

<style lang="scss" scoped>
.addTodo {
  max-width: 494px;
  margin-bottom: 50px;
  
  &_input{
  width: 100%;
  height: 25px;
  }
  &_btn{
    margin-top: 15px;
  }
}
</style>
