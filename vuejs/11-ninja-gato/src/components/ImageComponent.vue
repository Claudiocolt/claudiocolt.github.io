<template>
  <div class="image">
    <img v-bind:src="url" v-bind:alt="name" v-bind:title="name">
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'ImageComponent',
  props: {
    url: String,
    name: String
  },
  beforeCreate(){
    store.data.loader = true
    alert("se está cargando el componente de imagen");
  },
  created(){
    console.log("imagen created");
  },
  beforeMount(){
    console.log("imagen beforeMount");
  },
  mounted(){
    store.data.loader = false
    console.log("imagen mounted");
  },
  beforeUpdate(){
    alert("se está cambiando de imagen");
    console.log("imagen beforeUpdate");
  },
  updated(){
    console.log("imagen updated");
  },
  beforeDestroy(){
    console.log("imagen beforeDestroy");
  },
  destroyed(){
    console.log("imagen destroyed");
  }
}
</script>


<style scoped>
.image{
  width: 500px;
}
.image img{
  width: 100%;
}
</style>
