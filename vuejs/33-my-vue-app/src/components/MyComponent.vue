<template>
  <div class="list-container">
    <ul>
      <li v-for="(pet, idx) in pets" :key="idx">{{ pet.pet_name }} ({{ pet.pet_age }} años)</li>
    </ul>
  </div>
  
</template>

<script>
import { db } from '@/firebase';
export default {
  name: "MyComponent",
  data() {
    return {
      pets: []
    }
  },
  firestore(){
    return {
      pets: db.collection('pets')
    }
  }
}
</script>

<style scoped>
.list-container{
  min-width: 100px;
  margin: 0 auto;
  display: flex;
}
ul{
  margin: 0 auto;
  padding: 0;
  text-align: left;
  list-style-position: inside;

}
ul li{
  margin: 0;
  padding: 0;
}
</style>
