<template>
  <b-col md='12' class="todo">
      <div @click="$emit('toggleStatus')" :class="{ 'active' : todoObj.status, 'inactive': ! todoObj.status, 'single-todo': true  }">
      {{ value }} - ({{typeof todoObj.status}}) {{ todoObj.status }}
      </div>
  </b-col>
</template>

<style scoped>
.active {
  color: green;
}
.inactive {
  color: grey;
  text-decoration: line-through;
}
.single-todo {
  cursor: pointer;
}
</style>

<script>
// import Vue from 'vue'
export default {

  name: 'SingleTodo',

  props: {
    todoObj: {
      validator: function (value) {
        return (
          typeof value.status === 'boolean' && typeof value.value === 'string'
        )
      }
    }
  },

  computed: {
    value () {
      return this.todoObj.value.toUpperCase()
    }
  }
  // template: ``
}
</script>