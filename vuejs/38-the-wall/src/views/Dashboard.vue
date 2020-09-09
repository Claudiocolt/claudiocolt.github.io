<template>
  <div>
    <NavbarComponent />
    <PostsComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import PostsComponent from '@/components/PostsComponent.vue'

export default {
  name: "Dashboard",
  components: {
    NavbarComponent,
    PostsComponent
  },
}
</script>