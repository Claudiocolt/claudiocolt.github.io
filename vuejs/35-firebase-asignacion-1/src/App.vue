<template>
  <div id="app"> 

    <ModalComponent />    
    <HeaderComponent :titulo="$store.state.titulo" />
    <ShowsComponent />

  </div>
</template>

<script>
import ModalComponent from '@/components/ModalComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ShowsComponent from '@/components/ShowsComponent.vue'

export default {
  name: 'App',
  components: {
    ModalComponent,
    HeaderComponent,
    ShowsComponent
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
