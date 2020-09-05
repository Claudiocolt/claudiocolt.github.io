<template>
  <div id="app">
    <Header :titulo="titulo"/>

    <div class="container">
      <GithubCard />
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
      titulo: "Welcome to Github Battle (Aun Pendiente)",
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
.container > div{
  margin: 0 10px;
}
</style>
