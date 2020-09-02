<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ titulo }}</a>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titulo: String
  }
  // data: function(){
  //   return {
  //     info: null
  //   }
  // },
  // mounted: function(){
  //   this.getBerryData();
  // },
  // methods: {
  //   getBerryData: async function(){
  //     try {
  //       let response = await this.$http.get("https://pokeapi.co/api/v2/berry/42");
  //       this.info = response.data;
  //     } catch(error){
  //       console.log(`Something went wrong: ${error}`);
  //     }
  //   }
  // }
}
</script>