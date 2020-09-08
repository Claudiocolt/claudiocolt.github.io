<template>
  <div class="container">
    <h3>Registro</h3>
    
    <div v-if="error" class="error">{{ error.message }}</div>
    
    <form action="#" @submit.prevent="submit">

      <!-- <small>Nombre</small><br>
      <input type="name"  name="name"  required autofocus v-model="form.name" /><br> -->
      <small>Email</small><br>
      <input type="email" name="email" required autofocus v-model="form.email" /><br>
      <small>Password</small><br>
      <input type="password" name="password" required v-model="form.password" /><br>
      <br>
      <button type="submit">Register</button>

    </form>

    <div>Si ya tienes cuenta, <router-link to="/login">Ingresa Aquí</router-link></div>

  </div>
</template>


<script>
import * as firebase from "firebase"
import 'firebase/auth'

export default {
  name: "Register",
  data: function() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit: async function(){
      try {
        
        firebase.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          alert("created!");
          console.log(data.user);
          this.$router.replace({ name: 'secret' });

        })
        .catch(err => {
          console.log(err.message);
          alert(err.message);
          // this.error = err.message;
        });

      } catch(e){
        
        alert(e);
        console.warn(e);

      }
      

    },
    /*
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
    */
  }
};
</script>
<style>
.error{
  color: red;
  font-size: 20px;
}
</style>