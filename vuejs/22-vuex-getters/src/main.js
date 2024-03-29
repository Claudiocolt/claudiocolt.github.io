import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover',   genre: 'Comedy' },
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'Cars',           genre: 'Family' },
      { id: 4, title: 'Toy Story',      genre: 'Family' },
    ],
  },
  getters: {
    comedyMovies: function(store){
      return store.movies.filter(movie => movie.genre === 'Comedy');
    },
    familyMovies: function(store){
      return store.movies.filter(movie => movie.genre === 'Family');
    }
  },
  mutations: {
    // increment(state){
    //   state.count++
    // }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
