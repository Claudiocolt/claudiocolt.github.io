<template>
  <div id="login">



    <section>
      <div class="col1">
        <h1>Vuegram</h1>
        <p>Welcome to the <a href="https://savvyapps.com/" target="_blank">Savvy Apps</a> sample social media web app powered by Vue.js and Firebase.
          Build this project by checking out The Definitive Guide to Getting Started with Vue.js</p>
      </div>
      <div class="col2">
        <form>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          
          <button @click.prevent="login()" class="button">Log In</button>

          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div>

        </form>
      </div>
    </section>



    <section>
      <form @submit.prevent>
        <h1>Get Started</h1>
        <div>
          <label for="name">Name</label>
          <input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name" />
        </div>
        <!-- <div>
          <label for="title">Title</label>
          <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
        </div> -->
        <div>
          <label for="email2">Email</label>
          <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
        </div>
        <div>
          <label for="password2">Password</label>
          <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
        </div>
        <button @click="signup()" class="button">Sign Up</button>
        <div class="extras">
          <a>Back to Log In</a>
        </div>
      </form>
    </section>




  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      loginForm: {
        email   : '',
        password: ''
      },
      signupForm: {
        name    : '',
        title   : '',
        email   : '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email:    this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email:    this.signupForm.email,
        password: this.signupForm.password,
        name:     this.signupForm.name,
      })
    }
  }
}
</script>