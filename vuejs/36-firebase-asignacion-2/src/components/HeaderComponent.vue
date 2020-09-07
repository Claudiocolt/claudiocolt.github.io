<template>
  <div>
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h1>{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    titulo: String
  },
}
</script>