<template>
  <div>

    <h1>The Wall</h1>
    <br>
    <p>Bienvenido {{ $store.state.session.email }}, estas logueado</p>
    <button v-on:click="signOut">Logout</button>

    <!-- <PostList /> -->

  </div>
</template>

<script>
import * as firebase from "firebase"
// import 'firebase/auth'
// import 'firebase/firestore';

// import PostForm from '@/components/PostForm'
// import PostList from '@/components/PostList'

export default {
  name: "Inicio",
  components: {
    // NewPost,
    // PostList,
  },
  methods: {

    signOut: async function(){

      const data = await firebase.auth().signOut();
      console.log(data);
      this.$router.replace({ name: "auth" });

    }

  },
  
}
</script>