<template>
  <div class="flex fd-c ai-c">
    <!--
      Aqui es donde se muestra el formulario de login y el de registro
    -->
    <h1>login/register form</h1>

    <div class="flex jc-sb">
      
      <div class="box mr-10">
        <div class="box-header flex ai-c jc-c">Login</div>
        <div class="box-body">
          
          <form action="#" @submit.prevent="submitLogin">

            <small>Email</small><br>
            <input type="email" name="email" required  v-model="form.login_email" /><br>
            <small>Password</small><br>
            <input type="password" name="password" required v-model="form.login_password" /><br>
            <br>
            <button type="submit">Ingresar</button>

          </form>

        </div>
      </div>
      
      <div class="box ml-10">
        <div class="box-header flex ai-c jc-c">Register</div>
        <div class="box-body">
          
          <form action="#" @submit.prevent="submitRegister">
            <small>Name</small><br>
            <input type="text" name="name" required  v-model="form.register_name" /><br>
            <small>Email</small><br>
            <input type="email" name="email" required  v-model="form.register_email" /><br>
            <small>Password</small><br>
            <input type="password" name="password" required v-model="form.register_password" /><br>
            <br>
            <button type="submit">Ingresar</button>

          </form>

        </div>
      </div>

    </div>



  </div>
</template>

<script>
import * as firebase from "firebase"
// import 'firebase/auth'

export default {
  name: "Auth",
  data: function(){
    return {
      form: {
        
        login_email: "",
        login_password: "",
        register_name: "",
        register_email: "",
        register_password: "",
      }
    }
  },
  methods: {
    submitLogin: async function(){
      try {
        
        firebase.auth()
        .signInWithEmailAndPassword(this.form.login_email, this.form.login_password)
        .then(() => {

          //console.log("OK LOGIN 1");
          //console.log(data.user);
          // data.user.updateProfile({
          //   displayName: this.form.name
          // })
          // .then(() => {});

          //this.$router.replace({ name: 'inicio' });


        })
        .catch(err => {
          
          console.log(err.message);
          alert(err.message);

        });

      } catch(e){
        
        alert(e);
        console.warn(e);

      }
      

    },
    submitRegister: async function(){
      try {
        
        firebase.auth()
        .createUserWithEmailAndPassword(this.form.register_email, this.form.register_password)
        .then(data => {

          // alert("registered!");

          // console.log(data.user);
          //console.log(data.user.email);

          // this.$router.replace({ name: 'secret' });
          data.user.updateProfile({
            displayName: this.form.register_name
          })
          .then(() => {
            
            //this.$router.replace({ name: 'inicio' });

          });

          // console.log(data.user);
          

        })
        .catch(err => {
          
          console.log(err.message);
          alert(err.message);

        });

      } catch(e){
        
        alert(e);
        console.warn(e);

      }
      

    },
  },
  beforeCreate: function(){
    firebase.auth().onAuthStateChanged(user => {

      console.log("esto es el before create del auth");
      console.log(user)
      if(user){
        this.$router.replace({ name: 'inicio' });
      }

    })
  }
  
}
</script>