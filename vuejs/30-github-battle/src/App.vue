<template>
  <div id="app">
    <Header :titulo="titulo"/>
    <GithubCard :username="username"/>
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
      username: "Claudiocolt"
    }
  },
  components: {
    Header,
    GithubCard
  }
}
</script>

<style>
</style>
