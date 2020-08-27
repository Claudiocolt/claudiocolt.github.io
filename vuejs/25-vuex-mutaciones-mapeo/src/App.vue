<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MovieList genre="Comedy" />
    <MovieList genre="Family" />
  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
}
</script>