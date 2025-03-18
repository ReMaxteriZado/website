<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import NavbarComponent from '@/components/web/partials/NavbarComponent.vue'
import HeaderComponent from '@/components/web/partials/HeaderComponent.vue'
import FollowCursor from '@/components/web/partials/FollowCursor.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('getUser')
})
</script>

<template>
  <main>
    <div class="content">
      <FollowCursor />
      <NavbarComponent />
      <HeaderComponent />

      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: black;

  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
