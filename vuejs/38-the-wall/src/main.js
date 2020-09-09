import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'


import VueFirestore from 'vue-firestore';
Vue.use(VueFirestore, { key: 'id' });

Vue.config.productionTip = false




let app

auth.onAuthStateChanged(user => {
  
  store.dispatch('fetchUserProfile', user);

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})




/*
Vue.config.productionTip = false
Vue.use(VueFirestore, { key: 'id' });
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    titulo: "The Wall",
    isLogged: false,
    session: {
      uid: null,
      name: null,
      email: null,
    },
  },
  getters: {
    
    get_session: function(state){
      return state.session;
    },
    get_uid: function(state){
      return state.session.uid;
    },
    get_name: function(state){
      return state.session.name;
    },
    get_email: function(state){
      return state.session.email;
    }

  },
  mutations: {

    setSession: function(state, params){
      
      state.isLogged      = true;
      state.session.uid   = params.uid;
      state.session.name  = params.displayName;
      state.session.email = params.email;

    },
    destroySession(state){
      
      state.isLogged      = false;
      state.session.uid   = null;
      state.session.name  = null;
      state.session.email = null;

    }
    
  },
  actions: {

    manageSession({ commit }, user){

      if(user){
        commit("setSession", user);
      } else {
        commit("destroySession");
      } 

    },  
    
  }

});


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXMjUm7oUeJh3C9dSJBYXGfJiEjvGOoCw",
  authDomain: "thewall-ff68c.firebaseapp.com",
  databaseURL: "https://thewall-ff68c.firebaseio.com",
  projectId: "thewall-ff68c",
  storageBucket: "thewall-ff68c.appspot.com",
  messagingSenderId: "617057378764",
  appId: "1:617057378764:web:d8f460fcdc039b6cddbd69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let app;

firebase.auth().onAuthStateChanged(user => {

  if(!app){

    store.dispatch("manageSession", user);

    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')

  }

});

*/