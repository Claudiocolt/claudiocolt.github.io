<template>
  <div class="movie">
    <h5>{{ movie.title }}</h5>
    <span class="score">score: {{ movie.score }}</span>
    <div class="voting-buttons-container">
      <button @click="onUpvote()">Upvote</button>
      <button @click="onDownvote()">Downvote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: {
      id: Number,
      score: Number,
      title: String,
      genre: String
    }
  },
  methods: {
    onUpvote() {
      this.$store.commit("incrementMovieScore", this.movie.id);
    },
    onDownvote() {
      this.$store.commit("decrementMovieScore", this.movie.id);
    }
  }
};
</script>
