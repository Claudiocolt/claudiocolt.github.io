<template>
  <div>
    <h2>{{ genre }}</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    genre: String,
    movies: Array
  }
}
</script>