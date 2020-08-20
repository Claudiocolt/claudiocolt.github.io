<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MovieList :movies="familyMovies" genre="Comedy" />
    <MovieList :movies="comedyMovies" genre="Family" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  computed: {
    ...mapGetters(["comedyMovies", "familyMovies"])
  }
}
</script>