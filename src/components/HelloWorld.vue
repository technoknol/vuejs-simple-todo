<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <br />
    <ul id="example-1">
      <li v-for="(route, index) in routes" v-bind:key="index">
        <!-- javascript expression using `v-bind` -->
        <h3><router-link :to="{path: route.path}">{{route.name}}</router-link></h3>
      </li>
    </ul>
  </div>
</template>

<script>
import Routes from '../router/routes'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      routes: Routes()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
