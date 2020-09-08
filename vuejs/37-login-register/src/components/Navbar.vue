<template>
  <div id="nav flex jc-sb">
    
    <ul class="non-list flex">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/secret">Secret</router-link></li>
    </ul>


    <ul class="non-list flex">
      <li v-if="loggedIn">Usuario Logueado</li>
      <li v-if="loggedIn">
        <button v-on:click="signOut">Logout</button>
      </li>
      <li v-else>Not Logged</li>
    </ul>

  </div>
</template>

<script>
import * as firebase from "firebase"
import 'firebase/auth'

export default {
  name: "Navbar",
  data: function(){
    return {
      loggedIn: false
    }
  },
  methods: {
    signOut: async function(){

      const data = await firebase.auth().signOut();
      console.log(data);
      this.loggedIn = false;
      this.$router.replace({ name: "login" });

    }
  },
  created: function(){
    firebase.auth().onAuthStateChanged(user => {

      console.log("AuthState Change!");
      console.log(user);

      // this.loggedIn = !! user;
      if(user){
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }
}
</script>