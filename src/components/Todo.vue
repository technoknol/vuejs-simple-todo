<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <h2>{{ submsg }}</h2>

    <br/>

    <b-container fluidX>

        <b-row class='my-1' >
            <!-- <b-col md='12'> -->
                <b-col md='3'>
                    <label for='newTodo'>New Todo:</label>
                </b-col>
                <b-col md='9'>
                    <b-input-group >
                        <!-- <b-form-input id='newTodo' v-on:click="check"></b-form-input> -->
                        <input type="text" class="form-control" v-on:keyup.enter="AddTodo" />
                    </b-input-group>
                </b-col>
            <!-- </b-col> -->
        </b-row>

          <b-row class='todo-group' v-for='(todo, index) in todos' :key='index'>
              <single-todo @toggleStatus="todo.status = ! todo.status " :todo-obj="todo"></single-todo>
          </b-row>
    </b-container>

  </div>
</template>

<script>
import SingleTodo from './SingleTodo'
export default {
  name: 'Todo',
  data () {
    return {
      msg: 'First Todo app in Vue.js',
      submsg: 'With vue-router',
      todos: this.getTodos()
    }
  },

  // Important thing, Don't forget to mention when you have child components in your component
  components: {
    'SingleTodo': SingleTodo
  },

  methods: {
    AddTodo (event) {
      this.todos.push({
        value: event.target.value,
        status: false
      })

      event.target.value = ''
    },
    getTodos () {
      return [
        { value: 'one', status: true },
        { value: 'two', status: false },
        { value: 'three', status: true },
        { value: 'four', status: false }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.todo-group {
  list-style-type: none;
  padding: 0;
}
.todo {
  display: block;
  margin: 2pt 0;
  padding: 4px 0;
  background-color: #efefef;
}
a {
  color: #42b983;
}
</style>
