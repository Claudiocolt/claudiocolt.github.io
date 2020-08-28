import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo: "Ninja Gold Vuex",
    gold: 0,
    locations: [
      {
        name:   'Farm',
        text:   'earns 10-20 golds',
        start:  10,
        end:    20
      },
      {
        name:   'Cave',
        text:   'earns 5-10 golds',
        start:  5,
        end:    10
      },
      {
        name:   'House',
        text:   'earns 2-5 golds',
        start:  2,
        end:    5
      },
      {
        name:   'Casino',
        text:   'earns/takes 0-50 golds',
        start:  -50,
        end:    50
      },
    ],
    activity: [],
  },
  getters: {

    // Clase para cambiar el color del total de oro
    goldColor: state => () => {

      let textClass = '';
      
      if(state.gold > 0){
        textClass = 'blue';
      } else if(state.gold < 0){
        textClass = 'red';
      } else {
        textClass = 'grey';
      }
      return textClass;
    }

  },
  mutations: {
    
    findGold: function(state, params){

      // Calcular Monto Random
      const amount  = Math.floor(params.start + Math.random()*(params.end + 1 - params.start));

      // Calcular Fecha de Hoy
      const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const dia = [null, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
      const date  = new Date();
      const day   = date.getDay();
      const mon   = date.getMonth();
      const year  = date.getFullYear();
      const num   = ('0' + date.getDate()).slice(-2);
      const hour  = date.getHours();
      const min   = date.getMinutes();
      const fecha = `${dia[day]} ${num} de ${mes[mon]} ${year} a las ${hour}:${min}hrs`;
   

      state.gold += amount;

      if(amount > 0){
  
        state.activity.unshift({
          color: `blue`,
          texto: `- Earned <b>${amount} gold</b> from the <b>${params.name}</b> 💰 (${fecha})`
        });
  
      }else if(amount < 0){
  
        state.activity.unshift({
          color: `red`,
          texto: `- Lost <b>${amount} gold</b> from the <b>${params.name}</b> 💸 (${fecha})`
        });
  
      } else {
  
        state.activity.unshift({
          color: `gray`,
          texto: `- Got <b>${amount} gold</b> from the <b>${params.name}</b> 😞 (${fecha})`
        });
  
      }
 
    },

    resetGold: function(state){
      
      state.gold  = 0;
      state.activity.length = 0;

    },

  }
});



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
