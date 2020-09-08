<template>
  <div class="container">
    <h3>Login</h3>
    
    <div v-if="error" class="error">{{ error.message }}</div>
    
    <form action="#" @submit.prevent="submit">

      <small>Email</small><br>
      <input type="email" name="email" required  v-model="form.email" /><br>
      <small>Password</small><br>
      <input type="password" name="password" required v-model="form.password" /><br>
      <br>
      <button type="submit">Ingresar</button>

    </form>

    <div>Si no tienes cuenta, <router-link to="/register">Registrate Aquí</router-link></div>

  </div>
</template>


<script>
import * as firebase from "firebase"
import 'firebase/auth'

export default {
  name: "Login",
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
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          alert("logged!");
          console.log(data.user);
          console.log(data.user.email);

          this.$router.replace({ name: 'secret' });
          // data.user.updateProfile({
          //   displayName: this.form.name
          // })
          // .then(() => {});
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

  }
}
</script>