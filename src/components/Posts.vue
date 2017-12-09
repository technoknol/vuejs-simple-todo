<template>
  <div class="hello">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <br />
    <ul id="example-1">
      <li v-for="(route, index) in routes" v-bind:key="index" class="">
        <!-- javascript expression using `v-bind` -->
        <h3><router-link :to="{path: route.path}">{{route.name}}</router-link></h3>
      </li>
    </ul>
    <div class="columnsX">
        <div class="tileX post box" v-for="(post,index) in posts" :key="index">
            {{ post.title }}
        </div>
    </div>

  </div>
</template>

<script>
import Routes from '../router/routes'
export default {
  data () {
    return {
      msg: 'Posts',
      routes: Routes(),
      posts: []
    }
  },
  mounted () {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(
      response => (this.posts = response.data)
    )
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

.post {
    /* padding: 2px; */
    /* color: grey; */
    /* text-align: left; */
    background-color: #e3e3e3;
}
.posts{
    text-align : left;
}
</style>
