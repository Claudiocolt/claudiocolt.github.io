export default {
  namespaced: true,
  state: {
    titulo: "Ninja Gold Vuex",
    gold: 0,
  },
  getters: {
    goldColor: state => {

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
  
}