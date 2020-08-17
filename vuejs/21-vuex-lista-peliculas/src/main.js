import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categories: [
      "Comedy",
      "Family",
      "Action",
      "Horror"
    ],
    movies: [
      { id: 1,  genre: 'Comedy', title: 'The Hangover'    },
      { id: 2,  genre: 'Comedy', title: 'I Love You Man'  },
      { id: 3,  genre: 'Comedy', title: 'The Mask'        },
      { id: 4,  genre: 'Comedy', title: 'Ace Ventura'     },
      { id: 5,  genre: 'Family', title: 'Cars'            },
      { id: 6,  genre: 'Family', title: 'Toy Story'       },
      { id: 7,  genre: 'Family', title: 'Shrek'           },
      { id: 8,  genre: 'Family', title: 'Lion King'       },
      { id: 9,  genre: 'Action', title: 'Rambo'           },
      { id: 10, genre: 'Action', title: 'The Matrix'      },
      { id: 11, genre: 'Action', title: 'Die Hard'        },
      { id: 12, genre: 'Action', title: 'Avengers'        },
      { id: 13, genre: 'Horror', title: 'The Exorcist'    },
      { id: 14, genre: 'Horror', title: 'The Ring'        },
    ]
  },
  mutations: {
    // increment(state){
    //   state.count++
    // }
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
