<template>
  <div>
    listado de comentarios <br>
    {{ posts }}
  </div>
</template>

<script>

// import { mapState } from 'vuex'
//import * as firebase from "firebase"
import { db } from '../firebase'
// import 'firebase/auth'
import 'firebase/firestore';

export default {
  name: 'PostsComponent',
  data: function() {
    return {
      posts: []
    }
  },
  firestore: function(){
    return {
      posts: db.collection('posts')
    }
  }
}
</script>