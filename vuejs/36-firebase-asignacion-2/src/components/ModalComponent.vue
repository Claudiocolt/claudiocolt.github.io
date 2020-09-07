<template>
  <div>
    <div id="overlay" :class="[$store.state.modal.overlay]">
      <div class="loader">loading...</div>
    </div>
    
    <div id="modal" :class="['flex', $store.state.modal.modal]">
      <button class="btn btn-dark br-3 px-10 py-2" v-on:click="toggleModal">X</button>
      <div class="">pendiente..</div>
    </div>
  </div>

</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ModalComponent",
  methods: {
    ...mapMutations(["toggleModal"])
  },
}
</script>