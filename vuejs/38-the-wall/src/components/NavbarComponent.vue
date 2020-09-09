<template>
  <div class="bg-blue p-0 m-0 flex py-14 px-20">

    <ul class="non-list">
      <li class="fz-20 fw-8">The Wall</li>
    </ul>

    <ul class="non-list">
      <li>{{ $store.state.session.email }}</li>
      <li><button type="button" @click="logout()">logout</button></li>
    </ul>

  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import * as firebase from "firebase"
// import 'firebase/auth'
// import 'firebase/firestore';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  // computed: {
  //   ...mapState(['session']),
  // }
}
</script>