<template>
  <div id="app">

    <HeaderBox :titulo="$store.state.titulo" />

    <GoldBox :gold="$store.state.gold" />

    <div class="container locations">
      <LocationBox v-for="(item, index) in $store.state.locations" :key="index" :name="item.name" :text="item.text" :start="item.start" :end="item.end" />
    </div>

    <ActivityBox v-if="$store.state.activity.length" v-bind:activity="$store.state.activity"/>

  </div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox.vue';
import GoldBox from '@/components/GoldBox.vue';
import LocationBox from '@/components/LocationBox.vue';
import ActivityBox from '@/components/ActivityBox.vue';

export default {
  name: 'App',
  components: {
    HeaderBox,
    GoldBox,
    LocationBox,
    ActivityBox
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fcfeff;
}
#app {
  background-color: #fcfeff;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
}
.locations{
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
</style>
