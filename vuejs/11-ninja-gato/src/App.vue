<template>
  <div id="app">
    <LoaderComponent v-if="loader" />

    <div class="buttons">
      <Button v-for="(link, index) in links" :key="index" v-on:click="clickButton(link.name, link.url)">{{ link.name }}</Button>
    </div>

    <ImageComponent v-if="selectedImage.url" :url="selectedImage.url" :name="selectedImage.name"/>
  </div>
</template>

<script>
import LoaderComponent from './components/LoaderComponent.vue'
import ImageComponent from './components/ImageComponent.vue'
import store from '@/store'

export default {
  name: 'App',
  data: function(){
    return store.data;
  },
  components: {
    LoaderComponent,
    ImageComponent
  },
  methods: {
    clickButton: function(name, url){
      store.setImage(name, url);
    }
  },
  mounted(){
    store.data.loader = false
  }

}
</script>

<style>
html,body{
  background-color: cyan;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
