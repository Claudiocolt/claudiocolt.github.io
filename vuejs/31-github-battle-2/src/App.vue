<template>
  <div id="app">
    <Header :titulo="titulo"/>

    <div class="container">
      <GithubCard />
    </div>
    

  </div>
</template>

<script>
import Header from '@/components/Header'
import GithubCard from '@/components/GithubCard.vue'

export default {
  name: 'App',
  data: function(){
    return {
      titulo: "Welcome to Github Battle",
    }
  },
  components: {
    Header,
    GithubCard
  }
}
</script>

<style>
html, body{
  background-color: #fdfdfd;
}
.container{
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
