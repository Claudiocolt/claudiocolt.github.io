<template>
  <div class="table-container">
    
    <div class="box p-10">
      <table class="table-grid table-bordered">
        <thead>
          <tr>
            <th class="px-5">Titulo</th>
            <th class="px-5">Network</th>
            <th class="px-5">Temporadas</th>
            <th class="px-5">En Emisión</th>
            <th class="px-5">Género</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(show, idx) in shows" :key="idx">
            <td class="ta-l py-6 px-6">{{ show.title }}</td>
            <td class="ta-l py-6 px-6">{{ show.network }}</td>
            <td class="ta-c py-6 px-6">{{ show.numberOfSeasons }}</td>
            <td class="ta-c py-6 px-6">{{ show.isCurrent ? 'Si' : 'No' }}</td>
            <td class="ta-l py-6 px-6 void">

              <span v-for="(genero, idx) in show.genres" :key="idx" class="br-3 mx-2 px-4 py-1 fz-13 btn-red">{{ genero }}</span>
              
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>

</template>

<script>
import { db } from '@/firebase';
export default {
  name: "MyComponent",
  data: function() {
    return {
      shows: []
    }
  },
  firestore: function(){
    return {
      shows: db.collection('shows').orderBy("title", "desc")
    }
  }
}
</script>

<style scoped>
.table-container{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1px;
}
</style>
