<template>
  <div id="app">
    
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <h1>DojoShows</h1>
    <MyComponent />

  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    MyComponent
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.logo{
  width: 100px;
}
h1{
  margin: 0 0 20px 0;
  font-size: 24px;
}
</style>
