<template>
  <div class="hello">
    <p>The result of our request: {{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      info: null
    }
  },
  mounted: function(){
    this.getBerryData();
  },
  methods: {
    getBerryData: async function(){
      try {
        let response = await this.$http.get("https://pokeapi.co/api/v2/berry/42");
        this.info = response.data;
      } catch(error){
        console.log(`Something went wrong: ${error}`);
      }
    }
  }
}
</script>