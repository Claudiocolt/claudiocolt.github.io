<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <CategoryComponent v-for="(cat, id) in $store.state.categories" :key="id" :category="cat"/>

  </div>
</template>

<script>
import CategoryComponent from './components/CategoryComponent.vue'

export default {
  name: 'App',
  components: {
    CategoryComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#app img{
  width: 100px;
}
</style>
