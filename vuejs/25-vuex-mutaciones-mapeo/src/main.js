import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, score: 0,  title: 'The Hangover',   genre: 'Comedy' },
      { id: 2, score: 0,  title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, score: 0,  title: 'Cars',           genre: 'Family' },
      { id: 4, score: 0,  title: 'Toy Story',      genre: 'Family' },
    ],
  },
  getters: {
    sortedMoviesByGenre: state => genre => {
      const filteredMovies = state.movies.filter(movie => movie.genre === genre);
      return filteredMovies.sort((movieA, movieB) => movieB.score - movieA.score);
    },
  },
  mutations: {
    incrementMovieScore: function(state, movieId){
      
      const movieToIncrement = state.movies.find(movie => movie.id === movieId);
      const updatedMovie  = {
        ...movieToIncrement,
        score: movieToIncrement.score + 1,
      };

      state.movies = [
        updatedMovie,
        ...state.movies.filter(movie => movie.id !== movieId),
      ];

    },
    decrementMovieScore: function(state, movieId){

      const movieToDecrement = state.movies.find(movie => movie.id === movieId);
      const updatedMovie = {
        ...movieToDecrement,
        score: movieToDecrement.score - 1,
      };

      state.movies = [
        updatedMovie,
        ...state.movies.filter(movie => movie.id !== movieId),
      ];

    }

  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
