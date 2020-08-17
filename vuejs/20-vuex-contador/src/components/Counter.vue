<template>
  <div>

    <h1>{{ title }}</h1>
    <h5>Clicks: <span>{{ clicks }}</span></h5>
    <button v-on:click="addCounter()">Click Counter</button>

  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: String
  },
  computed: {
    clicks() {
      return this.$store.state.count
    }
  },
  methods: {
    addCounter() {
      this.$store.commit('increment')
    }
  }
}
</script>
