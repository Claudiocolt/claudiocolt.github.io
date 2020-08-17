<template>
  <div>
    <h1>{{ category }} Movies</h1>
    <ul class="movieList">
      <li v-for="(movie, id) in this.thisList" :key="id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    category: String
  },
  computed: {
    thisList: function(){
      return this.$store.state.movies.filter(movie => movie.genre === this.category);
    }
  }
}
</script>

<style scoped>
ul.movieList{
  list-style: square;
  margin: 0 auto;
  padding: 0;
  width: 200px;
  text-align: left;
}
ul.movieList li{
  margin-left: 40px;
}
</style>