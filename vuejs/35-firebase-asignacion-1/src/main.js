import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueFirestore from 'vue-firestore';


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueFirestore, { key: 'id' });


const store = new Vuex.Store({
  state: {
    titulo: "DojoShows (Pendiente)",
    modal: {
      overlay: "",
      modal: "",
    },
  },
  // getters: {

  //   // Clase para cambiar el color del total de oro
  //   goldColor: state => () => {

  //     let textClass = '';
      
  //     if(state.gold > 0){
  //       textClass = 'blue';
  //     } else if(state.gold < 0){
  //       textClass = 'red';
  //     } else {
  //       textClass = 'grey';
  //     }
  //     return textClass;
  //   }

  // },
  mutations: {

    toggleModal: function(state){
      
      state.modal.overlay = state.modal.overlay === "" ? "show" : "";
      state.modal.modal   = state.modal.modal === "" ? "show" : "";

    },

  }
});



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
