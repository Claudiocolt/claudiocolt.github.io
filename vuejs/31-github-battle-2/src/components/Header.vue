<template>
    <div class="titulo">{{ titulo }}</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titulo: String
  }
}
</script>
<style>
.titulo{
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>